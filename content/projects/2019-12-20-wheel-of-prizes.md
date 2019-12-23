---
title: "CodePen Concept: Wheel of Prizes"
date: 2019-12-20
slug: 'wheel-of-prizes'
tag: ["CSS", "Animations", "CodePen"]
---

## The Ask

A lot of what I do at <a href="https://points.com">Points</a> is to bring to life small experiences to engage customers following some form of direct mail.

## Method

This features a lot of CSS. Let's break it down. The wheel is made up of any number of "slices". You can see the cake references are going to be plentiful here. Each slice has a label.

After learning a bit of basic maths again. I defined some SCSS variables to try and make this as dynamic as possible. Number of slices etc.

 ```scss
$diameter: 350px;
$numberOfSlices: 12;
$radius: ($diameter / 2);
$circumfrance: (6.283185307 * $radius);
$sliceHeight: ($circumfrance / $numberOfSlices);
$sliceOffeset: ($sliceHeight / 2); 
```

Recently a partner got in touch asking if we could do a "wheel of fortune" style spinner when they visit the page revealing the prize a customer had won.

## Result 

<p class="codepen" data-height="400" data-theme-id="default" data-default-tab="result" data-user="jamesrwilliams" data-slug-hash="LYExEmY" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Spinner Banner Element PoC">
  <span>See the Pen <a href="https://codepen.io/jamesrwilliams/pen/LYExEmY">
  Spinner Banner Element PoC</a> by James R. Williams (<a href="https://codepen.io/jamesrwilliams">@jamesrwilliams</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

