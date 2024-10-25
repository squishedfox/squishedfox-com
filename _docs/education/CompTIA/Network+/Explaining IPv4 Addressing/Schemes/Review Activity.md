---
title: Review Activity
layout: page
parent: Schemes
grand_parent: Explaining IPv4 Addressing
has_children: true
permalink: /education/comptia/network-plus/explaining-ipv4-addressing/schemes/review-activity/
---

# Review Activity

## Summary

1. Convert the binary value 11110010 to decimal.

> Work out the value of the binary place positions: 128*1 + 64*1 + 32*1 + 16*1 + 8*0 + 4*0 + 2*1 + 1*0. Sum the result to derive the answer 242. 

2. Convert the decimal value 72 into binary. 

> Work out the binary place positions that add up to 72: 128*0 + 64*1 + 32*0 + 16*0 + 8*1 + 4*0 + 2*0 + 1*0. Transcribe the 0s and 1s to form an octet: 01001000. 

3. What is the dotted decimal representation of an 8-bit netmask? 

> An 8-bit mask means that each digit in the first octet is set to 1. Converted to dotted decimal, this becomes 255.0.0.0.

4. What is the dotted decimal representation of an 18-bit netmask? 

> The first two octets take up 16 bits. In the third octet, the first two bits are set to one. In decimal, this is 192 (128+64). Therefore, the full mask is 255.255.192.0.

5. Given an 18-bit netmask, are the IP addresses 172.16.1.10 and 172.16.54.10 on the same network? 

> Yes. Convert the IP addresses to binary, and you will see that the first 18 binary digits in each address are the same (10101100 00011110 00). 

6. If the network ID is 10.1.0.0/22, how many IP addresses are available for allocation to host interfaces?

> 1,022. With a 22-bit mask, from the 32-bit IP address, there are 10 bits left for host addressing (32-22). 2 to the power 10 (210) is 1,024. You then need to subtract two for the network and broadcast addresses, which cannot be assigned to host interfaces.