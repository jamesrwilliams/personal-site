---
title: "Fixing the PHPStorm command line launcher"
type: post
date: 2019-06-25T09:33:52-04:00
draft: true
---

Jetbrains' [PHPStorm](https://www.jetbrains.com/phpstorm/) is my primary editor for any digital project and has been since mid-2017. One thing that really gets on my nerves with it is that every time the application updates my CLI launcher script breaks.

Ironically when this happened it was announced as a feature via their [Toolbox announcement post](https://blog.jetbrains.com/blog/2018/08/23/toolbox-app-1-11-whats-new/) however I find this just another flaky feature, alongside the random spikes of CPU and network the app uses (I often just force close it when I have work to do).

There is a issue being [tracked](https://youtrack.jetbrains.com/issue/TBX-1266) for this however it's still less intuitive than the previous `Tools > Create Command-line launcher` method implemented previously. 

```bash
$ pstorm . 
```

## Why this happens

Inside my bash script that runs when I execute my `pstorm` command is as follows:

```bash
/usr/local/bin/pstorm
```

```bash
open -a "/Users/james/Library/Application Support/JetBrains/Toolbox/apps/PhpStorm/ch-0/191.7141.52/PhpStorm.app/Contents/MacOS/phpstorm" "$@"
```

So here we can see this lovely version number looking thing following the `/ch-0/`. This is what changes for each new version of the application. As we're using this in the path it breaks as soon as that old version is replaced with the new one.

to find this path open the JetBrains toolbox find the application that is being a nightmare. Click on the little gear icon, and open up the settings page. On this page there is a section displaying the install location path. Copy this path by dragging the application to your terminal window or by adding this [nifty right click copy-path option](../macos-creating-a-right-click-option-to-copy-a-file-path/).


## Fixing it

The toolbox installs these applications in:

```bash
Library/Application Support/JetBrains/Toolbox/apps/PhpStorm/ch-0/191.6707.66/PhpStorm.app
```
