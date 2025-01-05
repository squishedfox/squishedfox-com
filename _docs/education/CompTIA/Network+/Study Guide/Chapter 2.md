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

### Window

