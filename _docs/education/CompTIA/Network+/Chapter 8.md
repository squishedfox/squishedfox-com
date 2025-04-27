---
title: Chapter 8 
layout: page
parent: Study Guide 
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-8/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 8 IP Subnetting, Troubleshooting IP, and Introduction to NAT 

### Objectives

1.4 Given a scenario, configure a subnet and use appropriate IP addressing schemes

### Resources

I suggest looking at https://subnetipv4.com/ and using these videos and examples to help you walk through how to solve and practice subnetting

### How to Create Subnets 

1. Determine the number of required network IPs
2. Determine the number of required host IDs per submit
3. Based on the previous requirements, create one submet mask for your entire network, a unique subnet ID for each physical segment, and a range of host IDs foreach subnet

You will always be looking for the following information

- Network ID
- Broadcast IP
- First Host IP
- Last Host IP
- Next Network
- Number of IP Addresses CIDR/Subnet

### Subnet Masks

A 32 bit value that allows the recipient of IP packets to distinguish the network ID portion of the IP address form the host ID portion of the IP address

| Class | Format | Default subnet mask |
|-------|--------|---------------------|
| A     | network.host.host.host | 255.0.0.0 |
| B     | network.network.host.host | 255.255.0.0 |
| C     | network.network.network.host | 255.255.255.0 |

### Classless Inter-Domain Routing (CIDR)

Sometimes this concept is also called variable-length subnet masking (VLSM)

Sometimes we receive 192.168.10.32/28. This is telling you what your subnet mask is. The "/" notation is telling you how many bits are on (1s). The max number of bits that can be turned on is 32 because there are four bytes in an IPv4 Address and 8 bits per part. 4 x 8 = 32. 

The largest however can only ever be a /30 because you have to keep at least 2 bits for host address.

## Exam Essentials

**Remember the steps to subnet in your head** Understand how the IP addressing and subnetting work. First, determine your block size by using the 256-subnet mask math. Then, count your subnets and determine the broadcast address of each subnet-it is always the number right before the next subnet. Your valid hosts are the numbers between the subnet address and the broadcast address.
**Understand the various block sizes** This is an important part of understanding IP addressing and subnetting. The valid block sizes are always 4,8,16,32,64,128, and so on. You can determine your block size by using the 256-subnet mask math.
**Remember the four diagnostic steps** The four simple steps for troubleshooting are ping the loopback address, ping the NIC, aping the default gateway, and ping the remote device.
**You must be able to find and fix an IP Addressing problem** Once you go through the four troubleshooting steps, you should be able to determine the IP addressing problem by drawing out the network and finding the valid and invalid hosts addressed in your network
**Understand Basic NAT terminology** You want to know the difference between inside and local and inside global. Inside local is before translation, and inside global is after translaction. Inside global is defined as a registered address that represents an inside host to an outside network. You should be also understand PAT and how it works by using different port numbers to map multiple private IP addresses to a single registered IP Address.

## Written Lab Questions

Write the subnet mask, subnet address, broadcast address, and valid host range for questions 1 through 6

1. 192.168.100.25/30
2. 192.168.100.17/28 
3. 192.168.100.66/27
4. 192.168.100.17/29
5. 192.168.100.99/26
6. 192.168.100.99/25
7. You have a Class B network and need 29 subnets. What is your mask?
8. What is the broadcast address of 192.168.192.10/29
9. How many hosts are available with a Class C/29 mask?
10. What is the subnet for the host ID 172.16.3.65/23?


## Review Questions

