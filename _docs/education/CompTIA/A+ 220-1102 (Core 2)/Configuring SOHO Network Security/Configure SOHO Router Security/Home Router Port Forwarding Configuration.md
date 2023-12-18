---
title: Home Router Port Forwarding Configuration
layout: page
parent: Configure SOHO Router Security
grand_parent: Configuring SOHO (Small Office, Home Office) Network Security
has_children: false
permalink: /education/comptia/a-plus/core-two/soho/router-security/port-forwarding/
---

# Home Router Port Forwarding Configuration

Like firewalls a Port Forwarding Configuration and be used to filter or redirect traffic to different ports on a system.

## Static IP Addresses and Dynamic Home Configuration Protocol (DCHP) Reservations

Port forwarding requires four details to work correctly

- The IP Address requesting access. This IP Address can also be * meaning it doesn't matter where it comes from
- The Port requesting access.
- The IP Address being requested. This can be a wildcard * which means to redirect all traffic
- The Port to forward the request to on the network

## Disabling Unused Ports

One of the best principles of hardened security is to disable any ports which are not being used on a network. 