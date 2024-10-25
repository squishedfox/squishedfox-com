---
title: Ethernet Frame Format
layout: page
parent: Explain Network Interfaces 
grand_parent: Deploying Ethernet Switching
permalink: /education/comptia/network-plus/deploying-ethernet-switching/explain-network-interfaces/ethernet-frame-format/
---

# Etherenet Frame Format

## Summary

Frames, sometimes also called Protocal Data Unit(s) (PDU), contain information which tells consumers how to work with the signaled information sent, and how to wrap, or unwrap it.

## Preamable

Preamble is the start frame delimeter (SF) are used for clock syncrhonization and as part of the CSMA/CD protocol to identify collisions early.

## Error Checking

Two methods of error checking are called Cyclic Redundancy Check (CRC) and Frame Check Sequence (FCS).

### Cyclic Redundancy Check (CRC)

- CRC is done by calculating the contents of the frame to see if it matches what the sender has provided. If the content matches then the frame is accepted. There is no retransmittion if damage is detected nor is the CRC completely accurate at detecting damage.