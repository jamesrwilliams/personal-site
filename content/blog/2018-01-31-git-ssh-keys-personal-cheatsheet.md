---
title: Git/SSH Keys Personal Cheatsheet
type: post
date: 2018-01-31T20:33:56+00:00

---
## GitHub Deploy Keys {#github-deploy-keys}

Create SSH Key:

<pre>ssh-keygen -t rsa -b 4096 -C "{email}"</pre>

Set the git remote:

<pre>git remote set-url origin git@github.com:{username}/{repo}</pre>

Check Auth with username against GitHub:

<pre>ssh -T {username}@github.com</pre>

Echo out easy to copy-paste version of the public key:

<pre>cat ~/.ssh/id_rsa.pub</pre>
