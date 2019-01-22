---
title: "Moving my website from WordPress to Hugo"
type: post
date: 2019-01-15T15:31:05+01:00
draft: true
---

I have taken a move to rebuild my personal site in [Hugo](https://gohugo.io) instead of WordPress! Why you ask? Why the heck not. I spend most of my professional life building WordPress sites for clients, why stop now. For me I think it was the danger of familiarity. When I started building this theme I knew very little about Hugo and how it works. My only other experience of static site generators was a little dabble of Jekyll when exploring GitHub pages.

## Why Hugo

Why not. In all honestly I was (and still am) having a nightmare getting Ruby working on my mac to correctly use Jekyl so I started looking for alternatives that are less ruby related. Hugo runs on Go so is incredibly fast and quick and easily setup. Not a sniff of ruby anywhere.

## The Challenge

I had little experience with static site generators prior to starting out on my Hugo adventure and even less with Go as a programming language. My overall goal was twofold:

1. Update my old wordpress portfolio site into something slightly impressive to prospective Canadian employers
2. Build something that gets full marks in a lighthouse audit (albeit without the PWA features just yet). 

## Benefits

It's fast. Fast is an understatement, it's superbly fast. At render and loading in the browser. Its a core feature of using a static site generator, most of them are fast, all rendering is done once then the static pages are just served up for every request, lending themselves to being really efficiently cached.

Fewer attack vectors. Can't really login to a static HTML page now can we? Avoiding the plethora of WordPress site attacks that any wordpress site gets bombarded by. 

I had WordFence installed on my old blog, which used to send me an email notification every few days that some bot net in some corner of the world was trying to login to my blog.

## Deploying

This site is deployed via Netlify, the CI deployment platform which automatically deploys updates to my site whenever there are commits on my master branch.  

### Redirects

I've updated my URL structure to remove the year-month-date permalink structure to just `blog` then slug. I've done this using their [alias](https://gohugo.io/content-management/urls/#aliases) feature. Simply setting an alias for a post tells Hugo to gandle the previous url that then sets a redirect and `noindex` header for the old post and redirects to the new post.
