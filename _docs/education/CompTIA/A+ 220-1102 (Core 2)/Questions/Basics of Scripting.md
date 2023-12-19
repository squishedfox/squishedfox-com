---
title: Basics of Scripting
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/scripting/
has_children: false
questions:
    - question: "You are auditing a file system for the presence of any unauthorized Windows shell script files. Which three extensions should you scan for?"
      answer: ".PS1 for PowerShell scripts, .VBS for VBScript, and .BAT for cmd batch files."
    - question: "You want to execute a block of statements based on the contents of an inventory list. What type of code construct is best suited to this task?"
      answer: "You can use any type of loop to iterate through the items in a list or collection, but a For loop is probably the simplest."
    - question: "<p>You are developing a Bash script to test whether a given host is up. Users will run the script in the following format:</p>

    `./ping.sh 192.168.1.1`

    <p>Within the code, what identifier can you use to refer to the IP address passed to the script as an argument?</p>"
      answer: "$1 will refer to the first positional argument."
    - question: "You are developing a script to ensure that the M: drive is mapped consistently to the same network folder on all client workstations. What type of construct might you use to ensure the script runs without errors?"
      answer: "Use a conditional block (If statement) to check for an existing mapping, and remove it before applying the correct mapping."
    - question: "You are developing a script to scan server hosts to discover which ports are open and to identify which server software is operating the port. What considerations should you make before deploying this script?"
      answer: "While the risk is low, scanning activity could cause problems with the target and possibly even crash it. Test the script in a sandbox environment before deploying it. Security software might block the operation of this script, and there is some risk from the script or its output being misused. Make sure that use of the script and its output are subject to access controls and that any system reconfiguration is properly change-managed. "
---