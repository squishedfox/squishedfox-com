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

| Class | Format                       | Default subnet mask |
| ----- | ---------------------------- | ------------------- |
| A     | network.host.host.host       | 255.0.0.0           |
| B     | network.network.host.host    | 255.255.0.0         |
| C     | network.network.network.host | 255.255.255.0       |

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

1. What is the maximum number of IP addresses that can be assigned to hosts on a local subnet that uses the 255.255.255.224 subnet mask?

A. 14
B. 15
C. 16
D. 30
E. 31
F. 62

2. You have a Class A host of 10.0.0.1.10/25. It needs to communicate to a host with an IP address of 10.0.0.210/25. Which of the following devices do you need to use in order for the hosts to communicate?

   A. a layer 2 switch
   B. Router
   C. DnS server
   D. Hub

3. What is the subnetwork address for a host with the IP address 200.10.5.68/28?

   A. 200.10.5.56
   B. 200.10.5.32
   C. 200.10.5.64
   D. 200.10.5.0

4. The network address of 172.16.0.0/19 provides how many subnets and hosts?

   A. 7 Subnets, 30 hosts each
   B. 7 subnets, 2046 hosts each
   C. 7 subnets, 8190 hosts each
   D. 8 subnets, 30 hosts each
   E. 8 subnets, 2046 hosts each
   F. 8 subnets, 8190 hosts each

5. You receive a call from a user who is complaining that they cannot get the internet. You have them verify their IP address, mask, and default gateway. The IP address is 10.0.37.144, which a subnet mask of 255.255.254.0. The default gateway is 10.0.38.1. What is the problem?

   A. Incorrect DNS server address
   B. Invalid subnet mask
   C. Incorrect gateway IP
   D. IP adresss and mask not compatible

6. If a host on a network has the address 172.16.45.14/30, what is the subnetwork this host belongs to?

   A. 172.16.45.0
   B. 172.16.45.4
   C. 172.16.45.8
   D. 172.16.45.12
   E. 172.16.45.16

7. On a network, which mask should you use on point-to-point WAN links in order to reduce the waste of IP addresses?

   A. /27
   B. /28
   C. /29
   D. /30
   E. /31

8. On which of the following devices are you most likely to be able to implement NAT?

   A. Hub
   B. Ethernet switch
   C. Router
   D. Bridge

9. You have an interface on a router with the IP address of 192.168.192.10/29. Including the router interface, how many hosts can have IP addresses on the LAN attached to the router interface?

   A. 6
   B. 8
   C. 30
   D. 62
   E. 126

10. When configuring the IP settings on a computer on one subnet to ensure that it can communicate with a computer on another subnet, which of the follow is desirable?

    A. configure the computer with the same default gateway as the other computer.
    B. Configure the computer with the same subnet mask as the other computer.
    C. Configure the computer with a default gateway that match the IP address of the internet face of the router that is attached to the same subnet as the computer.
    D. Configure the computer with a subnet mask that matches the IP address of the interface of the router that is attached to the same subnet as the computer.

11. You have an interface on a router with IP address of 192.168.192.10/29. What is the broadcast address the hosts will use on this LAN.

A. 192.168.192.15
B. 192.168.192.31
C. 192.168.192.63
D. 192.168.192.127
E. 192.168.192.255

12. What is the highest usable address on the 172.16.1.0/24 network?

    A. 172.16.1.255
    B. 172.16.1.254
    C. 172.16.1.253
    D. 172.16.1.23

13. A network administrator is connecting two hosts directly through their ethernet interfaces. Ping attempts have been unsuccessful. What can be done to
    provide connectivity between the hosts? (Choose two.)

    |            | Computer A      | Computer B      |
    | ---------- | --------------- | --------------- |
    | IP Address | 192.168.1.20    | 192.168.1.201   |
    | Mask       | 255.255.255.240 | 255.255.255.240 |

    A. A crossover cable should be used in place of the straight-through cable
    B. A rollover cable should be used in place of the straight-through cable
    C. The subnet mask should be set to 255.255.255.192
    D. A default gateway needs to be set on each host
    E. The subnet mask should be set to 255.255.255.255.0

14. If an Ethernet port on a router was assigned an IP address of 172.16.112.1/25, what would be the subnet address of this host?

    A. 172.16.112.0
    B. 172.16.0.0
    C. 172.16.96.0
    D. 172.16.255.0
    E. 172.16.128.0

15. Using the following illustration, what would be the IP address of E0 if you were using the eight subnet? The network ID is 192.168.10.0/28, and you need to use the last available IP address in the range. The 0 subnet should not be considered valid for this question.

    A. 192.168.10.142
    B. 192.168.10.66
    C. 192.168.100.254
    D. 192.168.10.143
    E. 192.168.10.126

16. Using the illustration in question 15, what would be the IP address of E0 if you were using the first subnet? The network ID is 192.168.10.0/28, and you need to use the last available IP address in the range. Again, the 0 subnet should not be considered valid for this question.

    A. 192.168.10.24
    B. 192.168.10.62
    C. 192.168.10.30
    D. 192.168.10.127

17. if you are forced to replace a router that has failed to the point that you are unable to access its current configuration to aid in setting up interface addresses on the new router, which of the following can you reference for assistance?

    A. The default gateway settings on computers form each subnet that the old router interconnected.
    B. The router's configuration that was periodically cached on the DHCP server
    C. The router's configuration that was periodically cached on the DNS server
    D. The new router will aut-configure itself with the correct settings

18. You have a network with a subnet of 172.16.17.0/22. Which of the following is a valid host address?

    A. 172.16.17.1 255.255.255.252
    B. 172.16.0.1 255.255.240.0
    C. 172.16.20.1 255.255.254.0
    D. 172.16.16.1 255.255.255.240
    E. 172.16.18.255 255.255.252.0
    F. 172.16.0.1 255.255.255.0

19. Your router has the following IP address on Ethernet0: 172.16.2.1/23. Which of the following can be valid host IDs on the LAN interface attached to the router? (Choose two.)

    A. 172.16.0.5
    B. 172.16.1.100
    C. 172.16.1.198
    D. 172.16.2.255
    E. 172.16.3.0
    F. 172.16.3.255

20. You have on IP address provider from your ISP with a /30 mask. However, you have 300 users that need to access the Internet. What technology will you use to implement a solution?

    A. PAT
    B. VPN
    C. DNS
    D. LANS

## Written Lab Answers

1. 192.168.100.25/30. A /30 is 255.255.255.252. The valid subnet is 192.168.100.24, broadcast is 192.168.100.27, and the valid hosts are 192.168.100.25 and 26
2. 192.168.100.37/28. A /28 is 255.255.255.240. The fourth octet is a block size of 16. Just count by 16s until you pass 37. 0, 16, 32, 48. The host is in the 32 subnet, with a broadcast address of 47. Valid hosts are 33-46
3. 192.168.100.66/27. A /27 is 255.255.255.224. The fourth octet is a block size of 32. Count by 32s until you pass the host address of 66. 0, 32, 64. The host is in the 64 subnet, broadcast address of 95. The valid host range is 65-94
4. 192.168.100.17/29. A /29 is 255.255.255.248. The fourth octet is a block size of 8. 0, 8, 16, 24. Teh host is the 16 subnet, broadcast of 23. Valid hosts are 17-22
5. 192.168.100.99/26. A /26 is 255.255.255.192. The fourth octet has a block size of 64. 0, 64, 128. The host is in the 64 subnet, broadcast of 127. Valid hosts are 65-126.
6. 192.168.100.99.25. A /25 is 255.255.255.128. The fourth octet is a block size of 128. 0, 128. The host is in the 0 subnet, broadcast of 127. Valid hosts are 1-126.
7. A default Class B is 255.255.0.0. A class B 255.255.255.0 mask is 256 subnets, each with 254 hosts. We need fewer subnets. If we use 255.255.240.0, this provides 16 subnets. lets add one more subnet bit. 255.255.248.0. This is 5 bits of subnetting, which provides 32 subnets. This our best answer, a /21.
8. A /29 is 255.255.255.248. This is a block size of 8 in the forth octet. 0, 8, 16. The host is in the 8 subnet, and broadcast is 15.
9. A /29 is 255.255.255.248, which is 5 subnet bits and 3 host bits. This is only 6 hosts per subnet.
10. A /23 is 255.255.254.0. The third octet is a block size of 2. Starting at 0, 2, 4. The host is in the 16.2.0 subnet; the broadcast address is 16.3.255

## Review Answers
