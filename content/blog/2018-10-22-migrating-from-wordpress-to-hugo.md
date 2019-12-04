---
title: "Moving from WordPress to Hugo"
date: 2019-01-08T13:14:21-05:00
aliases: [/blog/moving-my-website-from-wordpress-to-hugo/]
---

I have taken a move to rebuild my personal site in [Hugo](https://gohugo.io) instead of WordPress! Why you ask? Why the heck not. I spend most of my professional life building WordPress sites for clients, why stop now. For me it was the danger of familiarity. When I started building this site, I knew very little about Hugo or how it works. If I'm honest, I still don't feel fully comfortable with it but it is a start.

## The Challenge

I had little experience with static site generators prior to starting out on my Hugo adventure and even less with Go as a programming language. My overall goal was the following:

1. Update my old wordpress portfolio site into something slightly impressive to prospective Canadian employers
2. It has to be fast, accessible, potentially a PWD. I was thinking full marks in a lighthouse audit (albeit without the PWA features just yet).
3. Encourage me to write more blog posts about tech and projects I'm working on.

## Why Hugo

My only other experience of static site generators was a little dabble of Jekyll when exploring opportunities to use GitHub pages. At the time, I was (and still am) having a nightmare getting ruby working on my mac to correctly use Jekyll. I started looking for alternatives that are less ruby based. Hugo runs on Go which happened to be quick and easy to setup, and just like that, I found my static site generator.

## Benefits

Hugo is fast. Which is an understatement, it's superbly fast. At render and loading in the browser. It is a core feature of using a static site generator, most of them are fast, all rendering is done once then the static pages are just served up for every request, lending themselves to being really efficiently cached. All that considered Hugo looked faster in terms of large bodies of content. 

Fewer attack vectors as we can't really login to a static HTML page now can we? Avoiding the plethora of automated attacks that any WordPress site gets bombarded by. I had WordFence installed on my old blog, which used to send me an email notification every few days that some bot net in some corner of the world was trying to login to my blog. That's now changed, no longer really any risk of the site code being used to gain access to the server as it's static.

It is different. I still like wordpress as a CMS but it has it's place. It's a tool and like any tool it has a specific job to do and things start getting difficult when you use a tool not suited for the job. Say large corporate websites are not so suited to WordPress, but that is an argument for another day. Right back to Hugo...

## The How

### The Setup

I started by following the [excellent tutorials](https://gohugo.io/getting-started/) on the Hugo website, and then used their CLI to install a blank custom theme. From here it was mainly a poke and prod approach to finding out how the Go templating language worked and how to shift from my wordpress centric thinking along the lines of loops and plugins and how that translates into the Hugo environment.

### Content Migration

I used the [wordpress-to-hugo-exporter](https://github.com/SchumacherFM/wordpress-to-hugo-exporter) to export all my WordPress posts to Hugo's markdown format with the correct front-matter and other such things. This did require some tweaking but nothing too major for the number of posts I had.

### Redirects

I've updated my URL structure to remove the year-month-date permalink structure to just `blog` then slug. I've done this using their [alias](https://gohugo.io/content-management/urls/#aliases) feature. Simply setting an alias for a post tells Hugo to handle the previous url that then sets a redirect and `noindex` header for the old post and redirects to the new post.

### Deployment

This site is deployed via Netlify, the CI deployment platform which automatically deploys updates to my site whenever there are commits on my master branch. I can concentrate on my projects and/or my blog and not on the state of my site it self.


