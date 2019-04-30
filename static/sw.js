importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {

    // Does this reduce the cache size?
    // workbox.googleAnalytics.initialize();

    workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.ico",
    "revision": "01a00620dd7e67b73d0b5ce0616d9619"
  },
  {
    "url": "manifest.json",
    "revision": "36e09fa1526e69746411334273796042"
  },
  {
    "url": "pwabuilder-sw.js",
    "revision": "10cd8b3df0aadb303371d731badbf30d"
  },
  {
    "url": "scss/site.css",
    "revision": "b68f86839bc04ff4d795bb5f602f50d8"
  },
  {
    "url": "post-images/encryption-graph.png",
    "revision": "c6908260325cfab5e564d6c2d501a53f"
  },
  {
    "url": "index.html",
    "revision": "7814a648dec904de38f1e5ab4b1633e4"
  },
  {
    "url": "offline/index.html",
    "revision": "5a0cb3a746139f7ad049679b2ff7b3b5"
  },
  {
    "url": "404.html",
    "revision": "b3f41fd9292b72ad6dc947caeece8e96"
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
