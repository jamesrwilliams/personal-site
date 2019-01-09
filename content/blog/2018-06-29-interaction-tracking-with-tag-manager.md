---
title: Interaction tracking with Google Tag manager
type: post
date: 2018-06-29T12:58:07+00:00
draft: true
---
## Scenario {#scenario}

Picture this, we have a website that links to a number of PDF files that our users can click on to download. We would like to track the number of times an asset is downloaded and link this to a Google Analytics goal. One approach could be editing the website and adding javascript triggers for each link that sends a tracking event or we could use tag manager.

## Tag Manager {#tag-manager}

Google Tag Manager is a &#8220;tag management system&#8221;. Letting you manage JavaScript and HTML tags used on your site adding things like analytics and triggering events etc.

## Custom triggers {#custom-triggers}

## Linking to Google Analytics events {#linking-to-google-analytics-events}

Google Analytics is heavily integrated (surprise surprise) in Tag manager. We can use this integration to send a custom event everytime our link is clicked. For this we need the following things:

## Built-In Variables {#built-in-variables}

## Use the debugger {#use-the-debugger}

You don&#8217;t want to pollute your production Google Analytics (GA) account with test events and goals while you&#8217;re working out the details of this. The [Google Analytics Debugger][1] is an awesome browser plugin for Chrome that intercepts the events before they are sent to Tag manager. It logs the events to your console to see in detail what is being sent. A great way to ensure all your triggers are configured correctly.

[<img class="wp-image-189 size-full alignleft" src="https://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/06/ga-debugger-console.png" alt="Example output of the analyiyics debugger in a browser console. Showing the commands that are running and their arguments." width="607" height="253" />][2]

 [1]: https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna?hl=en
 [2]: https://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/06/ga-debugger-console.png
