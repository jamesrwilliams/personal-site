importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js');

if (workbox) {

    workbox.precaching.precacheAndRoute([
  {
    "url": "appicons/128x128.png",
    "revision": "47e9bc34cfb419ead4330ba82ad3cfbd"
  },
  {
    "url": "appicons/144x144.png",
    "revision": "646ac6aa137cc6911bf5a7f69896db04"
  },
  {
    "url": "appicons/152x152.png",
    "revision": "de9911baae0b905bab1b73321a43ac91"
  },
  {
    "url": "appicons/192x192.png",
    "revision": "ec3d1f610a2371a169e9384f2d8d0595"
  },
  {
    "url": "appicons/256x256.png",
    "revision": "ba684a1a8b51080c22125100bbfe79f4"
  },
  {
    "url": "appicons/512x512.png",
    "revision": "06141443ede4f3f3c5a1ed9da5a0484e"
  },
  {
    "url": "favicon.ico",
    "revision": "01a00620dd7e67b73d0b5ce0616d9619"
  },
  {
    "url": "manifest.json",
    "revision": "36e09fa1526e69746411334273796042"
  },
  {
    "url": "profile.jpg",
    "revision": "75e7f94138cc035d13e8d887fc23d66e"
  },
  {
    "url": "pwabuilder-sw.js",
    "revision": "10cd8b3df0aadb303371d731badbf30d"
  },
  {
    "url": "robots.txt",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "scss/site.css",
    "revision": "bcce9e6ef6a1c48570cf383908651c60"
  },
  {
    "url": "index.html",
    "revision": "6c9ee8112adb9d31cb1919830912ff7c"
  },
  {
    "url": "offline/index.html",
    "revision": "2739f2db5bc59743bd5f38d543f69228"
  },
  {
    "url": "404.html",
    "revision": "083c272bfb7d66d27ecf2ccbcccb508c"
  }
]);

    const articleHandler = workbox.strategies.networkFirst({
        cacheName: 'articles-cache',
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
