---
title: "Run Selenium Standalone in a docker container"
date: 2018-10-01
---

Why run selenium normally when you can run it inside a docker container!
{{< highlight bash >}}
docker run -it -p 4444:4444 vvoyer/selenium-standalone
{{< /highlight >}}
Probably want to add `-d` if you don't want a terminal occupied with selenium though, or you could `CTRL+C` and shut it down when not needed.
