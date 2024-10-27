---
title: Summary 
layout: page 
parent: Explaining Network Topologies and Types
grand_parent: Network+
has_children: false
permalink: /education/comptia/network-plus/explaining-network-topologies-and-types/summary/
---

## Summary

You should be able to explain network types, scopes, and characteristics and how topologies such as three-tiered switching and VLANs can make corporate networks more manageable.

## Guidlines for Supporting Network Topology and Types

While you might not be responsible for network design at this state in your career, it helps to understand design principles to provide support for existing networks.

- Identify zones within complex networks, such as PANs or WLANs within a LAN or CAN and the perimeter network between the private local network and public WANs/MANs.
- Determine whether to implement a core and distribution layer or a single collapsed core layer, based on network size and projected requirements for future expansion.
- Determine bandwidth requirements within the core/distribution layer (typically 10 Gbps+) and provision appropriate switch modules, transceivers, and cabling (typically fiber optic).
- Provision redundant trunk links within the core and between the core and distribution layer.
- Determine bandwidth requirements for the access layer (typically 1 Gbps) and provision appropriate workgroup/LAN switches based on media type.
- Enable spanning tree to prevent loops around redundant circuits and ensure the selection of a root bridge within the core or distribution layer as appropriate.
- Provision redundant trunk links between distribution layer switch blocks and access layer switches.
- Connect client devices (PCs, VoIP endpoints, and printers) and non-datacenter servers to access layer switches.

## Follow these general guidelines for implementing VLANs:

- Determine the organizational principles that will guide VLAN assignment. There are no rules to govern what these principles should be, but some commonly followed practices include:
- Assign devices to VLANs by type (wired workstations, VoIP endpoints, wireless clients, printers, servers, and SAN). This should be governed by the performance and security requirements of each device type.
- Use VLANs for distinct security zones, such as management traffic, guest network access, and Internet/WAN edge.
- Aim for 250 as the maximum number of hosts in a single VLAN (/24 subnet). Use VLANs for separate building floors to minimize traffic that must pass over a trunk.
- Consider using VLANs to represent departmental boundaries and functions, but don't create VLANs just for the sake of it. Physical location will generally override function, as moving more traffic over trunk links will affect performance.
- Design IP subnets for each VLAN and design a VLAN numbering system.
- Map the logical topology to the physical switch topology and identify trunk links. Tag the interfaces that will participate in trunk links with the VLANs they are permitted to carry.
- Configure other interfaces as untagged/access ports within the appropriate VLAN.
- Ensure that hosts in each VLAN can obtain leases from DHCP servers, route to other network segments (as permitted), and contact DNS servers.