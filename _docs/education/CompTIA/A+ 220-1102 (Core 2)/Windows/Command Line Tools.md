---
title: Command Line Tools
layout: page
parent: Windows
has_children: false
permalink: /education/comptia/a-plus/core-two/windows/cmd-line-tools/
---

# Command (cmd.exe) Line Tools

## Objectives

1.2 Given a scenario, use the appropriate Microsoft command-line tool.

## Command Prompt

The Command Prompt (cmd.exe) allows users to use a shell process to modify system operations.

## Administrative Command Prompt

If a command cannot be ran under the User command prompt priviledges then elevated privileges may need to be given to the cmd prompt shell to be able to execute changes to certain areas o the system. To run a shell as administrator you must click on the shwell menu and then select "Run as Administrator"

## Command Syntax

Command syntax requires the double quotes '"" around files and folders which may have spaces in them. Certain flags may be provided depending on the command being used. You can always type `/help` to find the commands available for your specific operating system version. Alternatively if you need to know more about a command you can also type the /command_name and a question mark "?" after which will display additional details, and flags available for that command.

## Navigation Commands

Navigation command work based on the current directory and will enact on them unless specified to target a different directory by a relative or absolute path provided as an argument.

### Listing Files and Directories

Running the `dir` command on Windows will list all the directories in the current directory the prompt is set to. There are few plags that can be passed to list files sorted by attribute, i.e. file size, file name, date modified, etc.

### Changing Directories

You can run the `cd` command to change the working directory of the command prompt. 

### Changing Drives

You can change drives by using the assigned drive letter and then use the forward slash and a colon like so `D:\`

### File Managmenet Commands

The move command `mv` and the copy command `cp` privde the ability to rename files or copy files or directories to different locations or drives in the system.

xcopy is an additional utility that you can install to copy more then one folder or directory at a time and keep the structure as is.

### Removing a Directory

Directories can be deleted or removed with the `md` command. This does not actually delete the data off the disk it just takes the data and removes it off of the linked file system.

### Creating a directory

Directories can be made using the `mkdir` command which will make a directory relative to the current directory, or by passing an absolute argument such as `C:\Users\AdventureWorks\Home`

## Disk Management Commands

### diskpart

Diskpart lets users select different disks attached to their system. Diskpart also lets you select different partitions on your system.

### format

Format command lets you write over and format a partition or volume using a specific format such as FAT32, EXFAT, or NTFS


### chkdsk

`chkdsk` scans the file system and/or disk sectors for faultes and can attempt to repair any problems detected. 

**Examples**

- `chkdsk X:` allows users to check an entire disk

## System Management Commands

### Shutdown

`shutdown` command closes all open programms and services before completely powering off the computer. There are additional command syou can provide such as `nn` which is the number of seconds before shutting down.

### Hibernate

The `shutdown /h` command provides a way to send the system into a hybernation mode

### Log off

The `shutdown /l` closes all open prograns and services under the user account but leaves the computer running

### Restart

The `shutdown /r` closes all open programs and services before rebooting without powering down.

## System File Checker

`sfc /scannnow` runs commands to scan immediately
`sfc /scanonce` schedules a scan when the computer is next restarted
`sfc /scanboot` schedules a scan that runs each time the PC boots
