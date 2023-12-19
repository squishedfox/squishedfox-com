---
title: Windows Security Protocols
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/wireless-security-protocols/
has_children: false
questions:
    - question: "True or false. TKIP represents the best available wireless encryption and should be configured in place of AES if supported."
      answer: "False. Advanced Encryption Standard (AES) provides stronger encryption and is enabled by selecting Wi-Fi Protected Access (WPA) version 2 with AES/CCMP or WPA3 encryption mode. The Temporal Key Integrity Protocol (TKIP) attempts to fix problems with the older RC4 cipher used by the first version of WPA. TKIP and WPA1 are now deprecated."
    - question: "True or false? WPA3 personal mode is configured by selecting a passphrase shared between all users who are permitted to connect to the network."
      answer: "True. WPA3-Personal uses group authentication via a shared passphrase. The simultaneous authentication of equals (SAE) mechanism by which this passphrase is used to generate network encryption keys is improved compared to the older WPA2 protocol, however."
    - question: "What two factors must a user present to authenticate to a wireless network secured using EAP-TLS?"
      answer: "Extensible Authentication Protocol (EAP) allows for different types of mechanisms and credentials. The Transport Layer Security (TLS) method uses digital certificates installed on both the server and the wireless station. The station must use its private key and its certificate to perform a handshake with the server. This is one factor. The user must authenticate to the device to allow use of this private key. This device authentication—via a password, PIN, or bio gesture—is the second factor."
    - question: "In AAA architecture, what type of device might a RADIUS client be?"
      answer: "AAA refers to Authentication, Authorization, and Accounting and the Remote Access Dial-in User Service (RADIUS) protocol is one way of implementing this architecture. The RADIUS server is positioned on the internal network and processes authentication and authorization requests. The RADIUS client is the access point, and it must be configured with the IP address of the server plus a shared secret passphrase. The access point forwards authentication traffic between the end-user device (a supplicant) and the RADIUS server but cannot inspect the traffic."
---