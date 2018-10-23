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
Recently I&#8217;ve been working on a on-boarding application for an agency client that involved some fallback processes if their CRM write failed. The client requested we send them an email with the form data attached as JSON, so they could manually process if required.

We are using [PHPMailer][1] as a more comprehensive mailing solution rather than PHP&#8217;s `mail()` function. Lets say our form data looks like this:

<pre>$data = ['foo' =&gt; 'bar'];</pre>

What we&#8217;re after is to set this variable as a file. we can do this using PHP mailers `<a href="https://github.com/PHPMailer/PHPMailer/wiki/Tutorial#string-attachments" target="_blank" rel="noopener">AddStringAttachement</a>` function which looks like this:

<pre>$mail-&gt;AddStringAttachment($contents, $filename);</pre>

Applying this to our example could be the following:

<pre>$contents = json_encode($data, JSON_PRETTY_PRINT);</pre>

PHP has had the JSON\_PRETTY\_PRINT option since 5.4.0.

<pre>$mail-&gt;AddStringAttachement($contents, 'example.json');</pre>

&nbsp;

 [1]: https://github.com/PHPMailer/PHPMailer