---
title: Getting started with ssh config
author: James W.
type: post
date: 2018-08-21T10:42:37+00:00
draft: true
url: /?p=256
categories:
  - Resources
tags:
  - ssh
  - ssh-config
  - terminal

---
  * **System-wide OpenSSH config file client configuration** &#8211; `/etc/ssh/ssh_config` &#8211; This files set the default configuration for all users of OpenSSH clients on that desktop/laptop and it must be readable by all users on the system.
  * **User-specific OpenSSH file client configuration** &#8211; `~/.ssh/config` or `$HOME/.ssh/config` &#8211; This is user’s own configuration file which, overrides the settings in the global client configuration file, /etc/ssh/ssh_config.

### Edit the user-specific SSH config {#edit-the-user-specific-ssh-config}

`nano ~/.ssh/config`

So here is an example from my ssh config file. Here I&#8217;ve set up a personal key for my GitHub account.

    # Personal GitHub Account
    Host jameswilliams-GitHub
            HostName github.com
            User jameswilliams
            PreferredAuthentications publickey
            IdentityFile /Users/thejamesrwilliams/.ssh/gitHub_key