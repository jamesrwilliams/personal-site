# Personal website of James R. Williams

This is the source code for my personal website [https://jamesrwilliams.co.uk](https://jamesrwilliams.co.uk), and eventually it's `.ca` TLD replacement!
Built with the static site generator [Hugo](https://gohugo.io/) and using a custom made theme, that I might release sometime in the future as a stand alone project.  

![Deploys by Netlify](https://www.netlify.com/img/global/badges/netlify-color-bg.svg)

## PWA

This site uses WorkBox to generate it's service worker. This can be updated by editing the `archetypes/sw.js` or by using the `/workbox-config.js` file that is used by WorkBox to dynamically edit the `precacheAndRoute` array in the `sw.js` file.

To update this file run the update command via npm:

```javascript
npm run pwa
```
