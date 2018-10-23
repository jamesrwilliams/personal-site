---
title: Embedding 360 media
author: James W.
type: post
date: 2018-07-19T16:31:35+00:00
draft: true
url: /?p=217
categories:
  - Commercial Projects
tags:
  - javascript
  - vr
  - VR-View

---
## YouTube {#youtube}

My go-to for embedding 360 media on any website. YouTube has excellent 360 support, and its media player is one of the better for embedding. I found a few issues with clients that didn&#8217;t want to have YouTube branding on this experience so enter [VR View][1].

## VR View {#vr-view}

Google&#8217;s VR project has a Javascript SDK for embedding VR experiences into web pages. Head on over to the [VR view for the web][1] section of their website where you can see a demo coral reef alongside some instructions.

## Deploying with AWS {#deploying-with-aws}

There is a nice quirt for Safari on OSX where the videos just don&#8217;t work if the VR View code and the media are hosted on separate servers. Which makes distributing video using a CDN a little tricky.

 [1]: https://developers.google.com/vr/develop/web/vrview-web