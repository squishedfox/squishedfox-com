---
title: Execution Control
layout: page
parent: Configure Workstation Security
grand_parent: Managing Security Settings
has_children: false
permalink: /education/comptia/a-plus/core-two/windows-security/workstations/execution-control/
---

# Execution Control

## Summary

Technologies which prevent users from unknowingly running malicious software to gain information a system, or access other programs even if they don't actually have the correct privileges themselves. 

## Trusted/Untrusted Software Sources

Software can be identified by the certificates which developers request through Major software vendors such as Apple and Microsoft that sign the software applications and recognize them as save to install and use.

Unsigned software can still be installed but systems like windows may call out that they cannot identify whom built the software or whether it contains any malicious code.

## AutoRun and AutoPlay

Auto-play and AutoRun were originally vulnerabilities to Windows because if you inserted a CD-ROM or USB Drive the system would execute an `autorun.inf` script which would mount the CD or Drive and then assign an icon. By doing this it elevated the privileges of the execution script which could have modified user or system settings to allow malicious code to run.

Recent versions of windows require users to take direction action before anything is executed on the system.


