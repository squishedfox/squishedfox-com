---
title: Package Management Commands
layout: page
parent: Manage Linux
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/manage-linux/package-management-commands/
---

# Package Management Commands

In Linux systems there are several ways to manage applications and executables on the system, and different ways the installation can take place.

for debian based systems most packages will be with the extension `.deb`
for red hat distributions you will typically see YUM files with the extension `.rpm`

Packages can come from different sources such as

- Software Store: Download and installable from any store
- Source Code: Download and compile the source code manually to install on the machine
- using `apt-get`, `apt install`, `homebrew`, or `yum`

## Distributions and Libraries

Distributions can be added as extensions to the allowable list of executables or applications in the `/etc/apt/sources.list` file for example which has a list of all the repository URLs which can be called to see if a package being installed or requested exists and where to get it.

## apt-get Command

The `apt-get` command is used for interfacing with APT. 

`apt-get update` will refresh the local database with the information about the package directly from the repository
`ap-get upgrade` will update all packages to their latest declared versions according to their repository
`apt get install <package name>` will reach out to the various distribution URLs and request the package to install and execute

## YUM Command

`yum check-update` will refresh the local database with information about the package directly from the repository
`yum update` will update all packages to their latest declared versions
`yum install <package name>` will reach out to the various distribution URLs and request the package to install and execute

## Antivirus

Linux may provide a higher barrier for virus development and intrusion but does not make it impossible. The way the system has been developed such that it requires very specific permissions on objects, has many different distributions which install software at various location, various package managers, etc. 
