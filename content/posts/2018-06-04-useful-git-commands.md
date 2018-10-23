---
title: Useful git commands
author: James W.
type: post
date: 2018-06-04T14:02:18+00:00
url: /2018/06/04/useful-git-commands/
categories:
  - Resources
tags:
  - bash
  - bitbucket
  - deployment
  - dvcs
  - git
  - github
  - ssh
  - terminal

---
This is a quick and dirty git Cheat Sheet if you will, of all the commands I frequently forget/need to use most often.

## See the remote {#see-the-remote}

I frequently mislabel project folders on my local and easily lose track of which remote each directory points to. The solution, this short git config command that shows me the remote URL:

<pre><code class="bash">git config --get remote.origin.url
</code></pre>

## Stop git tracking file permissions (chmod) {#stop-git-tracking-file-permissions-chmod}

Occasionally repositories bring with them their permissions that need to be updated on the remote. A nightmare when working with deploy keys as they&#8217;re one way. So set the following config rule to false to stop git from tracking file permissions / chmod changes.

    git config core.fileMode false

## Debug ssh/git authentication {#debug-ssh-git-authentication}

The following command runs an ssh test connection with the `-T` flag that tests an SSH connection to a remote. In this case, it tests the current account has the correct credentials to access BitBucket.

<pre><code class="bash">ssh -T git@bitbucket.org</code></pre>

## Find branches that have/not been merged yet {#find-branches-that-have-not-been-merged-yet}

Useful when cleaning out checked out branches from your machine. The last argument is the branch you want to check against, in our example its develop.

    git branch --no-merged develop

## Export the log as a file {#export-the-log-as-a-file}

Useful if you want to export a list of commits into a spreadsheet and do some analysis but personally only ever used this once.

    
    # Local Dates:
    git log --date=local --pretty=format:"%h%x09%an%x09%ad%x09%s" > commits.local.tsv.txt
    
    # ISO Dates:
    git log --date=iso --pretty=format:"%h%x09%an%x09%ad%x09%s" > commits.iso.tsv.txt
    
    # EXCEL
    git log --date=iso --pretty=format:'"%h","%an","%ad","%s"' > commits.excel.tsv.txt
    
    # Another date form
    git log --pretty=format:%h,%an,%ad,%s > commits.txt
    

##  {#}