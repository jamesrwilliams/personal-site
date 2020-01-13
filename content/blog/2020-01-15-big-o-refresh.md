---
title: "A refresher on BigO notation"
date: 2020-01-08
draft: true
slug: 'refresher-on-big-o-notation'
---

I first ran through this at university where it was kinda brushed over with no real context for the how and why you'd do this so I decided to take another look at BigO to get a better understanding of it and how it will fit in with my day-to-day work as a developer. Now I am no expert in this so I may have missed some of the finer details but as a rough guide.

BigO is a way to convey complexity relationships in algorithms. Algorithmic efficiency. 

## Rules of Big O

- Different steps get added -
- Drop constants - O(2N) would be O(N), we're looking for only a rough relationship of the input to runtime, such as is it liner or quadratic.
- Different inputs ⇒ Different outputs
- Drop non-dominant terms

## An example

- `O` - you make one dish that everyone eats whether they like it or not. You follow one recipe from top to bottom, then serve (1 recipe). <-- How I grew up
- `O(n)` - you make individual dishes for each person. You follow a recipe from top to bottom for each person in your family (recipe times the number of people in your family).
- `O(n^2)` - you make individual dishes redundantly for every person. You follow all recipes for each person in your family (recipe times the number of people squared).
- `O(log n)` - you break people into groups according to what they want and make larger portions. You make one dish for each group (recipe times request)

Here is a great [summary video](https://www.youtube.com/watch?v=v4cd1O4zkGw) from HackRank which covers the basics nicely. 
