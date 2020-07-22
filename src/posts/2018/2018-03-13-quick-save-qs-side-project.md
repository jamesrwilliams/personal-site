---
title: Quick Save (QS) – Side project
date: 2018-03-13T08:40:40+00:00
aliases: [/2018/03/13/quick-save-qs-side-project/]
slug: "quick-save-side-project"
jira: POST-31
---

During a recent project exploring Javascript encryption, I added an auto-save feature for the form fields so I didn&#8217;t need to constantly repast RSA keys and other configs into the page. I have expanded this into its own library (my first). I used [Krasimir&#8217;s boilerplate][1] for the web pack config.

## Usage

To use it you just need to add a data attribute to the input elements and then the library will then save them to local storage and initialise them on page load for you. Small but mighty for this recent project and a fun exploration into building libraries. QuickSave uses the element type (i.e `input` or `textarea`) and the name attribute to generate a storage key for the data.

The library also features a few options for changing its behaviour including things like updating the target data attribute, specifying the storage between either local or session, and the prefix used.

## Links

- <https://github.com/jamesrwilliams/quick-save-forms>
- <https://github.com/krasimir/webpack-library-starter>

[1]: https://github.com/krasimir/webpack-library-starter
