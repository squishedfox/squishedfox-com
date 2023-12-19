---
title: Performance and Troubleshooting Tools
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/performance-and-troubleshooting-tools/
questions:
    - question: "Identify how to open the tool shown in this exhibit. What single word command can you use to open the tool shown in the exhibit? How can this tool assist with troubleshooting?"
      answer: "Run the System Information tool using the msinfo32 command. This tool produces a comprehensive hardware and software inventory report. This configuration and version information will be useful for many troubleshooting tasks."
    - question: "You take a support call where the user doesn't understand why a program runs at startup when the Startup folder is empty. What is the likely cause, and how could you verify this?"
      answer: "The program has added a registry entry to run at startup. You could check this (and optionally disable the program) by using Task Manager."
    - question: "You are monitoring CPU Usage and notice that it often jumps to 100% and then falls back. Does this indicate a problem?"
      answer: "Probably not—CPU Usage usually peaks and falls. If it stays over 80–90%, the system could require a faster CPU, or if it spikes continually, there could be a faulty application."
    - question: "You have a computer with two SATA disks. You want to evaluate the performance of the primary disk. How would you select this in Performance Monitor, and what might be appropriate counters to use?"
      answer: "Select the Physical Disk object, select the counter, and then select the 0 C: instance. Counters that are useful for evaluating performance include % Disk Time and Average Disk Queue Length."
    - question: "You are monitoring system performance and notice that a substantial number of page faults are occurring. Does this indicate that a memory module is faulty?"
      answer: "No—it shows the system is using the pagefile intensively and could benefit from more system RAM being installed."
---