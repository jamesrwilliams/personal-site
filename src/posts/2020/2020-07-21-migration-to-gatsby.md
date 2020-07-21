---
title: "Migrating my site from Hugo to Gatsby"
date: 2020-06-15
slug: "migration-to-gatsby"
jira: "POST-20"
---

Back in 2019 I made the decision to stop publishing my personal site on WordPress and move to static site generators in a hunt for their better performance, and the opportunity to use more modern technology stacks. After a few failed attempts at using Jekyll due to ruby environments on Mac being far above my pay grade to fix, I settled on [Hugo](/posts/moving-from-wordpress-to-hugo). [Hugo](https://gohugo.io/) is devilishly fast, and didn't come with a myriad of Plugin / Security updates every five minutes.

So why change? Hugo is written in Go, a language I have zero experience in, and it;s templating was done with Go Templates. A year or so in I decided I no longer wanted to run my site using this technology I don't understand as well as something like JavaScript.

Enter React, which I had avoided up until now. It has become more and more prevalent and I decided it was time for me to embrace its inevitability and build something in it myself. Nothing better than some applied learning. I took a look at both Gatsby and Nuxt.js, opting for Gatsby due to (what looked like) better feature set out of the box with things like responsive image handling and routing.

## API Usage

The other cool part of Gatsby is how it uses GraphQL, which is another new technology for me. It is safe to say that GraphQL is awesome. I only have some a basic usage under my belt right now the prospect of it is quite exciting however.

I also make use of two external APIs to generate content for this site those being GitHub and GoodReads. I'm using Github's GraphQL API to add links to the homepage by pulling in my top repositories and their descriptions. This is just the starting point, I'm hoping to update this soon display the projects I've pushed too recently. GoodReads is just a REST API call to fetch the book that I'm currently reading, and its author.

## Netlify Usage

- LFS
- Redirects
- It now actually uses the netlify.toml file rather than site config.
- Better use of environment variables
- Properly implemented the netlify.toml file to move away from using site config in the tool itself. 

## Fun Features I’ve added

New typeface, much easier to read I feel. Interestingly I’ve also swapped out the numbers from their proportional numbers characters to ones that don’t drop. Shout out to [Nick Galbreath](https://www.client9.com/css-georgia-font-stack-with-tabular-numbers/) for his write up about this.

I also use [Google Cloud Scheduler](https://cloud.google.com/scheduler) (overkill I know) to trigger weekly build by sending a POST request to my [Netlify build webhook](https://docs.netlify.com/configure-builds/build-hooks). This is for off chance I don't work on my site for a week but something on my Github / GoodReads account changes, those changes will be updated at least each week.

---

It's been a fun few on/off months of deevelopment slowly migrating my site since 

You can checkout the source code on GitHub

