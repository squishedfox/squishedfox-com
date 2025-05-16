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

#### How routing works

https://networklessons.com/ip-routing/ip-routing-explained

1. Internet Control Message Protocol (ICMP) creates an echo request payload
2. ICMP hands the payload to Internet Protocol (IP), which then creates a packet
3. Internet Protocol determines whether the destination IP address in on the local network or a remote one
4. Packet is sent to the default gateway since it's an external network
5. The packet must be sent and configured with the MAC address to know where to send the data so the data link layer can frame it and sent it to the router since it's on the same gateway
6. Host uses Address Resolution Protocol (ARP) to resolve the IP address to a local address
7. Data link layer Wraps the it all up in a frame(s)
8. Frame is handed down to the physical layer
9. Every device within the collision domain receives these bits and builds the frame. Each one runs a CRC (Cyclic Redundancy Check) and check the answer for the FCS field. If they don't match then the frame is discarded
10. The packet is pulled from the frame, and what is left of the frame is discarded
11. IP receives the packet and checks the IP destination address
12. The routing table must have an entry for the network or the packet will be discarded immediately
13. If the router does not find an entry for the destination network in the table, the packet is switched to the exit interface
14. The router packet-switches the packet to a different interface/buffer
15. The buffer checks uses Address Resolution Protocol (ARP) to find the hardware address
16. The data link layer frames the packet to be sent off
17. When the final host receives the frame and immediately runs a CRC. If the result matches what's in the FCS field, the hardware-destination address is then checked. If the host finds a match, the ether-type field is then checked to determine the protocol that the packet should be handed to at the network layer-IP, in this example
18. At the Network layer, IP receives the packet and checks the IP destination address
19. The payload is handed to ICMP (Internet Control Messaging Protocol) which understands that this is an echo request ICMP responds to this by immediately discarding the packet and generating a new payload as an echo reply
20. A packet is created, including the source and destination IP address, Protocol field, and payload, the destination device is the originator device
21. Internet Protocol checks to see whether the destination IP address is a device on the local LAN (Local Area Network) and a remote network
22. The default gateway Internet Protocol (IP) is found in the Registry of the Windows device, and the Address Resolution Protocol (ARP) cache is checked to see whether the hardware address has already been resolved from an Internet Protocol (IP) address
23. After the hardware address of the default gateway is found, the packet and destination hardware address are handed down to the Data Link layer for framing
24. The Data Link layer frames the packet of information and includes the following in the header

    - The destination and source hardware addresses
    - The Ether-Type field with 0x0800 (IP) on it
    - The FCS field with the CRC result in tow

25. The frame is now handed down to the Physical layer to be sent out over the network medium one bit at a time
26. The router's Ethernet interface receives the bits and builds a frame. The CRC is run, and the FCS field is checked to make sure the answers match
27. When the CRC is found to be Okay, the hardware-destination address is checked because the router's interface is a match, the packet is pulled from the frame, and the Ether-Type field is checked to see which protocol at the Network layer the packet should be delivered to
28. The protocol is determined to be IP, so it gets the packet. IP runs a CRC check to the IP header first and then checks the destination IP address
29. ....
