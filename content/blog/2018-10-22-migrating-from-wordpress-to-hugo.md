---
title: "From WordPress to Hugo"
type: post
date: 2019-01-15T15:31:05+01:00
draft: true
---

I have taken a move to rebuild my personal site in Hugo instead of WordPress! Why you ask? Why the heck not. I spend most of my professional life building WordPress sites for clients, why stop now. For me I think it was the danger of familiarity. When I started building this theme I knew very little about Hugo and how it works. My only other experience of static site generators was a little dabble of Jekyll when exploring GitHub pages.

## Why Hugo

Why not. In all honestly I was (still am IMO) having a nightmare getting Ruby working on my mac to correctly use Jekyl so I started looking for alternatives that are less ruby related.

## Redirects

I've updated my URL structure to remove the year-month-date permalink structure to just `blog` then slug. I've done this using their [alias](https://gohugo.io/content-management/urls/#aliases) feature. Simply setting an alias for a post tells Hugo to gandle the previous url that then sets a redirect and `noindex` header for the old post and redirects to the new post.
