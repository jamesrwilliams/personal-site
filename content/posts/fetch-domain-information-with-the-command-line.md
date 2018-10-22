---
title: "Fetch Domain Information With the Command Line"
date: 2018-07-02
tags: ['bash', 'command-line','dns','domains','terminal','whois']
---

Sometimes you need to fetch domain information on a domain to debug hosting/SSL etc. You can always use services such as MXToolbox to do this, however, there are a number of ways you can fetch domain information via the command-line. Here are a few commands you can use to do that.
<h2><a href="https://linux.die.net/man/1/dig">dig</a></h2>
The <code>dig</code> command is a tool for querying DNS nameservers for information about host addresses, mail exchanges, nameservers, and related information.
```bash
dig google.com any
```
<a href="https://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/07/carbon-1.png"><img class="size-large wp-image-272 alignnone" src="https://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/07/carbon-1-900x1024.png" alt="Example output from the dig command for google.com" width="900" height="1024" /></a>
<h2><a href="https://linux.die.net/man/1/host">host</a></h2>
<code>host</code> is a simple utility for performing DNS lookups. It is normally used to convert names to IP addresses and vice versa. The -t option is used below select the query type, for example, `mx` for MX records and A records for, you guessed it, A records.

Get the a records for a domain:
```bash
host –t a google.com
```
Get the a records for a domain:
```bash
host –t mx google.com
```
Get the nameserver records for a domain:
```bash
host –t ns google.com
```
Replace the <code>-t</code> flag with <code>-a</code> to get all of it in one go:
```bash
host –a google.com
```
<h2><a href="https://linux.die.net/man/1/whois">whois</a></h2>
<code>whois</code> searches for an object in a WHOIS database. WHOIS is a query and response protocol that is widely used for querying databases that store the registered users of an Internet resource. For example, a domain name or an IP address block but is also used for a wider range of other information.
```bash
whois -H google.com
```
The <code>-H</code> flag here hides the legal disclaimers some registries like to show you
