---
title: Expanding on my Google App Scripts text formatter
date: 2021-03-07
jira: "POST-33"
---

*This post is a follow up
to "[Programmatic text formatting in Google Sheets with Google Apps Script](/posts/programmatic-text-formatting-in-google-sheets)"*

Starting from where I left off in my last post, I had just started getting the basic bits and pieces wired together for
this. A few months on, I've built out the concept into a more maintainable project.

Nothing much has changed in the Google Apps Script, aside from it no longer ignoring blank cells. A lot of work has gone
into the internals of the Node JS based API it uses. I've nicknamed the API `loquor` meaning "I speak" in latin, as this
project originally was to be used for generating translation request files for our multi-lingual products.

I changed a few things to make unit tests a bit easier to work with, however the I/O hasn't
changed. It still accepts a string of values and returns indices of substrings that should be formatted by the Google
App Script. The API is generally more stable now, fully unit tested, and has had its internal logic broken into
["rule-sets"](https://github.com/jamesrwilliams/loquor/tree/master/lib/rules) to make maintenance a bit easier.

```js
const input = ["<p>Cat</p>", "{{ dog }}", "% Parrot %"];

const results = await fetch(
  `https://loquor.herokuapp.com/parse`,
  {
    'method': 'post', 'payload': {
      'entries': JSON.stringify(input)
    }
  }
)
.then(response => response.json())
.catch(error => console.log('error', error));

console.log(results);
// [ [[0,3],[6,10]], [[0,9]], [[0,10]] ]
```

Check it out and let me know what you think: https://github.com/jamesrwilliams/loquor/

## Next steps

With the basics finished it is time to polish this into something I can share with others, ideally as an out-of-the-box
service/solution. Here is a breakdown of what I want to work on next:

### 1. Set up options

I want to add UI element to show on the menu button trigger that lets users change some basic configuration before the
script processes their document. Things like the input/output ranges and even the API server endpoint. This would reduce
the need for me to edit the script file to make basic changes here and there. I currently only seem to edit it to change my
API URL and the input range length. I have a feeling a nice
native [dialog](https://developers.google.com/apps-script/guides/dialogs) would be a good solution for this.

### 2. Figure out distribution

The script is isolated to a single document currently, my test sheet. I will need to look into how to distribute this
script to a wider audience, starting with just our Google Org for now.

### 3. More complete testing

The API is fully unit tested, but I feel the need to expand the tests by testing it with the
most complex test cases we have available. The initial test found only two incorrect results which currently have
issues opened ([#6](https://github.com/jamesrwilliams/loquor/issues/6) & [#7](https://github.com/jamesrwilliams/loquor/issues/7)).
TDD is the future, and the future is now. Long term goal is to work out how to automate tests for the Google Apps
Script part.
