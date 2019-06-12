---
title: "MacOS: Make TextEdit.app open new file on launch"
type: post
date: 2019-06-12T11:23:49-04:00
---

I use textEdit a lot to format small snippets of text and code when formatting is not a concern for me. One of my biggest annoyances with this tiny application as how that it always opened to the "open file" dialog when I needed to quickly format text. Turns out there is a way to change that!

## Open a blank file by default

Rewriting the following line in the Plist file can set the application to open new file by default!
Open your terminal and run the following command:

```bash
defaults write com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile -bool false
```

## Reset to show the open dialog

Running the following command will reset the application back to showing the open dialog when you open the application:

```bash
defaults delete com.apple.TextEdit NSShowAppCentricOpenPanelInsteadOfUntitledFile
```
