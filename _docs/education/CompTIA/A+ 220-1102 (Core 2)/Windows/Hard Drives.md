---
title: Hard Drives
layout: page
parent: Windows
has_children: false
permalink: /education/comptia/a-plus/core-two/windows/hard-drives/
---

Different Components
![[Pasted image 20230717102828.png]]
- Platter
- Track
- Track Sector
- Disk Sector
- Cluster
- Head
- Actuator Arm

## Solid State Drives

- Page size typically is 4096 bytes or 4 Gigabytes
- Common block size is 128 pages
- Controller was created to create something called Logical Block Addressing (LBA)
	- LBA is just a pointer to a specific piece of data on a system

## Windows Partitions

- Master Boo Record (MBR)
	- Contained within the first sector of the disk
	- Stores the location of the OS boot files
	- Only one can exist per disk
	- Must exist on a primary partition
- GUID Partition (GPT)
	- Each partition is it's own boot sector
- Dynamic Storage Partition scheme (proprietary)
- Can have four total partitions
	- Must have at least one primary partition
	- Additional partitions can be Logical or Extended Partitions. Extended Partitions do not receive drive letters.

### Dynamic Disks

- No limit in partisions
- Can implement RAID
- Can span volumes across drives

### GPT

- Attempted replacement for MBR (Master Boot Record)
- No limit to number of primary drives
- No size limit
- Uses GPT Header and partition in array
- LBA 0 is the protected MBR
- Modern Systems required UEFI to boot with GPT

## Hidden or Swap Partitions

- Used by operating systems to keep backup copies of the Operating System files for restores
- Used by Operating Systems to Swap RAM (Random Access Memory) imprint for applications
	- This only exists on Linux Operating Systems
- Similar to Page partitions on Windows

## Formatting

1. Create File System
2. Create Root directory for File System
3. Organize the Partition Blocks

- Each Operating System has it's own formatting

### Linux

- EXT4
- BTRFS
- XFS
- ZFS

## Windows

- FAT32
- FS
- NTFS

## FAT (32)

- Earliest Formatting Scheme (legacy)
- No longer used
- FAT32 is the latest version of disk formating
	- Each block stores up to 4096 bytes
	- blocks larger than the maximum size use multiple clusters
- 

## Fragmentation

- When you delete a file/folder it's location gets flagged as empty space
- Deleted files may be recovered from the recyble bin or 3rd party software
- As data gets added/deleted/changes, gaps are formed
- This decreases efficiency
- Defragmentation re-organizes data
- SSDs do not have fragmentation issues

## NTFS

- New technology file system
- Uses clusters of blocks and master file table for the file allocation
- A copy of the MFT is located in the middle of the partition
- NTFS supports partitions up to 16 TB on a dynamic disk and 2 TB o na basic disk
- Benefits:
	- Security: Treats files and folders as objects and provides security via Access Control List (ACL)
	- Compression: Can compress individual files and folders to save space
	- Encryption: Allows for disk encryption via "encrypting file system (EFS)"
	- Disk Quotas: 

## exFAT

- External Hard drives were large and cost efficient with these formatting supports
- FAT32 only supports drives up to 2 TB and files up to 4 GB
- exFAT supporst files up to 16 exabytes (EB) and partition limit of 64 zettabytes (ZB) - 512 TB
- Supports 64-bit
- exFAT lacks NTFS's extra features such as permissions, compression, and encryption

## APFs

- Apple File System (APFS) provides snapshots, encryptions, and disk efficiency

## ext4

- Most Linux based machines use this format and uses 1 exabyte (EB) with a file size up to 16 TB
- Backward compatible with ex32 and ext3
- Linux file system capabilities exceed macOS and Windows: ASbie to read and write to NTFS, FAT32, exFAT, HFS+, and ext4
- Enterprise level and data centers use ZFS