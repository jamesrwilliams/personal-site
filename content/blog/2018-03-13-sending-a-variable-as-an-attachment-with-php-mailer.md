---
title: Sending a variable as an attachment with PHP Mailer
author: James W.
type: post
date: 2018-03-13T07:39:56+00:00
url: /2018/03/13/sending-a-variable-as-an-attachment-with-php-mailer/
timeline_notification:
  - 1520926796
categories:
  - Email
  - PHP
tags:
  - PHPMailer

---
Recently I've been working on a on-boarding application for an agency client that involved some fallback processes if their CRM write failed. The client requested we send them an email with the form data attached as JSON, so they could manually process if required.

We are using [PHPMailer][1] as a more comprehensive mailing solution rather than PHP's `mail()` function. Let's say our form data looks like this:
```php
$data = ['foo' =&gt; 'bar'];
```
What we're after is to set this variable as a file. we can do this using PHP mailers [AddStringAttachement](https://github.com/PHPMailer/PHPMailer/wiki/Tutorial#string-attachments) function which looks like this:
```php
$mail-&gt;AddStringAttachment($contents, $filename);
```
Applying this to our example could be the following:
```php
$contents = json_encode($data, JSON_PRETTY_PRINT);
```
PHP has had the JSON\_PRETTY\_PRINT option since 5.4.0.
```php
$mail->AddStringAttachement($contents, 'example.json');
```

 [1]: https://github.com/PHPMailer/PHPMailer
