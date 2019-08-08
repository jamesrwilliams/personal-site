---
title: "Using srcset and sizes for responsive images"
type: post
date: 2019-08-07T11:06:57-04:00
draft: true
---


## SRCSET

The `w` in the `300w` is a "width descriptor". The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.

```
sizes="(min-width: 800px) 50vw, 100vw"
```

Meaning: "If the browser window is wider than 800px, this image is probably going to be displayed about half the size of that. If it's smaller, it'll probably be full-width."

So when the browser does it's math on calculating which image to display it uses this and the sizes attribute to calculate which image has the best density to use.

### Pixel Density

> Webkit pixel density example. [https://webkit.org/demos/srcset/](https://webkit.org/demos/srcset/)

> HTML5 Rocks article [https://www.html5rocks.com/en/mobile/high-dpi/#toc-srcset](https://www.html5rocks.com/en/mobile/high-dpi/#toc-srcset)

### Art direction

 
