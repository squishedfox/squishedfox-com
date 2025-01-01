---
title: Explain the Use of Network Addressing Services 
layout: page 
parent: Explaining Network Services 
grand_parent: Network+ 
has_children: true
permalink: /education/comptia/network-plus/explaining-network-services/Explain-the-Use-of-Network-Addressing-Services/
---

# Explaining Network Services

## Explain the Use of Network Addressing Services

### Objectives

- 1.5 Explain Common application protocols, their application, and encrypted alternatives (DHCP only)
- 1.6 Explain the use and purpose of network services

### Dynamic Host Configuration Protocol

Below are the steps for when a client is negotiating an IP address on a network. All steps are completed over User Datagram Protocol (UDP)

1. The client establishes a physical connection to the network
2. Client sends out a DHCPDISCOVER packet onto the network and listens on port 67 for  DCHPOFFER packet
3. Server listens on port 67 for DCHPDISCOVER packet and responds with DCHPOFFER packet containing the IP address information
4. Client recives IP address information and sends a DHCPREQUEST packet
5. Server responds with DCHPACK packet if the address is still available
  - if the address is no longer available the client will request a new IP address by starting the process over

#### Leasing

A client may only lease an IP address for a period of time until it is either forcably releasesd and no longer receives packets from the server, manually released, or a session expires and it must request the same or a new IP addrss.

### DCHP Server Configuration

- A DHCP can be deployed using a **router** or a **switch** on a network
- A scope is a definition for DCHP servers to be able to hand out a start and end IP address range within a network. A scope is tied 1-to-1 with a subnet

### DHCP Options Configuration

#### Leasing

Two timers maintain the lease of an IP address binding on a client. The T1 timer maintains the first attempt at trying to establish a new lease with any DHCP server on the network. If no server responds the client waits until the T2 timer has expired. If the server still has not responded then the client releases the IP address binding and attempts to establish a new connection

#### DCHP Options

Common DHCP Server configurations that are sometimes shared and stored on the client

- Default Gateway
- The IP addresses of DNS servers that can act as resolvers for queries
- DNS Suffix to the client

#### Questions and Answers

1. True or False? If a client accepts a DHCPOFFER, the DHCPREQUEST packet is broadcast on the network.

> True.

2. When configuring multiple DHCP servers for redundancy, what should you take care to do? 

> Configure the servers with nonoverlapping address scopes. 

3. True or False? DHCP options can be configured on a per-scope basis.

> True.

4. What address is used to contact a DHCPv6 server?

> IPv6 does not support broadcasts, so clients use the multicast address ff:02::1:2 to discover a DHCP server. 

5. In a stateless environment, what sort of information does DHCPv6 provide? 

> In a stateless environment, the host autoconfigures an address using a network prefix provided by the router (typically). DHCPv6 is then used to provide the IPv6 addresses used to access network services, such as DNS or SIP gateways.
