---
title: Chapter 1-
layout: page
parent: Study Guide
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-10/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 10 Routing Protocols

### Objectives

2.1. Compare and contrast various devises, their features, and their appropriate placement on the Network
2.2 ompare and ocntrast routing technologies and bandwidth management concepts
2.3 Give a scenario, configure and deploy common Ethernet switch features

### Routing Protocol Basics

- AS (Autonomous Systems) Which are systems that are on an internet gateway protocol (IGP),
	or external gateway protocol (EGP) and share IP (Internet Protocol) table information.
- IGP (Internal Gateway Protocol) has to do with how routers share information on an intranet
- EGP (Exterior Gateway Protocol) has to do with how routers share information on the Internet
- BGP (Border Gateway Protocol) is an implementation of an EGP (Exterior Gateway Protocol)
- EIGRP (Enhanced Interior Gateway Routing Protocol) Cisco proprietary routing protocol
- OSPF (Open Shortest Path First)
- IS-IS (Intermediate System to Intermediate System)

### Administrative Distance (Choosing the best routes)

AD (Administrative Distance) is a caluclation that stores numbers 0 to 255 where 0 is the best route,
and 255 is the worst route. 255 is a metric meaning that a packet should not be forwarded through that router.

A router may receive one or more updates. If there are two updates at the same time the
router will look at the route with the lowest Administrative Distance. If they both have
the same Administrative Distance (AD) then the one with the fewest TTL (time to live) or
hopshops on the network is chosen. If two routes have the same metrics then a bandwidth
metric is continuously calculated and the router will load balance.

### Default Routing Sources

| Route Source | Default AD (Administrative Distance) |
|--------------|------------|
| Connected Interface | 0 |
| Static Route | 1 |
| External BGP (Border Gateway Protocol) | 20 |
| Internal EIGRP (Ehanced Internal Gateway Routing Protocol) | 90 |
| IGRP (Internal Gateway Routing Protocol | 100 |
| OSPF (Open Shortest Path First) | 110 |
| IS-IS (Internal system to Internal System) | 115 |
| RIP (Routing Information Protocol) | 120 |
| External EIGRP (Enhanced Internal Gateway Routing Protocol) | 170 |
| Internal BGP (Border Gateway Protocol) | 200 |
| Unknown | 255 |

### Classes of Routing Protocols

- Distance Vector - Calculates the distances between one node and another node with _hops_ and determine best path
- Link State - Shortest Path Protocols keep maps that are updated from their neighbors about best paths to take and their routes
- Hybrid - EIGRP (Enhanced Internal Gateway Route Protocol) and BGP (Border Gateway Protocol) are examples of the hybrid state where they use both distance vector protocols and they use link state protocols to determine best path


### Distance Vector Routing Protocol

Uses a strategy called _routing by rumor_ which receives and sends routing table updates which are then used to determine best path for packets

Distance vectors will do something called _convergence_ which helps them finally reach an agreement on the information for the ermote network number, the interface that the router will use to send packets to reach that particular network, the hop count, or metric, to the network

### Routing Information Protocol (RIP)

- Works as as **Distance Vector** calculation
- Is slow for **convergence** time
- Transmitted every 30 seconds to update nearby routers with it's routing table information
- Uses **hop count** to determine best path
- Good with smaller networks but not for enterprise networks or WAN
- Only uses cassful routing which means all devices on the network must share the same subnet
- Broadcast based
- Supports no Authentication mechanisms

### RIP (Routing Information protocol) V2 (RIPv2)

- Works as a **Distance Vector** protocol
- Supports **Variable Length Subnet Masks** (VLSMs)
- Can use a classful protocol unlike RIPv1
- use multicast 224.0.0.9
- Supports MD5 Authentication

### VLSMs and Discontiguous networks

- has two or more subnetworks of a classful network connected together by different classful network
- Does not work with any other protocol other than OSPF (Open Shortest Path First). EIGRP, RIPv1, and RIPv2 all do not work with this strategy

### EIGRP (Enhanced Internal Gateway Routing Protocl)

- Proprietary to Cicsco
- Classless
- Distance Vector
- Uses the Autonomous System to share routing information
- Differs from IGRP in that it also shares the subnet mask information
- Subpports VLSM (Variable Lenth Subnet Masks)
- Comunication is completed using Reliable Transport Protocol (RTP)

### BGP (Border Gateway Protocol)

- External Routing Protocol
- Used between Autonomous Systems
- Heavily utilizedby ISPs (Interent Service Providers)
- Uses Classless routing
- Used by IGPs (Internal Gateway Protocols) to connect AS (Autonomous Systems) in larger networks
- Technically is a EGP (External Gateway Protocol)
- Uses something Call the RIB (Routing Information Base) and doesn't broadcast its entire routing table the same way RIP does

### Link-State Protocols

- OSPF (Open Shortest Path First) and IS-IS, (Internal System to Internal System) are examples
- Classless Routing
- Can learn and maintain much mor einformation than the distance vector protocols
- Maintains a neighbor table which helps identity what the cost is for sending packets to a neighbor
- Maintains a Topology Table which helps direct the flow of traffic
- Uses SPF (Shortest Path First) protocol to decide where to direct traffic using the topology, neighbor, and its own AD (Administrative Direction) Table

### Open Shortest Path First (OSPF)

- Open Standard Protocol
- Utilizes Dijkstras Algorithm
- Has fast **convergence**
- Supports IP and IPv6
- Minimizes routing update trafficAllows scalabilit
Supports VLSM/CIDR
- Has unlimited hop count
- Allows multivendor deployment
- Uses a loopback interface to keep the network stable

### High Availability

- First-hop redundancy protocols (FHRPs) work by giving you a way to configure more than on physical router to appears asif they were only a single logical one
- Uses a Virtual Router which has its own IP (Internet Protocol) and MAC (Media Access Control) Address that each client communiates with. The IP (Internet Protocol) Address is the Default Gateway the client uses and the MAC (Media Access Control) Address is the ARP (Address Resolution Protocol) response used by the client
- Acts as a medium between routers which may go down and need to forward traffic to a different router or network

#### Hot Standby Router Protocol (HSRP)

- Cisco Proprietary protocol that provides redundant gateway for hosts on a local subnit. Routers are allowed to share MAC Addresses and IP Addresses in the protocol such that it becomes transparent to the clients whom they are communicating with in the event that a router goes down
- Virtual Router Redundancy Protocl (BRRP) Open Source protocol version of the HSRP
- Maintains several backup routers which remain idle until failure occurs with the main router

### Virtual MAC (Media Access Control) Address

-


