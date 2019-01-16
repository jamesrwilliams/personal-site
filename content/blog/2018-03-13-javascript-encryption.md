---
title: JavaScript Encryption with RSA and AES
type: post
date: 2018-03-13T07:53:01+00:00
draft: true
---
## Background

A recent client project called for a bit of a exploration into client side encryption implementations. A first for me. A large JSON file needs to sent from a client angular application to a server, from there needs to be processed and then sent on to an external Endpoint. Encryption on the first server would leave the data exposed on between the client so we needed to implement on the client side using JavaScript encryption.

## JavaScript Encryption vs Serverside

In this scenario we have three nodes to our process:

  1. The Angular application (Client)
  2. Processing Server (Server)
  3. API Endpoint (Endpoint)

If encryption took place on the server the data would be not encrypted apart from HTTPs between the client and the first server, as per the clients specification our server should not be able to read the data in any way. To get the process to work this way we would have to handle the encryption process on the client.

This opens up the possibility of anyone opening up the application source code and taking a peek at its inner workings and any shared secrets within. So security by obscurity, as ever, is a big no-no here. We needed a asymmetric encryption approach. This would ensure our encryption would be difficult to undo even if you know exactly how it works. The solution use a public key to encrypt the data that uses a private key that only the client has to decrypt it when they need it.

## RSA

My first thought went straight to the most ubiquitous encryption method I come across in my job. RSA keys that I use frequently for SSH-ing into servers and SSL certificates. After a brief google search for RSA implementations I came across [jsencrypt][1], a library that  performs encryption/decryption and key generation. I generated a key pair on my machine via the command line initially (start with what you know).

RSA is only able to encrypt data to a maximum amount of your key, but as our data will vary in length this doesn&#8217;t make RSA a good solution, and incidentally this is not what RSA is designed to do. I quickly discovered what I was after was a <a href="https://en.wikipedia.org/wiki/Block_cipher" target="_blank" rel="noopener">block-cypher</a>, enter AES.

<pre>var decrypt = new JSEncrypt();
    decrypt.setPrivateKey(keyString);</pre>

<!--more-->

## AES

The Advanced Encryption Standard (AES) is a symmetrical encryption algorithm, one that uses the same keys for encrypting the plain text as it does for decrypting the cypher text, you can think of these as a shared secret that people can use to jointly decrypt the cypher text.

With AES&#8217;s operation modes allow it different methods the length of the data you wish to encrypt. AES has a number of operation modes, these change the way the algorithm works and ultimately how difficult the cypher text is to break. Each has its advantages apart from one.

## Hybrid Approach

Due to the size of the payload we can't just use RSA as I naïvely thought at the outset, but in fact a combination of symmetrical encryption and asymmetrical. [<img class="aligncenter wp-image-65 size-full" src="http://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/03/encryption.png" alt="" width="917" height="771" />][2]AES for the payload and then RSA for the keys and counters/iv. Then send the cypher text and encrypted keys to the destination server for decryption as required.

## Playing with Cyphers

I set up an example project on GitHub showing the two scripts in action with the option to change the keys and encrypt/decrypt strings. Useful for verifying if the encryption is working correctly.

 [1]: https://github.com/travist/jsencrypt
 [2]: http://jamesrwilliams.co.uk/blog/wp-content/uploads/2018/03/encryption.png
