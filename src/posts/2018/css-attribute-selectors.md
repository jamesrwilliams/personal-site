---
title: CSS attribute selectors
date: 2018-08-22T12:13:37+00:00
---

### Target all images that have an empty `alt` tag

```css
img[alt=""] {
  /* Rules for <img> elements without alt text. */
}
```

### A links without a `href` attribute

```css
a:not([href]) {
  /* Rules for <a> elements without a href attribute. */
}
```

### Bonus - Target pseudo selector

For highlighting hash (#) links when they're active in the current URL fragment.

```css
h1:target {
  /* Rules for h1 elements matching the current URL fragment. */
}
```
