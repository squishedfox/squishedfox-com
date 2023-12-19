---
title: Windows Shares
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/windows-shares/
has_children: false
questions:
    - question: "What are the prerequisites for joining a computer to a domain?"
      answer: "The computer must be running a supported edition of Windows (Pro, Enterprise, or Education). The PC must be configured with an appropriate IP address and have access to the domain DNS servers. An account with domain administrative credentials must be used to authorize the join operation."
    - question: "You receive a call from a user trying to save a file and receiving an 'Access Denied' error. Assuming a normal configuration with no underlying file corruption, encryption, or malware issue, what is the cause and what do you suggest? "
      answer: "The user does not have \"Write\" or \"Modify\" permission to that folder. If there is no configuration issue, you should advise the user about the storage locations permitted for user-generated files. If there were a configuration issue, you would investigate why the user had not been granted the correct permissions for the target folder."
    - question: "What is the significance of a $ symbol at the end of a share name?"
      answer: "The share is hidden from the file browser. It can be accessed by typing a UNC. The default administrative shares are all configured as hidden."
    - question: "When you set NTFS permissions on a folder, what happens to the files and subfolders by default?"
      answer: "They inherit the parent folder's permissions."
    - question: "If a user obtains Read permissions from a share and Deny Write from NTFS permissions, can the user view files in the folder over the network?"
      answer: "Yes (but he or she cannot create files)."
    - question: "A user is assigned Read NTFS permissions to a resource via his user account and Full Control via membership of a group. What effective NTFS permissions does the user have for the resource?"
      answer: "Full control—the most effective permissions are applied."
---