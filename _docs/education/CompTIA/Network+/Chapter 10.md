---
title: Chapter 10
layout: page
parent: Network+
grand_parent: CompTIA
permalink: /education/comptia/network-plus/chapter-10/
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
- Uses timers which are called _hello_, _hold_, _active_, and _standby_
- **Hello Timer** Runs in a default interval of 3 seconds and identifies th state of which the router is in. Routers today are commonly configured in milliseconds.
- **Hold Timer** Hold timer is a way for a standby router to identify whether the active router is offline or not. The default time is 10 seconds. An Algorithm of 3x the hello timer is used as a way of setting this timer.
- **Active Timer** Active timer is used with the **hold timer** as a way of determining if the standby router should be the active router. Everytime the standby router receives a **hello timer** request the **active** timer is reset
- **Standby Timer** used to monitor thes tate of the standby router. Resets anytme a router in the standby group receives a hello packet from the standby router and expires based on the **hold time value** that's set in the respective Hello packet.

##### Virtual MAC (Media Access Control) Address

- Used by HSRP (Hot Standby Router Protocol)
- Is proprietary to Cisco
- Uses 0000.0c07.ac0a as a well known address for this protocol

### VRRP (Virtual Router Redundancy Protocol)

- IEEE Standard (RFC 2338)
- VRRP is something that represetns a group of virtual routers
- Master router is he active virtual router
- Master router may have the same IP address as the virtual router group
- Multiple routers may act as backups
- Provides redundancy for he real IP of a router or virtual appliances
- Master router is the one with the real IP (Internet Protocol) address in use
- Master routers with are assigned by highest priority when virtual IP (Internet Protocol) addresses are in use
- Master router uses VRRP messages to update other routers of its status
- Allows load sharing across many other routers

### Advanced IPv6 Concepts

#### Router Advertisement

Process used in IPv6 for hosts to find a NetworkID and generate their own IPv6 Address on the network

**Three Step Process for Hosts to receive an address**

Process is stateless autoconfiguration because the host is generating its own IPv6 address using MAC (Media Access Control) Address and the Network ID

1. Host sends s Router solicitation (RS) request for route prefix (Network ID) as a multicast message (FF02::2) as an ICMP message with type 133
2. Router responds with RA (Router Advertisement) message as a multicast message (FF02::1) and is ICMP type 134
3. Host generates an address after receiving a message

#### Neighbor Discover Protocol (NDP)

- Does not use ARP (Address Resolution Protocol). These systems use Link-Local Addresses instead of MAC (Media Access Control) Addresses
- Operates at the Data Link Layer (Layer 2)
- Link Local Addresses always have the prefix FE80::/64
- Link Local Addresses are discoverd using neighbor discovery with neighbor solicitation and neighbor advertisement messages

#### Tunneling

- Used as a way of encapsulating one potocol with another protocol to support IPv6
- **GRE (Generic Routing Encapsulation)** is one process that is not commonly used in IPv6 but is commonly used with VPN (Virtual Private Networks) over an IPSec tunnel using encryption
- **6to4 Tunneling** Encapsulates IPv6 Addresses with an IPv4 address by appending a header and using the IPv4 protocol type 41
- **Manual Tunnels** are configured by telling routers or smart switches where the tunnel starts and where it ends on a network, and giving it the mode (ipv6ip)
- **6to4 (automatic)** Used by appending the prefix 2002 to the Ipv4 address assigned to the site. No tunnel destination address is set because the destination is automatically constructed.
- **ISATAP Tunneling** IPv6 packets over an IPv4 network. Servers are automatically set up to work, but clients must be configured to connect
- **Teredo** gives full IPv6 connectivity for IPv6 hosts that are on an Ipv4 network but have no direct native connection to an IPv6 network
- **Dual Stack** most common migration strategy that allows for one-to-one replace

### IPv6 Routing Protocols

#### RIPng

- Similar as RIPv2 in capabilities
- Distance Vector calculation
- Uses Multicast to send its updates too but in Ipv6 it uses FF02::9
- Improvment on RIPv2 is that it keeps the number of hops to the next addressing using the link-local address, not aglobal address.

#### EIGRPv6 (Enhanced Internal Gatway Routing Protocol v6)

- Advanced Distance Vector Protocol
- Hello Packets and updates are sent using multicast transmission and as with RIPing

## Written Lab Questions

1. The default administrative distance of RIP is what?
2. The default administrative distance of EIGRP is what?
3. The default administrative distance of RIPv2 is what?
4. What is the default administrative distance of a static router?
5. What is the version or name of RIP that is used with IPv6?
6. What is the version or name of OSPF that is used with IPv6?
7. What is the version or name of EIGRP that is used with IPv6?
8. When would you use BGP?
9. When could you use EIGRP?
10. Is BGP considered a link-state or distance-vector routing protocol?

## Review Questions

1. Which of the following protocols support VLSM, summarization and discontiguous networking? (Choose three)

	A. RIPv1
	B. IGRP
	C. EIGRP
	D. OSPF
	E. BGP
	F. RIPv2

2. Which of the following are considered distance-vector routing protocols? (Choose two)

	A. OSPF
	B. RIP
	C. RIPv2
	D. IS-IS

3. Which of the following are considered link-state routing protocols? (Choose two)

	A. OSPF
	B. RIP
	C. RIPv2
	D. IS-IS

4. Which of the following are considered hybrid routing protocols? (Choose Two)

	A. OSPF
	B. BGP
	C. RIPv2
	D. IS-IS
	E. EIGRP

5. Why would you want to use a dynamic routing protocol instead of using static routes?

	A. There are lesss overhead on the router
	B. Dynamic routing is more secure.
	C. Dynamic routing scales to larger networks
	D. The network runs faster

6. Which of the folowing is a vendor-specific FHRP protocol?

	A. STP
	B. OSPF
	C. RIPv1
	D. EIGRP
	E. IS-IS
	F. HSRP

7. RIP has a long convergence time and users have been compainging of response time when a router goes down and RIP has to reconverge. Which can you implement to improve convergence time on the network?

	A. Replace RIP with static routes
	B. Update RIP to RIPv2
	C. Update RIP to OSPF using link state
	D. Replace RIP with BGP as an exterior gateway

8. What is the administrative distance of OSPF?

	A. 90
	B. 100
	C. 110
	D. 120

9. Which of the following protocols will advertise routed IPv6 networks?

	A. RIP
	B. RIPng
	C. OSPFv2
	D. EIGRPv3

10. What is the difference between static and dynamic routing?

	A. You use static routing in large, scalable networks
	B. Dynamic routing is used by a DNS Servers
	C. Dynamic routes are added automatically
	D. Static routes are added automatically

11. Which routing protocol has a maximum hop count of 15?

	A. RIPv1
	B. IGRP
	C. EIGRP
	D. OSPF

12. Which of the following describes routing convergnce time?

	A. The time it takes for your VPN to connect
	B. The time required by protocols to update their forwarding tables after changes have occured
	C. The time required by IDS to detect an attack
	D. The time required by switches to update their link status and go into forwarding state

13. Whta routing protocal is typically used to connect ASs on the internet?

	A. IGRP
	B. RIPv2
	C. BGP
	D. OSPF

14. RIPv2 sends out its routing table very 30 seconds just like RIPv1, but it does so more effectivly. What type of transmission does RIPv2 use to accomplish this task?

	A. Broadcasts
	B. Multicasts
	C. Telecast
	D. None of the above

15. Which routing protocols have an administrative distance of 120? (Choose two)

	A. RIPv1
	B. RIPv2
	C. EIGRP
	D. OSPF

16. Which of the following routing protocols uses AS path as one of the methods to build the routing tables?

	A. OSPF
	B. IS-IS
	C. BGP
	D. RIP
	E. EIGRP

17. Which IPv6 routing protocol uses UDP port 521?

	A. RIPng
	B. EIGRPv6
	C. OSPFv3
	D. IS-IS

18. What EIGRP information is held in RAM and maintained through the usage of Hello and Update packets? (Select all that apply)

	A. DUAL table
	B. Neighbor table
	C. Topology table
	D. Successor route

19. Which is true regarding EIGRP successor route?

	A. Successor routes are saved in the neighbor table
	B. Successor routes are stored in the DUAL table
	C. Successor routes are used only if the primary route fails
	D. A successor route is used by EIGRP to forward traffic to a destination

20. Which of the following uses only hop count as a metric to find the nbets path to a remote network?

	A. RIP
	B. EIGRP
	C. OSPF
	D. BGP

## Written Lab Answers

1. 120
2. 90
3. 120
4. 120
5. RIPng (Next generation)
6. OSPFv3
7. EIGRPv6
8. When you need to connect two autonomous systems (ASs) together
9. When all your routers are cisco routers and you want easy configurations
10. Distance vector

## Answers to Review Questions

1. C,D,F
2. B, C
3. A, D
4. B, E
5. C
6. F
7. C
8. C
9. B
10. C
12. A
13. C
14. B
15. A, B
16. C
17. A
18. B, C
19. D, A
20. A
