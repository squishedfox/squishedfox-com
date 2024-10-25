---
title: Packet Sniffers and TAPS
layout: page
parent: Explain Network Interfaces 
grand_parent: Deploying Ethernet Switching
permalink: /education/comptia/network-plus/deploying-ethernet-switching/explain-network-interfaces/packet-sniffers-and-taps/
---

# Packet Sniffers and TAPS

## Summary

Package sniffers and analyzers provide the opportunity to see packets that are broadcast across the network and are looking for their destination.

## Types of connections

- **SPAN (Switch Port Analyzer)/mirror port** - this is a specific tool that is attached to a specific port on a network to capture an frames that may be addressed to that port
- **Passive test access point (TAP)** - Box that has an ingoing and outgoing port. All signals sent into the box are copied and then spit back out onto the network. All packets regardless of integrity are copied.
- **Active TAP** - Powered versin of a TAP that continues the signal
