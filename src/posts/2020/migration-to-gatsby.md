---
title: "Migrating from Hugo to Gatsby"
date: 2020-07-21
jira: "POST-20"
---

Back in 2019 I made the decision to stop publishing my personal site on WordPress and move to static site generators in a hunt for their better performance, and the opportunity to use more modern technology. After a few failed attempts at fixing Ruby versions on Mac to use Jekyll, I settled on [Hugo](/posts/moving-from-wordpress-to-hugo). It is devilishly fast, and didn't come with a myriad of Plugin / Security updates every five minutes. So if that was a year and a half ago, why another change? 

Hugo is written in Go, a language I have zero experience in, and it's templating was done with Go Templates. A year or so in I decided I no longer wanted to run my site using this technology I don't understand as well as something like JavaScript. For really simple static sites it is still a tool I'd consider, a really great developer experience, and an impressive documentation portal to boot.

If Hugo is out, what is next?

React. A technology which I had avoided up until now. React has become more and more prevalent and almost inevitable. I decided it was time for me to embrace its inevitability and build something in it myself and nothing better than some applied learning.

I took a look at both Gatsby and Nuxt.js, opting for Gatsby due to (what looked like) better feature set out of the box with things like responsive image handling and routing. Zero regrets once I got started.

## Less migration; more rebuild

Unlike Hugo, Gatsby does not "themes" per se, so essentially was a process of rebuilding my Hugo partials into React components. This quickly descended into me redesigning everything and reusing almost nothing from my Hugo site apart from my posts.

The content migration was straight forward, I'm still using markdown for my posts, with some expanded frontmatter to facilitate more things via GraphQL queries. I also took this opportunity to move the posts into separate year directories for repository organisation.

## API Usage

One of the coolest parts of Gatsby is how it is fully setup for GraphQL, which is another new technology for me. It is safe to say that GraphQL is awesome, even though I only have some a basic usage under my belt right now the prospect of it is quite exciting. For this site it's used in my posts and two external APIs to pull in content for my homepage.

The two external APIs for this site are GitHub and GoodReads. I'm using [Github's GraphQL API](https://developer.github.com/v4/) to add links to the homepage by pulling in my top repositories and their descriptions. This is just the starting point, I'm hoping to update this soon display the projects I've pushed too recently. GoodReads is just a REST API call to fetch the book that I'm currently reading, and its author. Fascinating learning experience integrating both into my sites GraphQL setup. 

## Netlify Usage
 
I have used [Netlify](https://netlify.com) to host my site (and most of my small projects) since I discovered it back in 2018. With my move to Gatsby I've decided to make the most of the newer features they've introduced since I started. `gatsby-image` is used to load the various images via git LFS which keeps everything nice and tidy on the repository. The redirects are still implemented (almost entirely[^1]) using the `_redirects` file, are a real life saver. 

I am finally using the `netlify.toml` to store the build configuration instead of the site settings. This has allowed me to try different configuration options using branch preview deploys, quite handy for the migration itself.

## A good decision

It's been a fun few on/off months of development slowly migrating my site since June. Most of that time realistically was designing in the browser so not entirely technical time, and I've learnt a lot. Dare I say it, **I even might enjoy React development a little**. This wannabe Angular developer can now appreciate its appeal. Certainly a good start to using React. 

I also use [Google Cloud Scheduler](https://cloud.google.com/scheduler) (overkill I know) to trigger weekly build by sending a POST request to my [Netlify build webhook](https://docs.netlify.com/configure-builds/build-hooks). This is for off chance I don't work on my site for a week but something on my Github / GoodReads account changes, those changes will be updated at least each week. Because "we do what we must because we can".

You can take a look at this site's source on [GitHub](https://github.com/jamesrwilliams/personal-site).

[^1]: Cloudflare handles a few of my root domain redirects.  
