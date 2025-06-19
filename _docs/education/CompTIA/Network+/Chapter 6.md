---
title: Chapter 6
layout: page
parent: Network+
grand_parent: CompTIA
permalink: /education/comptia/network-plus/chapter-6/
---

# CompTIA Network+ N10-008 Study Guide

## Chapter Introduction to the Internet Protocol

### Objectives

1.1 Compare and contrast the Open Systems iNterconnection (OSI) model layers and encapsulation concepts
1.5 Explain common ports and protocols, their application, and encrypted alternatives

### Exam Essentials

- Remember the Process/Application layer protocols
- Understand data encapsulation and decapsulation within the OSI model context
- Be able to explain common ports and protocols, their application, and encrypted alternatives
- Be able to identify and define protocol types
- Remember the Host-to-Host layer Protocols
- Remember the Internet layer protocols

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
| Identification | Unique IP-packet value used to differentiate fragmented packets from different datagram | 16 |
| Flags | this one field specifies whether fragmentation of the packet should occur | 3 |
| Fragment Offset | Allows for different Maximum Transmission Units (MTUs) and breaks up packets into different fragments if they are too large for one frame | 13 |
| Time to Live | Number of Seconds or Number of hops the packet can make before it has expired and no longer is forwarded to the destination host | 8 |
| Protocol | Port of upper layer protocol such as TCP or UDP ports, or Network layer protocols like ARP and ICMP | 8 |
| Header Checksum | Cyclic redundancy check (CRC) on header only | 16 |
| Source IP Address | 32-bit IP address of sending station | 32 |
| Destination IP Address | 32-bit IP address of receiving station | 32 |
| Options | Used for network testing, debugging, security, and more | 32 |
| Data | After the IP option field, will be the upper-layer data | varies |

### Internet Control Message Protocol (ICMP)

- works at the network layer
- provides information to host about network problems
- encapsulated within IP datagram
- Common Errors
   - Destination Unreachable
   - Buffer Full
   - Hops
   - Ping
   - Traceroute

### Address Resolution Protocol (ARP)

- Finds the hardware address of a host from a known IP address
- Host systems use this protocol to map between a hardware address on the network and an IP address
- Works as IP's detective to find out where the destination is on the network

### Reverse Address Resolution Protocol (RARP)

- discovers the identify of the IP address for diskless machines by sending out packet that includes its MAC address and request for the IP address assigned to that MAC address. The RARP server responds with the correct information.

### Generic Routing Encapsulation

- Generic Routing Encapsulation is a way of creating a virtual IP point-to-point tunnel for any protocol that may be denied by either end.
- It is protocol agnostic
- Simply a way to create an unencrypted tunnel between two networks

### Internet Protocol Security (IPSec)

- IPSec is a way of ensuring data integrity and encryption so the data is not sent in plain text.
- Secure VPN Tunnels are creating using GRE and IPSec

### Authentication Header (AH)/Encapsulating Security Payload (ESP)

- IPSec uses the authentication header as a way of validating a packet
- A one way hash is created on either side of the network and matched when received. If the packet does not match it is dropped.

### Encapsulating Security Payload (ESP)

- Confidentiality - ESP uses symmetric encryption at the sender end to encrypt data payloads
- Data Integrity - Data integrity allows the receiver to verify that he data received was not altered in any way along with the way. IPSec uses checksums as a simple check of the data
- Authentication - Receiver of the packet can verify the packet has been sent by whom claims to have sent it, and no one has man-in-the-middle attacked
- Anti-Replay Service - A sequence number is used to verify the packet has already been received. This so someone cannot create a copy of a packet and replay it to the destination causing havoc on the receivers end
- Traffic Flow - Tunnel flow should be enabled at a gateway to make it obscure from the outside or behind the gateway who is asking for what.

### Data Encapsulation

 - Data Encapsulation is where each layer of the OSI model wraps the current data with it's own header information so that it can be unwrapped at the same layer on the receiving end. This way each layer only needs to handle and know it's own information, unwrap, and pass the data along to the next layer.

## Written Lab Questions

<iframe src="https://quizlet.com/1000542879/flashcards/embed?i=3896f3&x=1jj1" height="500" width="100%" style="border:0"></iframe>

1. What should an ARP destination MAC address appear as?
2. Name the protocol that uses both TCP ports 20 and 21
3. What transport layer protocol does a DNS server use?
4. Which protocol dynamically reports errors to source hosts by using IP directly to build packets?
5. What could cause a server that you can ping to not provide the particular TCP/IP serv,ce such as FTP, HTTP, and so on, that you expect it to offer?
6. What is the well-known port number for RDP?
7. Which ports does the protocol MGCP use?
8. What protocol is at the heart of the ping and tracert commands in a windows operating system?
9. Which destination Transport layer protocol and port number does a TFTP client use to transfer files over the network?
10. What well-known port numbers do SMTP, POP3, RDP, and IMAP4 servers use?

## Review Questions

<iframe src="https://quizlet.com/1000543909/flashcards/embed?i=3896f3&x=1jj1" height="500" width="100%" style="border:0"></iframe>

1. The OSI model has seven layers and the DoD has four. At which layer does SMTP work in both models?
    - [ ] A. Network
    - [ ] B. Transport
    - [ ] C. Session
    - [ ] D. Application
    - [ ] E. Internet

2. You need to have secure communications using HTTPS. What port number is used by default?
   - [ ] A. 69
   - [ ] B. 23
   - [ ] C. 21
   - [ ] D. 443

3. You want to implement a mechanism that automates the IP configuration, including IP address, subnet mask, default gateway, and DNS information. Which protocol will you use to accomplish this?
   - [ ] A. SMTP
   - [ ] B. SNMP
   - [ ] C. DHCP
   - [ ] D. ARP

4. What protocol is used to find the hardware address of a local device?
   - [ ] A. RARP
   - [ ] B. ARP
   - [ ] C. IP
   - [ ] D. ICMP
   - [ ] E. BootP

5. You need to log in to a Unix/Linux server across a network that is not secure. Which of the following protocols will allow you to remotely administer this server securely?
   - [ ] A. Telnet
   - [ ] B. SSH
   - [ ] C. SFTP
   - [ ] D. HTTP

6. If you can ping by IP address but not by hostname, or FQND, which of the following port numbers is related to the server process that is involved?
   - [ ] A. 21
   - [ ] B. 23
   - [ ] C. 53
   - [ ] D. 69
   - [ ] E. 80

7. Which of the following describe the DHCP Discover message? (Choose two)
   - [ ] A. It uses FF:FF:FF:FF:FF:FF as a layer 2 broadcast
   - [ ] B. It uses UDP as the Transport layer protocol
   - [ ] C. It uses TCP as the transport layer protocol
   - [ ] D. It does not use a layer 2 destination address

8. What layer 4 protocol is used for a Telnet connection, and what is the default port number?
   - [ ] A. IP, 6
   - [ ] B. TCP, 21
   - [ ] C. UDP, 23
   - [ ] D. ICMP, 21
   - [ ] E. TCP, 23

9. Which statements are true regarding ICMP packets? (Choose two).
   - [ ] A. They acknowledge receipt of a TCP segment
   - [ ] B. They guarantee datagram delivery
   - [ ] C. UDP, 23
   - [ ] D. ICMP, 21
   - [ ] E. TCP, 23

10. Which of the following services uses TCP? (Choose four)
   - [ ] A. DHCP
   - [ ] B. SMTP
   - [ ] C. SNMP
   - [ ] D. FTP
   - [ ] E. HTTP
   - [ ] F. TFTP

11. which of the following services use UDP? (Choose three)
   - [ ] A. DHCP
   - [ ] B. SMTP
   - [ ] C. SNMP
   - [ ] D. FTP
   - [ ] E. HTTP
   - [ ] F. TFTP

12. Which of the following TCP/IP protocols are used at the Application layer of the OSI model (Choose three.)
   - [ ] A. IP
   - [ ] B. TCP
   - [ ] C. Telnet
   - [ ] D. FTP
   - [ ] E. TFTP

13. Which of the following protocols is used by email servers to exchange messages with one another?
   - [ ] A. POP3
   - [ ] B. IMAP
   - [ ] C. SMTP
   - [ ] D. HTTP

14. You need to have a connection to run applications that are installed on only your desktop computer at your office. Which protocol will provide a GUI interface to your work computer?
   - [ ] A. Telnet
   - [ ] B. FTP
   - [ ] C. RDP
   - [ ] D. IMAP
   - [ ] E. SMTP

15. Which of the following protocols can use TCP and UDP, permits authentication and secure polling of network devices, and allows for automated alerts and reports on network devices?
   - [ ] A. DNS
   - [ ] B. SNMP
   - [ ] C. SMTP
   - [ ] D. TCP

16. You need to transfer files between two hots. Which protocol can you use?
   - [ ] A. SNMP
   - [ ] B. RIP
   - [ ] C. NTP
   - [ ] D. FTP

17. What layer in the IP stack is equivalent to the Transport layer of the OSI model?
   - [ ] A. Application
   - [ ] B. Host-to-Host
   - [ ] C. Internet
   - [ ] D. network Access

18. You need to make sure that the time is consistent across all your network devices. What protocol do you need to run on your network?
   - [ ] A. FTP
   - [ ] B. SCP
   - [ ] C. NTP
   - [ ] D. RTP

19. Which of the follow allows a server to distinguish among different simultaneous requests from the same host?
   - [ ] A. They use different port numbers
   - [ ] B. A NAT server changes the IP address for subsequent requests
   - [ ] C. A server is unable to accept multiple simultaneous sessions from the same host. One session must end before another can begin
   - [ ] D. The MAC address for each one is unique

20. Which of the following uses both TCP and UDP?
   - [ ] A. FTP
   - [ ] B. SMTP
   - [ ] C. Telnet
   - [ ] D. DNS

## Written Lab Answers

1. This would be a layer 2 broadcast, or FF:FF:FF:FF:FF:FF
2. FTP uses both TCP ports 20 and 21 for the data channel and the control channel, respectively
3. Both TCP and UDP
4. ICMP uses IP directly to build error-reporting packets that are transmitted back to the originating source host when issues arise during the delivery of data packets. ICMP is also used during ping and some traceroute operations
5. Quite simply, the service might not be running currently on that server. Another possibility might be that a firewall between the client and the server has blocked the protocol in question from passing
6. RDP uses port 3389
7. MGCP uses port 2427 and 2727
8. ICMP is the protocol that  the ping and tracert commands rely on. If your having trouble getting pings and traceroutes through a router, you might need to check if ICMP is being allowed through
9. TFTP servers respond to UDP messages sent to port 69
10. SMTP uses TCP port 25, POP3 uses TCP port 110, RDP uses TCP port 3389, and IMAP4 uses TCP port 143

## Review Question Answers

1. D
2. D
3. C
4. B
5. B
6. C
7. A, B
8. E
9. C,D
10. B,C,D,E
11. A, C, F
12. C,D,E
13. C
14. C
15. B
16. D
17. B
18. C
19. A
20. D
