importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {

    // Does this reduce the cache size?
    // workbox.googleAnalytics.initialize();

    workbox.precaching.precacheAndRoute([
  {
    "url": "algolia.json",
    "revision": "e046211f7c37753abbc90ecccd939727"
  },
  {
    "url": "favicon.ico",
    "revision": "2ed31f3c0e47b0f259f8baf6b538746e"
  },
  {
    "url": "javascript/site.js",
    "revision": "d2fb9ba4be44ca1eae99ab8f3f4ef7bf"
  },
  {
    "url": "manifest.json",
    "revision": "59ac0f7a5ae70ddb41b1b434a829cf2c"
  },
  {
    "url": "sass/site.css",
    "revision": "3e1c790e7651a6278da47303bb2086b3"
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
    "url": "post-images/wheel-of-prizes_1.png",
    "revision": "346125b2b0b72e610dafd5ae486b3712"
  },
  {
    "url": "post-images/wheel-of-prizes_animation-example.gif",
    "revision": "8679cada7527258ff444759915279c23"
  },
  {
    "url": "post-images/wheel-of-prizes_center-issue.png",
    "revision": "273d5b3d04986a877089a09fb1d0022c"
  },
  {
    "url": "post-images/wheel-of-prizes_slice-effect.gif",
    "revision": "b23c58ec5e531707da3c647a1774196b"
  },
  {
    "url": "post-images/wheel-of-prizes_slice-structure.png",
    "revision": "60f94f89b95e06997b8c7e5fb0f4fa7b"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "fcf4328cb7778e14fdab2f8933e21632"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "24382a83d746d53fe3abf799bff69593"
  },
  {
    "url": "index.html",
    "revision": "f8d9fa120894fb7001274a53fe48b41f"
  },
  {
    "url": "offline/index.html",
    "revision": "73d9695f09baed9f5c18a8691f364cbd"
  },
  {
    "url": "404.html",
    "revision": "d4afa95479140edb4ccff743ec89f9bc"
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
