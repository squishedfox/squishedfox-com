---
title: Chapter 3
layout: page
parent: Study Guide
grand_parent: Network+
permalink: /education/comptia/network-plus/chapter-3/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 3 Networking Connectors and Wiring Standards

### Objectives

1.3. Summarize the types of cables and connectors and explain which is appropriate type for a solution

### Essentials

- Understand the various types of cables used in todays networks
- Understand the various types of ends that are used on each type of cable
- Describe the various types of media converters that are available
- Understand what a T56A to T56A cable is
- Understand wht a T568A to T568B cable is
- Define the function of a T1 cross over cable

### Common Properties

- Transmission Speeds - how many bits can be transmitted per second or microsecond in some cases
- Distance - how far can a signal be transmitted without degrading
- Duplex - Whether the signals can send and receive
- Noise Immunity (Security, EMI) - Whether the wire can or can't be tapped or spliced to listen in on traffic
- Frequency - The amount measured in MHz (Megahertz) of electrical bandwidth

### Wiring Standards

- T568A - Standard is commonly used with patch cables (Straight through)
- T568B - Standard is commonly used with cross over cables

### Straight Through Cabling

- Uses pints 1,2,3, and 6 to transmit data
- Used for connecting a host to a switch, hub
- Used for connecting a router to a switch or hub

### Crossover Through Cabling

- Used to connect these devices together
  - Switch to switch
  - Hub to hub
  - Host to host
  - Hub to switch
  - Router direct to host
- Connects pins 2 to 6, 1 to 3 to 1, and 6 to 2


### Coaxial Cabling

Coaxial cabling has has a physical copper center surrounded by plastic jacketing and a braided shield around it.

### Twisted Pair

Twisted pair have multiple individually shielded wires that are wrapped around each other and sometimes have a shield around the entire twisted par to make it call STP (Shielded Twisted Pair). If they do not have a Shield it's called Unshielded Twisted Pair (UTP).

Cables are twisted pairs because it reduces (cross talk) or physical electrical interference

#### UTP (Unshielded Twisted Pair) Categories

- Category 1 - Phone Wiring. Slow no longer used
- Category 2 - Four twisted wire pairs handling up to 4 Mbps with frequency limited up to 10 MHz
- Category 3 - Four twisted pairs handling up to 16 MHz and transmission speeds of up to 10 Mbps
- Category 4 - Handles up to 20 MHz
- Category 5 - Four twisted pairs used for 100BaseTX and up to 100 MHz
- Category 5e - E stands for "enhanced" category 5 enhanced wiring. Can start handling Gigabit ethernet
- Category 6 - Four twisted pairs for 1000BaseTX handling up to 250 MHz
- Category 6A - Category 6 Augmented created as a way to reduce crosstalk and handle 500 MHz (twice Category 6) and used for 10GBaseT
- Category 7 - Four twisted pairs Category 7 Cabling allows or 10 Gigabit Ethernet over 100 meters
- Category 8 - Supports 25G and 40G transmission with a distance of 30 meters. Typically used at data centers

### Twinaxial Cable

Twinaxial Cabling is used as a short distance high speed connection cable. Advantage is that it is copper based wiring so it's cheaper than fiber optic cabling

### Fiber Optic

- Uses light impulses to transmit data
- Pros
  - Immune to EMi and RFI
  - Can transmit up to 40 kilometers
- Cons
  - Expensive
  - Difficult to install
  - More expensive maintenance
  - More challenging to troubleshoot

#### Single Mode Fiber

- commonly used for long distances

#### Multi Mode Fiber

- MMF is commonly used for shorter distances

### Connector Types

- F Type of connector is used with Coaxial cabling
- RJ-11
- RJ-45 - T568B Standards have Orange/White, Orange, Green/White, Blue, Blue/White, Green, Brown/White, Brown
- UPC Connectors are used as part of fiber optic connectors and focuses the light back down into the cable which can cause db loss
- Straight Tip connector is used for fiber optic cabling and usually is terminated with a BNC attachment that can be used to hold the cable in place
- Square Connector (SC) is used for fiber optic cabling and usually terminated with a square attachment that prevents the cable from falling out
- MT-RJ Connector is a small form factor fiber optic connector
  - Small in size
  - TX and RX strands in one connector
  - Keyed for single polarity
  - Pre-terminated ends that require no polishing or epoxy
  - Easy to use

### Transceiver

- Transceivers are devices which can send and receive messages
- Examples
  - SFP+ - The small form-factor pluggable (SFP) compact module used for telecommunication and data communications
  - QSFP - The quad small form factor pluggable (QSFP) used for data communications for fiber optic cabling

### Media Converters

- Media Converters are used to change the signaling from one type such as light into electrical signals for copper or vise-versa
- Multimode Fiber to Ethernet
- Fiber to Coaxial
- Single-Mode to Multimode Fiber

### Serial Cables

- Serial Cables can read data as it is streamed in and can convert the signal into a different medium of transmission and can be read on the other end
- Parallel communication requires that signals must be batched at the converter and then transmitted together as 1s and 0s to make any sense

## Written Lab

1. Which UTP wiring uses four twisted wire pairs (eight wires) and is rated for 250 MHz
2. The point at which the operation control or ownership changes from your company to a service provider is referred to as a what?
3. Which type of cable will you use to connect two switches to each other?
4. Which RG rating of coax is used for cable modems?
5. Which UTP uses four twisted wire pairs (eight wires)
6. You want to connect a host to switch port. What type of Ethernet cable will you use?
7. In what instance would you use T1 crossover cable?
8. T568A uses which pins to make a connection?
9. A crossover uses which pints to make a connection?
10. What are two advantages of fiber-optic cabling?

## Review Questions

1. Why would a network administrator use plenum-rated cable during an installation? (Choose Two)

  - [ ] A. Low combustion temperature
  - [ ] B. High combustion temperature
  - [ ] C. reduces toxic gas released during a fire
  - [ ] D. Is not susceptible to any interference

2. Which of the following Ethernet unshielded twisted-pair cabling types is/are commonly used?

  - [ ] A. 10BaseT
  - [ ] B. 100BaseTX
  - [ ] C. 1000BaseTX
  - [ ] D. All of the above

3. In which of the following categories is UTP cable not rated?

  - [ ] A. Category 2
  - [ ] B. Category 3
  - [ ] C. Category 5e
  - [ ] D. Category 9

4. What type of connector does UTP cable typically use

  - [ ] A. BNC
  - [ ] B. ST
  - [ ] C. RJ-45

5. Which of the following provides the longest cable run distance?

  - [ ] A. Single mode fiber
  - [ ] B. Multimode fiber
  - [ ] C. Category 3 UTP
  - [ ] D. Coax

6. You need to crimp on a connector using an RJ-45 connector. Which pin-out configuration would you use to connect a host to a switch?

  - [ ] A. UTP
  - [ ] B. Straight-through
  - [ ] C. Crossover
  - [ ] D. Rolled

7. Why is fiber optic immune to electromagnetic interference (EMI) and radio frequency interference (RFI)?

  - [ ] A. Because it transmits analog signals using electricity
  - [ ] B. Because it transmits analog signals using light impulses
  - [ ] C. Because it transmits digital signals using light impulses
  - [ ] D. Because it transmits digital signals using electricity

8. What type of cable transmits lights from end-to-end?

  - [ ] A. Coax
  - [ ] B. Fiber-optic
  - [ ] C. UTP
  - [ ] D. Category 2

9. What is the main difference between single-mode fiber (SMF) and multimode fiber (MMF)?

  - [ ] A. Electrical Signals
  - [ ] B. Number of light rays
  - [ ] C. Number of digital Signals
  - [ ] D. That signal-mode can be run shorter distance

10. What type of cable should be used if you need to make a cable run longer than 100 meters?

 - [ ] A. Category 5e
 - [ ] B. Category 6
 - [ ] C. Fiberoptic
 - [ ] D. Coaxial

11. Which of the following are fiber-optic connectors? (Choose three)

  - [ ] A. BNC
  - [ ] B. ST
  - [ ] C. RJ-11
  - [ ] D. SC
  - [ ] E. LC
  - [ ] F. RJ-45

12. You need to connect two devices on a network and they need to send voice traffic. Which of the following cables will you use?

  - [ ] A. Cat 3
  - [ ] B. Cat 5
  - [ ] C. CSU/DSU
  - [ ] D. Rolled

13. How many hosts on a half duplex segment can talk at one time?

  - [ ] A. Zero
  - [ ] B. One
  - [ ] C. Two
  - [ ] D. Unlimited

14. On which type of cable does EMI have the least effect

 - [ ] A. Coax
 - [ ] B. Fiber-optic
 - [ ] C. UTP
 - [ ] D STP

15. How many devices can be connected to a full-duplex segment

  - [ ] A. Zero
  - [ ] B. One
  - [ ] C. Two
  - [ ] D. Four

16. How many wires are used in a 100BaseTX UTP transmission?

  - [ ] A. Two
  - [ ] B. Four
  - [ ] C. Six
  - [ ] D. Eight

17. A crossover cable is used to connect all of the following except

  - [ ] A. Switch to switch
  - [ ] B. Host to host
  - [ ] C. Hub to switch
  - [ ] D. Host to switch

18. How is a T1 crossover cable wired?

  - [ ] A. Pins 1,2,4, and 5 are connected to 4, 5, 1, and 2
  - [ ] B. Pins 2,3,4, and 5 are connected to 4, 5, 1, and 2
  - [ ] C. Pins 1,2,4, and 5 are connected to 3, 4, 5, and 6
  - [ ] D. Pins 4,5,6, and 7 are connected to 4, 5, 1, and 2

19. The purpose of the demarcation point is to separate the customer from whom?

  - [ ] A. The branch office
  - [ ] B. Headquarters
  - [ ] C. The data center
  - [ ] D. the service provider

20. You need to make a T568B cable for a Fast Ethernet Link. How many pairs will you use?

  - [ ] A. One
  - [ ] B. Two
  - [ ] C. Three
  - [ ] D. Four


<iframe src="https://quizlet.com/989830241/flashcards/embed?i=3896f3&x=1jj1" height="500" width="100%" style="border:0"></iframe>
