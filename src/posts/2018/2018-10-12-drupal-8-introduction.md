---
title: Drupal 8 introduction
date: 2018-10-12T08:30:49+00:00
aliases: [/2018/10/12/drupal-8-introduction/]
slug: "drupal-8-introduction"
---

I&#8217;ve started learning Drupal 8! We&#8217;ve branched out at [Silver Agency](https://silver.agency) with our technology stack, and alongside our migration to AWS and introduction of Docker, our new senior developer has started sharing some experience with the Drupal CMS. We have taken on a new client project rebuilding an internal intranet in it. As there is no better way to learn something than diving right in, here is a list of useful things I&#8217;ve learnt recently with Drupal. I&#8217;ll be updating this with more material as I progress but this is a start!

## Template Hierarchy

Drupal 8 uses the Twig templating engine, which is part of the <a href="http://symfony.com/" rel="nofollow">Symfony2 framework.</a> Similar to WordPress Drupal has a template hierarchy, however, it&#8217;s inheritance system is a little different. Drupal&#8217;s theme system works by having custom themes overriding the Drupal&#8217;s core template files. If you&#8217;re after a &#8220;show me the code&#8221; method for templating in Drupal 8, a good way to start working with Drupal templates is to do the following:

1. Locate the template you wish to override.
2. Copy the template file from its base location into your theme folder.
3. Modify the template to your liking.

## Twig

Out of the box, Drupal 8 supports Twig version 1.x. So worth noting when searching for documentation that we need v1.x, not the newer version 2.x.

### Turn on Twig debugging

A very useful feature of working out what templates Drupal is looking for when rendering pages is to enable the debugging options:

First we're going to need a `*.services.yml` file located in `web/sites` containing the following file:

```yml
# Local development services.
#
# To activate this feature, follow the instructions at the top of the
# 'example.settings.local.php' file, which sits next to this file.
parameters:
  http.response.debug_cacheability_headers: true
  twig.config:
    debug: true
    auto_reload: true
    cache: false
services:
  cache.backend.null:
    class: Drupal\Core\Cache\NullBackendFactory
```

Adding the config YML file to the settings area with the file name we selected for the above file:

```php
<?php
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';
```

Read more about how to enable Twig Debug mode via the [Drupal documentation][2].

### Types of Twig Tags

1. `{{ ... }}` = **Say** &#8211; Echo a variable or an expression result.
2. `{% ... %}` = **Do** &#8211; Assign a variable, conditionals, and loops.
3. `{# ... #}` = **Comment &#8211;** Comments and doc blocks.

### **Twig Functions in Drupal 8**

Twig has a set of internal functions that you can use to make life a bit easier. Things like the following:

- `debug()` &#8211; Debug the output of a template variable using the `{{ dump(foo) }}` tags. The [dump function][3] dumps information about a template variable. This is mostly useful to debug a template that does not behave as expected by introspecting its variables.

See the [Twig documentation][4] for more information on the native functions (ensuring you&#8217;re looking at the v1.x docs). In addition to the native Twig functions, there are specific ones added for use in Drupal 8. These include:

- `link($text, $uri, $attributes)` &#8211; This helper function accepts as the first parameter the text and as second parameter the URI.
- `path($name, $parameters, $options)` &#8211; This generates a relative URL path given a route name and parameters.

### Twig Filters

Similar to how they behave in angular, twig filters manipulate the content before the pipe character (&#8216;|&#8217;). Some useful examples of these are:

- _Translate_ &#8211; `{{ 'string' | t }}`
- _Clean Class_ &#8211; `{{ 'string' | clean_class }}`
- _Clean ID_ &#8211; `{{ 'string' | clean_id }}`
- _Join_ &#8211; `{{ [1, 2, 3]|join('|') }}`

Check out the [Twig documentation][5] for a full list of native filter options. You can also write your own custom filters for Twig, however, this is a little beyond my needs right now.

## Useful Resources

- [[YouTube] Theming with Twig in Drupal 8][6]
- [[Druapl Docs] Disable Drupal 8 caching during development][7]

[1]: https://silver.agency
[2]: https://www.drupal.org/docs/8/theming/twig/debugging-twig-templates
[3]: https://twig.symfony.com/doc/1.x/functions/dump.html
[4]: https://twig.symfony.com/doc/2.x/functions/index.html
[5]: https://twig.symfony.com/doc/1.x/
[6]: https://www.youtube.com/watch?v=S0oJGy4a65Q
[7]: https://www.drupal.org/node/2598914
