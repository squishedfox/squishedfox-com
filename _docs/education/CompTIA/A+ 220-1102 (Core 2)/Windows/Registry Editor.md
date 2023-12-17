---
title: Registry Editor
layout: page
parent: Windows
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/windows/registry-editor/
---


# Registry Editor

## Summary

Provides a means for configuring applications, programs, and the operating system. The registry database is stored in a binary system called "hives"

## Registry Keys

HKEY_LOCAL_MACHINE (HKLM) contains the database for the machine as as whole and ti's settings
HKEY_UESRS database includes settings hat apply to the indivdual profiles
HKEY_CURRENT_USER is a subset of HKEY_USERS with the settings for logged in user.

## Hives

Hive files are just a single file without an extension inside of the `C:\Windows\System32\Config` folder

## Editing the Registry

The registry has subfolders which contain additional entries. A value entry has three parts
  1. the name of the value
  2. the data type of the value
  3. the value itself

The registry can be exported in a way that thenc an be importd into any other operating windows operating system running the same major version.
