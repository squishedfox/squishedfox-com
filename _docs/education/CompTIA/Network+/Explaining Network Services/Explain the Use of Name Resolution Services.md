---
title: Explain the Use of Name Resolution Services 
layout: page 
parent: Explaining Network Services 
grand_parent: Network+ 
has_children: true
permalink: /education/comptia/network-plus/explaining-network-services/Explain-the-Use-of-Name-Resolution-Services/
---

# Explaining Network Services

## Explain the Use of Name Resolution Services

### Objectives

1.5 Explain common ports and protocols, their application, and encrypted alternatives. (DNS only)
1.6 Explain the use and purpose of network services.

### Domain Name System (DNS)

Domain names can have many levels to describe their addressesing on a server

The top level is typically identified as the root and uses the "." (period) or (null) as identifier. 

The next level (level two) typically is a .com, .gov, .org, app, etc.

The third level subdomain is a country code controlled by the ICAAN which describes .eu, .us, .co, .etc

#### Name Resolution using Domain Name Servers (DNS)

iterative name resolution is used between a root server and local servers to find the correct IP address to forward traffic to. Once the local server has identified the correct DNS record it then caches it for a period of time.

### MX Records

MX Records are mail records to map an email server on a domain

### SVC Records

SVC Records are service records that map service host names, ports, and IP addresses for applications. An example service that uses SVC records is Microsoft Active Directory for resolving domain controllers in a network. 

### TXT Records

Text records are often used as a way of verification and security of ownership to a domain. Other things TXT is used for are Sender Policy Framework (SPF) and Domain Keys Identified Mail (DKIM) as a way of identifiying that you can indeed send mail from that hostname or alias.

### Pointer Recorders

Pointer Records come in the shape of

- Forward Lookups - forward lookups provide the IP address of a hostname to a requester
- Reverse Lookups - reverse lookups provide the hostname for an IP address

### Questions and Answer

1. What type of DNS record resolves a host name to an IPv6 address?

> AAAA.

2. What use is a PTR DNS record?

> A pointer maps an IP address to a host name, enabling a reverse lookup. Reverse lookups are used (for example) in spam filtering to confirm that a host name is associated with a given IP address.

3. What types of DNS records have priority or preference values?

> Typically, mail (MX) and service (SRV) records.

4. What type of DNS record is used to prove the valid origin of email?

> Sender Policy Framework (SPF) and DomainKeys Identified Mail (DKIM) records can be used to validate the origin of email and reject spam. These are configured in DNS as text (TXT) records.