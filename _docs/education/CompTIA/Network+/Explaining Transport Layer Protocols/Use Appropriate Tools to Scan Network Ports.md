---
title: Use Appropriate Tools to Scan Network Ports
layout: page 
parent: Explaining Transport Layer Protocols 
grand_parent: Network+
has_children: false 
permalink: /education/comptia/network-plus/explaining-transport-layer-rotocols/Use-Appropriate-Tools-to-Scan-Network-Ports/
---

# Use Appropriate Tools to Scan Network Ports

[quizlet](https://quizlet.com/964908441/comptia-network-n10-008-flash-cards/?i=3896f3&x=1jqt)

## Objectives

5.3 Given a scenario, use the appropriate network software tools and commands.

## Host and Port Scanning

Hosts and Port scanning can be done using Angry IP or NMAP. These tools can also be used to find network toplogy.

The most basic techniques use the ping, arp, and traceroute tools

## NMAP

Nmap is open source tool which can be used to find open ports on a specific host.

Nmap can also do ARP and Neighbor Discover (ND) sweeps.

Learn more at https://nmap.org/book/host-discovery-techniques.html

## Netstat

Netstat allows for checking ports and services that use them on a host.

Netstat is a good tool for checking for misconfigurations.

You may also be able to identify suspicious remote connections to services on the local host or from the host to remote IP addresses

## Remote Port Scanners

Netstat can tell you information about your own system's configuration and information, you can use a remote port scanner to find out in formation about other systems on the network. Nmap is a tool that can be used as a remote port scanner

## Protocol Analyzer

Wireshark is the go-to market tool as a packet sniffer/capture tool on a network. 

Part of the work is to is to create a readable format for packet payloads and their headers for the end user.

another part of the job of a protocol analyzer is to do traffic analysis. The tool should allow metrics and break downs of source and destination packets. 

## Review Activity:

1. What type of scanning tool outputs a "Host is up" status report.

> IP scanner. Note that while most IP scanners can also function as port scanners they are distinct types of scanning activity.

2. You are auditing the service configuration of a Linux server. Which command can you use to check the PID associated with a TCP port, even if there are no active connections?

> IP scanner. Note that while most IP scanners can also function as port scanners they are distinct types of scanning activity.

3. A technician has identified an undocumented host using an IP address in a range set aside as unallocated. The technician is going to run a fingerprinting scan. What type of information could this yield about the host?

> A fingerprinting scan compares specific responses to known information about hardware platforms, OS types and versions, and application/service types and versions.

4. You need to analyze the information saved in a .pcap file. What type of command-line tool or other utility is best suited to this task?

> This type of file will contain a network packet capture. You could use a command-line protocol analyzer such as tcpdump to display the contents, but a graphical tool such as Wireshark will make analysis easier.