module.exports = {
  "globDirectory": "public/",
  "globPatterns": [
    "**/*.{ico,json,js,css}",
    "post-images/*.{png,jpg,gif}",
    "index.html",
    "offline/index.html",
    "404.html"
  ],
  "swDest": "static/sw.js",
  "swSrc": "archetypes/sw.js"
};
