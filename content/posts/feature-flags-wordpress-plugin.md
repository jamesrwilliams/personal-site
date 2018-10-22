---
title: "Feature Flags WordPress Plugin"
date: 2018-06-04
tags: ["feature-flags", "release-management", "wordpress", "wordpress-plugin"]
---

I recently came across a new technique release technique while watching a YouTube video on Netflix's DevOps. This new thing: **Feature flags**.

{{< youtube UTKIT6STSVM >}}

A 'feature flag' (or feature toggle) is the ability to turn features of your application on/off. These toggles can be enabled using a configuration file or a UI of some description.

I use feature branches for both my professional projects and my personal ones. Visibility seems to be an issue with feature branches. At work, we tend to leave our feature branches "in review" quite a lot.

Problems arise as soon as we're working on two features at once. We are switching active branches to show a feature in need of review throughout the day. A byproduct of only having one staging environment. They are great for developers but when it comes to client review, not so much.

## Moving from releases to features

Focusing on features instead of releases empowers users to enable features themselves. Alongside, if anything starts to misbehave in production, we can turn it off.

Now I know you should have tests in place for never allowing that sort of thing to happen. I/we don't (yet). This would also allow us to test our new features on production with selected users. So how to integrate with an existing WordPress site? Plugins!

## My Plugin

As I explored this area more, I decided to try developing my own feature flags plugin. Introducing <a href="https://github.com/jamesrwilliams/feature-flags">Feature flags</a> for WordPress. This plugin offers a standard method to declare and check for feature flag status. Users are also able to enable and disable features themselves using the admin page. Check it out on <a href="https://github.com/jamesrwilliams/feature-flags">GitHub</a>, I have a few feature ideas depending on how useful it is to me. I'm interested in seeing how I can integrate it to work with Google Analytics A/B testing system.
