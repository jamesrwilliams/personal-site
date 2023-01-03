---
title: Salesforce Commerce Cloud - Drag-and-drop support in page designer
date: 2023-01-06
tags: ['salesforce', 'salesforce-commerce-cloud', 'sfcc-with-react']
---

As I've shared in some [previous posts](/posts/-/tags/sfcc-with-react), I am currently working on a 
React application that uses Salesforce Commerce Cloud as a quasi-headless CMS. We're using Page 
Designer to provide our React app with a JSON representation of our pages set up in the Page 
Designer tool.

Sadly with this headless (non-ISML) approach, you lose a few of the powerful features of Page 
Designer, one of those being the drag-and-drop and click to edit features. While our headless 
approach does break these, it is salvageable with some minor, quite straight forward additions.

I am not aware of any documentation around this drag-and-drop behavior, and the following is purely
based on my experience, digging through the SFRA pages in Page Designer, coupled with a lot of trial
and error.

## Some sample data

Thankfully we just need to add some new HTML data attributes to our components and regions to get 
this working again. Let's walk through the required code using this sample serialized page structure
as an example:

```json:title=serialized-page.json
{
  "id": "homepage",
  "type_id": "page",
  "data": {},
  "regions": [
    {
      "id": "body",
      "components": [
        {
          "id": "c8d423e964b01db4f4256f15cc",
          "type_id": "columns",
          "data": {},
          "regions": [
            {
              "id": "left",
              "components": [
                {
                  "id": "d535715a6ff1f0fe71e1eebed4",
                  "type_id": "textBox",
                  "data": {}
                }
              ]
            },
            {
              "id": "right",
              "components": [
                {
                  "id": "230e41aa858be42df3357510db",
                  "type_id": "textBox",
                  "data": {}
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

You can see the above is a sample serialized page structure of a page with the ID of `homepage`.
It shows that this page is made up of a single region (`header`) and inside that we have added a
component called `columns` that itself is made up of two more regions `left` and `right`. 
Each column has a text-box.

What we're after is to be able to click on each text box and open up the relevant attribute editor 
panel on the right of the page, and for Page Designer to allow us to drag-and-drop these, and other, 
components into the regions we've got in this page structure, these include `body`, `left`, and 
`right`.

## Components

To start off we're going to work with our components to get our click-to-edit behavior working. 
Around each component we need to add the following data attributes to enable the click to edit and
other annotations within the page designer tool.

The first three: `data-allow-select`, `data-allow-move`, `data-allow-delete` are relatively
self-explanatory, and simply enable/disable the selection, movement or deletion of the component
they're applied to. Things start to get interesting with `data-item-id`. This is a combination of 
the word `component`, a pipe character and then the ID of the component, as supplied in the 
serialized page structure. 

For example our `textBox` component from the right column in the above example would the following
value:

```
component|230e41aa858be42df3357510db
```

The last attribute we need to add is `data-sfcc-pd-component-info` which seems to be an encoded, 
JSON object with additional information about the component. Here is a more complete example in 
React:

```tsx
export const MyPageDesignerComponent = ({ id }) => {

  // Utility function to generate and encode PageDesigner metadata
  const componentInfo = (componentId: string, componentType: string) => {
    return JSON.stringify({
      "id" : componentId,
      "render_state" : "SUCCESS",
      "render_info" : {},
      "exception" : null,
      "type" : componentType,
      "name" : null,
      "localized" : true
    })
  }

  return (
    <div
      data-allow-select="true"
      data-allow-move="true"
      data-allow-delete="true"
      data-item-id={`component|${component.id}`}
      data-sfcc-pd-component-info={componentInfo(component.id, component.type_id)}
    >
      My content goes here...
    </div>
  )
}
```

With this alone we now have the component annotations back, along with the click-to-edit behavior! 
Take a look:

![Page Designer UI showing our newly restored annotations](./images/page-designer-drag-and-drop-support.png)

Above shows our `Columns` component in action featuring our new component data attributes. Note the
component name showing up in the little tab at the top of the component, and the move icon,
alongside the delete button.

## Regions

For any components that implement sub-regions, we will need to wrap these elements with the
following data attributes so the Page Designer scripts can correctly identify them, similar to what
we did with our components. 

The `data-allow-drop` property here seems to control if users will be able 
to drop new components in the region. 

The `data-item-id` is features a rather important difference. In order to properly 
support nested regions (sub-regions) we need to know the ID of the _parent component_. Here is a 
sample React component to annotate the region:  

```tsx{numberLines: 1}
export const MyRegionLooper = ({ region, parentComponentId, children }) => {

  // In order to properly support nested regions (sub-regions) we need to
  // know the ID of the parent COMPONENT. If we don't have a parent we 
  // should just do `region.id`.
  const itemId = (parent ? `region|${region.id}|${parentComponentId}` : `region|${region.id}`);

  // Utility function to generate and encode PageDesigner metadata
  const pageDesignerRegionInfo = (id: string) => {
    return JSON.stringify({
      "id" : id,
      "render_state" : "SUCCESS",
      "render_info" : {},
      "exception" : null
    });
  }
  
  // Sample region wrapper component in which we would render our components.
  return (
    <div
      data-item-id={itemId}
      data-allow-drop="true"
      data-sfcc-pd-region-info={pageDesignerRegionInfo(region.id)}>
      { children }
   </div>
  )
}
```

Looking closer at what we're doing on line 6 of the above example, we see that we're using a 
`parentComponentId` variable as part of the `data-item-id` attribute. The `parentComponentId` is 
the component ID of the component that contains the region we're adding. This is a vital bit of 
logic to ensure Page Designer can keep track of the components and their regions when moving 
components around. 

Using our sample code as an example our `columns` component regions would have the following
set as its attribute:`data-item-id="region|left|c8d423e964b01db4f4256f15cc"`.

## Only show these annotations in Page Designer

These attributes have zero impact in the final application we serve to our customers, and it can 
pollute the page with a lot of unnecessary content especially if your pages are made up of a lot of
components.

Ideally we only render these annotations when we're in "edit mode" or within the Page Designer tool.
Sadly there isn't a great way to tell if you're in a Page Designer session or not other than URL
sniffing. Which you can do by using the following snippet taken from SFRA:

```js
const isPageDesigner = () => window.location.pathname.includes('__SYSTEM__Page-Show');
```

Having this to our React application we can conditionally include, through a higher order component
each Page Designer component and region to ensure we don't expose this unnecessary bloat to the
user.

Another option could be to have a separate React build for use on Page Designer vs production if you 
are really worried about bundle size or leaking low-level implementation details. 

---

A few data attributes and some light ancestry, and we're back in business with drag-and-drop support 
in Page designer for our a React app using Salesforce Commerce Cloud as a headless CMS. 

Hope this helped! 
