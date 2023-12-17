---
title: Hard Drives
layout: subarticle
parent: CompTIA A+ 220-1101
has_children: false
---

- Solid State Drive (SSD)
- Hard Disk Drive (HDD)

## HDD

- Header
- Tracks
- Sectors
- Head
- Speeds for reading/writing
- Format sizes

### SSD

- All data is statically stored
- Much faster
- 2.5 Inch
- mSATA
- M.2 chips
- Difference Inerfaces for Connections

### Price

- SSDs cost more than HDD
- Cheaper SSDs implement less reliable multi-level call (MLC) memory technoogy
- Expensive ones use signle-level call (SLC) technology

## Hybrid Drives

- Combine flash memory and spinning disks
- Needs to take advantage of the hardware and interfaces availabile on the motehr board

## PATA Drives

- 40-bin ribbon cables called IDE Cables

## SATA drives

- Point-to-point connection between SATA drives
- Much faster than PATA
- 1.0: 1.5 GBps/150 MBps
- 2.0: 3 Gbps/300 MBps
- 3.0: 6 Gbps/600 MBps
- 3.2 up to 16 Gbps/2000 MBps, also known as SATAe

## eSATA

- External can be used as Hard DRives
- faster than USB 2.0
- Cable length 2 meters

## AHCI

- Advanced Host Controller Interface (AHCI) is efficient way to work with SAT devices
- Must be implmeneted in the Operating System

## Volatile Memory Express NVMe

- Supports communication between the Operating System and the Solid State Drive directly
- This is through a PCIe bus lane, reducing latency and taking full advantage of the wicked-fast speeds of high-end SSDs

## Small Computer System Interface (SCSI)

- Serial attached hard drives provide fast and robust storage for servers and storage arrays
- Can provide speeds up to 12 Gbps
- Also supports SATA drives

## Protecting Data

- Disk Mirroring
  - One drive works as the primary and another as the secondary 
- Duplexing: Same as mirroring, but separate controller for each drive - faster and more redundant
- Disk Striping: Spreading the data among multipel (at least two) drives

## RAID

- Raid 0 - Disk Stripping Disk striping requires at least two drives
- RAID 1 - Disk Mirroring/Duplexing RAID1 arrays
- RAID 5 - Disk stripping with Distributed Parity instead of dedicated data and parity drives
- RAID 6 - Disk stripign with extra parity if you lose a hadr drive in a RAID 5 array
- RAID 10 - Nested, Striped Mirrors RAID levels have been combined
- RAID 0+1 - Nested, Mirrored Stripes LIke RAID 10
