---
title: Finding files by size with the command line
date: 2018-06-29T12:57:32+00:00
aliases: [/2018/06/29/finding-files-by-size-with-the-command-line/]
slug: "finding-files-by-size-with-the-command-line"
---

If you just need to find large files, you can use `find` with the `-size` option. The next command will list all files larger than 10 Megabytes:

```bash
find / -size +10M -ls
```

If you want to find files between a certain size, you can combine it with a size smaller than search. The next command finds files between 10MB and 12MB:

```bash
find / -size +10M -size -12M
```
