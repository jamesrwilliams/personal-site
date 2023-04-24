---
title: Salesforce Commerce Cloud - Using React in Custom Attribute Editors
date: 2023-04-23
tags: ['salesforce', 'salesforce-commerce-cloud', 'sfcc-with-react']
---

## Contents

<!-- TOC -->
  * [Contents](#contents)
  * [Introduction](#introduction)
  * [Prerequisites](#prerequisites)
  * [1.0 - Register a plain custom attribute editor](#10---register-a-plain-custom-attribute-editor)
    * [1.1 - Create a new cartridge for our business manager extensions](#11---create-a-new-cartridge-for-our-business-manager-extensions)
    * [1.2 - Adding a debug component](#12---adding-a-debug-component)
    * [1.3 - Create our custom attribute editor definition files](#13---create-our-custom-attribute-editor-definition-files)
    * [1.4 - Custom editor client script](#14---custom-editor-client-script)
    * [1.5 - Talking to Page Designer](#15---talking-to-page-designer)
    * [1.6 - Review](#16---review)
  * [2.0 - Add a React app to the mix](#20---add-a-react-app-to-the-mix)
    * [2.1 - Required files](#21---required-files)
    * [2.2 - Basic SFCC events](#22---basic-sfcc-events)
  * [3.0 - One React App, many custom editors](#30---one-react-app-many-custom-editors)
    * [Add React Router](#add-react-router)
  * [4.0 - Adding support for breakout editors](#40---adding-support-for-breakout-editors)
    * [4.1 - Second round of editor definition files](#41---second-round-of-editor-definition-files)
    * [4.2 - Abstracting page designer events](#42---abstracting-page-designer-events)
  * [Half way pit-stop](#half-way-pit-stop)
  * [Resources](#resources)
<!-- TOC -->

## Introduction

Salesforce Commerce Cloud offers a lot of data (attribute) types and corresponding UI controls, but
sometimes you need something different. Maybe a little extra validation or a particular input UI to
really make the user experience great. 

This is where the Custom Attribute Editor feature really shines. These custom editors gives you fine
grain control over the UI input and behavior for a particular attribute, and even lets you save JSON
as an attribute value. 

It does this by allowing you to build a custom form with HTML/CSS/Javascript 
to interact with a particular attribute value via an iFrame embedded directly in the Page Designer 
interface. Normally these Custom Attribute Editors are plain HTML/CSS/JS forms however there are 
some scenarios when it may be beneficial to use a small React app to power these editor experiences.

We're going to break this guide down into a few sections and tackle each task one at a time:

1. Register a plain custom attribute editor
2. Add our React app
3. Expanding our app to support any number of editors
4. Adding support for breakout editors

## Prerequisites

- Have your editor and site configured and Prophet debugger wired up to your sandbox

## 1.0 - Register a plain custom attribute editor

To get us started we are going to set up a regular (non-React) custom attribute editor as detailed 
in the documentation 
under [Develop a Custom Attribute Editor](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fpage_designer%2Fb2c_custom_attr_editor.html).
In the interest of code encapsulation it's my preference to create a new cartridge for business
manager extensions, in which Custom Attribute Editors fall, so let's create one.

### 1.1 - Create a new cartridge for our business manager extensions

- Using the Prophet extension, lets set up a new cartridge in our project called `app_custom_bm_extensions`
- Make sure this cartridge is part of your prophet upload.
- Login to business manager and add this cartridge to the **business manager** cartridge path, not
  the site cartridge path.

### 1.2 - Adding a debug component

To get us started we are going to need a few files.

Let's start by setting up a debug component we can use to see things working as we're building this out.

In our new cartridge lets create two new files in the following locations:

```js:title=app_custom_bm_extensions/cartridge/cartridge/experience/components/customAttributeEditor.js
// Placeholder
```

```json:title=app_custom_bm_extensions/cartridge/experience/components/customAttributeEditor.json
{
  "name": "Custom Attribute Editor",
  "description": "",
  "group": "Custom",
  "attribute_definition_groups": [
    {
      "id": "group1",
      "name": "An attribute group",
      "description": "",
      "attribute_definitions": [
        {
          "id": "playground",
          "name": "Playground",
          "type": "custom",
          "required": false,
          "editor_definition": {
            "type": "com.acme.customEditor",
            "configuration": {}
          }
        }
      ]
    }
  ],
  "region_definitions": []
}
```

First step done, we've registered a new component that is requesting the `com.acme.customEditor` 
custom editor. However, right now we've not registered it so in Page Designer we will see just a 
normal HTML `textarea` input:

![](./images/react-custom-attribute-editors/undefined-custom-attribute-editor-ui.png)

Next up we need to register our custom attribute editor.

### 1.3 - Create our custom attribute editor definition files

Registering our custom editor requires two files, similar to the ones we created for our component, 
a JS and a JSON file respectability, this time they need to be in a different location. Specifically
they need to be under `expereince/editors` then additionally under a folder structure similar to that
of the reverse domain string we used above for the editor `type` so path would look like:

```
app_custom_bm_extensions/cartridge/experience/editors/com/acme/
```

First lets register our editor using a ["Custom Attribute Editor Meta Definition File"](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/page_designer/b2c_custom_ui_cntrl_meta.html). Here we add
some supplementary information but most importantly we are adding a reference to our
(yet to be created) `customEditorClient.js` file.

```json:title=app_custom_bm_extensions/cartridge/experience/editors/com/acme/customEditor.json
{
  "name": "My Custom Editor (inline)",
  "description": "",
  "resources": {
    "scripts": [
      "/experience/editors/com/acme/customEditorClient.js"
    ],
    "styles": []
  }
}
```

With our meda definition file created lets move on to the Custom Attribute Editor script file. The
script file has the same name as the corresponding meta definition file but with a .js extension. 
In the script file, you can optionally implement the init function to initialize the custom 
attribute editor with server-side logic or resources.

```js:title=app_custom_bm_extensions/cartridge/experience/editors/com/acme/customEditor.js
'use strict';

var URLUtils = require('dw/web/URLUtils');
var PageMgr = require('dw/experience/PageMgr');
var HashMap = require('dw/util/HashMap');

/**
 * Init the ACME Custom Editor (inline)
 * @param editor
 *
 * @see https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/page_designer/b2c_custom_ui_cntrl_script.html
 */
module.exports.init = function (editor) {
  // This is important because it sets the asset URLs to the non-versioned URLs...
  editor.configuration.put('baseUrl', URLUtils.staticURL('/').https().toString());
};
```

### 1.4 - Custom editor client script

Our last step for part 1 is to create the `customEditorClient.js` file we added to the resources
of our custom attribute editor definition JSON file. This file is inserted into the iFrame of our 
custom attribute editor in page designer and is the one where lifecycle events are emitted to
Page Designer in order to communicate interactions and updates to the values.

Note the change in file path here as this file needs to live in the `static` directory and not the 
experience directories like our previous files.

Typically, this is where we add an HTML form (via Javascript) to edit our attribute and report back.
For now lets just use the basic scaffold to ensure everything is wired up:

```js:title=app_custom_bm_extensions/cartridge/static/default/experience/editors/com/acme/customEditorClient.js
() => {
  subscribe('sfcc:ready', async (
    {value, config, isDisabled, isRequired, dataLocale, displayLocale}
  ) => {
    console.log('sfcc:ready', dataLocale, displayLocale, value, config);
    let tempElement = document.createElement('h1');
    tempElement.innerText='Hello from customEditorClient.js';
    document.body.append(tempElement);
  });
};
```

### 1.5 - Talking to Page Designer

From the example above, we can see we're subscribed to the `sfcc:ready` event, and when that is 
emitted the callback function is executed, this even is one of a series of "Custom Attribute Editor
Events". There are a series of other events that we can use to communicate with Page Designer to
emit events and instruct it to do certain things.

- `sfcc:interacted` - Indicates that the user has interacted with the custom attribute editor.
- `sfcc:valid` - Indicates whether the value of the attribute is valid. Can include an error message.
- `sfcc:value`- The value of the attribute. Sent when the value changes inside the editor.

We can transmit these events to Page Designer by using the `window.emit` function and will be using 
them when we start adding our React app, however for now keep these in your back pocket. You can
find full information and examples for each of these in the SFCC docs page 
for ["Custom Attribute Editor Events"](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/page_designer/b2c_host_events_custom_attr_editor.html). 

### 1.6 - Review

Now clicking on our `Custom Attribute Editor` component we added to Page Designer we should see our
custom attribute editor and in the place of a textarea component we saw earlier we should now see a
`<h1 />` saying `Hello from customEditorClient.js` and in the browser console we should see the
"sfcc:ready" message.

![](./images/react-custom-attribute-editors/custom-attribute-editor-registered.png)

We should have the following files present in our `app_custom_bm_extensions` cartridge in the 
appropriate directories:

```markdown
app_custom_bm_extensions
└─> cartridge
    ├─> experience
    │   ├─> components
    │   │   ├── customAttributeEditor.js
    │   │   └── customAttributeEditor.json
    │   └─> editors
    │       └─> com
    │           └─> editors
    │               └─> acme
    │                   ├── customEditor.js
    │                   └── customEditor.json
    └─> static
        └─> default
            └─> experience
                └─> com
                    └─> editors
                        └─> acme
                            └── customEditorClient.js
```

## 2.0 - Add a React app to the mix

Now we have our vanilla custom attribute editor we can move on to replacing it with a React app! We
will assume you've got a React app ready to go for this, if not check out 
the [create-react-app](https://create-react-app.dev/docs/getting-started) tutorial.

### 2.1 - Required files

First step is to ensure we're including the `dist` or build output from our React app in our 
cartridge code. For this example we're going to upload the build using Prophet into a new directory
we're creating in `/static/default/`:

```bash
app_custom_bm_extensions/cartridge/static/default/apps/custom-editors/
```

If you're looking to keep the React app source code close to the cartridge code I will recommend 
using something like [NX](https://nx.dev) to manage your mono-repo.

I use NX and one of the things I've setup for my NX build is disabled the usual cache busting hashes
present in the file names along with removing chunks. This leaves me with four JS files for the 
whole of my React app:

- `vendor.js`
- `polyfills.js`
- `main.js`
- `runtime.js`

Now we have our `dist` files we can update the `cusotmEditorClient.js` code (the file SFCC initially
loads into our iFrame) to inject our React app. We can do this by replacing the JavaScript we added
as part of step 1.4 with the following:

```js:title=app_custom_bm_extensions/cartridge/static/default/experience/editors/com/acme/customEditorClient.js
(() => {
  /**
   * This file is what SFCC initially loads into the custom editor iFrame.
   * From here we inject our React bundle and, do some rudimentary data handling.
   *
   * @see https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/content/b2c_commerce/topics/page_designer/b2c_host_events_custom_attr_editor.html
   */
  subscribe('sfcc:ready', async ({ value, config, isDisabled, isRequired, dataLocale, displayLocale }) => {

    /**
     * Attach the existing value (if available) for the component and some other
     * data for the React app to consume later.
     */
    window.amce = {
      originalValue: value,
      config,
      isDisabled,
      isRequired,
      dataLocale,
      displayLocale,
    }

    // This is the path to the editor app's dist assets in our static/default directory.
    const EDITOR_APP_PATH = 'apps/custom-editors/';

    /**
     * Start our React injection logic.
     *
     * Essentialy we're mimicing what is normally in the index.html file of the dist, but
     * as we don't have any template we need to inject the scripts using JS.
     */

    // Create our React root element.
    var reactRoot = document.createElement('div');
    reactRoot.id = "root";
    document.body.appendChild(reactRoot);

    // React critical scripts
    var scripts = ['runtime', 'polyfills', 'vendor', 'main'];

    // Iterate over our predefined JS files and insert them one after the other. 
    for (var i = 0; i < scripts.length; i++) {
      var scriptName = scripts[i];
      var reactScriptElm = document.createElement('script');
      reactScriptElm.setAttribute('type', 'text/javascript');
      reactScriptElm.setAttribute('src', config.baseUrl + EDITOR_APP_PATH + scriptName + '.js');
      document.head.appendChild(reactScriptElm);
    }

    var reactStyles = document.createElement('link');
    reactStyles.setAttribute('rel', 'stylesheet');
    reactStyles.setAttribute('href', config.baseUrl + EDITOR_APP_PATH + 'styles.css');

    document.body.appendChild(reactStyles);
  });
})();
```

To recap this file now sets up the React root element and then proceeds to dynamically insert the 
four script tags into the custom attribute editor iFrame body along with a stylesheet which are our
required files for the React app. It also sets a series of variables we receive from Page Designer
like `config`, `isDisabled` etc. to the window so our React app can access them if required.

Our build files should be in the right places also:

```diff
   app_custom_bm_extensions
    └─> cartridge
        ├─> experience
        │   ├─> components
        │   │   ├── customAttributeEditor.js
        │   │   └── customAttributeEditor.json
        │   └─> editors
        │       └─> com
        │           └─> editors
        │               └─> acme
        │                   ├── customEditor.js
        │                   └── customEditor.json
        └─> static
            └─> default
+               ├─> apps
+               │   └─> custom-editors
+               │       ├── main.js
+               │       ├── polyfills.js
+               │       ├── runtime.js
+               │       ├── styles.css
+               |       ├── [...all the other React build output]
+               │       └── vendor.js
                └─> experience
                    └─> com
                        └─> editors
                            └─> acme
                                └── customEditorClient.js
```

Loading the Custom Attribute Editor now should look like so:

![](./images/react-custom-attribute-editors/custom-attribute-editor-react-install.png)

Now we've got a React app embedded in Page Designer, now lets get them to talk to each other and 
save a value.

### 2.2 - Basic SFCC events

To start with lets get a button to save a value to page designer and then view that in the 
serialized page output.

To my React app I am going to write a quick component that has a button that when clicked, calls

```jsx
const SimpleCustomAttributeEditorEvents = () => {
  
  const handleOnClick = () => {
    window.emit({
      type: 'sfcc:value',
      payload: {
        newValue: new Date()
      }
    });
  }
  
  return (
    <div>
      <button onClick={() => handleOnClick()}>Test me</button>
    </div>
  )
}
```

After clicking the "test me" button you'll notice the "Unpublish" button in the top right becomes 
greyed out signifying there is an unsaved change on the page. 

![](./images/react-custom-attribute-editors/custom-attribute-editor-value-interacted.png)

Then after clicking save I see the confirmation window and the "Unpublish" button be enabled:

![](./images/react-custom-attribute-editors/custom-attribute-editor-value-saved.png)

Then viewing a JSON representation of the page via a controller 
using [`PageMgr.serializePage()`](https://documentation.b2c.commercecloud.salesforce.com/DOC1/topic/com.demandware.dochelp/DWAPI/scriptapi/html/api/class_dw_experience_PageMgr.html#dw_experience_PageMgr_renderPage_String_String_DetailAnchor) we 
can see the new value in the data.

![](./images/react-custom-attribute-editors/custom-attribute-editor-value-json.png)

## 3.0 - One React App, many custom editors

Currently, we've registered a single custom editor called `customEditor`. However, as we're
injecting a React app here we can make this app multipurpose and use it for many inputs, saving us
the hassle and challenge of setting up a separate editor declaration for every custom attribute
editor experience we implement. We can do this through the `configration` property we set 
to `{}` earlier in our JSON:

```diff
  {
    "id": "playground",
    "name": "Playground",
    "type": "custom",
    "required": false,
    "editor_definition": {
      "type": "com.acme.customEditor",
-     "configuration": {}
+     "configuration": {
+       "editorType": "playground"
+     }
    }
  }
```

This configuration value then ends up as the `config` parameter passed to our 
`customEditorClient.js` in the `sfcc:ready` callback.

### Add React Router

## 4.0 - Adding support for breakout editors

A breakout editor is the SFCC term for an editor that appears in a Page Designer managed modal. The
editor "breaks out" of the sidebar and takes over the entire screen. This is a great solution for
complex user experiences where you need that additional screen real-estate to craft the data we're
storing in Page Designer.

A word about event flow first.

### 4.1 - Second round of editor definition files

First up we need to make the required changes to our editor declaration to support breakout editors.

Let's start with adding two new files to our `/cartridge/experience/editors/com/acme/` directory:

1. `customEditorBreakout.js`
2. `customEditorBreakout.json`

```js:title=customEditorBreakout.js
'use strict';

var URLUtils = require('dw/web/URLUtils');

/**
 * ACME Custom Editor (breakout)
 * @param editor
 *
 * @see https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fpage_designer%2Fb2c_custom_attr_editor.html&cp=0_7_7_4
 */
module.exports.init = function (editor) {
  // This is important because it sets the asset URLs to the non-versioned URLs...
  editor.configuration.put('baseUrl', URLUtils.staticURL('/').https().toString());
};
```

```json:title=customEditorBreakout.json
{
  "name": "ACME Custom Editor (breakout)",
  "description": "Wrapper editor around our reusable React editor app.",
  "resources": {
    "scripts": [
      "/experience/editors/com/acme/customEditorClient.js"
    ],
    "styles": []
  }
}
```

Note how we're using the same `customEditorClient.js` in both the `customEditorBreakout.json` and
`customEditor.json` files. This is deliberate as we want the same react app to be mounted in both 
our "inline" and "breakout" editors. We need to make the following additions to our 
original `customEditor.js` file also:

```diff:title=/cartridge/experience/editors/com/acme/customEditor.js
 'use strict';
 
 var URLUtils = require('dw/web/URLUtils');
 var PageMgr = require('dw/experience/PageMgr');
 var HashMap = require('dw/util/HashMap');
 
 /**
  * Init the ACME Custom Editor (inline)
  * @param editor
  *
  * @see https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fpage_designer%2Fb2c_custom_attr_editor.html&cp=0_7_7_4
  */
 module.exports.init = function (editor) {
+  // Create a reference to the breakout custom editor
+  var breakoutEditor = PageMgr.getCustomEditor('com.acme.customEditorBreakout', new HashMap());
 
   // This is important because it sets the asset URLs to the non-versioned URLs...
   editor.configuration.put('baseUrl', URLUtils.staticURL('/').https().toString());
 
+  // Add a dependency to the configured breakout editor
+  editor.dependencies.put('customEditorBreakout', breakoutEditor);
 };
```

### 4.2 - Abstracting page designer events

As we briefly mentioned above and in part 1.5, there are a series of Custom Attribute Editor Events
we can use to communicate between Page Designer and our custom attribute editor.

To communicate back with the Attribute editor in the Page Designer sidebar (what I call an "inline")
editor we use a series of SFCC `window.emit` calls.

```ts
export const SFCC_EVENT_TYPES = {
  EDITOR_INTERACTED: 'sfcc:interacted',
  VALUE_VALID: 'sfcc:valid',
  VALUE_APPLY: 'sfcc:value'
}
```

- Wrote a straight forward typescript wrapper around this API so that I can call it from my various
  components in a standardized way.

```ts
const handleInteraction = () => {
  window.emit({
    type: SFCC_EVENT_TYPES.EDITOR_INTERACTED
  });
};
```

CLIENT

Then expanding on the client calls I added above we add three new event types:

```diff
 export const SFCC_EVENT_TYPES = {
+  BREAKOUT_OPEN: 'sfcc:breakout',
+  BREAKOUT_APPLY: 'sfcc:breakoutApply',
+  BREAKOUT_CANCEL: 'sfcc:breakoutCancel',
   EDITOR_INTERACTED: 'sfcc:interacted',
   VALUE_VALID: 'sfcc:valid',
   VALUE_APPLY: 'sfcc:value'
 }
```

## Half way pit-stop

Using our new `app_custom_bm_extensions` cartridge, we've registered a new custom editor called 
`com.acme.customEditor`. We've set up all the required files for this in the corresponding directory
structure `/com/acme/customEditor.js(on)` for both the `/static/default/experience/editors/` and
`/experience/editors/com/acme/customEditor.js`.

- You can also register these as part of your page 
- Cool feature is this editor is available to your site components as well. No need to implement them in the same cartridge.

Opening page designer you won't see anything too exciting happen yet, but a blank space should have
replaced the textarea box we were seeing previously.

## Resources

- [Component Attribute Types and UI Controls](https://documentation.b2c.commercecloud.salesforce.com/DOC1/index.jsp?topic=%2Fcom.demandware.dochelp%2Fcontent%2Fb2c_commerce%2Ftopics%2Fpage_designer%2Fb2c_comp_attr_types.html&resultof=%22%65%6e%75%6d%22%20) (Salesforce B2C Commerce Docs - accessed Apr 4, 2023).
