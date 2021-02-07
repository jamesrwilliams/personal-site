---
title: Applied learnings from Gatsby and React
date: 2021-02-08
draft: true
slug: "applied-react-learnings"
---

In what now seems like an annual period of self-improvement and motivation, I took it upon myself to seriously update my personal site (again)! This time implementing some new tricks and processes I've picked up with now almost a year of React under my belt, and with maintaining a new Gatsby site production.

## TypeScript

TypeScript is the best, and the worst tool I've picked up recently. I am very guilty of just throwing an `any` type in to a variable that was causing TS to be angry at me, and promptly saying to myself I'll sort it later. The advantages of using TypeScript are immense for code quality and bug-avoidance, to that end, I've moved all my components into .tsx files to use this site as practice!

## Storybook

This is a little waste of time in the traditional use case for [Storybook](https://storybook.js.org/), but I set one up for this site as a reference and practice for myself.

## Tailwind

I've never had the opportunity to use this for anything in production but have heard mixed reviews over the internet about how awesome or terrible Tailwind is as a CSS solution. To better understand it I have rewritten (restyled if that is a word?) my entire site using Tailwind.

Now the performance benefits are sizeable. I've reduced my <mark>bundle size down by X</mark>, all by removing all of my old SCSS files and styled-components. The biggest drawback for me at the moment is probably my inexperience, the syntax takes a little getting used to, the Tailwind Docs was now a pinned tab during development but with a few hours of usage you start getting in the flow of how it works.

The biggest downside to its experience at the moment is the huge number of classes you end up using in your components and pages.

I'm also now using [`@tailwindcss/typography`](https://github.com/tailwindlabs/tailwindcss-typography) to greatly improve the typography of my posts and pages.

## Algolia

With the site now under a new coat of paint I wanted to make my posts search better. I use this to find my own notes on topics and things I've written so wanted to make the experience better by doing the following:

1. My Algolia GraphQL query in gatsby-config.js now excludes post drafts correctly. An awkward mistake I must say.

- Dug deeper into how the index works at a more detailed level. The index now has correct weightings orders by post publication date.

- Searches are passed to Google Analytics also to help me better understand what is being searched.
