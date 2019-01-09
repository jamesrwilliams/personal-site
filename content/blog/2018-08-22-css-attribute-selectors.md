---
title: CSS attribute selectors
author: James W.
type: post
date: 2018-08-22T12:13:37+00:00
draft: true
url: /?p=260
categories:
  - Resources
tags:
  - a11y
  - css

---
### Target all images that have an empty &#8220;alt&#8221; tag {#target-all-images-that-have-an-empty-alt-tag}

    img[alt=""] {
       /*style*/
    }

### A links without a &#8220;href&#8221; attribute {#a-links-without-a-href-attribute}

    a:not([href]){
    
      /* Rules for <a> elements without a href */
    
    }