---
title: MAC Address Table and Port Security
layout: page
parent: Deploy Common Ethernet Switching Features
grand_parent: Deploying Ethernet Switching
has_children: false
permalink: /education/comptia/network-plus/deploying-ethernet-switching/deploy-common-ethernet-switching-features/mac-address-table-and-port-security/
---

# MAC Address Table and Port Security

## Summary

Switches provide a few "smart" features for performance and security such as MAC Address mapping to known addresses on the nwtwork and port security to filter incoming and outgoing packets.

## MAC (Media Access Control) Address Table

A MAC (Media Access Control) Address Table is dynamically created by a switch using a content addressable memory (CAM) system. As packets come in the switch looksup the address. If one is not available it sends the packet to all connected destinations on the network until it receives a response. Once a response is gained it then maps that MAC Address to that PORT and now gains performance for every time it needs to send a packet to that Address.

## Port Security

Port Security is created by filtering out packets which don't have specific addresses which map to a port. 