---
title: "Drupal 8 Introduction"
date: 2018-10-12
draft: false
tags: ["drupal", "php", "twig"]
---

I've started learning Drupal 8! We've branched out at <a href="https://silver.agency">Silver Agency</a> with our technology stack, and alongside our migration to AWS and introduction of Docker, our new senior developer has started sharing some experience with the Drupal CMS. We have taken on a new client project rebuilding an internal intranet in it. As there is no better way to learn something than diving right in, here is a list of useful things I've learnt recently with Drupal. I'll be updating this with more material as I progress but this is a start!

## Template Hierarchy

Drupal 8 uses the Twig templating engine, which is part of the <a href="http://symfony.com/" rel="nofollow">Symfony2 framework.</a> Similar to WordPress Drupal has a template hierarchy, however, it's inheritance system is a little different. Drupal's theme system works by having custom themes overriding the Drupal's core template files. If you're after a "show me the code" method for templating in Drupal 8, a good way to start working with Drupal templates is to do the following:

1. Locate the template you wish to override.
2. Copy the template file from its base location into your theme folder.
3. Modify the template to your liking.

## Twig
Out of the box, Drupal 8 supports Twig version 1.x. So worth noting when searching for documentation that we need v1.x, not the newer version 2.x.

### Turn on Twig debugging

A very useful feature of working out what templates Drupal is looking for when rendering pages is to enable the debugging options:

First we're going to need a `*.services.yml` file located in `web/sites` containing the following file:
{{< highlight yml >}}
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
{{< /highlight >}}

Adding the config YML file to the settings area with the file name we selected for the above file:
`$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';`
Read more about how to enable Twig Debug mode via the <a href="https://www.drupal.org/docs/8/theming/twig/debugging-twig-templates">Drupal documentation</a>.

### Types of Twig Tags

<ol>
 	<li><code>{{ ... }}</code> = <strong>Say</strong> - Echo a variable or an expression result.</li>
 	<li><code>{% ... %}</code> = <strong>Do</strong> - Assign a variable, conditionals, and loops.</li>
 	<li><code>{# ... #}</code> = <strong>Comment - </strong>Comments and doc blocks.</li>
</ol>
<h3><strong>Twig Functions in Drupal 8</strong></h3>
Twig has a set of internal functions that you can use to make life a bit easier. Things like the following:
<ul>
 	<li><code>debug()</code> - Debug the output of a template variable using the <code>{{ dump(foo) }}</code> tags. The <a href="https://twig.symfony.com/doc/1.x/functions/dump.html">dump function</a> dumps information about a template variable. This is mostly useful to debug a template that does not behave as expected by introspecting its variables.</li>
</ul>
See the <a href="https://twig.symfony.com/doc/2.x/functions/index.html">Twig documentation</a> for more information on the native functions (ensuring you're looking at the v1.x docs). In addition to the native Twig functions, there are specific ones added for use in Drupal 8. These include:
<ul>
 	<li><code>link($text, $uri, $attributes)</code> - This helper function accepts as the first parameter the text and as second parameter the URI.</li>
 	<li><code>path($name, $parameters, $options)</code> - This generates a relative URL path given a route name and parameters.</li>
</ul>
<h3>Twig Filters</h3>
Similar to how they behave in angular, twig filters manipulate the content before the pipe character ('|'). Some useful examples of these are:
<ul>
 	<li><em>Translate</em> - <code>{{ 'string' | t }}</code></li>
 	<li><em>Clean Class</em> - <code>{{ 'string' | clean_class }}</code></li>
 	<li><em>Clean ID</em> - <code>{{ 'string' | clean_id }}</code></li>
 	<li><em>Join</em> - <code>{{ [1, 2, 3]|join('|') }}</code></li>
</ul>
Check out the <a href="https://twig.symfony.com/doc/1.x/">Twig documentation</a> for a full list of native filter options. You can also write your own custom filters for Twig, however, this is a little beyond my needs right now.
<h2>Useful Resources</h2>
<ul>
 	<li><a href="https://www.youtube.com/watch?v=S0oJGy4a65Q">[YouTube] Theming with Twig in Drupal 8</a></li>
 	<li><a href="https://www.drupal.org/node/2598914">[Druapl Docs] Disable Drupal 8 caching during development</a></li>
</ul>
