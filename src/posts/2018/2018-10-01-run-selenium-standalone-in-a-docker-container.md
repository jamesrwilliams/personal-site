---
title: Run Selenium Standalone in a Docker container
date: 2018-10-01
aliases: [/2018/10/01/run-selenium-standalone-in-a-docker-container/]
slug: "run-selenium-standalone-in-a-docker-container"
---

Why run selenium normally when you can run it inside a Docker container!

```bash
docker run -it -p 4444:4444 vvoyer/selenium-standalone
```

Probably want to add `-d` if you don&#8217;t want a terminal occupied with selenium though, or you could `CTRL+C` and shut it down when not needed.
