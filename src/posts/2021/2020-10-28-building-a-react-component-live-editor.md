---
title: Building a React component live editor
date: 2021-01-28
slug: "building-a-react-component-live-editor"
---

My day job at points often involves making minor copy and style updates to marketing messaging for our wider product suite. These little marketing banners are usually built using a Node CLI that I wrote when I first got the job about two years ago, that does most of the leg work for formatting and combining the HTML/CSS/Javascript into a single file and a few utility tasks also.

That CLI featured a CSV based translation feature where a marketing banner could be localised by marking tokens to be replaced by the CSV, so things like headlines could be automatically swapped out for their international versions instead of manually transposing them from a XLS/Google Sheet into the CSV then render the banners.

The annoying part of that was I still had to get the data from the provided translation file, usually an XLS file, into a specific format for localisation, save as CSV move into my banner source code repo, then run the CLI the  copy and paste the output into our product console. If there was a problem with a translation, back down the rabbit hole to get a typo fixed.

## Mainspring

This little side project I started back in September 2020 was to make all these marketing banners I write editable. Not just by myself or other members of my dev team, but by anyone at the company through a web app. Instead of the usual request tickets being required to do the simplest change or update, now anyone at the company to generate branded templates,  relationship managers wanting to see what options are available too them, and the team configuring these into our product can make any necessary changes on the fly, no need for us to get involved.

### Change of process

Instead of us using our Node CLI we now build everything as react components.
All banners are JSX "templates", and each editable/translatable token is now a prop. For complex CSS we use [styled-components](https://styled-components.com/), for one this makes migration from our previous LESS set up a breeze as styled-components natively supports rule nesting, and it's a better developer experience (in my mind) than inlining all the rules. Each template can be encapsulated in a single JSX file and is translation agnostic so can be reused over and over! 

### The `<Wrapper />` component

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




