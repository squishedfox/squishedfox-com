---
title: Troubleshoot Browser Symptoms
layout: page
parent: Troubleshoot Workstation Security Issues
grand_parent: Managing Security Settings
has_children: false
permalink: /education/comptia/a-plus/core-two/windows-security/troubleshoot-workstations/browsers/
---

# Troubleshoot Browser Symptoms

## Redirection

Redirection is where the use is redirected to a different website or network location-e.g. a file-that gets downloaded onto the system and attempts to install itself or wait for a user to install it.

## Certificate Warnings

Modern browsers will warn you that a certificate has expired or is not trusted and you will see a red '/' through the SSL or HTTPS connection.

Some browsers will completely block you for entering the website at all as it cannot be trusted to enter with any data.

- The certificate is self-signed or issues by a Certificate Authority that is not tursted.
- The FQDN requested by the browser is different from the subject name listed in the certificate.
- The certificate has expired or is listed as revoked.

### Man in the Middle Attacks

If you accept an expired certificate or bypass a warning with the indication that you are unsafely accessing a web resource then you may be subject to a man-in-the-middle attack.

1. The user attempts to go to a web resource on a network
2. An evil-twin then attempts to take over the system by hijacking the network traffic
3. The eveil twin system presents it's own certificate to the user
4. The user connects to the server but all the traffic is capture