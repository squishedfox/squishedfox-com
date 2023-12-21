---
title: Operating System Upgrades
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/operating-system-upgrades/
questions:
    - question: "You are supporting a home user with upgrading a computer from Windows 10 to Windows 11. You have run Microsoft’s PC Health Check tool, and it verifies that the computer meets the hardware requirements. Should you now proceed with the in-place upgrade?"
      answer: "No. You must backup user data and settings first. A backup is essential as a security precaution."
    - question: "You are writing some work instructions to assist technicians with deploying new user desktops via cloning. What type of installation and boot method is this process most likely to use, and what are the boot requirements?"
      answer: "Cloning refers to the image deployment installation method. An image is a copy of an existing installation saved as a single file. Image deployment could use USB boot media (or even optical discs), but network boot is more likely. Network boot requires a PXE-compatible network adapter and motherboard in the computer and the boot device priority set to network/PXE. The network requires a Dynamic Host Configuration Protocol (DHCP) server plus a remote network installation server to run unattended setup and apply the image."
    - question: "You are repurposing an old computer. You perform a clean OS install using optical media. During setup, you configured the partition manager to apply GPT style. After the file copy stage, the new installation fails to boot. What is the likely cause?"
      answer: "The PC is set to boot using the legacy BIOS method. This is not compatible with GPT-style partitioning. If supported by system firmware setup, switch to UEFI boot. If the firmware is BIOS only, change the boot method back to optical disc, run setup again, and choose MBR partitioning."
---