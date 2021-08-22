---
title: Sets in JavaScript 
date: 2021-04-04
jira: "POST-35"
---

I was getting to know a code base I'll be working with a lot more in my new role as a development engineer at Points the other week, and I came across something I'd never seen before, a `Set`. I initially thought it might be part of lodash or something similar, but no. It is a global object in Javascript, and I didn't know anything about it!

Sets are similar to Arrays but with a main difference, a value in a set, be that a primitive or object ref, can only occur once it in it's set (I like to think of it as an array that ignores duplicate insertions). Take this as a basic example:

```js
const fruit = new Set()
fruit.add('Apple')   // Set [ "Apple" ]
fruit.add('Apple')   // Set [ "Apple" ]
fruit.add('Pear')    // Set [ "Apple", "Pear" ]

fruit.size           // 2

fruit.has('Orange')  // false - Not in the set
fruit.has('Apple')   // true - Is in the set
fruit.delete('Pear') // true if deleted || false if not found

```

You can use the usual suspects when it comes to iteration methods too:

```js
for (let [key, fruit] of fruit.entries()) {
  console.log(fruit);
}
```

This has been part of the spec for years and has very solid [browser support](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#browser_compatibility). You can read more on the `Set` object, and a really comprehensive set of examples on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).
