---
title: "Sending a variable as an attachment with PHP Mailer"
date: 2018-03-13T18:35:04+01:00
---

Recently I've been working on a on-boarding application for an agency client that involved some fallback processes if their CRM write failed. The client requested we send them an email with the form data attached as JSON, so they could manually process if required.

We are using PHPMailer as a more comprehensive mailing solution rather than PHP's `mail()` function. Lets say our form data looks like this:

```php
<?php $data = ['foo' => 'bar']; ?>
```
What we're after is to set this variable as a file. we can do this using PHP mailers AddStringAttachement function which looks like this:
```php
<?php $mail->AddStringAttachment($contents, $filename); ?>
```
Applying this to our example could be the following:
```php
<?php $contents = json_encode($data, JSON_PRETTY_PRINT); ?>
```
PHP has had the `JSON_PRETTY_PRINT` option since 5.4.0.
```php
<?php $mail->AddStringAttachement($contents, 'example.json'); ?>
```
