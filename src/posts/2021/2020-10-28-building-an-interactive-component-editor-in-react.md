---
title: Building an interactive component editor in React
date: 2021-01-28
slug: "building-an-interactive-component-editor-in-react"
draft: true
---

My day job at points often involves making minor copy and style updates to marketing messaging for our wider product suite. These little marketing "banners" are usually built using a Node CLI that I wrote when I first joined Points about two years ago. This CLI does most of the leg work for formatting and combining the HTML/CSS/Javascript into a single file, and a few utility like automated QA steps, ES6 transpiling etc.

The major challenge with these "banners" is internationalization. We are often asked to produce banners in +18 languages and then have that multiplied per variation if we're running an experiment.

- CLI started by setting up JSON files of translations (terrible to use so we abanadonded that)
- Next version of the CLI we moved to ingesting CSV files, much easier to transpile from the original translation files we were provided. This still required creating a new CSV file, downloading it, and running the CLI to generate a new banner.

The idea from this project came from finding a way to have an "interactive" translation tool where you can change the translation tokens for a banner on the fly without needing to run any build process.

have products and adverts being served in over 18 languages, and often with multiple variations at the same time which makes anything manual with these banners extremely tedious. We recently developed a feature that lets the CLI read a CSV file of translations and create multi-lingual banners from there. 

That CLI featured a CSV based translation feature where a marketing banner could be localised by marking tokens to be replaced by the CSV, so things like headlines could be automatically swapped out for their international versions instead of manually transposing them from a XLS/Google Sheet into the CSV then render the banners.

The annoying part of that was I still had to get the data from the provided translation file, usually an XLS file, into a specific format for localisation, save as CSV move into my banner source code repo, then run the CLI the  copy and paste the output into our product console. If there was a problem with a translation, back down the rabbit hole to get a typo fixed.

## Development Experience

## Templates

Instead of building bespoke "banners" for each campaign this project aimed to decouple the design and implementation from the content. Most of the partners have their default style that we tend to recycle. This also increases our proactivity and reduces the number of steps for a campaign to get to market.

We now build bespoke templates for each partner branded as per their requirements. These templates are just react components. 

## The Editor

The editor features an inline preview window to see the template your editing, a spreadsheet editor used for handling the translations. With languages along the X axis and the various tokens on the Y axis.

## Output

## Mainspring

This little side project I started back in September 2020 was to make all these marketing banners I write editable. Not just by myself or other members of my dev team, but by anyone at the company through a web app. Instead of the usual request tickets being required to do the simplest change or update, now anyone at the company to generate branded templates,  relationship managers wanting to see what options are available too them, and the team configuring these into our product can make any necessary changes on the fly, no need for us to get involved.

Think of this as a sort of Storybook where we can both view examples of deliverables and also change their content. It just so happens we use the output of this directly in our product.

## Overview

Part of this project we develop "templates" these are React components. Any component props are treated as editable by our editor

## Change of process

Instead of us using our Node CLI we now build everything as react components.
All banners are JSX "templates", and each editable/translatable token is now a prop. For complex CSS we use [styled-components](https://styled-components.com/), for one this makes migration from our previous LESS set up a breeze as styled-components natively supports rule nesting, and it's a better developer experience (in my mind) than inlining all the rules. Each template can be encapsulated in a single JSX file and is translation agnostic so can be reused over and over! 

## The `<Wrapper />` component

To continue my focus on developer experience, this component was to do most of the heavy lifting with very little code required in each template. This acts as our default starting block to contain the rest of the template and handles script inclusion! All through a what I think is a very clean syntax:

```js
import React from 'react';
import { Wrapper } from '../../../../library/';
import { customJS } from './script.js';

const ExampleTemplate = () => (
  <Wrapper scripts={[customJS]}>
    {/* Rest of the HTML goes here */}
  </Wrapper>
)
```

### Client side scripts

I used the following logic to "inline" any code that should run on the client side. The scripts are passed in as an array to the `<Wrapper />` element in the template file which I find is the cleanest experience for managing multiple scripts.

```js
export default function loader(scripts) {

  let output = '';

  if(scripts) {
    scripts.forEach((script) => {
      output += script.toString() + script.name + '()\n';
    });
  }

  return output;
}
```

### A heavy use of the `ReactDOMServer.renderToStaticMarkup`

What is great about this approach for us is that once the tool is built and deployed to the server all the code is obfuscated into smaller variable names, making the code smaller, and then using `ReactDOMServer.renderToStaticMarkup` it spits out exactly the code we want.

## Client side JS


