---
title: Chapter 6 
layout: page
parent: Study Guide 
grand_parent: Network+
permalink: /education/comptia/network-plus/book-notes/chapter-6/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter Introduction to the Internet Protocol

### Objectives

1.1 Compare and contrast the Open Systems iNterconnection (OSI) model layers and encapsulation concepts
1.5 Explain common ports and protocols, their application, and encrypted alternatives

### DoD (Department of Defense) Layer

- Process Application - controls protocols for for nod-eto-node application communication and also controls user-interface specifications
- Host-to-Host - Similar to the OSI model transportation layer handling transmission service for applications, end-to-end communication and ensuring the error-free delivery of data. It handles packet sequencing and data integrity 
- Internet - Handles logical transmission of packets, routing based on logical IP addressing
- Network Access - Monitors data exchange between the host and the network. It identifies hardware addressing and physical transmission of data

### Common Ports and Protocols

| Protocol | Port or Port Range | Use Case |
|----------|--------------------|----------|
| FTP      | TCP 20, 21             | File Transfer Protocol for transferring bytes/blobs of data to different hosts |
| Secure Shell | TCP 22 | Secure Telnet session over a standard TCP/IP connection for remote login to other systems |
| SFTP | TCP 22 | Secure File Transfer Protocol | Use encrypted channel to transfer bytes/blobs of data to another host |
| Telnet | TCP 22 | Secure Telnet for remotely accessing another client |
| SMTP | TCP 25 | Simple Mail Transfer Protocol for Mail delivery |
| DNS | TCP/UDP 53 | Domain Name Service resolves host names to Internet Protocol Addresses |
| DHCP | UDP 67 and 68 | Dynamic Host Configuration Protocol provides a Hostname when looking up by Internet Protocol (IP) Address |
| TFTP | UDP 69 | Trivial File Transfer Protocol can only send and receive files. It has no way of knowing what is on another machine |
| HTTP | TCP 80 | Hypertext Transfer Protocol is used to manage communications between web browsers and web servers |
| POP3 | TCP 110 | Post Office Protocol v3 gives storage to incoming mail |
| NTP | UDP 123 | Network Time Protocol works together with other utilities that all computers on the network agree to the time |
| IMAP | TCP 143 | Internet Message Access Protocol makes it so you can control over how you download your mail |
| SNMP | UDP 161/162 | simple Network Management Protocol SNMP collects and manipulates valuable network information |
| LDAP | TCP 389 | Lightweight Directory Access Protocol is a simplified way of querying an accessing directory systems |
| SLSAP | TCP 636 | Secure LDAP |
| HTTPS | TCP 443 | Secure Hypertext Transfer Protocol is a way of enforcing encrypted data to be transferred in a web browser |
| SMB | TCP 445 | Server Message Block is a way of sharing access to media servers, printers, and files or directories on a client |
| Syslog | UDP 514 | REading system messages from a switch or router'si internal buffer is the most populate and efficient method of seeing whats going on with your network at a particular time. |
| SMTP/TLS | TCP 587 | Secure Simple Mail Transfer Protocol encrypts email when it's sent |
| IMAP over SSL | TCP 993 | Secure Internet Message Access Protocol |
| POP3 over SSL | TCP 995 | Secure Post Office Protocol v3 |
| SQL (Structured Query Language) | TCP 1433 | text for querying a database |
| MySQL | TCP 3306 | |
| RDP | TCP 3389 | Remote Desktop Protocol for access to clients |
| SIP (VoIP) | TCP or UDP 5060/TCP 5061 | Session Initiation Protocol used to construct and deconstruct multimedia communication sessions for many things like voice and video calls, videoconferencing, streaming multimedia distributions, instant messaging, presence information, and online games over the Internet. |
| RTP | UDP 5004 or TCP 5005 | Real time Transport Protocol (RTP) describes a packet formatting standard for delivering audio and video over the internet |
| MGCP (Multimedia) | TCP2427/2727 | Media Gateway Control Protocol (MGCP) is a standards protocol for handling the signaling and session management needed during a multimedia conference. |
| IGMP | None | Internet Group Messaging Protocol uses a system for identifying which clients/hosts belong to a message broadcast. This protocol happens at the network layer and doesn't use ports |
| NetBIOS | TCP and UDP 137 - 139 | Net Basic Input/Output system allows for remote interface bootup and access |

### Host-to-Host Protocols

| TCP | UDP |
| sequenced | Unsequenced |
| Reliable | Unreliable |
| Connection-orientated | | Connectionless |
| Virtual Circuit | Low overhead |
| Acknowledgements | No Acknowledgements |
| Windowing flow control | No flow control |

### TCP (Transmission Control Protocol)

Transmission Control Protocol is a huge backbone of the internet and ensuring packets are received int he correct order and in their complete state. 

TCP Headers are 60 bytes consisting of data laid out as such

- Source Port - this is the port number of the application on the host sending the data
- Destination Port - This is the port number of the application requested on the destination host
- Sequence Number a number used by TCP that puts the data back in the correct order or retransmits missing or damaged data during a process called sequencing
- Acknowledgement Number - the value is the TCP octet that is expected next
- Header Length - the number of 32-bit words in the TCP header, which indicates where the data begins
- Reserved - Always set to zer
- Code Bits/TCP Flags - Controls functions used to set up and terminate a session
- Window - The window size the sender is willing to accept in octets
- Checksum - the cyclic redundancy check (CRC), used becaue TCP doesn't trust lower layers and checks everything. The CRc checks the header and the data fields.
- Urgent - A valid field only if the urgent pointer in the code bits is set. 
- Options - May be 0, meaning no options present, or multiples of 32 bits.
- Payload - the data

### User Datagram Protocol (UDP)

UDP sends packets without care for sequencing or whether the targeted destination actually received the packets. It will continue to send packets regardless. UDP is called a connectionless protocol.

UDP Segment typically has the below data in only 8 bytes versus TCP's 60 bytes

- Source Port
- Destination Port
- Checksum
- Length
- Data

### IP (Internet Protocol)

Internet Protocol Header in total 20 bytes or 160 bits

| Header Name | Description | Bits |
|-------------|-------------|-----|
| Version - IP Version Number | 4 |
| Header Length | Header length (HLEN) in 32-bit words | 4 |
| Priority and Type of Service | first three bits are priority bits, which tells the type of service how the datagram should be handled | 8 |
| Total Length | Length of the packet, including header and data | 16 |
| Identification | Unique IP-packet value used to differentiate fragmented packets from different datagrams | 16 |
| Flags | this one field specifies whether fragmentation of the packet should occur | 3 | 
| Fragment Offset | Allows for different Maximum Transmission Units (MTUs) and breaks up packets into different fragments if they are too large for one frame | 13 |
| Time to Live | Number of Seconds or Number of hops the packet can make before it has expired and no longer is forwarded to the destination host | 8 |
| Protocol | Port of upper layer protocol such as TCP or UDP ports, or Network layer protocols like ARP and ICMP | 8 |
| Header Checksum | Cyclic redundancy check (CRC) on header only | 16 |
| Source IP Address | 32-bit IP address of sending station | 32 | 
| Destination IP Address | 32-bit IP address of receiving station | 32 |
| Options | Used for network testing, debugging, security, and more | 32 |
| Data | After the IP option field, will be the upper-layer data | varies | 