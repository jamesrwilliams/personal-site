---
title: CSS attribute selectors
type: post
date: 2018-08-22T12:13:37+00:00
---
### Target all images that have an empty `alt` tag
```css
img[alt=""] {
    /*style*/
 }
```
### A links without a `href` attribute

```css
a:not([href]){
    /* Rules for <a> elements without a href */
}
```
