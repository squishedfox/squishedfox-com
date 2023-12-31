---
title: Troubleshoot Remote Network Connectivity
layout: page
parent: Troubleshooting Windows Networking 
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/troubleshooting-networking/remote/
---
# Troubleshoot Remote Network Connectivity

If you are troubleshooting network systems and diagnosing whether your packet is actually making it to it's destination you can use the `tracert` command to verify the number of hops your packet is making to get to it's destination. The `tracert` will report back the number of hops it took to get to the destination, the IP addresses it took to get there, and the amount of time it took to get from one place to the next.

A more complex command that can be used is `pathping` which gives more details as to what actually took place during each hop.