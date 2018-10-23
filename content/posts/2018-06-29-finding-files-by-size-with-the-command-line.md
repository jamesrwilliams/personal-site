---
title: Finding files by size with the command line
author: James W.
type: post
date: 2018-06-29T12:57:32+00:00
url: /2018/06/29/finding-files-by-size-with-the-command-line/
categories:
  - Resources
tags:
  - bash
  - terminal

---
If you just need to find large files, you can use `find` with the `-size` option. The next command will list all files larger than 10MiB:

    find / -size +10M -ls
    

If you want to find files between a certain size, you can combine it with a &#8220;size lower than&#8221; search. The next command finds files between 10MiB and 12MiB:

    find / -size +10M -size -12M -ls
