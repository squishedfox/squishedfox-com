---
title: Command-Line Tools
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/command-line-tools/
questions:
    - question: "You are attempting to run a command but receive the message “The requested operation requires elevation.” What must you do to run the command?"
      answer: "Open a new command prompt window with sufficient privileges. You can right-click the Command Prompt icon and select Run as administrator or press CTRL+SHIFT+ENTER to execute the icon or cmd.exe command."
    - question: "Which Windows command is probably best suited for scripting file backup operations?"
      answer: "The robocopy command offers more options than those offered by the xcopy command, so it will usually be the better choice. The copy command is quite basic and probably not suitable."
    - question: "Is the command format `d: /fs:exfat /q` valid? If so, what is its effect, and what precaution might you need to take before running it?"
      answer: "Yes, it is valid. It formats drive D with the exFAT file system by using a quick format (does not scan for bad sectors). This will delete the file table on the drive so existing data files can be overwritten—the formatted drive will appear to be empty in Explorer. If there are existing files that need to be preserved, they should be backed up before running the format command."
    - question: "How do you perform a scan to identify file system errors in read-only mode?"
      answer: "At a command prompt, run `chkdsk` without any switches. Note that sfc is not the correct answer as this verifies the integrity of protected system files rather than checks the file system on a drive."
    - question: "Why might you run the shutdown command with the /t switch?"
      answer: "To specify a delay between running the command and shutdown starting. You might do this to give users a chance to save work or to ensure that a computer is restarted overnight."
---

Angel brought in the new tablet he just purchased and tried to connect to the corporate network. He knows the SSID of the wireless network and the password used to access the wireless network. He was denied access, and a warning message was displayed that he must contact the IT Department immediately. What happened, and why did he receive the message?