---
title: Getting started with SSH config
type: post
date: 2018-08-21T10:42:37+00:00
---

This is rough personal reference for getting myself setup correctly for using SSH keys with git. Nothing worse than trying to git pull and it asks you for your password each time. First off, there are two files where SSH is configured depending on the scope you want to effect:

* **System-wide OpenSSH config file client configuration** &#8211; `/etc/ssh/ssh_config` &#8211; This files set the default configuration for all users of OpenSSH clients on that desktop/laptop and it must be readable by all users on the system.
* **User-specific OpenSSH file client configuration** &#8211; `~/.ssh/config` or `$HOME/.ssh/config` &#8211; This is user’s own configuration file which, overrides the settings in the global client configuration file, /etc/ssh/ssh_config.

### Edit the user-specific SSH config

Load the file in your favourite editor, I am a `nano` man myself.

```bash
nano ~/.ssh/config
```

So here is an example from my ssh config file. Here I've set up a personal key for my GitHub account.

```bash
# Personal GitHub Account
Host jameswilliams-GitHub
    HostName github.com
    User jameswilliams
    PreferredAuthentications publickey
    IdentityFile /Users/thejamesrwilliams/.ssh/gitHub_key
```

Not fully sure of any downsides that this causes but it ensures my core id_rsa file is included in all hosts as a backup. Be careful however as there is a limit to the number of keys the SSH agent can attempt before being rejected:

```bash
Host *
    AddKeysToAgent yes
    UseKeychain yes
    IdentityFile ~/.ssh/id_rsa
```
Here is a quick breakdown of what the first two lines of the above example do:

- `UseKeychain` - This is a MacOS thing, and specifies whether the system should search for passphrases in the user's keychain when attempting to use a particular key.
- `AddKeysToAgent` - When enabled, a private key that is used during authentication will be added to ssh-agent if it is running.
