---
title: Install and Troubleshoot Routers 
layout: page
parent: Configuring and Troubleshooting Routers
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/configuring-and-troubleshooting-routers/install-and-troubleshoot-routers/
---

# Install and Troubleshoot Routers 

# Objectives

1.4 Given a scenario, configure a subnet and use appropriate IP addressing schemes (subinterfaces only)
2.1 Compare and contrast various deviecs, their features, and their appropriate placement on the network.
5.3 Given a scenario, use the appropriate network software tools and commands.
5.5.Given a scenario, troubleshoot general networking issues 

## Edge Routers

Used by organizations to provide access to External Networks coming in.

### Key Functionality

1. Routing
2. Network Address Translation (NAT)
3. Firewalling
4. VPN Termination
5. Traffic Shaping and QoS
6. Redundancy and High Availability

## Internal Routers

An internal router has no access to a public network. An internal router is meant to implement whatever topology is necessary for subnetting or forwarding traffic.

### Subinterfaces

A sub interface can be created using a router and a Virtual (LAN) where a single interface can span to several other virtually created interfaces on the network.

### Layer 3 Switch

A layer 3 switch can create a virtual lan and forward traffic to the appropriate network interfaces. This is more efficient than passing traffic between a switch and a router.

## Router Configuration

A router is best configured over a network using a virtual interface and ssh tunnel rather than a physical interface in the event that a fault occurs and a physical interface used specifically for configuration no longer is available.

## Route cmd

Route is a cmd is used on Windows and Linux Systems to modify the routing table of the end system windows and linux hosts.

## Tracert and Traceroute

### Traceroute

Traceroute is supported by LInux and router Operating Systems that uses UDP probing messages by default to find a broken path between node(s).

Traceroute uses a TTL (Time to Live) of 1 and the port 32767. The first hop should reduce this to zero and respond with an ICMP Time Exceeded message.

## Tracert

Tracert is a windows system specific command that uses ICMP Echo Request pobles by default. the command issues an Echo Request probe with a TTL (Time to Live) of 1.

## Review Activity:

