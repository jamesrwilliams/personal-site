---
title: JavaScript Encryption with RSA and AES
type: post
date: 2019-02-05T07:53:01+00:00
---

## Background

A recent client project called for a bit of an exploration into client side encryption implementations. A first for me. A large (>1mb) JSON file needs to sent from a client angular.js application to a server, from there needs to be processed and then sent on to an external Endpoint. Encryption on the first server would leave the data exposed on between the client so we needed to implement on the client side using JavaScript encryption.

Looking for a [TL;DR](#in-summary)?

## JavaScript Encryption vs Server-side

In this scenario we have three nodes to our process:

1. The Angular application (Client)
2. Processing Server (Server)
3. API Endpoint (Endpoint)

If encryption took place on the server the data would be not encrypted apart from HTTPs between the client and the first server, as per the clients specification our server should not be able to read the data in any way. To get the process to work this way we would have to handle the encryption process on the client.

This opens up the possibility of anyone opening up the application source code and taking a peek at its inner workings and any shared secrets within. So security by obscurity, as ever, is a big no-no here. This would ensure our encryption would be difficult to undo even if you know exactly how it works. The solution use a public key to encrypt the data that uses a private key that only the client has to decrypt it when they need it. We needed a asymmetric encryption approach.

## RSA

My first thought went straight to the most ubiquitous encryption method I come across in my job, RSA keys. I frequently use these for SSH'ing into servers and creating SSL certificates requests. After a brief  search for RSA implementations I came across [jsencrypt](https://github.com/travist/jsencrypt), a library that performs encryption/decryption and key generation. I generated a key pair on my machine via the command line (start with what you know).

### Generating RSA Keys (Mac and Linux)

We start by generating a private key. The following command will spit out a `.pem` file with the name "rsa_private". The `1024` at the end of the command is the key size. Bigger the key the bigger the message you can encrypt, but it will increase encryption time and may affect application performance.
```bash
openssl genrsa -out rsa_private.pem 1024
```
Once we have our private key we can use it to generate a public key to match using the following command:
```bash
openssl rsa -pubout -in rsa_private.pem -out rsa_public.pem
```
You can read these keys out quickly using  `cat`  on the command line:
```bash
cat rsa_public.pem
```
Once I had my keys I started to play around with encrypting and decrypting small strings. For example to encrypt:
```javascript
// Encrypt
let message = "Hello world";
const public_key = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSq[...]";
let encrypt = new JSEncrypt();
    encrypt.setPublicKey(public_key);
                  
let cipher_text = encrypt.encrypt(message);
```
And again for the decryption:
```javascript
// Decryption
const private_key = "-----BEGIN RSA PRIVATE KEY-----GSIb3DQEBAQUAA4[...]";
const cipher_text = "SUOCILmCAPTyO/8P0itbzm[...]";

let decrypt = new JSEncrypt();
    decrypt.setPrivateKey(private_key);

let result = decrypt.decrypt(cipher_text);
// result = "Hello world"
```
Turns out RSA is only able to encrypt data to a maximum amount of your key, but as our data will vary in length, as such this did not make RSA a good solution for our JSON data, and incidentally this is not what RSA is designed to do. I quickly discovered what I was after was a [block-cypher](https://en.wikipedia.org/wiki/Block_cipher).

## Enter AES

The Advanced Encryption Standard (AES) is a symmetrical encryption algorithm, one that uses the same keys for encrypting the plain text as it does for decrypting the cypher text, you can think of these as a shared secret that people can use to jointly decrypt the cypher text.

With AES’s operation modes allow it different methods the length of the data you wish to encrypt. AES has a number of operation modes, these change the way the algorithm works and ultimately how difficult the cypher text is to break.

I settled on the Counter (CTR) mode due to the need to keep the initialisation vectors separate for each operation. IMO - this might not be the best approach for what I was trying to do but hey I got it working. 

## Hybrid Approach

Due to the size of our data payload we can't just use RSA (as I naïvely thought at the outset). What would work however is a combination of symmetrical encryption and asymmetrical. With my trusty graph editor yEd, I started diagramming an outline of how this would work. See the graph below, outlining my planned approach. Without the private RSA key the transmitted payload is useless.

{{< figure src="/post-images/encryption-graph.png" link="/post-images/encryption-graph.png" alt="Flowchart detailing approach to this system." >}}

### Encryption

We start by randomly generating the AES counter and key for each round of encryption. Then we encrypt your payload with these, leaving you with an encrypted payload and a plain text counter and key. We then use the public RSA key to encrypt the counter and key leaving us with all three components encrypted. 

### Decryption 

Once we have transmitted our data the client can then decrypt using their private key. First use that key to decrypt the counter and key for the AES encryption. Then pass these too the AES decryption process, leaving us with an unencrypted payload.

## In summary

**TL;DR** - _RSA keys are too small for large encryption. You can solve this by using AES to encrypt your data and then RSA encrypt the AES components (key and initialisation vectors) to have a fully encrypted payload. Winning!_

This was an interesting gander into the world of web encryption and I can guarantee I have done this properly but it was a useful learning experience. I have set up an example project on GitHub showing the two scripts in action with the option to change the keys and encrypt/decrypt strings. Useful for verifying if the encryption is working correctly. Take a look here: [https://jamesrwilliams.github.io/javascript-encryption/](https://jamesrwilliams.github.io/javascript-encryption/)
