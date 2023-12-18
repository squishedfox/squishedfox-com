---
title: Hashing and Encryption Concepts
layout: page
parent: Configuring SOHO (Small Office, Home Office) Network Security
grand_parent: Explain Attacks, Threats, and Vulnerabilities
has_children: false
permalink: /education/comptia/a-plus/core-two/soho/threats/hashing/
---

# Hashing and Encryption Concepts

Sensitive data is encrypted with ciphers and sent to other systems via networks. This data in-theory can only be decrypted by systems or users whom posess the correct decryption keys. There are also concepts called one-way-hashes which will hash a piece of data-typically with a salt hash as well-and then never be decrypted or read as plaintext ever again.

## Cryptographic Hashes

A cryptographic hash takes in a bit of information (data) and produces a one way encrypted piece of text which is never meant to be recovered (typically passwords). Two of the most common Cryptographic Algorithms are (SHA) and (MD5) although they are both being slowly deprecated and moved to more advanced algorithms.

## Symmetric Encryption

Symmetric encryption uses one single key to encrypt and decrypt information. To keep the key from being stolen it often never leaves the environment it is entended for use, e.g. decrypting data from a database.

The main advantage of the symmetric encryption approach is spead. 

The main disadvantage of the symmetric encryption approach is that if the key is lost or stolen then the data can never be recovered, or can all be recovered by the wrong actors.

## Asymmetric Encryption

Asymmetric Encryption is the process of two parties eaching having their own private keys but sharing a public key. The data or information is then encrypted using a combination of the public and private key on one system, sent over a network, and then received by another user/system and decrypted using their public and private key. 

The main drawback for Asymetric Encryption is that th emessage cannot be larger than the key size. To encrypt a large file, it would have to be split into thousands of smaller peices, thus it is often not used to encrypt large pieces of information.