---
title: Chapter 4 
layout: page
parent: Study Guide 
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-4/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 4 The Current Ethernet Specifications

### Objectives

- 1.3 Summarize the types of cables and connectors and explain which is the appropriate type for a solution

### Formats and Encoding Schemes

**Binary**

- Binary numbers have two states and for humans are read right to left. The Number 1001 represents the number 10 in decimal. 

Reading 1001 from right to left

1 = 1 (1 bit is turned on)
0 = 0 (2 bit is turned off)
0 = 0 (4 bit is turned off)
1 = 8 (8 bit is turned on)
-----
    9 (sum total)

**Hexidecimal**

Hexidecimal has 16 different states and can be left to right. 

| Decimal | Hexidecimal |
|---------|-------------|
| 1       | 1           |
| 2       | 2           |
| 3       | 3           |
| 4       | 4           |
| 5       | 5           |
| 6       | 6           |
| 7       | 7           |
| 8       | 8           |
| 9       | 9           |
| 10      | A           |
| 11      | B           |
| 12      | C           |
| 13      | D           |
| 14      | E           |
| 15      | F           |

### MAC (Media Access Control) Assignment

Each NIC (Network Interface Card) has its own unique MAC address that is 48 bits long

**How it works**

1. The first 24 bits are resevered for the vendor that created the card
2. 22 Bits are reserved for a UUID which was assigned by the IEEE
3. 1 bit is reserved for L/G
4. 1 bit is reserved for L/G

The lsat two bits are flags (L/G means local/Global) to tell whether the MAC address being used was assigned locally or if it is the Burned in Mac Address (BIA)

### Ethernet

Ethernet cabling relies on the PHysical and Data LInk Layers of the OSI models. It is the physical medium which carries signals between nodes.

#### Frames

The Data Link Layer (Layer 2) converts bits into bytes, and bytes into Frames

### Collisions Domains

Collision domains are when devices can only transmit signals onto a network one at a time without overwriting each other. 

Example:

Each time Bob transmits a signal onto the network, Sally is forced to listen to it until bob's message as fully been received. Sally cannot simply transmit their signal at the same time.

### Broadcast Domain

Broadcast domain is when devices can hear each other or reach each other over the network

### CSMA/CD

CSMA/CD stands for Carrier Sense Multiple Access with Collision detection. The tool was created as a way for devices to broadcast and share bandwidth on a network evenly.

**How it works**

1. Collision is detected
2. A jam signal informs all devices that a collision has occurred  
3. The collision invokes a random backoff algorithm
4. Each device on the Ethernet segment stops transmitting for a short time until the timer expires
5. All hosts have equal priority to transmit after the timers have expired

### Half vs Full Duplex

**Characteristics of Half Duplex**

- Can only transmit or receive, not both
- Uses one twisted pair
- Lower effective throughput than full duplex

**Characteristic of Full Duplex**

- No collision domains
- Can send and receive at the same time
- Uses two twisted pair
- Higher effective throughput than half duplex
- Dedicated switch port is required for each full duplex host
- Hubs do not support Full Duplex

### Broadband

Broadband is what all Ethernet (as of 2025) uses today. Broadband allows for multiple signal types to be carried, e.g. Analog voice and Digital Data

### Wavelength-Division Multiplexing

- CWDM - Course Wavelength-Division Multiplexing - allows for up to 18 channels to be transported over a single dark fiber
- DWDM - Dense Wavelength-Division Multiplexing - more than 80 individual wavelengths can share a single fiber
- WDM - bidirectional Wavelength-Division Multiplexing - used in carrier and service provider networks to maximize the use of buried fiber

### IEEE Baseband Standards

#### 802.3

- 10Base2 - Thinnet capable for running 10 Mbps for up to 30 workstations using coax over 185 meters
- 10Base5 - Thicknet capable for running 10 Mbps using coax over 500 meters
- 10BaseT - Each device must connect into a hub or switch with only 1 host at each segment

#### 802.3u

- 100BaseTX - 100 Mbps using Cat5, 5e, or 6 UTP (Untwisted pair) allowing one user per segment over 100 meters
- 100BaseFX - Multimode fiber optic cabling that can run up to 412 meters long
- 1000BaseCX - Copper twisted-pair called twinax that can only go 25 meters long with a 9 pin connector
- 1000BaseT - Category 5, four pair UTP (Untwisted Pair Wiring) and up to 100 meters long
- 1000BaseTX - Category 5 two-pair UTP wiring up to 100 metres long
- 1000BaseSX - Multimode fiber optic cable with short wave length and going up to 220 meters with 62.5 micron; and 550 meters with 50-micron
- 1000BaseLX- Single mode fiber that uses a 9-micron core, 1,300 nm laster and can go from 3km up to 10 km
- 10GBaseT - 10 Gbps connections over 100 meter distance
- 10GBaseSR - Short wavelength mutlimode fiber optic using 850 nm lasers over a distance of 300 meters

## Written Lab

## Review Questions

<iframe src="https://quizlet.com/994666342/test/embed?i=3896f3&x=1jj1" height="500" width="100%" style="border:0"></iframe>

1. On an ethernet switch network, what address does one host computer use to communicate with another

   - [ ] A. IP Address 
   - [ ] B. MAC address
   - [ ] C. Street address
   - [ ] D. HUB Address

2. Which of the following can run full-dupliex and achieve 200 Mbps with Cat5e cable?

   - [ ] A. 100BaseF
   - [ ] B. 100BaseTX
   - [ ] C. 1000BaseF
   - [ ] D. 1000BaseT

3. How many devices in a collision domain have to listen when a single host talks?

   - [ ] A. Two
   - [ ] B. Three
   - [ ] C. One
   - [ ] D. All

4. If you are using a cable medium called 10Base2, what does this mean?

   - [ ] A. That you are running Ethernet over HDMI
   - [ ] B. That you are running Ethernet over fiber
   - [ ] C. That you are running Ethernet over thickent
   - [ ] D. That you are bundling multiple connections
   - [ ] E. That you are rearly old and using thinnet coax for your LAN medium 

5. What network access control method helps devices share the bandwidth evenly without having two devices transmit at the same time on the network medium

   - [ ] A. TCP/IP
   - [ ] B. CSMA/CD
   - [ ] C. HTTPS
   - [ ] D. TFTP
   - [ ] E. CSMA/CA

6. What is the maximum distance of 10GBaseSR?

   - [ ] A. 100 meters (328 feet)
   - [ ] B. 302 meters (990 feet)
   - [ ] C. 305 meters (1,000 feet)
   - [ ] D. 1,593 km (990 miles)

7. How many wire pairs are used with half-duplex

   - [ ] A. Two
   - [ ] B. One
   - [ ] C. Four
   - [ ] D. None of the above

8. How many wire pairs are used with 100BaseTX full-duplex

   - [ ] A. Two
   - [ ] B. One
   - [ ] C. Four
   - [ ] D. A, or C

9. What is the maximum distance of 10GBaseLR?

   - [ ] A. 1 mile away
   - [ ] B. 3 miles away
   - [ ] C. 6 miles away
   - [ ] D. 25 miles away

10. What is the effective total throughput increase with a full-duplex connection

   - [ ] A. None
   - [ ] B. Twice as much
   - [ ] C. Four times as much
   - [ ] D. Ten times as much

11. What device can you not use full-duplex communication with?

   - [ ] A. Host
   - [ ] B. Hub
   - [ ] C. Switch
   - [ ] D. Router

12. What is the decimal equivalent of 11000000.10101000.00110000.11110000?

   - [ ] A. 192.168.48.192
   - [ ] B. 192.168.48.240
   - [ ] C. 192.168.64.224
   - [ ] D. 192.168.32.248

13. Which IEEE standard is used for Ethernet over power lines?

   - [ ] A. 802.3
   - [ ] B. 1901
   - [ ] C. 802.16
   - [ ] D. 1918

14. How is the decimal value 10 represented in binary?

   - [ ] A. 1000
   - [ ] B. 1001
   - [ ] C. 1010
   - [ ] D. 1011

15. What is the decimal value for the binary number 11101000?

   - [ ] A. 128
   - [ ] B. 194
   - [ ] C. 224
   - [ ] D. 232 

16. What is the decimal number 10 in hexidecimal?

   - [ ] A. 9
   - [ ] B. A
   - [ ] C. C
   - [ ] D. B

17. How many bits is a MAC address?

   - [ ] A. 16
   - [ ] B. 32
   - [ ] C. 48
   - [ ] D. 64

18. What is the maximum distance of 1000BaseT?

   - [ ] A. 100 meters (328 feet)
   - [ ] B. 128 meters (420 feet)
   - [ ] C. 1,000 meteres (3280 feet)
   - [ ] D. 1,024 meteres (3360 feet)

19. What is the purpose of the frame check sequence (FCS) in an Ethernet frame?

   - [ ] A. Error correction
   - [ ] B. Error Detection
   - [ ] C. Error Recovery
   - [ ] D. Creating errors

20. What does the Base mean in the 100BaseTX?

   - [ ] A. Broadband
   - [ ] B. 100 Mbps
   - [ ] C. Baseband
   - [ ] D. Twisted-pair at 100Mbps

## Written Lab Answers

## Review Question Answers

1. B
2. B
3. D
4. E
5. B, E
6. B
7. B
8. A
9. C
10. B
11. B
12. B
13. B
14. C
15. D
16. B
17. C
18. A
19. B
20. C