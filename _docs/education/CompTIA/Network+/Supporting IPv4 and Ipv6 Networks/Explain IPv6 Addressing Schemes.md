---
title: Explain IPv6 Addressing Schemes
layout: page
parent: Explaining IPv4 Addressing
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/explaining-ipv4-addressing/explain-ipv6-addressing/
---

# Explain IPv6 Addressing Schemes

## Objectives

1.4 Given a scenario, configure a subnet and use appropriate IP addressing schemes
2.3. Given a scenario, configure and deploy common Etherent switching features (ND protocol only)

## IPv4 versus IPv6

Benefit of IPv6 is that it can be assigned with 2pow(128) versus 2power(32)

IPv6 headers that are additional to the ones already assigned in IPv6

- Traffic Class describes the packets priority
- Flow Label used for qualit of service (QoS)
- Payload Length (Payload length)
- Next Header describe what the next header may be or start
- Hop Limit replaces the TTL (Time to Live) field in IPv4 but performs the same function

## Format

Binary addresses of 1s and 0s are converted to hexidecimal notation rather than using octet notation in IPv4

## Prefixes

Classless notation is used as a way of definiting the number of bits assigned to the Network ID or the Interface ID

Consider the IPv6 Address 2001:db8:3c4d::/48

if the prefix is 48 then that means that the first 48 bits of the address are the same as another address and they can be routed to the same area

## Unicasting

![image](https://github.com/user-attachments/assets/ebfc8e7a-439f-499c-b763-801770f9ddb5)


