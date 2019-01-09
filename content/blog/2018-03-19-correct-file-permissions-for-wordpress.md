---
title: Correct file permissions for WordPress
type: post
date: 2018-03-19T09:38:47+00:00
draft: true
---
When you setup WP you (the webserver) may need write access to the files. So the access rights may need to be loose.

<pre class="lang-sh prettyprint prettyprinted"><code>&lt;span class="pln">chown www&lt;/span>&lt;span class="pun">-&lt;/span>&lt;span class="pln">data&lt;/span>&lt;span class="pun">:&lt;/span>&lt;span class="pln">www&lt;/span>&lt;span class="pun">-&lt;/span>&lt;span class="pln">data  &lt;/span>&lt;span class="pun">-&lt;/span>&lt;span class="pln">R &lt;/span>&lt;span class="pun">*&lt;/span> &lt;span class="com"># Let Apache be owner&lt;/span>&lt;span class="pln">
find &lt;/span>&lt;span class="pun">.&lt;/span> &lt;span class="pun">-&lt;/span>&lt;span class="pln">type d &lt;/span>&lt;span class="pun">-&lt;/span>&lt;span class="pln">exec chmod &lt;/span>&lt;span class="lit">755&lt;/span> &lt;span class="pun">{}&lt;/span>&lt;span class="pln"> \;  &lt;/span>&lt;span class="com"># Change directory permissions rwxr-xr-x&lt;/span>&lt;span class="pln">
find &lt;/span>&lt;span class="pun">.&lt;/span> &lt;span class="pun">-&lt;/span>&lt;span class="pln">type f &lt;/span>&lt;span class="pun">-&lt;/span>&lt;span class="pln">exec chmod &lt;/span>&lt;span class="lit">644&lt;/span> &lt;span class="pun">{}&lt;/span>&lt;span class="pln"> \;  &lt;/span>&lt;span class="com"># Change file permissions rw-r--r--&lt;/span></code></pre>

After the setup you should tighten the access rights, according to Hardening WordPress all files except for wp-content should be writable by your user account only. wp-content must be writable by www-data too.

    chown :  -R * # Let your useraccount be owner
    chown www-data:www-data wp-content # Let apache be owner of wp-content
