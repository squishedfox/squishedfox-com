---
title: Disk Configuration
layout: page
parent: Supporting Windows
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/supporting-windows/disk-configuration/
---

# Disk Configuration

## Summary

For Windows the Disk configuration provides a Master Boot Record (Where the bootup files are for windows), Primary Logical Storage (where the operating system user files are loaded and the rest of the Operating system), and a backup of all the other windows file needed if a system restore is required. 

## Primary Boot Record (PBR)

A Primary Boot Record is the very first few bytes of a disk which tells the consumer of that device how to utalize the files on that disk.

## GPT-Style Partitioning

The Globall Unique Identifier (GUID) partiion table (GPT) was created to address the issues that the Master Boot Record (MBR) created. One of the benefits of moving to the GUID partition table is the increased number of partition entries that can be created on a signle disk.
