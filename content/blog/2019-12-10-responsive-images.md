---
title: "Experiments with responsive images"
date: 2019-12-10T15:26:18-05:00
type: post
draft: true
---

- Picture element
- browser support
- Background-image, size = cover;
- object-fit: cover;

```css
#randomString {
  background-image: url('https://placehold.it/250x250?t=LG');
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  #randomString {
    background-image: url('https://placehold.it/250x250?t=LG-HR');
  }
}

@media screen and (max-width: 700px) {
  #randomString {
    background-image: url('https://placehold.it/250x250?t=SM');
  }
}

@media screen and (max-width: 700px) and (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  #randomString {
    background-image: url('https://placehold.it/250x250?t=SM');
  }
}
```
