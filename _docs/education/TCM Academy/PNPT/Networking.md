---
title: Networking
layout: page
parent: PNPT
has_children: false
permalink: /education/tcm-academy/pnpt/networking/
---

# Summary

a networking refresher of topics

- IP Addresses
- OSI Model
- Subnetting
- MAC Addresses
- TCP and UDP
- Common Ports and Protocols

# IP Addresses

- At Layer 3 - routing

## IPv4 versus IPv6

IPv4 uses 2^23 addresses. WE are out of IPv4 IP addresses! 😱

## NAT

- NAT makes IP addresses appear as if multiple requests are all coming out from a single source. There are local addresses to the machine, or private IP addresses.

- Local Network 10.10.x.x
- Private Network 192.168.x.x

# MAC Addresses (Media Access Control)

- At Layer 2 - Physical Interface (Network Interface)

The first three sets of characters in your MAC address can tell a user what the manufacter of that component is in your machine. You can take those first three sets of characters and paste them into https://maclookup.app/search

## TCP and UDP

## User Datagram protocol (UDP)

UDP is great for connection which don't require guarantee that the client received a package.

## Transmission Connection Protocol (TCP) 

TCP is guaranteed that a connection is made to the client and requires that each party ackwnowledges that they received their piece of information.

SYN > SYN ACK > ACK

## Common Ports and Protocols

- TCP
  - FTP (21)
  - SSH (22)
  - Telnet (23)
  - SMTP (25)
  - DNS (53)
  - HTTP (80) / HTTPS (443)
  - POP3 (110)
  - SMB (139 + 445)
  - IMAP 143

- UDP
  - DNS (53)
  - DHCP (67, 68)
  - TFTP (69)
  - SNMP (161) 

## OSI Model

1. Physical - Cables and CAT-E
2. Data Link - Switches, MAC Address
3. Network - IP Addresses and Routing
4. Transporation - TCP/UDP
5. Session - session management
6. Presentation - WMV, JPG, MOV
7. Application - HTTP, SMTP, IMAP

### Resources

- https://en.wikipedia.org/wiki/OSI_model

## Subnetting

- Submetting using something like a spreadsheet can be really helful
- The number of hosts that you can have on your private network depends on your subnet mask
- The more "bits" turned off the larger pool of hosts.

**Bit Table for subnetting**

| Subnet        | Bits    |
|---------------|---------|
| 255.255.255.0 | 1 1 1 0 |

### Resources

- [seven second subnetting](https://www.youtube.com/watch?v=ZxAwQB8TZsM)
- https://drive.google.com/file/d/1ETKH31-E7G-7ntEOlWGZcDZWuukmeHFe/view
