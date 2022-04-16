---
date: 2022-04-12
title: Displaying a progress bar for a series of promises
---

Promises are awesome. They make dealing with asynchronous operations in JavaScript a breeze 
without having to visit or even think about call-back hell. One thing I have often wanted to 
do is display a progress update for a series of Promises to the UI, not the progress of an 
individual promise more displaying progress of a set of promises as a whole. Something to 
display a batch of REST requests to a service to keep track of multiple operations or just a series. 

Granted this is an unorthodox situation, which you'd normally just use an indeterminate spinner for 
rather than a progress bar. Questions aside how would we display the progress of an array of 
__`(N)`__ promises to the user?

Typically, you'll be waiting for a collection of promises to end by using something like `Promise.
all()` which by design wraps a collection of promises in another that resolves once _all_ of them 
are complete and resolved. How can we hijack this a little to get a count of the current status of a 
promise? Yes indeed!

For testing, we'll write a quick function to generate a resolving promise to help us test:

```javascript
function getLongRunningPromise (ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms)
  });
}
```

Now using this function we can set-up our `Promise.all` block to capture complete progress, but 
instead of just passing the promises array, we're going to pass a slightly adjusted line of 
promises that have been mapped adding our `handleProgress` function in the `then` block.

```javascript
// Our set of promises we want to show progress for
const promises = [
  getLongRunningPromise(5000, 'a'),
  getLongRunningPromise(1000, 'b'),
  getLongRunningPromise(10000, 'c'),
];

// This is the magic line where we map 
// each promise to a new `then` handler.
const promiseTick = promises.map(p => p.then(handleProgress));

// While still passing all the promises back to `Promise.all`
Promise.all(promiseTick)
  .then((results) => {
    handleComplete(results);
  });
```

Any here is a more full example, wrapped in an outer function to scope the `doneCount` variables.

```js
const run = (promisesArray) => {

  let doneCount = 0;
  const overallCount = promisesArray.length;

  const handleProgress = (result) => {
    doneCount++;
    const percentageDone = Math.round(doneCount / overallCount * 100);
    return result;
  };

  const handleComplete = (results) => {
    console.log('DONE');
  }
  
  Promise.all(promisesArray.map(p => p.then(handleProgress)))
    .then((results) => {
      handleComplete(results);
    });
}
```

The `promise.map(p => p.then(handleProgress)` is what adds a promise `then` listener 
to each promise in our array which we can use to do something after each promise completes 
without interrupting the main flow of the core `Promise.all` block which will complete if/when 
all the promises resolve acting as out "complete" call-back.

## Handling errors

The astute readers of the above will notice a large flaw in this approach. Using `Promise.
all` will make our script reject as soon as one of our Promises in the provided array rejects.
If you are looking to not terminate the entire loading system you can use `Promise.allSettled` 
that will resolve as soon as all the promises have either been fulfilled or rejected, allowing 
you to continue the logic as required.

## Demo

I've spun up a full demo which is available via this 
[CodePen](https://codepen.io/jamesrwilliams/full/GRyBQze) which expands on this additional 
Promise map idea and adds a bit of CSS and HTML to generate a progress bar.
