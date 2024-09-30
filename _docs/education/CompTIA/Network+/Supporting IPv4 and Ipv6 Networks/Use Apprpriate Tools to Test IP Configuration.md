---
title: 
layout: page
parent: Explaining IPv4 Addressing
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/explaining-ipv4-addressing/use-appropriate-tools-to-test-ip-configuration/
---

# Use Appropriate Tools for IP Configuration

[quizlet](https://quizlet.com/949821552/comptia-network-n10-008-test-ip-configuration-flash-cards/?i=3896f3&x=1qqt)

## Objectives

1.5 Explain common parts and protocols, their application, and encrypted alternatives (ICMP only)
5.3 Given a scenario, use the appropriate network software tools and commands

## IP Interface Configuration in Windows

Windows can have it's IP addresses assigned through DHCP (Dynamic Host Configuration Protocol) or through static IP (Internet Protocol) assignment. Typically these settings persist until the netxt time any changes are made, including reboots.

Utilities such as `netsh` are used on windows to look at and configure network interface adapters using powershell or command line.

## ipconfig

`ipconfig` is a very command utility in windows that can be used to report different adapters and their configurations.

### Common commands

- `ipconfig` will display the IP address, subnet mask, and default gateway (router) for all network interfaces to which TCP/IP is bound
- `ipconfig /all` displays complete TCP/IP configuration paramters for each ineterface, including whether the Dynamic Host Configuration Protocol (DHCP) is eneabled fot he itnerface and the interface's hardware-MAC (Media Access Control)-address.
- `ipconfig /renew interface` forces a DHCP client to review the lease it has for an IP (Internet Protocol) address
- `ipconfig /release interface` release the IP (Internet Protocol) obtained from a DHCP (Dynamic Host Configuration Protocol) Server so that the interface(s) will no longer have an IP (Internet Protocol) address.
- `ipconfig /displaydns` displays the domain name system (DNS) resolver cahce
- `ipconfig /flushdns` clears the DNS resolver cache
- `ipconfig /registerdns` registers the host with a DNS server (if it supports dynamic updates).

## ifconfig and ip

Linux systems use the ifconfig or the newer terminal utility called `ip` they both can be used similar to their window counterpart `ipconfig` to display different network adapter and configuration information on the host machine.

## ARP Cache Utility

Address Resolution Protocol (ARP) utility is used by hosts to determine which MAC (Media Access Control) address is associated with an IP (Internet Protocol) on the local network.

### How it works

ARP sends out a broadcast message-meaning the packagets of information are sent out to all host machines that are reachable on the network. Once the destination machine has responded, then the ARP caches the result so it knows where to send the packets from now one instead of broadcasting to everyone.

### Common Commands

- `arp -a` or `arp -g` shows the ARP cache contents.
- `arp -s IPAddress MACAddress` adds an entry to the ARP cache.
- `arp -d *` can be used to delete one or more ARP cache entries.

## Internet Control Message Protocol and Ping

### Internet Control Message Protocol (ICMP)

ICMP is used to report errors and send mesages about the delivery of a package. ICMP messages are generated under error conditions in most types of unicast traffic, but not for broadcast or multicast packets.

ICMP, like ping, can also be used to troubleshoot IP networks and understand breakdowns.

### Ping

Pign is a utility for testing if a host machine is reachable or not. Some systems are setup to purposefully not be pingable for security purposes.

## Review Activity

1. How can you check the IP configuration of an interface on an end system host at the command line?

> On Windows, run ipconfig (or netsh interface ip show config or Get-NetIPAddress). On Linux, run ifconfig or ip a.

2. What output would you expect when running the command ip neigh?

> IP:MAC address mappings held in the ARP cache of a Linux host.

3. True or False, the arp utility will alway sshow another host's MAC address if that host is on the same subnet.

> False. While that is the function of the Address Resolution Protocol, the arp utility is used to inspect the ARP table cache, which may or may not contain the other host's address. Note that a standard means to ensure the MAC address is cached is to ping the destination address first. This is the basis of a utility called arping.

4. Output from a ping command reports ome values in milliseconds. What does this measure?

> Round Trip Time (RTT) is a measure of the latency or delay between the host sending the probe and receiving a reply. ping will report minimum, maximum, and average RTT values.

5. True or False? Receiving an echo reply message indicates that the link between two hosts is operational.

> True.