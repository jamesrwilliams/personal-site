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
    "url": "manifest.json",
    "revision": "36e09fa1526e69746411334273796042"
  },
  {
    "url": "scss/site.css",
    "revision": "de78e096ac258b276d4beec9d6148d3f"
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
    "url": "index.html",
    "revision": "87b7c03776a36d9b76da0efc8bdd2377"
  },
  {
    "url": "offline/index.html",
    "revision": "2cf3b2d25aaa5d26644e9fdadd02edbf"
  },
  {
    "url": "404.html",
    "revision": "b8df8f18f5691a739cb9d51d80521d34"
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
