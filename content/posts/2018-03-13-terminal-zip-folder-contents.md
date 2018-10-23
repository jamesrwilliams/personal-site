---
title: Zipping folder contents
author: James W.
type: post
date: 2018-03-13T09:16:09+00:00
url: /2018/03/13/terminal-zip-folder-contents/
timeline_notification:
  - 1520932570
categories:
  - Terminal
tags:
  - bash
  - zip

---
ZIP the contents of the current folder into a zip with it&#8217;s parent directory as it&#8217;s name. Useful for zipping just the contents without the folder parent folder.

<pre><code class='sh'>zip -r "${PWD##*/}".zip .</code></pre>

Zip the current directory into a folder called `app.zip`:

<pre><code class='sh'>zip -r app.zip .</code></pre>

Especially useful for proprietary email clients, I&#8217;m looking at you Dell EMC, and certain manifest files.