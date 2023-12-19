---
title: Workstation Security
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/workstation-security/
has_children: false
questions:
    - question: "True or false? An organization should rely on automatic screen savers to prevent lunchtime attacks."
      answer: "False. A lunchtime attack is where a threat actor gains access to a signed-in user account because the desktop has not locked. While an automatic screensaver lock provides some protection, there may still be a window of opportunity for a threat actor between the user leaving the workstation unattended and the screensaver activating. Users must lock the workstation manually when leaving it unattended."
    - question: "What type of account management policy can protect against password-guessing attacks?"
      answer: "A lockout policy disables the account after a number of incorrect sign-in attempts."
    - question: "A security consultant has recommended more frequent monitoring of the antivirus software on workstations. What sort of checks should this monitoring perform?"
      answer: "That the antivirus is enabled, is up to date with scan engine components and definitions, and has only authorized exclusions configured."
    - question: "<p>You are completing a checklist of security features for workstation deployments. Following the CompTIA A+ objectives, what additional item should you add to the following list, and what recommendation for a built-in Windows feature or features can you recommend be used to implement it?</p>
      <ul>
        <li>Password best practices</li>
        <li>End-user best practices</li>
        <li>Account management</li>
        <li>Change default administrator’s user account/password</li>
        <li>Disable AutoRun/AutoPlay</li>
        <li>Enable Windows Update, Windows Defender Antivirus, and Windows Defender Firewall</li>
      </ul>"
      answer: "Data-at-rest encryption. In Windows, this can be configured at file level via the Encrypting File System (EFS) or at disk level via BitLocker."
---