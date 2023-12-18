---
title: File Permissions and Commands
layout: page
parent: Manage Linux
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/manage-linux/file-permissions/
---

# File Permissions and Commands

## Flags

- Read (r) provides the ability to read files or an entire directory
- Write (w) provides thea ability to modify or delete a resource on the system.
- Execute (x) gives permission to run an executable file or script

## CHMOD

`chmod +r ./myfile.txt` gives permissions for a user or group to read a file
`chmod +rw ./myfile.txt` gives permission for a user or group to read, write, or delete a file
`chmod +rx ./myfile.txt` gives permission for a user or group to read or execute a specified file

## CHOWN

`chown` provides the ability to change the ownership of a file or directory. This task can only be completed with the superuser `su`        