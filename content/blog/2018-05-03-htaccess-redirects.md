---
title: htaccess redirects scratchpad
date: 2017-02-27T19:20:00-05:00
---
Redirects are a frequent request for me during my working day. Clients moving their sites around, sandbox projects changing domains and other such reasons often call for legacy URLs to be handled with care. While using `.htaccess` files slows down your Apache http server, I personally don&#8217;t know enough (yet) about `httpd` config to use that instead. So enter my .htaccess redirect scratchpad:

## General Redirects {#general-redirects}

### Enforce a trailing slash {#enforce-a-trailing-slash}

Problems can occur where links appear in analytics from URLs with both a slash and not. A quick way to rectify is to enforce a trailing slash. [Google treats these URLs the same][1] as each other as long as there isn&#8217;t duplicate content.
```bash
RewriteCond %{REQUEST_URI} /+[^\.]+$
RewriteRule ^(.+[^/])$ %{REQUEST_URI}/ [R=301,L]
```
### Redirect root domain {#redirect-root-domain}

This will redirect (301) the entire domain while preserving the path:
```bash
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} !new-example.com$ [NC]
RewriteRule ^(.*)$ http://new-example.com/$1 [L,R=301]
```
### Wildcard domain to single URL {#wildcard-domain-to-single-url}

Recently had a client close down their site to merge it into another. SEO impact aside I redirected all pages to a specific URL using the following snippet:
```bash
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ http://%1/$1 [R=301,L]
RewriteRule ^(.*)$ http://{website URL} [R=301]
```
## WordPress htaccess redirects {#wordpress-htaccess-redirects}

You can often still experience redirect loops when using `Apache http->https` rewrite behind load balancer / CDN (like [Cloudflare][2]). In amongst the other SSL tricks for WordPress using this HTAccess code has worked wonders for me:
```bash
RewriteEngine On
RewriteCond %{HTTP:X-Forwarded-Proto} !https
RewriteRule .* https://%{HTTP_HOST}%{REQUEST_URI} [R,L]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
```
 [1]: https://webmasters.googleblog.com/2010/04/to-slash-or-not-to-slash.html
 [2]: https://www.cloudflare.com/
