---
title: Zipping folder contents
date: 2018-03-13T09:16:09+00:00
aliases: [/2018/03/13/terminal-zip-folder-contents/]
---
ZIP the contents of the current folder into a zip with it&#8217;s parent directory as it&#8217;s name. Useful for zipping just the contents without the folder parent folder.
```bash
zip -r "${PWD##*/}".zip .
```
Zip the current directory into a folder called `app.zip`:
```bash
zip -r app.zip .
```
Especially useful for proprietary email clients, I'm looking at you Dell EMC, and certain manifest files.
