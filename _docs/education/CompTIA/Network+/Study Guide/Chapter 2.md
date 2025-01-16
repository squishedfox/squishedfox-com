---
title: Chapter d 
layout: page
parent: Study Guide 
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-2/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter 2

### Objectives

- 1.1 Compare and contrast the Open Systems Interconnection (OSI) model layers and encapsulation concepts
- 1.5 Explain common ports and protocol, their application, and encrypted alternatives

### Internetworking Models

- Open Systems Intercommunication (OSI) Standard was created by International Organization for Standardization (ISO)

### Layer 1 Physical Layer

- Examples: Physical Topology

Summary: Moves bits between devices and specifies voltage, wire speed, and pin-out of cables

### Layer 2 Data Link Layer

- Examples: Framing

Summary: Combines packets into bytes and bytes into frames, access to media using MAC addresses, and performs error detection, not correction

- Responsabilities: 
  - Formats messages into pieces called data frames which have a header attached which links the source and destination MAC addresses.
  - Responsabile for fingerprinting devices on a network

### Layer 3 Network Layer

- Examples: Routing

Summary: Provides logical adressing, which routers use for path determination

**Data Packets** - pieces of information moved throughout a network from source to destination

**Route-Update Pckets** - Updates about nodes in the network, their addresses, and what other nodes they are connected to

### Layer 4 Transport Layer

- Examples: End-to-end connection

Summary: Provides reliable or unreliable delivery and performs error correction before retransmition

#### TCP

Transmission Control Protocol (Connection oriented) uses a three way handshake (ACK -> SYN/ACK -> ACK) to establish a connection with a end system to send packets in a specific sequence.

**Flow control** is enabled with TCP that allows a recipient to respond with confirmation of a packet or tell the sender to wait, or slow down with sending data.

A **window** is the amount segments (measured in bytes) of which a sender can continue to send without an acknowledgement. **Windows** are used to control the amount of outstanding, unacknowledged data segments 

#### UDP

User Datagram Protocol (Connectionless) is a protocol that sends floods of packets to it's destination without the confirmation from the recipient

### Layer 5 Session Layer

- Examples: Dialog Control

Summary: Keeps different appplications' data separate

### Layer 6 Presenation Layer

- Examples: Data encryption, compresion, and translation servies

Summary: Presents the data and handels processing such as encryption

### Layer 7 Application Layer

- Examples: File, print, message, database, and applicaiton services

Summary: Provides a user interface

## Written Lab

1. Which layer chooses and determines the availability of communicating partners along with the resources necessary to make the connection, coordinates partnering applications, and forms a consensus on procedures for controlling data integrity and error recovery? 

2. Which layer is responsible for converting frames from the Data Link Layer into electrical signals?

3. At which layer is routing implemented, enabling connections and path selection between two end systems

4. Which layer defines how data is formatted, presented, encoded, and converted?

5. What layer is responsible for creating, managing, and terminating sessions between applications?

6. Which layer manages the transmission of data cross physical link and is primarily concerned with physical addressing and the order delivery of frames?

7. Which layer is used for reliable communication between end nodes over the network and provides mechanisms for establishing, maintaining, and terminating virtual circuits as-well-as controlling the flow of information? 

8. Which layer provides logical addressing that routers use for path determinations

9. Which layer specifies voltage, wire speed, and connector pin-outs and moves bits between devices?

10. Which layer combines bits into bytes and bytes into frames and uses MAC Addressing?

## Review Questions

1. Host 1 sent a SYN packet to Host 2. What will host 2 send in response?

  - [ ] A. ACK
  - [ ] B. NAK
  - [ ] C. SYN/ACK
  - [ ] D. SYN/NAK
  - [ ] E: SYN

2. TCP and UDP reside at which layer of the OSI model?

  - [ ] A. 1
  - [ ] B. 2
  - [ ] C. 3
  - [ ] D. 4

3. Which layer of the OSI model provides an entry point for programs to access the network infrastructure?

  - [ ] A. Application
  - [ ] B. Transport
  - [ ] C. Network
  - [ ] D: Physical

4. You are connected to a server on the internet and you click a link on the server and receive a time-out message. What layer could be the source of the message?

  - [ ] A. Application
  - [ ] B. Transport
  - [ ] C. Network
  - [ ] D. Physical

5. Which layer of the OSI model is responsible for code and character-set conversion as well as recognizing data formats?

  - [ ] A. Application
  - [ ] B. Presentation
  - [ ] C. Session
  - [ ] D. Network

6. At which layers of the OSI model do bridges, hubs, and routers primarily operate, respectively

  - [ ] A. Physical, Physical, Data Link
  - [ ] B. data Link, Data Link, Network
  - [ ] C. Data Link, Physical Network
  - [ ] D. Physical Data Link, Network

7. Which layer of the OSI model is responsible for converting data into signals appropriate for the transmission medium?

  - [ ] A. Application
  - [ ] B. Network
  - [ ] C. Data Link
  - [ ] D. Physical

8. A receiving host has failed to receive all segments that it should acknowledge. What can the host do to improve the reliability of this communication session?

  - [ ] A. Send a different source port number
  - [ ] B. Restart the virtual circuit
  - [ ] C. Decrease the sequence number
  - [ ] D. Decrease the window size

9. Which layer 1 device can be used to enlarge the area covered by a single LAN segment?

  - [ ] A. Firewall
  - [ ] B. NIC
  - [ ] C. Hub
  - [ ] D. Repeater
  - [ ] E: RJ-45 transceiver

10. Segmentation of a data stream happens at which layer of the OSI model?

  - [ ] A. Physical
  - [ ] B. Data Link
  - [ ] C. NEtwork
  - [ ] D. Transpor

11. When data is encapsulated, which is the correct order?

  - [ ] A. Data, frame, packet, segment, bits
  - [ ] B. Segment, data, packet, frame, bits
  - [ ] C. Data, segment, packet, frame, bits
  - [ ] D. Data, segment, frame, packet, bits

12. What are the two purposes for segmentation with a bridge? (Choose Two)

  - [ ] A. To add more broadcast domains
  - [ ] B. To create more collision domains
  - [ ] C. To add more bandwidth for users
  - [ ] D. To allow more broadcasts for users

13. Acknowledgements, sequencing, and flow control are characteristic of which OSI layer?

  - [ ] A. Layer 2
  - [ ] B. Layer 3
  - [ ] C. Layer 4
  - [ ] D. Layer 7

14. Which of the following is true regarding sequencing and acknowledgements? (Chose all that apply)?

  - [ ] A. The segments delivered are acknowledged back to the sender upon their reception
  - [ ] B. If a segment is not received, the virtual circuit must be restarted from the beginning at the slower transmit interval
  - [ ] C. Any segments not acknowledged are retransmitted
  - [ ] D. Segmetns are sequenced back into their proper order upon arrival at their destination
  - [ ] E. All segments are retransmitted on time slot intervals

15. Which is the purpose of flow control?

  - [ ] A. To ensure the data is retransmitted of an acknowledgement is not received
  - [ ] B. To reassemble segments in the correct order at the destination device
  - [ ] C. To provide a means for the receiver to govern the amount of data sent by the sender
  - [ ] D. To regulate the size of each segment

16. At which layer of the OSI model would you find IP?

  - [ ] A. Transport
  - [ ] B. Network
  - [ ] C. Data Link
  - [ ] D. Physical

17. Of the following, which is the highest layer in the OSI model?

  - [ ] A. Transport
  - [ ] B. Session
  - [ ] C. Network
  - [ ] D. Presentation

18. Routers perform routing at which OSI layer?

  - [ ] A. Physical
  - [ ] B. Data Link
  - [ ] C. Network
  - [ ] D. Transport
  - [ ] E. Application

19. Which IEEE Standard specifies the protocol for CSMA/CD?

  - [ ] A. 802.2
  - [ ] B. 802.3
  - [ ] C. 802.5
  - [ ] D. 802.11
