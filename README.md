# Personal website of James R. Williams

[![Netlify Status](https://api.netlify.com/api/v1/badges/7fc57b18-f2ef-4fc0-9d79-ab5d5287b0fb/deploy-status)](https://app.netlify.com/sites/jamesrwilliams-site/deploys)

This is the source code for my personal website, and it's former `.co.uk` form.

- Built with the static site generator [Hugo](https://gohugo.io/) and using a custom made theme.
- Is a progressive web app though a [WorkBox](https://developers.google.com/web/tools/workbox/) generated Service worker,
- Deployed via [Netlify](https://www.netlify.com/).

## PWA with WorkBox

This site uses [WorkBox](https://developers.google.com/web/tools/workbox) to generate it's service worker. 

This can be updated by editing the `archetypes/sw.js` or by using the `/workbox-config.js` file that is used by WorkBox to dynamically edit the `precacheAndRoute` array in the exported `sw.js` file.

To update this file once you've made changes, run the update command via npm:

```javascript
npm run pwa
```
