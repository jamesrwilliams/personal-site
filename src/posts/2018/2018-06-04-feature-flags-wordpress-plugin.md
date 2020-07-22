---
title: Feature Flags WordPress Plugin
date: 2018-06-04T09:08:01+00:00
aliases: [/2018/06/04/feature-flags-wordpress-plugin/]
slug: "feature-flags-wordpress-plugin"
---

I recently came across a new technique release technique while watching a YouTube video on [Netflix&#8217;s DevOps][1]. This new thing: Feature flags.

A 'feature flag' (or feature toggle) is the ability to turn features of your application on/off. These toggles can be enabled using a configuration file or a UI of some description.

I use feature branches for both my professional projects and my personal ones. Visibility seems to be an issue with feature branches. At work, we tend to leave our feature branches &#8220;in review&#8221; quite a lot.

Problems arise as soon as we&#8217;re working on two features at once. We are switching active branches to show a feature in need of review throughout the day. A byproduct of only having one staging environment. They are great for developers but when it comes to client review, not so much.

## Moving from releases to features

Focusing on features instead of releases empowers users to enable features themselves. Alongside, if anything starts to misbehave in production, we can turn it off.

Now I know you should have tests in place for never allowing that sort of thing to happen. I/we don&#8217;t (yet). This would also allow us to test our new features on production with selected users. So how to integrate with an existing WordPress site? Plugins!

## My Plugin

As I explored this area more, I decided to try developing my own feature flags plugin. Introducing [Feature flags][2] for WordPress. This plugin offers a standard method to declare and check for feature flag status. Users are also able to enable and disable features themselves using the admin page. Check it out on [GitHub][2], I have a few feature ideas depending on how useful it is to me. I&#8217;m interested in seeing how I can integrate it to work with Google Analytics A/B testing system.

[1]: https://youtu.be/UTKIT6STSVM
[2]: https://github.com/jamesrwilliams/feature-flags
