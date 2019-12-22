importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {

    // Does this reduce the cache size?
    // workbox.googleAnalytics.initialize();

    workbox.precaching.precacheAndRoute([
  {
    "url": "algolia.json",
    "revision": "b3206d37ed4557aa7506a99fd7b3a8f0"
  },
  {
    "url": "favicon.ico",
    "revision": "33a2f904061f26f4755244b7bc2237ec"
  },
  {
    "url": "manifest.json",
    "revision": "59ac0f7a5ae70ddb41b1b434a829cf2c"
  },
  {
    "url": "sass/site.css",
    "revision": "47c311668ca4c6a1d095b12f1b1dcbc3"
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
    "revision": "ef7bc6fce515080cf3c53f835bcbf729"
  },
  {
    "url": "offline/index.html",
    "revision": "3d09c58f82e0ca009b7e27ab6bb8a367"
  },
  {
    "url": "404.html",
    "revision": "9bdd923281b1be94765c43829de0ba93"
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
