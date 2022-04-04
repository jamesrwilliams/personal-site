---
title: Lightweight templated pages with Alpine.js
date: 2022-04-04
---

[Alpine.js](https://alpinejs.dev/) is a super lightweight (15.04 KB) JavaScript framework that adds
some basic interactivity and templating behavior all via HTML attributes. It helps with templating
pages with data, like looping, toggles etc. all with a minimal markup based setup.

Simply adding the script to your HTML page's `<head />` to start using Alpine, and you're ready 
to go! The following is a basic example of Alpine's features where we're setting a button that 
sets the variable `open` to true when clicked, which also shows a `span` element.  

```html
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
<!-- ... --->
<div x-data="{ open: false }">
    <button @click="open = !open">Toggle</button>
    <span x-show="open" x-transition>Content...</span>
</div>
```

We're also using the `x-transtiion` directive here that applies a fade transition the revealing 
element.

## Templating

What I find super powerful with Alpine is the ability to template pages based on a JSON object. 
Say we have an object we need to display on a page. We can use the
[`x-for`](https://alpinejs.dev/directives/for) directive to loop over the data and insert it 
into the document, making use of the HTML template:

```html
<div x-data="{ animals: ['cat', 'dog', 'parrot'] }">
  <template x-for="animal in animals">
    <li x-text="animal"></li>
  </template>
</div>
```

First we are setting the `x-data` attribute to our data set, this scopes the data to the child 
nodes, but you can scope additional `x-data` things in the nested children if you need. Check out 
the [`x-data#scope`](https://alpinejs.dev/directives/data#scope) docs for more info on the behavior
of scoped data in Alpine.

## Display data using `fetch`

In the following example we grab some data from the [Star Wars API](https://swapi.dev/) then 
just iterate over the results. The `x-data` property initializes our instance, where we set up 
some basic data scaffold we will use later, mainly the planets array we're going to populate in 
a second with the data from our API call.

Second we use the `x-init` property to execute some javascript during the initialization phase 
of Alpine, with a fetch call we then unpack the response and assign our planets array.

```html
<div x-data="alpineInstance()"
     x-init="fetch('https://swapi.dev/api/planets')
          .then(response => response.json())
          .then(data => planets = data.results)">
    <h1 x-text="title"></h1>
    <p x-html="intro"></p>
    
    <template x-for="planet in planets">
        <li x-text="planet.name"></li>
    </template>
</div>
<script>
  function alpineInstance() {
    return {
      title: 'Alpine.js',
      intro:
        'Implement a simple <code>fetch()</code> request to render a list of items using Alpine.js.',
      planets: [],
    }
  }
</script>
```

There is a lot more to Alpine than these basic templating, there are a full suite of directives 
and even some plugins to expand what you can do with Alpine. You can check out the full 
directive list and more on the [Alpine documentation](https://alpinejs.dev/start-here). I also 
put together a quick demo of some features on this
[CodePen](https://codepen.io/jamesrwilliams/pen/BaJJoXX).
