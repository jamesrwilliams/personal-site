---
title: Fetch domain information in the command line
date: 2018-07-02T12:07:51+00:00
aliases: [/2018/07/02/fetch-domain-information-with-the-command-line/]
slug: "fetch-domain-information-in-the-command-line"
---

Sometimes you need to fetch domain information on a domain to debug hosting/SSL etc. You can always use services such as MXToolbox to do this, however, there are a number of ways you can fetch domain information via the command-line. Here are a few commands you can use to do that.

## [dig][1]

The `dig` command is a tool for querying DNS nameservers for information about host addresses, mail exchanges, nameservers, and related information.

```bash
dig google.com any
```

## [host][3]

`host` is a simple utility for performing DNS look ups. It is normally used to convert names to IP addresses and vice versa. The -t option is used below select the query type, for example, `mx` for MX records and A records for, you guessed it, A records.

Get the a records for a domain: `host -t a google.com`

Get the a records for a domain:

```bash
host -t mx google.com
```

Get the name server records for a domain:

```bash
host -t ns google.com
```

Replace the `-t` flag with `-a` to get all of it in one go:

```bash
host -a google.com
```

## [whois][4]

`whois` searches for an object in a WHOIS database. WHOIS is a query and response protocol that is widely used for querying databases that store the registered users of an Internet resource. For example, a domain name or an IP address block but is also used for a wider range of other information.

```bash
whois google.com
```

The `-H` flag here hides the legal disclaimers some registries like to show you

[1]: https://linux.die.net/man/1/dig
[2]: https://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/07/carbon-1.png
[3]: https://linux.die.net/man/1/host
[4]: https://linux.die.net/man/1/whois
