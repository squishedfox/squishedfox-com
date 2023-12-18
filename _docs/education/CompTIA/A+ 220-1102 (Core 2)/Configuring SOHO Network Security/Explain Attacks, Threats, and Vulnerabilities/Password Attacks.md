---
title: Password Attacks
layout: page
parent: Configuring SOHO (Small Office, Home Office) Network Security
grand_parent: Explain Attacks, Threats, and Vulnerabilities
has_children: false
permalink: /education/comptia/a-plus/core-two/soho/threats/password-attacks/
---

# Password Attacks

Password attacks can come in a few different forms. A threat actor has captured a data dump directly from gaining access to a database, credential store such as Active Directory, or possibly from an online data dump of information, or even by listening in on unencrypted traffic.

## Dictionary Attack

Software is used to iterate over a long list of words found in a dictionary. The are then used with various hashes in an attempt to "guess" the right password if the hash matches.

## Brute Force

The software tries to match the hash against every single possible combination the password could take form of. Shorter passwords take less time to crack versus longer passwords which will take exponential time for every character added.