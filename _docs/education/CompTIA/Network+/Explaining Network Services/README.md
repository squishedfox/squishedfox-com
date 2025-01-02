---
title: Explaining Network Services 
layout: home
parent: Network+
grand_parent: CompTIA
has_children: true
permalink: /education/comptia/network-plus/explaining-network-services/
---

# Explaining Network Services

[quizlet](https://quizlet.com/989091365/comptia-network-explaining-network-services-flash-cards/?i=3896f3&x=1jqt)

Section focuses on Application Service Data

## Objectives

- Explain the use of network addressing services
- Explain the use of name resolution services
- Configure Domain Name Services (DNS)

## Summary

You should be able to explain the uses and purposes of the network services protocols DHCP and DNS.

### Guidelines for Supporting Network Services

Follow these guidelines to make effective use of network addressing services:

- Configure secure DHCP and DNS servers and ensure that all network hosts can contact them, using DHCP relay where appropriate.
- Ensure DHCP servers are configured with accurate IP, default gateway, and DNS server parameters for the scopes/subnets that they serve.
- Configure reservations or static assignments for hosts that need to be allocated a consistent IP address.
- If the address pool is limited, use short lease times to prevent address exhaustion.
- Set up primary and secondary name servers to host records for your LAN. These name services should be accessible only by authorized clients.
- Configure the appropriate host, MX, and service records for the forward lookup zone on the primary server.
- Optionally, configure a reverse lookup zone to allow clients to resolve IP addresses to host names.
- Configure the secondary server to obtain up-to-date records periodically through a zone transfer with the primary server.
- To resolve client Internet queries, set up a forwarder to pass queries to trusted resolvers on the Internet, such as your ISP's DNS server or trusted public services such as those from Google or Quad9.
- For external DNS, consider using a third-party provider, ideally with a cloud service, to ensure high availability. Without public DNS, your customers will not be able to browse your websites or send you email.
- Set up a process for checking that your external DNS records are accurate and working correctly.