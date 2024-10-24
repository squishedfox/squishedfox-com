---
title: Compare and Contrast Dynamic Routing Concepts
layout: page
parent: Configuring and Troubleshooting Routers
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/configuring-and-troubleshooting-routers/compare-and-contrast-dynamic-routing-concepts/
---

# Compare and Contrast Dynamic Routing Concepts

# Objectives

1.4 Given a scenario, configure a subnet and use appropriate IP address schemes.
2.2 Compare and contrast routing technologies and bandwidth management concepts.

## Dynamic Routing Protocols

Dynamic routing protocols focus on the ability to build routing information at each router and the path priority for different network traffic. Information can be shared with peer routers.

### Topology and Metrics

- distance vector - used by routers to determine the lest amount of hops to get to destination network
- link state - link state is a generic way of saying "we're just going to keep calculating the algorithm"

### Convergence

Convergence is the way routers can communicate and work together to agree on the best path forward for sending packets.

## Interior versus Exterior Gateway Protocols

### Autonomous Systems

Autonomous systems are systems that are controled by a single administrator to determine the best route for traffic that uses Interior Gateway Protocol (IGP).

### Exterior Gateway Protocol

Exterior Gateway Protocol is a system which communicates between multiple autonomous systems to determine the best path forward for traffic.

![alt text](image.png)

## Routing Information Protocol

Routing Information Protocol (RIP) is a distance vector routing protocol.

The RIP protocol only uses the metric of measuring distance to the next hop rather than any other metric. i.e. looking at the least time to live occurances required.

## Enhanced Interior Gateway Routing Protocol

Enhanced Interior Gateway Routing Protocol was designed by cisco because the original implementation of IGRP did not support classles routing. 

Two metrics that are used

1. Bandwidth
2. Delay

## Open Shortest Path First

Distance vector algorithm relies on directly connected neighbordsfor information about remote networks. By contrast, a alink state algorithm allows a router to store the complete network topology and assesss the least-cost paths from this topology database.

Open Shortest Path First (OSPF) is the most widely adopted link state protocol because it is best suited to large organizations with multiple redundant paths between networks and has better convergence performance than RIP (Routing Information Protocol)

## Border Gateway Protocol

The border gateway protocol is design to be used between routing domains in a mesh internetwork and as such is used as the routing protocol on the internet, primarily between Internet Service Providers (ISP)

## Administrative Distance

Each routing distance is calculated by longest match for prefix

If there is two entries

198.51.100.0/24 g0 interface
198.51.100.0/28 g1 interface

if the router recieves a packet for 198.51.100.1 then it will use g1 interface to forward packets to

## Variable Length Subnet Masks

VLSM (Variable length subnet masking) provides Internet Service Providers (ISP)s to more effectively assign classless IPv4 addresses. 

## Review Activity

1. Which factors are used by default in EIGRP to ientify the least-cost path
> The lowest bandwidth link along the path and the sum of latency along the path.
2. Which is an ASN and how does it assist route aggregation?
> An Autonomous System Number (ASN) identifies a group of network prefixes under the administrative control of a single entity (such as an ISP). The AS can be advertised to other ASs through a single prefix (route aggregation), hiding the complexity of the internal network from other autonomous systems. 
3. Of the routing protocols listed in the CompTIA Network+ syllabus, which has the highest default value AD and does that make it more or less trusted than other protocols?
> Routing Information Protocol (RIP) has a default administrative distance (AD) value of 120. In AD, lower values are preferred, so RIP is less trusted than other protocols.
4. An IP network comprises hundreds of subnets deployed to offices in multiple geographical locations. Of the routing protocols listed in the CompTIA Network+ syllabus, which is best suited to this scale of network and why?
> The hierarchical design of Open Shortest Path First (OSPF) means that it can divide the network into areas to represent different sites, reduce the size of routing tables, and ensure fast convergence. That said, Enhanced Interior Gateway Routing Protocol (EIGRP) can also support large networks and can have better convergence performance and so could be an equally good choice. Routing Information Protocol (RIP) is too limited to meet the requirements of a large network. Border Gateway Protocol (BGP) is not typically used on private networks as it is slower than OSPF or EIGRP and relative complex to configure.
5. A company has eight networks, using the subnet addresses 192.168.0.0/24, 192.168.1.0/24 … 192.168.7.0/24. What network prefix and subnet mask can be used to summarize a supernet route to these networks? 
> It takes 3 bits to summarize eight networks (23 =8). Subtracting 3 bits from the existing network mask makes the supernet network prefix /21. The third octet of the mask will use 5 bits, which is 248 in decimal (25=  248), so the full mask is 255.255.248.0.
6. True or False? VLSM means using more than one mask to subnet an IP network.
> True. By using different mask sizes, variable length subnet masking (VLSM) allows designers to match subnet sizes to requirements more precisely.


