---
title: Troubleshoot IP Networks
layout: page
parent: Explaining IPv4 Addressing
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/explaining-ipv4-addressing/troubleshoot-ip-networks/
---

# Troubleshoot IP Networks

[quizlet](https://quizlet.com/949836269/comptia-network-n10-008-troubleshoot-ip-networks-flash-cards/?i=3896f3&x=1qqt)

## Objectives

5.5 Given a scenario, troubleshoot general networking issues

## Hardware Failure and Network Interface Issues

While layer 3 of the OSI model (network layer) typically is the culperate of many issues it's good to look at some other common hardware or equipment problems.

### Power Issues

Power issues are best remediated through using basic home systems like UPSs (Uninterruptible power supplies) or backup generators which are more common in enterprise systems.

### Hardware Failure Issues

Switches or cables may be the source of the problem and can be checked using a loopback tool, checking device drivers on host machines, verifying the correct network adapters are bieng used on each end of the segment. 

### Interface Status Issues

Interface problems may be at the host, and can be easily verified by looking at the LED status indicator.

### Host Issues

If you have ruled out the physical layer as working, and the data link layer a working the next step is to look at the network layer (or the network configuration layer specifically). On windows you can use ipconfig or on Linux you can use `ip` or `ifconfig` to see the configuration output.

When looking at IP addresses it's important to verify that the systems are

- running on the same subnets
- are using the same DHCP server
- do not have a duplicate IP address as another host system

### Duplicate MAC (Media Access Control) Issues

You can use tools to verify the ARP Cache table on the network to see if there are possible duplicate entries for MAC addresses on the network; meaning there are two hosts that share the same address.
On windows systems you will typically get an error message when assigning a static IP on the network, on linux no such error will appear. Use `arp` or `arping` to verify the different information on the network for MAC addresses being used. https://manpages.debian.org/stretch/arping/arping.8.en.html

### Problem Isolation

![image](https://github.com/user-attachments/assets/0e6429ac-aebf-4645-9b2c-b2df65df2c86)

1. Ping the loopback address (ping 127.0.0.1) to verify TCP/IP is installed and loaded correctly. If this fails, reinstall the network protocol stack.
2. Ping the IP address of the local host to verify it was added correctly and to verify that the network adapter is functioning properly. If you cannot ping your own address, there might have been a configuration error, or the network adapter or adapter driver could be faulty.
3. Ping the IP address of the default gateway to verify it is up and running and that you can communicate with another host on the local network.
4. Ping the IP address of other hosts on the same subnet to test for local configuration or link problems.
   If a local host cannot be pinged and the error is destination unreachable, then verify the IP configuration does not contain an incorrect IP address or netmask. If these are correct but pings still time out, suspect either a security issue (such as a switch port security issue) or a problem at the data link or physical layer.

5. Ping the IP address of a remote host to verify you can communicate through the router. If a remote IP address cannot be contacted, check the default gateway parameter on the local host to rule out an incorrect gateway issue. If the gateway is configured correctly and you can ping the router, you need to start investigating the routing infrastructure.
6. 

### IGMP (Interenet Group Management Protocol)

A way of reducing traffic over a network that needs to be broadcast as a single-to-many packet system

## Review Activity: Troubleshoot IP Networks

1. User sont he floor served by a single switch cannot get a network connection. What is the best first step?

> Check that the switch is powered on and reset it. If that does not work, check for other causes such as a poorly seated plug-in module.

2. A workstation cannot connect to a server application on a remote network. What is the first test you could perform to establish whether the workstation's link is OK?

> Ping another local system, such as the default gateway

3. A technician is troubleshooting a network and has asked your advice. He is trying to ping 192.168.16.192. The network has been subnetted with the custom mask 255.255.255.224. Why might this return a “Destination host unreachable” message?

> The IP address resolves to the subnet network address, not a host address. Windows does not normally allow pinging the network address. Other OSs treat it as an alternative broadcast address, but most systems are configured to disallow such directed broadcasts for security reasons.

4. Two client hosts have intermittent connectivity issues when accessing a server service on another subnet. No other client hosts exhibit this problem. What configuration problem might you suspect?

> This is likely to be caused by a duplicate IP or MAC address. Replies from the server will be misdirected between the two hosts.

5. You have pinged the router for the local subnet and confirmed that there is a valid link. The local host cannot access remote hosts, however. No other users are experiencing problems. What do you think is the cause?

6. A Windows client workstation cannot access a help desk application server by its name support.515support.com. The service can be accessed using its IP address. What two command line tools should you use to identify possible causes of this issue?

> Use ipconfig to report the DNS servers that the client is trying to use and verify they are correct. Use ping to verify connectivity with the DNS servers.
