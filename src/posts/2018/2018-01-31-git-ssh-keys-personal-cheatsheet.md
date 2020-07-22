---
title: Git/SSH Keys Personal Cheat sheet
date: 2018-01-31T20:33:56+00:00
slug: "git-ssh-keys-personal-cheat-sheet"
---

## GitHub Deploy Keys

Create SSH Key:

```bash
ssh-keygen -t rsa -b 4096 -C "{email}"
```

Set the git remote:

```bash
git remote set-url origin git@github.com:{username}/{repo}
```

Check Auth with username against GitHub:

```bash
ssh -T {username}@github.com
```

Echo out easy to copy-paste version of the public key:

```bash
cat ~/.ssh/id_rsa.pub
```

### Get MD5 fingerprint of key

A key fingerprint is a short sequence used to identify a larger key. Useful for verifying if a key is similar to another without having to do a direct comparison. For example GitHub and GitLab display an MD5 hash of the key for easy comparison. For example:
`cb:21:45:27:a3:02:d8:69:3c:fa:df:77:4f:46:d0:a6`

You can check this against your local keys by doing something like this within your SSH key directory.

```bash
ssh-keygen -l -E md5 -f example_rsa.pub
```
