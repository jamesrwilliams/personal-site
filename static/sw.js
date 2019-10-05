importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {

    // Does this reduce the cache size?
    // workbox.googleAnalytics.initialize();

    workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.ico",
    "revision": "33a2f904061f26f4755244b7bc2237ec"
  },
  {
    "url": "javascript/_particles.json",
    "revision": "9cfc87dcba5e19d74e8f7fe88eb571f3"
  },
  {
    "url": "javascript/particles.js",
    "revision": "f10f10368bb1407fe7a0b392952ee5ab"
  },
  {
    "url": "javascript/particles.json",
    "revision": "91fec080a82e652e18010b75a67d5100"
  },
  {
    "url": "manifest.json",
    "revision": "59ac0f7a5ae70ddb41b1b434a829cf2c"
  },
  {
    "url": "sass/site.css",
    "revision": "0e9fbef648a02b2f1c818745949d9d36"
  },
  {
    "url": "scss/site.css",
    "revision": "a490bea3dfbf75e4fcc85d50d682499b"
  },
  {
    "url": "post-images/_field-set-label-example.png",
    "revision": "83227d79bc6294a885fdde8d3456a0c1"
  },
  {
    "url": "post-images/automator-about.png",
    "revision": "f852abc189995f51d9a7a71aec8d9916"
  },
  {
    "url": "post-images/automator-configuration.png",
    "revision": "dfee18066b880cfe78046930517113c8"
  },
  {
    "url": "post-images/automator-copy-files-to-clipboard.png",
    "revision": "eee983ddfba528e7c26fe3034c49e6ff"
  },
  {
    "url": "post-images/automator-result.png",
    "revision": "e74a74da3044d2d90a7b93cd00ac66c2"
  },
  {
    "url": "post-images/console.stack-output.jpg",
    "revision": "b10b221f06930b0f8e374281ba166823"
  },
  {
    "url": "post-images/console.table-output.jpg",
    "revision": "55ce410a53992d64e88348b2b3575849"
  },
  {
    "url": "post-images/encryption-graph.png",
    "revision": "c6908260325cfab5e564d6c2d501a53f"
  },
  {
    "url": "post-images/field-set-label-approach.png",
    "revision": "6db00069ed39d897fe543c6d1e254848"
  },
  {
    "url": "post-images/field-set-label-example.png",
    "revision": "5e4e3a5721d272ea1283353e93da272f"
  },
  {
    "url": "post-images/field-set-label-guide-1.png",
    "revision": "b7f3a8c2de22c8e17e3b199da052f5d0"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "fcf4328cb7778e14fdab2f8933e21632"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "20c8b8e87e6a3d7dcf898fce3d349c53"
  },
  {
    "url": "index.html",
    "revision": "a222781cd944192bbf514b23adde197c"
  },
  {
    "url": "offline/index.html",
    "revision": "959d748079ca581bda955e2b3bb3151d"
  },
  {
    "url": "404.html",
    "revision": "b41c7fb6cbb62a677d5a3dc0828b3dda"
  }
]);

    const articleHandler = workbox.strategies.networkFirst({
        cacheName: 'posts-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
            })
        ]
    });

    workbox.routing.registerRoute(/\/blog\/*/, args => {
        return articleHandler.handle(args).then(response => {
            if (!response) {
                return caches.match('/offline/index.html');
            } else if (response.status === 404) {
                return caches.match('/404.html');
            }
            return response;
        });
    });

} else {
    console.log(`Boo! Workbox didn't load 😬`);
}
