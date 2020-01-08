---
title: "A start to my General Transit Feed Specification project: GTFS to SQL"
date: 2019-07-09T11:16:35-04:00
---

I've recently came across [General Transit Feed Specification (GTFS)](https://developers.google.com/transit/gtfs/) files when looking for a way to build my own version of [Go Transit](https://www.gotransit.com/)'s (terrible) website to look at train times. Turns out these are dense information files which are next to impossible to be understood in their RAW format by a human.

Well on a tangent from my original goal I needed a way to load these files into an SQL DB to look at and query. So here this it is a simple SQL file that imports the GTFS files into a SQL database: [jamesrwilliams/gtfs-to-sql](https://github.com/jamesrwilliams/gtfs-to-sql).

## But what are GTFS files?

GTFS files define a common format for public transportation schedules and associated geographic information. These files help display public transit information on Google Maps for example and are produced by transit authorities and consumed by anyone who wants to integrate this information. There are two versions of GTFS however the static one (the one I'm looking at here) and the Realtime variant which offer real-time data updates for transit services.

## Sidenote: Using MAMP SQL via the command line

I use MAMP on my local machine for SQL and server things, along with the fact I've never gotten on very well with `mysql` directly on the command line. Using this script with a MAMP version of mysql however is as simple as prefixing the regular command with the bin path from MAMP. So this:

```bash
cat load.sql | mysql -p -u root
```

Turns into this MAMP friendly SQL command:

```bash
cat load.sql | /Applications/MAMP/Library/bin/mysql --host=localhost -uroot -proot
```


