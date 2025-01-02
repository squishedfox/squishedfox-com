---
title: Configure DNS Services 
layout: page 
parent: Explaining Network Services 
grand_parent: Network+ 
has_children: true
permalink: /education/comptia/network-plus/explaining-network-services/Configure-DNS-Services/
---

# Explain Network Services

## Configure DNS Services

### Objective

- 1.6 Explain the use and purpose of network services
- 5.3 Given a scenario, use the appropriate network software tools and commands

### DNS Server Configuration

DNS Serverers listen on Port 53 sometimes for UDP, sometimes for TCP. The protocol will be chosen based on if IPv6 or the server is using DNSSEC, then TCP will be used.

There are two types of DNS namespace zones

- Primary - holds editable records and can be redudant across other primary servers for load balancing
- Secondary - holds readon-only records which are meant more for fault tolerance (fail over)

### DNS Caching

DNS Caching is a strategy of providing faster forward and reverse lookups when attempting to resolve hostnames or addresses. 

Different applications such as browsers will hold their own caching strategies and authorities to trust depending on namespaces and implementation.

DNS Caching uses a Time To Live (TTL) header which the cache will expire (usually in seconds)

### Internal Versus External DNS

Internal DNS servers consist possibly of host systems which are running private applications under a specific namespace such as app.business.corp where the fully resolved namespace can only be looked up by the Local DNS Server which then knows where to point the traffic to. 

### NSLookup

nslookup is a command line utility whcih can do forward or reverse lookup of servers on a network connection or over the interent.

### Domain Information Groper (dig)

dig is a command line tool for querying DNS Servers that ships with the BIND DNS server software published by Interent Systems Consortium (ISC)

### Review Questions

1. When you configure name server addresses as part of a host's IP settings, do you need to specify servers that perform iterative queries only or ones that accept recursive queries?

> Recursive queries. These DNS servers are designed to assist clients with queries and are usually separate to the DNS server infrastructure designed to host authoritative name records.

2. What type of DNS service would you configure on the LAN to use a public DNS server to resolve queries for external domains?

> A forwarder.

3. What is the function of the following command?

`nslookup – 8.8.8.8`

> To start nslookup in interactive mode with the DNS server set to 8.8.8.8 (Google's public DNS server).

4. What is the function of a dig subcommand such as +nostats?

> Control what is shown by the tool. You can use these commands to suppress certain kinds of output, such as sections of the response from the DNS server.