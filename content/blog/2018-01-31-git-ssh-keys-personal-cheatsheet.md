---
title: Git/SSH Keys Personal Cheat sheet
type: post
date: 2018-01-31T20:33:56+00:00

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

