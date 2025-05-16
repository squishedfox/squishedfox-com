---
title: Chapter 9
layout: page
parent: Study Guide
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-9/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 9 Introduction to IP Routing

### Objectives

2.2 Compare and contrast routing technologies and band-width management concepts

- Dynamic Routing
  - routing information protocol (RIP), Open shortest
  - Path First (OSPF), Enhanced
  - Interior Gateway Routing Protocol
  - (EIGRP), Border Gateway Protocol (BGP)
- link state versus distance vector versus hybrid
  - Static routing
  - Default route
  - Administrative distance
  - Exterior versus interior
  - Time to live

### Routing Basics

To be able to successfully route you must have the following information

- Destination Network Address
- Neighbor routers frm which it can learn about remote networks
- Possible routes to all remote networks
- The best route to each remote network
- How to maintain a verify routing information

**static routing** is manually assigned addresses to each machine and the most cumbersome
**dynamic routing** a protocol on one router communicates with the same protocol running on neighbor routers. The routers then update each other about all the networks they know and place this information into the routing table. If a change occurs in the network the dynamic routing protocols automatically information all routers about the event.
