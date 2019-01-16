---
title: Useful git commands
type: post
date: 2018-06-04T14:02:18+00:00
aliases: [/2018/06/04/useful-git-commands/]
---
This is a quick and dirty git Cheat Sheet if you will, of all the commands I frequently forget/need to use most often.

## See the remote {#see-the-remote}

I frequently mislabel project folders on my local and easily lose track of which remote each directory points to. The solution, this short git config command that shows me the remote URL:

```bash
git config --get remote.origin.url
```

Another way you can do this is open the git config file in a text editor like Nano or VIM. The config file can be found within the `.git` directory at the root of your project:

```bash
nano .git/config
```

The output of which would look something like this (example taken from the Hugo static site generator documentation repository):

```yaml
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
[remote "origin"]
        url = https://github.com/gohugoio/hugoDocs.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
        remote = origin
        merge = refs/heads/master
```

## Stop git tracking file permissions (chmod) {#stop-git-tracking-file-permissions-chmod}

Occasionally repositories bring with them their permissions that need to be updated on the remote. A nightmare when working with deploy keys as they're one way. So set the following config rule to false to stop git from tracking file permissions / chmod changes.
```bash
git config core.fileMode false
```
## Debug ssh/git authentication {#debug-ssh-git-authentication}

The following command runs an ssh test connection with the `-T` flag that tests an SSH connection to a remote. In this case, it tests the current account has the correct credentials to access BitBucket.

```bash
ssh -T git@bitbucket.org
```

## Find branches that have/not been merged yet

Useful when cleaning out checked out branches from your machine. The last argument is the branch you want to check against, in our example its develop.

```bash
git branch --no-merged develop
```

## Export the log as a file

Useful if you want to export a list of commits into a spreadsheet and do some analysis but personally only ever used this once. 

```bash
# Local Dates:
git log --date=local > commits.txt
```

### Changing the output

You can expand this export feature by using the `--pretty=format` argument: 

```bash
# ISO Dates:
git log --date=iso --pretty=format:"%h%x09%an%x09%ad%x09%s" > commits.iso.tsv.txt
```

### Make a spreadsheet
Nothing too special here just exports the data fields in a TSV format so you can open them in the spreadsheet software of your choice. 
```bash
git log --date=iso --pretty=format:'"%h","%an","%ad","%s"' > commits.excel.tsv.txt
```

```bash
# Another date form
git log --pretty=format:%h,%an,%ad,%s > commits.txt
 ```
