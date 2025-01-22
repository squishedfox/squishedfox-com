---
title: Chapter 5
layout: page
parent: Study Guide 
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-5/
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

### Multilayer Switch

A multilayer switch (MLS)

### Routers

Routers are layer 3 devices that are more intelligent versions of bridges and are actual hardware instead of just software. Routes can provide port forwarding, firewalls, virtual LANs. They can also hold onto best network paths to traverse and forward packets.

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




### IPAM (Internet Protocol Address Management)

- IPAM Software more easily allows for tracking IP Addresses which are used and assigned to Hosts.
