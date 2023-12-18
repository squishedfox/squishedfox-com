---
title: Wi-Fi Authentication Methods
layout: page
parent: Compare Wireless Security Protocols
grand_parent: Configuring SOHO (Small Office, Home Office) Network Security
has_children: false
permalink: /education/comptia/a-plus/core-two/soho/wireless-security-protocols/wifi-authentication-methods/
---

# Wi-Fi Authentication Methods

## Types

- Open
- Personal
- Enterprise

## WPA2 Pre-Shared Key Authentication

Utalizes Group Authentication as a way to encrypt communications using pre-shared key (PSK) authentication.

Each workstation which joins a network that as WPA2-PSK enable will have it's own privacy key (pairwise master key, PMK)

All types of PSK authentication have been shown to be vulnerable to attacks that attempt to recover the passphrase. The passphrase must be at least 14 characters long to try to mitigate risks from cracking.

## WPA3 Personal Authentication

WPA3 allows for using the the simultanious authenticaiton of equals (SAE) protocol which replaces the 4-way handshake done with WPA2. The personal Authentication changes the method by which the secret is used to agree session keys