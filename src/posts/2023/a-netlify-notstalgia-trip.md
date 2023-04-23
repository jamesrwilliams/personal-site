---
title: A nostalgia trip with Netlify
date: 2023-03-31
---

I was recently clicking through Netlify's API docs while trying to debug a build issue when I 
noticed two fields on Netlify's 
[`getDeploy`](https://open-api.netlify.com/#tag/deploy/operation/getDeploy) endpoint, `permalink`
and `screenshot_url`. In the past I have made good use of their branch deploy and deploy preview 
features where your site gets a permalink that lets you visit your site at that exact snapshot. 
What I didn't realize was that it is the case for pretty much every deployment job you run on 
Netlify.

This got me thinking, can I fetch all my deployments then generate some kind of timeline of versions 
of this site through the years? **I sure can!** You can do the same by using 
the [`listSiteDeploys`](https://open-api.netlify.com/#tag/deploy/operation/listSiteDeploys) 
operation like so:

```bash
curl -H "User-Agent: MyApp (YOUR_NAME@EXAMPLE.COM)" \
     -H "Authorization: Bearer YOUR_OAUTH2_ACCESS_TOKEN" \
     https://api.netlify.com/api/v1/sites/{YOUR_SITE_ID}/deploys
```

Check out Netlify's [getting started](https://docs.netlify.com/api/get-started/#make-a-request) 
guide and the [API reference docs](https://open-api.netlify.com/) for how to set up your access 
token. A fun side-note, it seems Netlify is running partly [Firebase](https://firebase.google.com/), 
as their `log_access_attributes` contain `netlify.firebaseio.com` URLs...

## ~170 deploys in four years

After fetching the deployment information for every one of my ~170 builds on Netlify, and combining
it all into one JSON file, I started clicking through the deployment permalinks and screenshots for
a bit of nostalgia.

The best place to start is often the beginning, so here is my first automated Netlify deploy from 
Jan 21, 2019 at exactly `2019-01-21T22:30:33.942Z` around the time I landed in Canada before I got 
my first role at Points. Back my site was built on [Hugo](https://gohugo.io/), way before I switched
to Gatsby:

[![jamesrwilliams.ca](./images/netlify-notstalgia-trip/screenshot.png)](https://5c4647fbcebc70b0c51a8fc0--jamesrwilliams.netlify.app/)

Screenshots are all well and good but what makes this more interesting for me, is the fact I 
can visit the site at that point using the `permalink` and can explore the woeful state of my 
portfolio site back then!

https://5c4647fbcebc70b0c51a8fc0--jamesrwilliams.netlify.app/

I completed a bulk download of all the images and then for the few deploys that are 
missing a `screenshot_url` for whatever reason I tasked Cypress to visit them and download a few 
screenshots, but it is fair to say I've never been one for high quality web design:

![](./images/netlify-notstalgia-trip/screenshot_2021-05-13-00-16-23-0000.png)


Let me leave you with some personal highlights I've found so far:

| Date       | Snapshot link                                                                                                                |
|------------|------------------------------------------------------------------------------------------------------------------------------|
| 2019-01-21 | [Very first automated deploy](https://5c4647fbcebc70b0c51a8fc0--jamesrwilliams.netlify.app)                                  |
| 2020-02-20 | [Full circle, a lighter theme which looks very familiar](https://deploy-preview-23--jamesrwilliams.netlify.app)              |
| 2020-12-11 | [One of the first designs I incorporated GoodReads into](https://deploy-preview-33--jamesrwilliams.netlify.app)              | 
| 2021-04-06 | [James tries to be super modern with some angled hero design](https://6147409be4c4240007ffef36--jamesrwilliams.netlify.app/) | 
