---
title: A brief look at server firewalls with CSF files
type: post
date: 2018-06-11T10:00:24+00:00
---
In a sidestep from my usual day of producing WordPress themes and HTML emails, I had to do some, of what I&#8217;m calling, server management and exploring the new world of CSF files.

One of our clients recently had an issue leading me to learn about this, their internal network shares the name with their external website so their network has conflicts when people miss the www off URLs.

Today it triggered a brute-force protection rule within CSF when an employee tried to connect to their email using the wrong URL that blocked the website for their entire organisation&#8217;s network. The culprit? CSF, a piece of firewall software we have it installed on our range of dedicated machines at work.

CSF is a stateful packet inspection (SPI) firewall, login/intrusion detection and security application for Linux servers. Granted I&#8217;ve only had cPanel exposure to this but for my reference, these are the main files I need to worry about:

`csf.deny` = A system file that lists all the IPs currently blocked and a reason.

`csf.allow` = The flipside of IPs that are whitelisted for the server.

Read more about [CSF][1].

 [1]: https://configserver.com/cp/csf.html
