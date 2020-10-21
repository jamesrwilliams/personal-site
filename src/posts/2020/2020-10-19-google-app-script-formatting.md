---
title: Programmatic rich text formatting in Google Sheets with Google Apps Script
date: 2020-10-19
slug: "complex-formatting-in-google-sheets-with-apps-script"
jira: "POST-33"
---

As part of a recent side project I've been exploring ways to apply rich text formatting to Google Sheets programmatically. Google Workspace (previously G Suite) comes with an extensive suite of APIs for interacting with its products called [Google Apps Script](https://developers.google.com/apps-script), a Javascript environment that runs in the cloud, where you can use a number of APIs for products like the Docs, Sheets, and Gmail to name a few.

The goal here is to apply text formatting to number of strings for our translation partner to then translate. These strings may include any combination of things like templating tags (like liquid), angular syntax, and/or regular ol' HTML. Any of these are to be highlight in red, meaning "don't translate". 

If our string was `<p>hello</p>`, we'd only want the word "hello" translated. A more complex, visual example:

```html
<p>Please <a target="_top" href="%retry.url%">click here</a> to try your purchase again.</p>
```

We would want to look like:

---

<span style="color: #f00">&lt;p&gt;</span>Please <span style="color: #f00">&lt;a target="_top" href="%retry.url%"&gt;</span>click here<span style="color: #f00">&lt;/a&gt;</span> to try your purchase again.<span style="color: #f00">&lt;/p&gt;</span>

---

Turns out you can do this with Apps Script! After gathering some test cases, I divided the project into two software components:
 
- *Formatting* - How to use App Script to read Google Sheet's content, and apply formatting to it. 
- *Parsing* - How can I intake a string and return only the bits we want to be translated. 

In this post I'm only going to address the formatting component as the parsing component turned into something far more complicated than I anticipated.

## Breaking ground

To get started create a new Google Sheet in your Google drive. From the top menu navigate to "Tools" => "Script Editor". This will open a new Apps Script project for this document. This is a fully-grown IDE for any Apps scripts where we will be putting our code. To find out more about the IDE and App scripts checkout the [Apps Script developers site](https://developers.google.com/apps-script).

When you first set things up you will probably need to grant the script some OAuth permissions to "See, edit, create, and delete your spreadsheets in Google Drive".

## Adding a trigger
 
First thing I wanted to do is to hook up an event to trigger some code from within my Google Sheet. I used the reserved [`onOpen()`](https://developers.google.com/apps-script/guides/triggers/#onopene) function, which is a default trigger available in App Script, that runs when a user opens a spreadsheet, document, presentation, or form that the user has permission to edit.

Inside this trigger function I add a new dropdown menu titled "My Menu" to the Google Sheet toolbar, with a single option that reads "Run Function" and, when clicked, will run a function called `myCustomFunction()`.

```js
/**
 * onOpen event from Google Sheets
 *
 * Adds our custom menu to the Sheet to allow us to run our functions at will.
 */
function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Run Formatter', functionName: 'myCustomFunction'},
  ];
  spreadsheet.addMenu('My Menu', menuItems);
}
```

## Reading a Range of values

Now we have a button that triggers a function, it's time to make it do things. I only need column A's values, so I'm hard coding my specific input range (A2:A999), which is column A down to the 999th row, plenty of results to get started with.

```js
function myCustomFunction() {

    // Grab a refernece to the current sheet (when you activate our menu button from `onOpen()`
    var sheet = SpreadsheetApp.getActiveSpreadsheet();
    
    // From that sheet get the "A2:A999" range 
    // @see https://developers.google.com/apps-script/reference/spreadsheet/range
    var input = sheet.getRange("A2:A999");
    
    // Returns a rectangular grid of values for this range. 
    // In our case a single array as we're only after one column.
    var data = input.getValues();
    
    // Filter out any values that are empty cells
    var entries = data.filter((node) => node[0] !== '');
 
    // Onwards...
}
```

## Side note on Debugging

You can't use things like `console.log` within app scripts as the code isn't executed in the browser. You can use the [Logger](https://developers.google.com/apps-script/class_logger) class provided by Apps Script and then view the results in the IDE under View > Logs, or even use [`Browser.msgBox()`](https://developers.google.com/apps-script/reference/base/browser#msgBox(String,ButtonSet)) to show a Google native message box within your application usage context.

## Parsing values & Using an external API

For the sake of reducing complexity of this example. I'm going to brush over how the REST endpoint logic works in detail. 
In summary, it ingests an array of strings and returns an array of found results (a pair of start and end offsets of the string). We will use these start/end pairs as indexes to apply our custom formatting in a moment.

This is a reference of how to make a REST call inside Google App Scripts. Adding the `UrlFetchApp()` method to your code will trigger an OAuth dialog to reappear as the permissions your app now needs have changed.

```js
var options = {
  'method' : 'post',  
  'payload' : {
    'entries': JSON.stringify(entries) // ["<p>One</p><p>Two</p>"]
  }
}
var translatableStrings = JSON.parse(UrlFetchApp.fetch('https://[...].ngrok.io/parse', options));
/* translatableStrings = [[3, 5], [13, 15]] */

translatableStrings.forEach((row, index) => {
  // A reference to the value of our original string 
  const original = entries[index];

  /* Time to do some formatting... */
});
```



## Rich Text Formatting

We've now got an array of our original values stored in `entries`, and an array of offsets denoting the start and end of each substring that we want to be translated. Time for formatting. I abstracted the formatting portion into its own function that accepts a string and returns a rich formatted string.

```js
/**
 * Wrapper function
 *
 * @param {string} input The string value we're formatting.
 * @param {array} offsets An array of offset pairs.
 * @returns {RichTextValue} A stylized text string used to represent cell text.
 */ 
function formatString(input, offsets) {

  // Start by creating a container variable for a RichTextValue
  // @see https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value
  var rich = SpreadsheetApp.newRichTextValue();
  
  // Set its contents as the input string.
  rich.setText(input);
  
  // Create a textStyle rule
  // @see https://developers.google.com/apps-script/reference/charts/text-style
  var highlightStyle = SpreadsheetApp.newTextStyle();
  
  // Change the forgraound color to red.
  highlightStyle.setForegroundColor('#F00');
  
  // Build the text style configruation for use.
  var builtHighlightStyle = highlightStyle.build();

  // Set our builtHighlightStyle styles to the range provided of our rich text string.
  offsets.forEach((offset) => {
    rich.setTextStyle(offset[0], offset[1], builtHighlightStyle);
  });

  // Finally we return the built full Rich text object
  return rich.build();

}
```

## Putting together the pieces

Building on the code snippet above where I was iterating over our REST API's response. We now run each response through our formatting function. Each pair of numbers for the row will format the text, returning a formatted string block, which I then render back to my sheet, in the column besides the input.

```javascript
translatableStrings.forEach((offsets, index) => {
  // A reference to the value of our original string 
  const original = entries[index];

  const formattedOutput = formatString(original, offsets);

  const outputCell = sheet.getRange("B" + index);

  output.setRichTextValue(format);
  
});
```

## Summary

Google App Scripts are an awesome way to carry out some complex logic, and programmatically interact with Google services. Even thought this was a real simple, barely scratching the surface, project to start and get my hands dirty with Google Apps Script. This really does give a good taste of the possibilities of what you can do with Google Apps and integrating them with external services.
