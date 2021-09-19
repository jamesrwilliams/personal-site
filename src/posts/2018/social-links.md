---
title: Social Links
date: 2018-03-20T10:25:21+00:00
aliases: [/2018/03/20/social-links/]
---

Let&#8217;s do away with large script includes for share buttons. URL share intents are much better:

### Twitter

Twitter docs for [Web Intents](https://developer.twitter.com/en/docs/twitter-for-websites/web-intents/overview).

```html
<!-- Twitter (URL, Text, @mention) -->
https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]
```

### Pinterest

Pinterest documentation for [share widgets](https://developers.pinterest.com/docs/widgets/save/).

```
https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
```

### Buffer

```
https://bufferapp.com/add?text=[post-title]&url=[post-url]
```

### Tumblr

```
https://www.tumblr.com/share/link?url=[post-url]&name=[post-title]&description=[post-desc]
```

### Pocket

Share to [Pocket](https://getpocket.com/) via a link.

```
https://getpocket.com/save?url=[post-url]&title=[post-title]
```

### Facebook

```
https://www.facebook.com/sharer.php?u=[post-url]
```

### Reddit

```
https://reddit.com/submit?url=[post-url]&title=[post-title]
```

### LinkedIn

```
https://www.linkedin.com/shareArticle?url=<URL>&title=<TITLE>&summary=<SUMMARY>&source=<SOURCE_URL>
```

## Using with WordPress

Inside the current page/post loop you can use a combination of WordPress functions [`the_permalink()`](https://developer.wordpress.org/reference/functions/the_permalink/) for the permalink, [`the_title()`](https://developer.wordpress.org/reference/functions/the_title/) for the title, and [`the_excerpt()`](https://developer.wordpress.org/reference/functions/the_excerpt/) and create social share links. For example a LinkedIn share: 

```php
$link = 'https://www.linkedin.com/shareArticle?url=' + the_permalink() + '&title=' + the_title() 
+ '&summary=' + the_excerpt();
<a href="<?php echo $link ?>">Share on Linked In</a>
```

## Simple SVG Social icons

Using `svg` icons from [Simple Icons](https://github.com/simple-icons/simple-icons).

```html
<a target="_blank" href="https://twitter.com/home?status=">
  <svg
    class="social-icon-twitter"
    aria-labelledby="simpleicons-twitter-icon"
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title id="simpleicons-twitter-icon">Twitter icon</title>
    <path
      d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
    />
  </svg>
</a>
```

