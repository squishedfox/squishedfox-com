---
title: Chapter 5
layout: page
parent: Network+
grand_parent: CompTIA
permalink: /education/comptia/network-plus/chapter-5/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 5 Common Network Connectivity Devices

### Objectives

1.6 Explain the use and purpose of network services
2.1 Compare and contrast various devices, their features, and their appropriate placement on the network

### Network Time Protocol (NTP)

**Network Time Protocol** is a way of synchronizing clocks across devices on a network. NTP is an important concept because it provides a mechanism for
   - Time Logging
   - Security Logs
   - Ensure sequencing of tasks
   - Ensure tasks are not delayed or running late


### Network Interface Cards (NIC)s

Layer 2 device installed in your computer to connect, or interface, your computer to the network. It provides the physical, electrical, and electronic connections to the network media.

### Hub

Hubs are layer 1 devices that broadcast transmissions to all hosts or nodes on the network. Usually used in a Star Topology

### Bridge

A bridge is a Layer 2 device that connects two different networks segments together and breaks up the collision domain. Bridges are a software design not a hardware design.

### Switch

Switches are Layer 2 devices which have intelligent port forwarding looking at the source and destination MAC Addresses. They can also provide Virtual LANs, Firewalls, break up collision domains using different hardware or software techniques.
Switches basically just forward for filter frames. By default switches break up collision domains.

Switches will not segment a network packet that is targeted for broadcast or multicast

### Multilayer Switch

A multilayer switch (MLS)

### Routers

Routers are layer 3 devices that are more intelligent versions of bridges and are actual hardware instead of just software. Routes can provide port forwarding, firewalls, virtual LANs. They can also hold onto best network paths to traverse and forward packets.

- Routers do not forward broadcasts by default
- Routers can filter the network based on layer 3 information such as IP Addresses
- Routers use logic addresses at layer 3 to understand the next hold
- Routers can use access lists, created by an administrator, to control security on the types of packets that are allowed to enter or exit an interface
- Routers provide Quality of Service (QoS) Services
- Routers can provide layer 2 bridging functions if needed and can simultaneously route through the same interface.

#### Types of packets

- Route Update Packets - Tell the router information about their neighbors, and what they know about their neighbors for forwarding packets
- Data Packets - information that is ideally intended for a host connected to the router's network

#### Functions

- Packet switching
- Packet filtering
- Internet communication
- Path Selection

###  Firewall

A firewall provides a way of filtering traffic between internal network devices or allowing or blocking outside traffic

### IDS/IPS

Intrusion Detection System records traffic and alerts the appropriate systems or administrators when detected

Intrusion Prevention System Blocks the incoming threats

### HIDS

Host Based Intrusion Detection System is software that is installed on a single computer and blocks malicious traffic

### Access Point

Access points are the wireless form of a hub. They have no intelligent mechanisms to control the flow of traffic.

### Wireless Range Extender

WLAN extends the signal using the same radio frequency as the source Access Point or Router and can be directly pointed at clients that are difficult to reach

### Wireless LAN Controller

Wireless LAN Controller provides access for a single point to configure multiple remote routers connected to the network.
It is used by Network Administrators to drastically reduce the time it takes to configure systems.

### Load Balancer

A load balance uses an algorithm to forward traffic from one IP address to many other internal IP addresses as a way of keeping a large amount of traffic flowing
and not overloading a single point on the network or system.


### Contention Method

A contention method is when two or more devices are competing for a single resource and all packets are destroyed.

### CSMA/CA

Carrier Sense Multiple Access with Collision Avoidance (CSMA/CA)

Wireless systems cannot detection collisions

#### How it Works

1. System sends out a signal to see if anyone is talking.
2. A random backoff algorithm is used by assigning a counter. Every time the system checks to see if the network is busy and doesn't get to transmit, the system decrements it's counter.
3. If a system detects no traffic at all it will transmit a message.
4. Frame is sent to the Access Point (AP).
5. Access Point sends an acknowledgment back to the system after the packet has been received. During the sending all other systems must remain silent.
6. When the frame's turn comes up in the cache queue, the frame will be deployed to the destination system.
7. The destination/receiver of the data frame then will relay back to the Access Point with an Acknowledgement. during this time all other stations must wait before transmitting.

### CSMA/CD

Carrier Sense Multiple Access with Collision Detection is easier to use on systems because it relies on physical hardware instead of radio waves for detecting collisions.

#### How it works

1. Check network wire for existing transmissions using Carrier Sense
2. If the wire is clear the device will transmit
3. If another device randomly starts transmitting both devices will detect the collision
4. Both devices will transmit a jam signal to all the other devices, which indicates to them to not transmit
5. The system will increment a special counter every time the system sends out a transmission on the wire and senses a collision. After a certain number of times the system aborts the frame.
6. A random backoff timer is set for all systems if a collection is detected before transmitting again.
7. Most cases a collision will not happen again because of the random backoff timer

### Dynamic Host Configuration Protocol Server (DHCP) Server

- **DCHP Servers** assign IP (Internet Protocol) Addresses to connected systems. It's a way of assigning IP Addresses as systems connect to a network rather than assigning static IP addresses to a system
- DHCP is an Application layer protocol that uses DORA (Discover, Request, Offer, Acknowledgement) at layer 2 (Data Link Layer)
- **Scope** is a way of defining a range/pool of addresses within a subnet to reduce collision domains and assign IP Addresses from a DHCP Server.
- An IP Address can be assigned to a system with a **Lease** Time-a time in which the host system is given an IP address but must release it after such they must request the same IP address or a new one.
- One root domain starting with the "." (period) character.
- Common sub domains
   - .com - typically assigned to for-profit companies
   - .edu - assigned to education organizations
   - .gov - assigned to local or federal government websites
   - .int - assigned to international organizations such as NATO
   - .mil - strictly for military
   - .net - a network organization such as your ISP
   - .org - assigned to a nonprofit organizations
- **DHCP Relay** is if a message for a IP Address is relayed to another DHCP Server that may be on a different network and then forwarded back to the host system requesting one.

### Domain Name Server (DNS)

- **reverse lookup** is a way for finding a hostname based on the IP (internet protocol) address
- **DMZ** is an internal DNS server which provides lookups

#### Record Types

- A Record - an alias record that converts human readable characters or text into an IPv4 address
- AAAA Record - an alias record that converts human readable characters or text into an IPV6 address
- TXT Record - is a record which typically can be used to store any data but is often a way to confirm ownership of a domain
- PTR Record - is an alias record which sends an IP address or host name to another domains
- MX Record - is for mail exchange Servers
- SRV Record - is for a Service record that is stood up typically inside of an organization's intranet
- CNAME Record - is commonly used to alias one record for another such as www.example.com to example.com
- NS Records - strictly belong to Authoritative DNS Servers for a Domain

### Proxy Server

- A **proxy server** is a type of server that handles its client-machine requests by forwarding them on to other servers while allowing granular control over the traffic between the local LAN and the Internet. Proxy servers act at the Application Layer (Layer 7) of the OSI Model.
- **web proxy server** is usually used to create a web cache.
- **caching proxy server** is usually a caching proxy server speeds up the networks service requests by recovering information from a client's earlier requests.

### Encryption Appliances

An encryption appliance can sit in the middle of two connected lines and encrypt or decrypt information as it is sent along the physical medium

### Analog Modem

Analog Modems are device which convert phone signal into usable bytes to a computer network, at layer 1

### Packet Shaping

Packet Shaping is created by a device that can rate limit the amount of traffic come into a house or company so it doesn't flood the network

### Media Converter

Media converter is a device which can be used to convert the physical signals of transmitted on a network from one medium to another such as fiber to analog or copper wire signaling.

### IPAM (Internet Protocol Address Management)

- IPAM Software more easily allows for tracking IP Addresses which are used and assigned to Hosts.

### Creating a Network

Deciding factors for choosing equipment

- Growth of the network. How fast does the network need to be able to scale
- Available cost. What is the initial cost for the scope of the work, how much needs to be allocated for the future?
- Security. What compliances if any do you need to maintain or security concerns need to be mitigated
- Maintainability - How easy to troubleshoot the network matters

### Causes for Network Congestion

- Multicasting
- Lowe Bandwidth
- Adding hubs for connectivity to the network
- Broadcast storms
- Too many hosts in a broadcast domain

## Exam Essentials

- Understand how DHCP (Dynamic Host Configuration Protocol) works and it's purpose
- Understand how DNS (Domain Name System) Server works and it's purpose
- Understand the difference between a hub, a switch (bridge), and a router
- Remember the different names for a router
- Remember the various devices used on networks today, and when you would use each one, and how
- Identify the purpose, benefits, and characteristics of using a proxy service
- Describe the proper use of network segmentation when planning and implementing a basic Small Home, Small Office Network- Describe the benefits of using a network load Balancer
- Describe the benefits of using dedicated appliances for certain services

## Written Lab Questions

| Description | Device or OSI Layer |
|-------------|---------------------|
| This device sends and receives information about the network layer | |
| This layer creates a virtual circuit before transmitting between end stations | |
| A layer 3 switch or multiplayer switch | |
| This device uses hardware addresses to filter a network | |
| Ethernet is defined at these layers | |
| This layer supports flow control and sequencing | |
| This device can measure the distance to a remote network | |
| Logical Addressing is used at this Layer | |
| Hardware addresses are defined at this layer | |
| This device creates one big collision domain and one large broadcast domain | |
| This device creates many smaller collision domains, but the network is still one larger broadcast domain | |
| This device can never run full duplex | |
| This device breaks up collision domains and broadcast domains | |

<iframe src="https://quizlet.com/999179915/flashcards/embed?i=3896f3&x=1jj1" height="500" width="100%" style="border:0"></iframe>

## Review Questions

1. Which of the following is not a term used when making SOHO Internet connections?
   - [ ] A. Hub
   - [ ] B. Router
   - [ ] C. NIC
   - [ ] D. Switch
   - [ ] E. IDS/IPS
2. What advantage does a switch have over a hub
   - [ ] A. It discards frames
   - [ ] B. Transmissions received on one port will be sent out all the other ports
   - [ ] C. It recognized frames boundaries and destinations MAC addresses of incoming frames
   - [ ] D. Any two or more devices that switch connects are capable of causing a collision with each other
3. Which device is used to segment a network?
   - [ ] A. Hub
   - [ ] B. Switch
   - [ ] C. Repeater
   - [ ] D. All of the above
4. What is the primary function of a bridge?
   - [ ] A. Breaks up collision domains
   - [ ] B. Allows a NIC or other networking device to connect to a different type of media than it was designed for
   - [ ] C. Allows mobile users to connect to a wired network wirelessly
   - [ ] D. None of the above
5. A network device that is used to connect multiple devices together without segmenting a network is a ______
   - [ ] A. Hub
   - [ ] B. Wireless access point
   - [ ] C. Switch
   - [ ] D. Router
6. Which of the following is among the benefits of a switch?
   - [ ] A. Protect LAN Resources from attackers on the internet
   - [ ] B. Provides extra bandwidth
   - [ ] C. Reduces throughput
   - [ ] D. Allows access to all computers on the LAN
7. Which of the following devices can work at both layers 2 and 3 of the OSI model?
   - [ ] A. Hub
   - [ ] B. Switch
   - [ ] C. Multilayer switch
   - [ ] D. Bridge
8. What is an advantage of using DHCP in a network environment?
   - [ ] A. More difficult administration of the network
   - [ ] B. Static IP addressing
   - [ ] C. Can send an operating system for the PC to boot from
   - [ ] D. Assigns IP Addresses to hosts
9. What is a benefit of multilayer switch (MLS) over a layer 2 switch?
   - [ ] A. Less Bandwidth
   - [ ] B. Routing functions
   - [ ] C. Fewer features
   - [ ] D. Fewer ports
10. Which device should be used if you need to send incoming packets to on or more machines that are hidden behind a single IP address?
   - [ ] A. Switch
   - [ ] B. Load balancer
   - [ ] C. Hub
   - [ ] D. Repeater
11. What role does the A record in a Domain NAme Service (DNS) server have in your network?
   - [ ] A. Translate human name to IP address
   - [ ] B. Translates IP address to human name
   - [ ] C. Enables printing, copying, and faxing from one device
   - [ ] D. Controls network packets to optimize performance
12. Which device does not aid in network segmentation?
   - [ ] A. Router
   - [ ] B. Switch
   - [ ] C. Hub
   - [ ] D. Bridge
13. What is the most common use for a web proxy?
   - [ ] A. Web cache
   - [ ] B. Throughput increase
   - [ ] C. DHCP services
   - [ ] D. Support for the user authentication
14. Which is not an advantage of network segmentation?
   - [ ] A. Reducing congestion
   - [ ] B. Improving security
   - [ ] C. Containing network problems
   - [ ] D. Preventing broadcast storms
15. Users arrive at the office after a weekend and the hosts that were shutdown over the weekend are restarted but cannot access the LAN or internet. Hosts that were not shut down are working fine. Where can the problem be?
   - [ ] A. The DNS server
   - [ ] B. The DHCP server
   - [ ] C. The proxy server
   - [ ] D. The Firewall
16. You need a device that can prevent your users from accessing certain websites. Which device should you install?
   - [ ] A. Firewall
   - [ ] B. IDS
   - [ ] C. IPS
   - [ ] D. Proxy server
17. Which device creates separate collision domains and a single broadcast domain?
   - [ ] A. Hub
   - [ ] B. Router
   - [ ] C. Switch
   - [ ] D. Modem
18. Which of the following is _not_ an advantage of using appliances to offload services like encryption and content filtering?
   - [ ] A. Less Expensive
   - [ ] B. Reduced load on other devices
   - [ ] C. Additional functionality
   - [ ] D. Better performance
19. Which type of server in your network uses pointer and A records?
   - [ ] A. NAT translation server
   - [ ] B. IDS/IPS server
   - [ ] C. DNS server
   - [ ] D. Proxy server
20. Users on your network are saturating your bandwidth because they are using too many non work related sites. What device would limit the availability of the types of sites that users on a LAN have access to while providing granular control over the traffic between the local LAN and the internet?
   - [ ] A. Switch
   - [ ] B. DHCP server
   - [ ] C. DNS server
   - [ ] D. Proxy server

<iframe src="https://quizlet.com/999173192/flashcards/embed?i=3896f3&x=1jj1" height="500" width="100%" style="border:0"></iframe>

## Written Lab Answers

| Description | Device or OSI Layer |
|-------------|---------------------|
| This device sends and receives information about the network layer | Router |
| This layer creates a virtual circuit before transmitting between end stations | Transport |
| A layer 3 switch or multiplayer switch | Router |
| This device uses hardware addresses to filter a network | Bridge or Switch |
| Ethernet is defined at these layers | Data Link and Physical |
| This layer supports flow control and sequencing | Transport |
| This device can measure the distance to a remote network | Router |
| Logical Addressing is used at this Layer | Network |
| Hardware addresses are defined at this layer | Data Link (MAC sublayer) |
| This device creates one big collision domain and one large broadcast domain | Hub |
| This device creates many smaller collision domains, but the network is still one larger broadcast domain | Switch or bridge |
| This device can never run full duplex | Hub |
| This device breaks up collision domains and broadcast domains | Router |

## Review Answers

1. E
2. C
3. B
4. A
5. A
6. B
7. C
8. D
9. B
10. B
11. A
12. C
13. A
14. D
15. B
16. D
17. C
18. A
19. C
20. D
