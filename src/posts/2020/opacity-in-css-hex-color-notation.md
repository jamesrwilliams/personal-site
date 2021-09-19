---
title: "Opacity in CSS hex color notation"
date: 2020-08-04T10:55:56-04:00
jira: "POST-1"
---

***RRGGBBAA***! What sounds like some guttural scream of a developer trying to vertically center something in a page without Flexbox, is actually a nifty new CSS property that is working its way into the specification in the form of [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#hex-notation).

As the name suggests, this is the next evolution of color notion in web development. Including things like LCH (Lightness Chroma Hue [^1]) colours and [`currentcolor`](https://css-tricks.com/currentcolor/). One of the more eye-catching sections of the spec for me is the new opacity notation for hex colors. 
 
[^1]: [Lea Verou](https://lea.verou.me/) wrote a great summary of <abbr title="Lightness Chroma Hue">LCH</abbr> and how it is going to be a game changer for web development back in April you should read: ["LCH colors in CSS: what, why, and how?"](https://lea.verou.me/2020/04/lch-colors-in-css-what-why-and-how/#more-2934).

Where the common notations for hex colors are the shorthand three digits (#RGB) and six digits (#RRGGBB). The new additions are a new 8 and 4 digits color notations, adding one or two character space for the alpha (opacity) channel. No more translating to rgba if you want a slightly transparent color! Simply add another number to shorthand hex to opacity! Here is a quick sample of its usage:

```css
span:nth-child(1) {
  /* Your regular RGB hex code. */ 
  background: #000;
}
span:nth-child(2) {
  /* A new hex code that is 90% opaque */ 
  background: #0009;
}
span:nth-child(3) {
  /* A new hex code that is 55% opaque */ 
  background: #00000055;
}
```

I also put together this CodePen demo for a more interactive demonstration: [jamesrwilliams/pen/rNOjBLQ](https://codepen.io/jamesrwilliams/pen/rNOjBLQ)

## Browser Support

While the spec is a [CSSWG Editor' Draft](https://drafts.csswg.org/css-color/#hex-notation) (at the time of writing), support for it is somewhat impressive. Globally the new CSS Color Module L4 is supported by ~92.53% of users base on [caniuse.com](https://caniuse.com/#feat=css-rrggbbaa). No support on IE or Opera Mini and some others low usage browsers.  

