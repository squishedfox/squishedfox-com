---
title: Troubleshoot IP Configuration
layout: page
parent: Troubleshooting Windows Networking 
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/troubleshooting-networking/configuration/
---

- Limited Connectivity - the adapter is set to object an address automatically, but no Dynamic Host Configuration Protocal (DHCP) server can be contacted.
- No Internet access - This means taht the IP configuration is valid for the local network but that windows cannot identify a working internet connection. windows tests Interet access by attempting a connection to www.msftncsi.com

## Command Line Tools

`ipconfig` can be used to see all of the detailed information about the machine. It will output the various network adapters, MAC addresses assigned to any number of Network Interface Cards (NIC) and provide IPv4 and IPv6 addresses, Domain Name Server (DNS)

`ipconfig /release` will release any objtained IP addresses into the pool
`ipconfi /renew` will request a new IP address from the DHCP client

`hostname` creturns the name configured on the localmachine. If the machine is configured as a server, client machines will need to use the hostname to access shared folders and printers.
