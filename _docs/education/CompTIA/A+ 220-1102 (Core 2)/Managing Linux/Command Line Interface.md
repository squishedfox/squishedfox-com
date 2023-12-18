---
title: Command-Line Interface
layout: page
parent: Manage Linux
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/manage-linux/cmd-line-interface/
---

# Command Line Interface

## Entering in commands

Linux commands are often entered into the system in the format of `command <options> <actions>` for example `mv /Users/USERNAME/Applications/AnApplication ./Users/USERNAME/Applications/deprecated/Application` which moves a file or directory from the first argument to the second argument. Another example would be listing files or directories with the `ls` command with additional arguments like `ls -l .` which will print out to the terminal all of the files and folders in the current directory and output them in a list format using the `-l` flag.

## Case sensitivity

Case sensitivity matters for commands that have been entered into the terminal. Case sensitivity matters when typing in commands or using switches as you may receive different results based on the input into the terminal.

## File Editors

By default `nano` and `vim` are installed into many of the existing linux distributions today. 

## Help System

The best solution for trying to understand the terminal and it's commands or any additional command line tools that you have installed typically can be accessed using the man pages via the terminal by typing `man <cli-tool-name-here>` or additional you can use `<cli-tool-name-here> /help` or finally some will provide `<cli-tool-name-here> --help|--h`