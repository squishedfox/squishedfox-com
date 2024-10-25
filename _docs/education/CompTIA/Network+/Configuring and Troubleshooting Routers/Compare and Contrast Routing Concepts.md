---
title: Compare and Contrast Routing Concepts
layout: page
parent: Configuring and Troubleshooting Routers
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/configuring-and-troubleshooting-routers/compare-and-contrast-routing-concepts/
---

# Compare and Contrast Routing Concepts

[quizlet](https://quizlet.com/955928028/comptia-network-n10-008-compare-and-contrast-routing-concepts-flash-cards/)

## Objectives

2.2 Compare and contrast routing technologies and bandwidth management concepts

## Routing Tables and Path Selection

- Routing tables are a way of mapping between nodes and knowing how to intelligently manage traffic using a routing table.
- Types of entries
  - protocol
  - destination
  - interface
  - gateway/next hop

### Categories

#### Directly Connected Routes

Entry in the routing table representing a subnet in which the router has an active

#### Static Routes

Manually entered route into the system by the network administrator. Not common as it can cause issues in the future if network topology changes.

#### Default Routes

Special type of static route that identifies the next hop router for a destination that cannot be matched by another routing table entry. The destination address 0.0.0.0/0 (IPv4) or ::/0 (IPv6) is used to represent the efault route.

### Packet Forwarding

when a router receives a packet it looks at the destination address and tries to match it with a network IP address in the routing table. if there's a match the router will forward the packet.

### Hop Count

Packets have a header called TTL which is indicated as the time to live for the packet in seconds but usually interpereted as the number of hops the packet can make. Once the packet as reached 0 by each host system then the packet is no longer forwarded. Switches do not cound as a host system to decrease the hops.

### Fragmentation

Fragmentation is a way of breaking down a packet into smaller frames as a way to transmit traffic to meet the Maximum Transmittion Unit (MTU) of data.
