---
title: "Hugo Cheat Sheet"
date: 2019-01-15T21:49:41-05:00
type: post
draft: true
---

I'm very new to Hugo and GoLang so I've started a this post as a dumping ground for things I've learnt as a form of reference for anything Hugo related. 

## Table of contents

- [Variables and Logic](#variables-and-logic)
- [File structure](#file-structure)
- [Theme boilerplate](#theme-boilerplate)
- [CLI](#hugo-cli)

Some bonus helpful things I've made a note of since doing more things with Hugo:

- [Tip #1: Make server accessible to your LAN](#tip-1-preview-site-over-lan-mac)

## File structure

.. Breakdown of `baseof` etc.

## Theme boilerplate

This is a quick template I've setup with basic setup of a hugo site ready for development. It uses gulp to compile the SCSS and Javascript into build files ready for deployment.

Check it out here [INSERT LINK TO REPO]. 

## Variables and Logic

Conditionals and other variable based logic is done a little differently with Hugo, this is because of it's foundation in Go handles arguments and functions differently [Confirm real reason]. 

For example if we want to check if two numbers are equal we will do the following:

### Equal (===) 

```go
{{ if eq arg1 arg2 }}
    /* True */
{{ else }} 
    /* False */
{{ end }}
```

### Not (!==)

Negating variables...

### Less-than (<)

### Greater-than (>)

Other logical operators include:

-  `lt arg1 arg2 }}...` Less-than

## CLI

### Preview server

This is my go to demo server command for the Hugo CLI with two main arguments.

```terminal
hugo server -D --disableFastRender
```

The `-D` here renders draft posts so I can see how my drafts are doing (the short hand makes it easy to remove if required). I've made it a thing to do now to add my usual hugo render script to my `package.json` file scripts, so I can run something like `npm run hugo` instead of remembering all my arguments.

### List your draft posts

```terminal
hugo list drafts
```

## Shortcodes

- TODO: Custom Shortcodes

## Documentation

Very useful documentation links for when you're building your own theme:

- [Hugo templates documentation](https://gohugo.io/templates/)

## Tip #1: Preview site over LAN (Mac)

Very useful little command to enable you to preview your Hugo site on your iPhone/iPad to test your template etc. For this to work replace the `nexus.local` with the local address of your mac, found in System Preferences, and then Sharing. My laptop is called nexus currently hence the example.

This will then allow you to visit the local address of your mac with the port your hugo server runs on, via the web browser on your phone to preview the site.

```bash
hugo server --baseUrl=nexus.local --bind="0.0.0.0"
```

For example using the above as an example, and assuming the server runs on port `1313` to access this on your iPhone you would visit: _http://nexus.local:1313_ to preview your site.
