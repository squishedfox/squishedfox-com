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

- Remember Class A range
- Remember Class B Range
- Remember Class C Range
- Remember the Private IP Ranges
- Remember the Automatic Private Internet Protocol (APIPA) Ranges
- Understand why we need IPv6
- Understand link-local
- Understand unique-local
- Remember IPv6 addressing
- Understand and be able to read an EUI-64 address with the 7th bit inverted

## Written Lab Questions

### Part 1

1. What is the valid range used for a Class C private IP Address?
2. Name some of the benefits of IPv6 over IPv4
3. What is the term for the autoconfiguration technology responsible for addresses that start with 169.254?
4. What defines a unicast address?
5. What defines a multicast address?
6. What is the name of ra 48-bit (6-byte) numerical address physically assigned to a network interface, such as a Network Interface Card (NIC)
7. IPv6 has how many more bits, compared to addresses in IPv4?
8. What is the private address range for Class B networks?
9. What is the class C range of values for the first octet in decimal and in binary?
10. What is the 127.0.0.1 address used for?

### Part 2

1. Which type of packet is addressed and delivered to only a single interface?
2. Which type of address is used just like a regular public routable address in IPv4?
3. Which type of address is not meant to be routed?
4. Which type of address is not meant to be routed to the Internet but is still globally unique?
5. Which type of address is meant to be delivered to multiple interfaces?
6. Which type of address identifies multiple interfaces, but packets are delivered only to the first address it finds?
7. Which address type is also referred to as on-to-nearest?
8. IPv4 had a loopback address of 127.0.0.1. What is the IPv6 loopback address?
9. What does a link-local address always start with?
10. What does a unique local unicast range start with?

## Review Questions

1. Which of the following addresses is not allowed on the Internet?
    - [ ] A. 191.192.168.1
    - [ ] B. 191.168.169.254
    - [ ] C. 172.32.255.0
    - [ ] D. 172.31.12.251

2. A host automatically configured with an address from which of the following ranges indicates an inability to contact a DHCP server?
    - [ ] A. 169.254.0.x with a mask of 255.255.255.0
    - [ ] B. 169.54.x.x with a mask of 255.255.0.0
    - [ ] C. 169.254.x.x with a mastk of 255.255.255.255.0
    - [ ] D. 169.255.x.x with a mastk of 255.255.0.0

3. Which statement regarding private IP addresses is most accurate?
    - [ ] A. Private addresses cannot be used in inranets that require routing
    - [ ] B. Private addresses must be assigned by a registrar or ISP
    - [ ] C. A remote host accross the Internet cannot ping your host if it has a private address
    - [ ] D. Private addresses can only be used by a single administrative domain

4. Which of the following is a valid Class A address?
    - [ ] A. 191.10.0.1
    - [ ] B. 127.10.0.1
    - [ ] C. 128.10.0.1
    - [ ] D. 126.10.0.1

5. Which of the following is a valid Class B address?
    - [ ] A. 10.1.1.1
    - [ ] B. 126.1.1.1
    - [ ] C. 129.1.1.1
    - [ ] D. 192.168.1.1    

6. Which of the following describes a broadcast address?
    - [ ] A. All network bits are on (1s)
    - [ ] B. All host bits are on (1s)
    - [ ] C. All network bits are off (0s)
    - [ ] D. All host bits are off (0s) 

7. which of the following is a layer 2 broadcast?
    - [ ] A. FF.FF.FF.EE.EE.EE
    - [ ] B. FF.FF.FF.FF.FF.FF
    - [ ] C. 255.255.255.255
    - [ ] D. 255.0.0.0

8. in a class C IP address, how long is the network address?
    - [ ] A. 8 bits
    - [ ] B. 16 bits
    - [ ] C. 24 bits
    - [ ] D. 32 bits

9. Which of the following is true when described a unicast address?
    - [ ] A. packets addressed to a unicast address are delivered to a single interface
    - [ ] B. These are your typical publicly routable address, just like regular publicly routable address, in IPv4
    - [ ] C. These are like private address in IPv4 in that they are not meant to be routed
    - [ ] D. These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap

10. A host is rebooted and you view the IP address that is was assigned. The address is 169.123.13.3. Which of the following happened?
    - [ ] A. the host received an APIPA address
    - [ ] B. The host received a multicast address
    - [ ] C. The host received a public address
    - [ ] D. Teh host received a private address

11. An IPv4 address uses 32 bits. How many bits is an IPv6 address?
    - [ ] A. 64
    - [ ] B. 128
    - [ ] C. 192
    - [ ] D. 255

12. Which of the following is true when describing a multicast address
    - [ ] A. Packets addressed to a unicast address from a mulicast address are delivered to a single interface
    - [ ] B. Packets are delivered to all interfaces identified by the addresses. This is also called a on-to-many address
    - [ ] C. It identifies multiple interfaces and is delivered to only one address. This address can also be called on-to-on-of-many
    - [ ] D. These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap 

13. Which of the following is true when describing an anycast address?
    - [ ] A. Packets addresses to a unicast address from an anycast address are delivered to a single interface
    - [ ] B. Packets are delivered to all interfaces identified by the address. This is also called a on-to-many-address
    - [ ] C. This address identifies multiple interfaces, and the anycast packet is delivered to only address: the closest one. This address can also be called one-to-nearest
    - [ ] D. These addresses are meant for nonrouting purposes, but they are almost globally unique so it is unlikely they will have an address overlap 

14. You want to ping the loopback address of your local host. Which two address could you type? (Choose two)
    - [ ] A. ping 127.0.0.1
    - [ ] B. ping 0.0.0.0
    - [ ] C. ping ::1
    - [ ] D. trace 0.0.::1

15. What two statements about IPv6 addresses are true? (Choose two)
    - [ ] A. Leading zeroes are required
    - [ ] B. Two colons (::) are used to represent successive hexadecimal fields of zeroes
    - [ ] c. Two colons (::) are used to separate fields
    - [ ] D. A single interface will have multiple IPv6 addresses of different types

16. What two statements about IPv4 and IPv6 addresses are true (Choose two.)
    - [ ] A. An IPv6 address is 32 bits long, represented in hexadecimal
    - [ ] B. An IPv6 address is 128 bits long, represented in decimal
    - [ ] C. An IPv6 address is 32 bits long, represented in hexadecimal
    - [ ] D. An IPv6 address is 128 bits long, represented in decimal 

17. Which of the following is a Class C Network address?
    - [ ] A. 10.10.10.0
    - [ ] B. 127.0.0.1
    - [ ] C. 128.0.0.0
    - [ ] D. 192.255.254.0

18. Which of the following are private Internet Protocol (IP) addresses (Choose two)
    - [ ] A. 12.0.0.01
    - [ ] B. 168.172.19.39
    - [ ] C. 172.20.14.36
    - [ ] D. 172.33.194.30
    - [ ] E. 192.168.24.43

19. IPv6 unicast routing is running on the corp router. Which of the following addresses would be used as the EUI-64 address
    - [ ] A. FF02::3c3d:0d:bdff:fe3b:0d80
    - [ ] B. FE80::3c3d:2d:bdff:fe:3b:0d80
    - [ ] C. Fe80::3c3d:0d:bdff:fe:3b:0d80
    - [ ] D: FE80::3c3d:2d:ffbd:3bfe:0d80

20. Which of the following is an invalid IP address for a host?
    - [ ] A. 10.0.01
    - [ ] B. 128.0.0.1
    - [ ] C. 224.0.0.1
    - [ ] D. 127.0.0.1


## Written Lab Answers

### Part 1

1. The class c private range is 192.168.0.0 through 192.168.255.255
2. IPv6 has the following characteristics, among other,s that make it preferable to IPv4: more avaialble addresses, simpler header, options for authentication, and other security
3. Automatice Private IP Addressing (APIPA) is the technology that results in hosts automatically configuring themsevles with addresses that begin with 169.254
4. An IP address assigned to an interface, considered a on-to-one communication
5. One-to-many address
6. A MAC address, sometimes called a hardware address or even a burned in address
7. IPv6 has 128-bit (16 octet) address, compared to IPv4's 32-bit (4-octet) addresses, so 96 more bits than IPv4
8. 127.16.0.0 through 172.31.255.255
9. 192-233, 110xxxxx
10. Loopback or diagnostics. Actually, the full range of 127.0.01 through 172.255.255.255.254 is referred to as the loopback address

### Part 2

1. Unicast
2. Global Unicast
3. Link-local
4. Unique local (used to be called site-local)
5. Mulicast
6. Anycast
7. Anycast
8. ::1
9. FE80::/10
10. FC00::/7

## Review Question Answers

1. D
2. B
3. C
4. D
5. C
6. B
7. B
8. C
9. A
10. C
11. B
12. B
13. C
14. A, C
15. B, D
16. C, D
17. D
18. C, E
19. B
20. C
