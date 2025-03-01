---
title: Chapter 7 
layout: page
parent: Study Guide 
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-7/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 7 IP (Internet Protocol) Addressing 

### Objectives

1.4 Given a scenario, configure a subnet and use appropriate IP addressing schemes

### IP Terminology

- Bit - A bit is one binary digit, either a 1 or a 0
- Byte - A byte is 7 or 8 bits depending o whether parity is used
- Octet - An octet, mae up of 8 bits, is just an ordinary 8-bit binary number
- Network Address - This is the designation used in routing to send packets to a remote network. for example 10.0.0.0, 172.16.0.0, and 192.168.10.0
- IP Address - A logical address used to define a single host;
- Broadcast Address - The broadcast address is used by applications and hosts to send information to all hosts on a network.

### The Hierarchical IP Addressing Scheme

- IPv4 Addresses are four octets that makeup an address ranging from 0 to 255 per octet
- Typically the IPv4 address 255.0.0.0 and 255.255.255.255 are reserved on cloud platform networks
- Typically the IPv6 address uses hexidecimal format similar to FF:FF:FF:FF:FF. Note: FF:FF:FF:FF:FF is reserved for DHCP request lookups, but here we use it as an example

#### Network Addressing

Class networks were created to address hierarchies of how big a network can be. 

Three classes of networks table

|  | 8 bits | 8 bits | 8 bits | 8 bits |
|--|--------|--------|--------|--------|
| Class A | Network | Host | Host | Host |
| Class B | Network | Network | Host | Host |
| Class C | Network | Network | Network | Host |
| Class D | Multicast | | |
| Class E | Research | | |

### IPv4 Addressing

- Layer 2 Broadcasts - Sent to all nodes on the Local Area Network (LAN). These broadcasts are also known as Hardware broadcasts. and typically are 6 bytes (48-bits) 
- Broadcasts (Layer 3) - Network broadcasts which are meant to reach all hosts. These Broadcasts are a way for systems to route traffic internally on a broadcast domain or through a gateway to reach it's destination address. 
- Unicast - Single interface broadcast which is described in both IPv4 and IPv6 
- Mulicast (Class D) - Multicasting is a way that we can broadcast messages to multiple specific hosts instead of everyone at once. 