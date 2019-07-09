module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{ico,json,js,css}",
    "post-images/*.{png,jpg,gif}",
    "apple-touch-icon.png",
    "favicon-16x16.png",
    "index.html",
    "offline/index.html",
    "404.html"
  ],
  "swDest": "static/sw.js",
  "swSrc": "archetypes/sw.js"
};
