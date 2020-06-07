---
title: "Opacity in CSS HEX color notation"
date: 2020-04-22T10:55:56-04:00
slug: "css-color-module-4"
draft: true
---

`RRGGBBAA`! What sounds like some guttural scream developers make when trying to vertically center something in a page is actually a nifty new CSS property that is working its way into the specification in the form of [CSS Color Module Level 4](https://www.w3.org/TR/css-color-4/#currentcolor-color).

Where the common notations for HEX colors are the shorthand three digits #RGB and six digits #RRGGBB.

The new additions are a new 8 digit and 4 digit varaion, adding one or two character space for the ALPHA channel in hex colors. No more translating between rgba and hex colors if you want something slightly transparent!.

Browser support at the moment is

It's currently a draft part of the [CSSWG Draft](https://drafts.csswg.org/css-color/#hex-notation)

Shorthand HEX colors have some built in opacity properties!

## Browser Support

Globally the new CSS Color Module L4 is supported by 88.52% of users base on [caniuse](https://caniuse.com/#feat=css-rrggbbaa). No IE support but for more modern code bases.

## Example

```css
span:nth-child(1) {
  background: #000;
}
span:nth-child(2) {
  background: #0009;
}
```

## Codepen Exmaple

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="result" data-user="jamesrwilliams" data-slug-hash="rNOjBLQ" data-preview="true" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Short-hand HEX Opacity ">
  <span>See the Pen <a href="https://codepen.io/jamesrwilliams/pen/rNOjBLQ">
  Short-hand HEX Opacity </a> by James R. Williams (<a href="https://codepen.io/jamesrwilliams">@jamesrwilliams</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>
