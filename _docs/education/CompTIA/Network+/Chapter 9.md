---
title: Chapter 9
layout: page
parent: Network+
grand_parent: CompTIA
permalink: /education/comptia/network-plus/chapter-9/
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

## Exam Essentials

- Understand the basic IP Routing Process: rmember that the frmae changes at each hop bt that the packet is never changed or minipulated in any way until it reaches the destination device
- Understand that MAC (Media Access Control) Addresses are always local
- Understand that a frame carries a packet to only two places
- Remember that the difference between static and dynamic routing


## Written Lab

1. True/False: RIPv2 is a hybrid routing protocol.
2. True/False: RIPv1 is a link state routing protocol.
3. True/False EIGRP was created by the ISO.
4. What defines a colleciton of networks or subnets that are in the same Administrative domain?
5. You need a routing potocol that can be run in a very large network with routers from multiple vendors. What routing protocol would be your best choice?
6. Which type of routing are you performing if you have to go to each router and type in each network and the path that IP will use to send packets?
7. You are trying to reach a server on another subnet. What will be the destination hardware address of a frame sent from your host?
8. You are trying to reach a server on another subnet. What will be the destination IP address of a packet sent form your host?
9. A server has received a frame from your remote host. What will be the source hardware address of the frame?
10. A server has received a packet from your remote host. What will be the destination IP address of the packet?

## Review Questions

1. Which is not a routing protocol?

    A. RIP
    B. RIPv2
    C. RIPv3
    D. EIGRP

2. Whichof these best describes dynamic routing?

    A. All network addresses must be hand-typed into the routing table
    B. ONly a portion of the network address must be hand-typed into the routing table
    C. Routing tables are updated automatically when changes occur in the network
    D. A and B

3. Which is true regarding dynamic routing?

    A. Static routes are best in large networks and thus better to use than dynamic routing protocols
    B. Static routes are automatically added to the routing table but dynamic routes must be added by hands
    C. You must use a DNS and WINS server when configuring dynamic routing
    D. Dynamic routes are automatically added to the routing table

4. Which of the following is true for MAC addresses?

    A. MAC Addresses are never local on the LAN and always pass through a router
    B. MAC addresses are always local on the LAN and never go through or past a routers
    C. MAC addresses will always be the IP address of the Fa0/0 interface
    D. None of the above

5. What is it called when protocols update their forwrading tables after changes have occured?

    A. Name Resolution
    B. Routing
    C. convergence
    D. ARP (Address Resolution Protocol) resolution

6. What command would be used to view the ARP cache on your host?

    A. C:\ >show ip route
    D. C:\ >show ip arp
    C. C:\ >show protocols
    D. C:\ >arp -a

7. What happens when a router receives a packet for a network that isn't listen in the routing table?

    A. It forwards the packet to the next availabile router
    B. It holds the packet until the address is updated in the routing table
    C. The router will use RIPto inform the host that it can't send the packets
    D. None of the above

8. Which of the following is not a distance-vector protocol?

    A. RIPv1
    B. RIPv2
    C. OSPF
    D. IGRP

9. Which two of the following are link-state protocols?

    A. RIPv1
    B. RIPv2
    C. OSPF
    D. IS-IS
    E> IGRP

10. Which of the following is a hybrid routing protocol?

    A. RIPv2
    B. EIGRP
    C. IS-IS
    D. IGRP

11. What does the acronym EIGRP stand for?

    A. Enhanced Interior Gateway Routing Protocol
    B. Enhanced Inside Gateway Redundancy Protocol
    C. Enhanced Interior Group Reliability Protocol
    D. Enhanced Interior Gateway Redundancy Protocol

12. What EGP protocol is used on the internet?

    A. GGP
    B. EGP
    C. BGP
    D. IGP

13. What are the two categories of IGP protocols (Choose two)

    A. Link state
    B. Static
    C. Distance Vector
    D. EGP

14. What two pieces of information does a router required to make a routing decision (Choose two)

    A. Destination network address
    B. Desitnation MAC (Media Access Control) address
    C. Application layer protocol
    D. Neighbor router

15. Where does a frame have to carry a packet to if it is destined for a remote network?

    A. Default gateway
    B. Neighbor host
    C. switched
    D. Hub

16. Where along the IP routing process does a packet get changed?

    A. Router
    B. Host A
    C. Destination device
    D. Host B

17. When all routers in a network agree about the path from one point to another the network is said to be what?

    A. Dynamic
    B. Static
    C. Happy
    D. Converged

18. What type of request must a client send if it does not know the destination MAC (Media Access Control) Address?

    A. ARP (Address Resolution Protocol) Broadcast
    B. Multicase
    C. ICMP (Internet Control Messaging Protocol) redirect
    D. Reverse ARP (Address Resolution Protocol)

19. You need to perform maintenance on a router in your corporate office. It is important that the network does not go down. What can you do to accomplish your goal?

    A. Configure BGP on the router
    B. Implement NAT (Network Address Translation) on the router
    C. Configure on the router a static route that temporarily reroutes traffic through another office
    D. Implement convergence on the router

20. When you are most likely to see a request timed out message?

    A. When an unknown error has occured
    B. When you have used the `arp -a` command incorrectly
    C. When a known error has occured
    D. When you are using a hybrid routing protocol

## Written Lab answers

1. False
2. False
3. False
4. Autonomous system
5. RIP does not work well in large networks, so OSPF would be the best answers, and both RIP and SPF are nonproprietary
6. Static routing
7. The MAC (Media Access Control) Address of your default gateway (router)
8. The IP (Internet Protocol) address of the server
9. The MAC (Media Access Control) Address of the router sending the frame to the server
10. The IP (Internet Protocol) Address of the server

## Review Answers

1. C
2. C
3. D
4. B
5. C
6. D
7. D
8. C
9. C, D
10. B
11. A
12. C
13. A, C
14. A, D
15. A
16. C
17. D
18. A
19. C
20. A
