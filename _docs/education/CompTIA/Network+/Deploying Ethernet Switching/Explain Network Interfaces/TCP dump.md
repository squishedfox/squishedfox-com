---
title: TCP Dump
layout: page
parent: Explain Network Interfaces 
grand_parent: Deploying Ethernet Switching
permalink: /education/comptia/network-plus/deploying-ethernet-switching/explain-network-interfaces/tcp-dump/
---

# TCP Dump

## Summary

TCP (Transport Control Protocol) - is a command line package utility for linux, providing a user interface to the libpcap library. The basic syntax of the command is `tcpdump -i eth0`

## when is it used

used to monitor incoming packats until a interrupted signal is sent to the utility to step (i.e. ctrl+c) in the terminal. There are different switches that can be provided to include or filter out information.

- Type - filter by `host`, `net`, or `portrange`
- Direction - filter by source `src` or destination `dst`
- Protocol - filter by named protocol rather than port number (for example `arp`, `icmp`, `ip`, `ip6`, `tcp`, `udp`, and so on)
