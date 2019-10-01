---
title: "Fixing the PHPStorm command line launcher"
type: post
date: 2019-06-25T09:33:52-04:00
---

I use Jetbrains' [PHPStorm](https://www.jetbrains.com/phpstorm/) as my primary editor for any digital project and have been since mid-2017. It's an all round solid editor, especially useful when working with WordPress projects and I've found it a bit more powerful than VSCode but one thing that really gets on my nerves with it is that **every time the application updates my CLI launcher script breaks**.

> "Ooo a new version of PHPStorm to use, R.I.P my launcher." - @me

```bash
$ pstorm ./path-to-project-dir 
```

## It's not a bug, it's a feature

Ironically when this happened it was announced as a feature via their [Toolbox announcement post](https://blog.jetbrains.com/blog/2018/08/23/toolbox-app-1-11-whats-new/) however I find this just another flaky feature, alongside the random spikes of CPU and network the app uses (I often just force close it when I have work to do).

There is a issue being [tracked](https://youtrack.jetbrains.com/issue/TBX-1266) for this however it's still less intuitive than the previous `Tools > Create Command-line launcher` method implemented previously. After a little digging and some annoying application behaviour involving version numbers I found the reason why this happens and with it, the solution to my first-world development problem.

## Why this happens

The bash script that runs when I execute my `pstorm` (`/usr/local/bin/pstorm`) command looks like this:

```bash
open -a "/Users/james/Library/Application Support/JetBrains/Toolbox/apps/PhpStorm/ch-0/191.7141.52/PhpStorm.app/Contents/MacOS/phpstorm" "$@"
```

So here we can see this lovely version number looking thing following the `/ch-0/`. This is what changes for each new version of the application. As we're using this in the path it breaks as soon as that old version is replaced with the new one. Yay for using version numbers as a directory and not using something like `/@latest/` or something similar.

> Just a note as you'll need to add the `/Contents/MacOS/phpstorm` segment after the path you copied as this is the executable that will ingest the file path provided by the CLI.

## Fixing the issue

As our bash script is still using the previous version number we need a way to find the new version number and replace it in the launcher. 

1. To find this path open the JetBrains toolbox find the application that is being a nightmare.

2. Click on the little gear icon, and open up the settings page. On this page there is a section displaying the install location path.

3. Copy this path by dragging the application to your terminal window or by adding this [nifty right click copy-path option](../macos-creating-a-right-click-option-to-copy-a-file-path/) utility I wrote.

4. Copy the new version number between the `ch-0` and `PhpStorm.app` segments and replace the previous on in our bash script (`/usr/local/bin/pstorm`) save and exit and we're done. The CLI launcher now behaves itself again!
