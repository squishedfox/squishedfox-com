- Networking; Connecting your machine to the other computers, local or remote.
- Accessing a printer on a home network or browsing a webpage on the internet
- these tasks require sending and receiving data

# Webserver

- Stores and serves files that makes up a website
- Common server applications are Apache, and Microsoft Internet Information Services (IIS)
- The system requesting information is typically the client, and the remote system that is providing the data is the server.

# Addresses

- MAC address: Unique to a system machine typically based on a manufacture, and the way that it was generated afterwards.
- IP Address (v4 and v6):

# Ethernet

- Network protocoal
- Allows for connecting a computer system to another broader network or to directly to another computer system

## Cable

- Untwisted Pair (UTP) cabling is the specified cabling for 10/100/1000 Gbps
- Many types of twisted pair cable are available
- The Cat level should be clearly marked on the cable

## Wiring

- Two pairs of wires, one pair for sending, and one pair for receiving.
- Cat6 is more common as of 2021
- RJ (Registered Jack)
- Colors (in order)
  - Green
  - Dashed Green
  - Blue
  - Dashbed Blue
  - Orange
  - Dashed Orage
  - Brown
  - Dashed Brown 

# RJ-49, and RJ-11

- RJ-49 is for common systems for data
- RJ-11 is for phone systems

# Fiber Optic

- Uses light
- It is immune to electrical problems such as lightning, short circuits, and static
- Fiber optic signals travel 2000 meters or more
- Older connections are uniderctional
- Require two cables in fiber optic cables
- Most systems use LEDs for light systems

# Cable Modems

- Use regular Coax cables
- These are also used for cable TV have a 75-ohm impedance
- They use A BNC connector or a F-type connector

# Structured Cabling

- Structred cabling is a standarization system for cabling server computing devices
- The design and installation is governed by a set of standards

## backbone Cabling

- Entrance Facilities
- Equipment Room
- Backbone Cabling
- Telecommunications Room and Enclosure
- Horizontal Cabling
- Work Area

# Protocols

## TCP/UDP/IP

- Transportation Control Protocol (TCP)
- IP (Internet Protocol)
- User Datagram Protocol (UDP)

### TCP

- More reliable than UDP. It guarantees that the network packet made it to where it should have

### UDP

- Faster than UDP, connectionless service, doesn't provide sequencing or akwoledgement or recovery

## OSI Model

- Application
- Presentation
- Session
- Transport
- Network
- Data Link
- Physical

# IPv4/Ipv6

IPv4 has less addresses available that can or will be used. This has four octets of 8 bit assignments. 32-bit address assignment.

## IPv6

Created because IPv4 addresses have run out due to limitations of the upper bounds of a 32-bit address.
Parts are
- Site prefix
- Subnet ID
- Interface ID
- Last 64-bits of IPv6 are generated by the NIC

### Special Prefixes

- 2002::/16 indicates that a 6to5 routing prefix follows
- fe80::/10 indicates that a link-local address follows
- ff00::/8 indicates that a multicast address
- 

### Unicast Addresses

- Global unicast address
  - required to connect to the internet. Special packet that looks for a router. 
- Link-local address

### Link Local Address

All interfaces of IPv6 hosts require a link-local address
IPv6 link-local addresses have the prefix fe80::/10

# Subnet Masking

## Classes

Originally subnets fell into "classes" but they no longer exist

- Classless inter-domain routing (CIDR)
- e.g. 192.168.100.14/24 for IPv4
  - the 24 indicates the subnet mask
-  Routing prefix is 192.168.100.0 and the subnet mask is 255.255.255.0
  - IPv4 block 192.168.100.0/22 represents the 1024 IPv4 addresses from 192.168.100.0 to 192.168.103.25

# Domain Name Service (DNS)

- DNS helps resolve IP addresses to physical host names visa-versa.

# Commands and Tools

- ping: Check an IP address or a hostname to see if the service possibly will respond
- ipconfig: Windows tool to view network settings
- ifconfig: MacOS tool to view network settings
- nslookup: Powerful tool for getting DNS server information

# Dial Up and IDSN

- Allow for networking software to communicate over Phone systems RJ-11
- Consumes a phone line
- Old Technology, no longer widely used.

# DSL

- Telephone lines used to connect
- Can provide much faster speeds than cable systems
- Requires a splitter for phone and modem

# Fiber

- System that uses optical connections sending data as light