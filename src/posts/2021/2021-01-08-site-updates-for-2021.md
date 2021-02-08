---
title: Site improvements and changes for 2021
date: 2021-02-08
slug: "site-updates-for-2021"
---

In what now seems like an annual period of self-improvement and motivation, I took it upon myself to seriously update my site again! This time implementing some new tricks and processes I've picked up, from almost a year of React, and a lot more experience in maintaining a Gatsby site in production.

## TypeScript

Typescript is awesome, and a little annoying at the same time. I am very much one of those developers who throw a concept together, ignore all but the simplest typings at first, throwing `any` into any type needed then go back later to tighten it up once I know my idea works. Not the best method but it works for me!

To help me become more disciplined in the art of typed JS I have moved (almost) all my site's components to TypeScript / `.tsx` files.

## Tailwind

I haven't yet had the opportunity to use [Tailwind](https://tailwindcss.com/) in a true production project, but having heard mixed reviews over the internet about how awesome, or how terrible Tailwind is as a solution, I decided to try it out here on this site.

Now in theory it's performance benefits are sizable, tree shakeable CSS sounds good, if it works, I don't think my site is big enough to make an assessment on its performance benefits. Even so, it hasn't turned me off using it completely. My concerns are twofold at the moment:

First, my new production builds are almost 65% slower than my previous average of `2m 42s`, we're now at `4m 26s` per build. I will be keeping an eye on this to see if it's something to do with the build cache on Netlify, hopefully it's not this bad. Performance wise my overall site bundle is now `~424KB`, down from `~492KB`, a modest shrink of `68KB`. I know there are a few tricks I can implement to the tailwind.config.js file to exclude features I don't use, but initially set off some alarm bells.

> Performance wise my overall site bundle is now `~424KB`, down from `~492KB`, a modest downsize of `68KB`.

Secondly is the sheer number of classes you end up using in your components and pages is somewhat alarming compared to my usual work. I think this is just a matter of me getting used to it. The syntax also takes a little getting used to however I can certainly see the attractiveness for larger, more substantial projects/applications.

I'm also now using [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography) to greatly improve the typography of my posts and pages. I've also changed up my syntax highlighting to use the same code theme, "material-oceanic" which I use in my editor:

```tsx
// Such color, very code.
const ooooahhhhh: React.FC = () => ( <span>So fancy</span> );
```

## Algolia

This site uses [Algolia](https://www.algolia.com) to index post content, and in an effort to make the experience better I've made a few changes:

1. The index is now only updated when the build script runs on Netlify (to avoid local builds updating the production site).

2. Post drafts are now excluded by default in gatsby-config.js now excludes post drafts correctly.

3. I've adjusted the index weightings and now ordered by post publication date.

4. Queries are now passed to Google Analytics (if enabled) to help me better understand what is being searched.

Due to limits on index record sizes, Algolia is currently only configured to index post their titles, excerpts and dates. My next challenge is to find out how I can index full markdown posts in Gatsby by indexing each paragraph individually to make the content more searchable.
