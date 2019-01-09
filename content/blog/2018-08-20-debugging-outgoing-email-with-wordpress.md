---
title: Debugging outgoing email with WordPress
author: James W.
type: post
date: 2018-08-20T15:40:27+00:00
draft: true
url: /?p=242
categories:
  - Resources
tags:
  - email
  - postfix
  - SMTP
  - testing

---
MailGun is my transactional email service provider of choice. However, in some instances, you want to catch emails that are being sent to debug/test a bug or feature.

## MailHog {#mailhog}

`brew install mailhog`

Access MailHog&#8217;s interface via: `http://127.0.0.1:8025`

## MailTrap {#mailtrap}

Open MAMP Pro and go to the “Postfix” tab. Make sure the checkbox next to “Include Postfix service in GroupStart” is checked.

  * https://medium.com/@janhenkes/setup-mailhog-with-mamp-pro-to-catch-outgoing-emails-4c20778642c3
  * https://github.com/mailhog/MailHog