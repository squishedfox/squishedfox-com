---
title: Windows Security Settings
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/windows-security-settings/
has_children: false
questions:
    - question: "While you are assigning privileges to the accounting department in your organization, Cindy, a human resource administrative assistant, insists that she needs access to the employee records database so that she can fulfill change of address requests from employees. After checking with her manager and referring to the organization's access control security policy, you discover that Cindy's job role does not fall into the authorized category for access to that database. What security concept are you practicing in this scenario?"
      answer: "The principle of least privilege."
    - question: "Which three principal user security groups are created when Windows is installed?"
      answer: "Users, Administrators, and Guests. You might also include Power Users, though use of this group is deprecated. Going beyond the account types listed in the exam objectives, you might include groups such as Remote Desktop Users, Remote Management Users, or Backup Operators. There are also system groups, such as Everyone, but users cannot be assigned manually to these."
    - question: "What tool would you use to add a user to a local security group?"
      answer: "You can change the account type between Standard and Administrator via Control Panel, but the Local Users and Groups management console is the tool to use for a custom security group. You could also use the net localgroup command."
    - question: "What are the requirements for configuring fingerprint authentication via Windows Hello?"
      answer: "The computer must have a fingerprint reader and a trusted platform module (TPM). Windows Hello must first be configured with a personal identification number (PIN) as a backup method. "
    - question: "True or false? If you want the same policy to apply to a number of computers within a domain, you could add the computers to the same Organizational Unit (OU) and apply the policy to the OU."
      answer: "True."
    - question: "You are writing a tech note to guide new technicians on operational procedures for working with Active Directory. As part of this note, what is the difference between the gpupdate and gpresult commands?"
      answer: "gpupdate is used to refresh local policy settings with updates or changes from the policy template. gpresult is used to identify the Resultant Set of Policies (RSoP) for a given computer and/or user account."
    - question: "Angel brought in the new tablet he just purchased and tried to connect to the corporate network. He knows the SSID of the wireless network and the password used to access the wireless network. He was denied access, and a warning message was displayed that he must contact the IT Department immediately. What happened, and why did he receive the message?"
      answer: "Mobile device management (MDM) is being used to mediate network access. The device must be enrolled with the MDM software before it can join the network."
---