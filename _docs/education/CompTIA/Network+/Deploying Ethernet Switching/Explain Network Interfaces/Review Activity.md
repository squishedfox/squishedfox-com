---
title: Review Activity
layout: page
parent: Explain Network Interfaces 
grand_parent: Deploying Ethernet Switching
permalink: /education/comptia/network-plus/deploying-ethernet-switching/explain-network-interfaces/review-activity/
---

# Review Activity

1. True or False? The CRC mechanism in Ethernet allows for the retransmission of damaged frames.

> False. The CRC indicates only that a frame may be corrupt.

2. What is an I/G bit? 

> Determines whether a frame is addressed to an individual node (0) or group (1). The latter is used for multicast and broadcast.

3. What is an MTU?

> Maximum transmission unit—the maximum amount of data that a frame can carry as payload.

4. On a switched network, what configuration changes must be made to allow a host to sniff unicast traffic from all hosts connected to a switch? 

> The switch must be configured to mirror traffic to the sniffer's port.

5. Write the command to use tcpdump to capture traffic from the IP address 172.16.16.254 on the interface eth0 and output the results to the file router.pcap. 

> tcpdump -i eth0 -w 'router.pcap' src host 172.16.16.254