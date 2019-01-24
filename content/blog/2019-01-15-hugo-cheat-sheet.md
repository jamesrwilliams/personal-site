---
title: "Hugo Cheat Sheet"
date: 2019-01-15T21:49:41-05:00
type: post
draft: true
---

I'm pretty new to the Hugo site generator and as such I've decided to put together a cheatsheet of nifty things I find here.

## Preview Site locally (Mac)

Very useful little command to enable you to preview your Hugo site on your iPhone/iPad to test your template etc. 

For this to work replace the `nexus.local` with the local address of your mac, found in System Preferences, and then Sharing. 

This will then allow you to visit the lcoal address of your mac with the port your hugo server runs on, via the web browser on your phone to preview the site.

```bash
hugo server --baseUrl=nexus.local --bind="0.0.0.0"
```

For example using the above as an example, and assuming the server runs on port `1313` to access this on your iPhone you would visit: _http://nexus.local:1313_ to preview your site.

## Hugo CLI

This is my go to demo server command for the Hugo CLI with two main arguments.

```terminal
hugo server -D --disableFastRender
```

The `-D` here renders draft posts so I can see how my drafts are doing (the short hand makes it easy to remove if required).r

## Shortcodes

```html

```

## List your works in progress

```terminal
hugo list drafts
```

## Documentation

Very useful documentation links for when you're building your own theme:

- [Hugo templates documentation](https://gohugo.io/templates/)
