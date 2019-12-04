---
title: "A wild Chrome extension appears"
date: 2019-03-30T18:09:35-04:00
---

Laziness is one of the three great virtues of a programmer. The other two virtues are impatience and hubris, [read about them here](http://threevirtues.com/), but that is not what I'm really worried about at here. Laziness, according to Larry Wall is: 

> "The quality that makes you go to great effort to reduce overall energy expenditure. It makes you write labor-saving programs that other people will find useful and document what you wrote so you don't have to answer so many questions about it."

And out of laziness, an effort to reduce my (already) low level of energy expenditure. I decided to automate a slightly repetitive task and this is how it went... 

## The ask

The goal here is for me to develop a chrome extension that you can use to easily replace the `innerHTML` of a particular selector without using Chrome's DevTools. This is a task I find myself doing on the regular, and it gets really repetitive when trying to replace the exact divs within a complex page without refreshing (due to session limitations).

## Extension building blocks

It turns out chrome extensions are just specially packaged web applications written in Javascript and HTML. The panel that appears when clicking the extension icon in the extensions bar in Chrome is called the popup which is just a HTML page.
 
1. **Content scripts** - Content scripts are files that run in the context of web pages. By using the standard Document Object Model (DOM), they are able to read details of the web pages the browser visits, make changes to them and pass information to their parent extension.

2. **Background scripts** - These are something that run in background and listen for triggers while the user interacts with the chrome browser (such as listening for a click event on a tab).
3. **Injected scripts** - These are scripts that you dynamically inject into pages to communicate with the page content directly.

## Getting more complicated

This extension uses an API feature of our product pages and displays it for us in a nice and clean window. Things like expiry dates and other configuration variables alongside a URL back to our console where we can manage these things. In the past it’s been quite a challenge to cross reference these items UIDs between their deployments and our console, but no more. Turns out there was a URL hidden in our Library’s API this entire time.

## Source

Check out the source code for this project in my Experiments repo on GitHub.

https://github.com/jamesrwilliams/experiments/tree/master/chrome-extension
