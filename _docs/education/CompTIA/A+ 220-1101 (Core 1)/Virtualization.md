---
title: Virtualization 
layout: subarticle
permalink: /comptia-a-plus/virtualization/
parent: CompTIA A+ 220-1101
has_children: false
---

Host machines contains multiple virtual computers on a single machine. This machine requires a system called a "hypervisor" which runs between the hardward and the virutal hardware and amchines.
- Virtual Machines are granted permissions to certain system resources such as CPU, RAM, disk, Network Cards, GPU, etc.

# Benefits

- Single machine makes it easier for
  - testing
  - security
  - snapshots
  - sandboxes
  - development software

# Emulators vs Virtualization

Hypervisors pass core host machine resources to the virutal machine
Emulators simulate both hardware and software

# Network Requirements

- Internal Networking: Only aces to other Virtual Machines
- Bridge Networking: Way to get a VM conneceted to the internet
- Virtual Switch: Hypervisors have built in
- Air Gap: No network access

# Server Side Virtualization

- Bare metal: there's no other software between it and the hardware
- VMware's ESXi is a free hypervisor

# Cloud Computing

- Virtual Machines in the cloud
- Public cloud is built on a cloud provider's system: AWS, GCP, Azure, Docker Hub, etc.
- There is a private cloud, public cloud, and hybrid cloud.

## Benefits

- Scaling
- Flexibility
- Scalability
- Geolocation
- Replication
- Disaster Recovery
- Cost
- Security
- Billing and Reporting
- Usage Analytics

## Services

- Platform as a Service (PaaS)
- Infrastructure as a Service (IaaS)
- Software as a Service (SaaS)
- Identity as a Service (Iaas)

# Public Cloud

- Avaialble to the general public by a service provider who hosts the cloud infrastructure.
- Private: Cloud is a cloud infrastructure dedicated to a particular organization.
- Community cloud is a a multi-tenant cloud service model taht is shared among several organizations.
- Hybrid: clouds are a composition of two or more clouds (private, community, or public) that remain unique entities.
