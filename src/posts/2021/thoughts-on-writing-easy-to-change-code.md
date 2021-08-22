---
title: Thoughts on writing easy to change code
date: 2021-06-12
draft: true
---

This is your second most important part of your job: writing easy to change code. The most important? Ship products.

I recently came across this WWDC 2017 talk from [Ken Kocienda](https://twitter.com/kocienda) on [writing Easy to change code](https://developer.apple.com/videos/play/wwdc2011/112/) which in its 57 minutes puts across some great points for humanised development. Now these things are not just about change code, but code for humans. Code that is easy to read, learn, understand, maintain, and change.

Even if you're writing you or for others, even if that other is just you in six months time.

I guess this approach can occasionally be misconstrued as over-engineering or violating the rules of the KISS principle. But I like any attempt to make my own code look less like hieroglyphics to myself let alone others after a few weeks.

## Style

- **Clarity** - Clear code is easy to change.
  
- **Good Names** - Names should be descriptive for everything, boolean values, classes and methods.
- **Common Idioms** - Read and understand quickly what the whole scope is doing. Think about design patterns. Idioms communicate at a high level. "FooDelegate" already passes some meaning onto the reader about what this code is trying to do.
- **Each bug fix should tell a story** - why this code change fixes the bug. Tell someone before you code the fix. Explaining the fix and approach will make you think more clearly about the issue. Writing this into the bug tracker will help keep this knowledge available and helps anticipate other issues.
- **Laziness** - Lazy initialization of software is a good thing.

- **Code conventions** 

A great example of this is 

## Stories

- Why do you have bugs? Step 1 Think! Tell a story about your bug fix, to your neighbour, your rubber duck, your bug tracker, or at your code review!

- Bug fixes are about anticipating more and understanding your software more.

## Topics

- Style
- Stories
- Laziness
- Hygiene
- Notifications
- Optimization
- Dependencies
- Mixing
- Expectations



## Code hygiene

If you make the mess, you clean it up.
Do not throw away code, refactor! Keep the same code

- Cruft?

- "The most effective debugging tool is still careful thought, coupled with judiciously placed print statements" - Brian Kernighan

I was watching Andy Harris' "How To Begin Thinking Like a Programmer" talk from IndyPy 2017, no idea how I landed on this talk but I did. Anyway in this talk he talks through a nifty way to improve the readability of your while loops all by using a clearly boolean-esc variable name as the sentry of a while loop.

Simply put he ensures to use a Boolean-like variable that to make reading the whole loop much easier. This abstracts our the whole logic so reading.

Essentially using a Boolean sentry in the while loop makes the whole thing easier to read.

To start with the things that make up loops seem to have real names:

The bit that lives at the top of the while loop, that controls it’s operation is called the/a “sentry”.

## While Loops

Andy’s idea is to keep the code readable by keeping the sentry a boolean named `keep_going` it clearly defines what the action is going to be when the loops cycles and when if you need to change it.

```js
while( keep_going ) { /* ... */ }
```

And then changing it to make it stop you need to reassign keep_going to something like false that reads nicely: `keep_going = false;`. So while keeping complex loop logic in while loops may be super impressive and efficient for `x`,`y`, and `z`. But if you sacrifice readability you haven’t really saved anyone anything.

> Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it? (Brian Kernighan)


[“How To Begin Thinking Like a Programmer" @ IndyPy 2017, via YouTube](https://youtu.be/YWwBhjQN-Qw?t=3105)
