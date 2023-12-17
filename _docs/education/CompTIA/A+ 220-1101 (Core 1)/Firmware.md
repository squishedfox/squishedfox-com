-  controls low level software that controls specific hardware
- It is held in non-volatile memory devices such as ROM, EPRMO, or flash memory
- Firmware can be upgraded on consumer electronics devices like dvd players, refrigerators, TVs, music systems, etc.

## Northbridge and Southbridge

- in computers, CPUs need a way to communicate with I/O devices like keyboards and mice
- in the past there were separate controller chips for each device type
- these got consolidated into two paired chips called the northbridge and the southbridge

## BIOS

- The basic input/output services (BIOS) helps provide information about devices to the CPU
- Programs that help the CPU communicate with the devices are called services or device drivers
- Motherboard store keyboard, mouse controller, support programs on a ROM (read-only memory)
- Updating the BIOS firmware is called "flashing the BIOS"

##  UEFI

- All current systems are unified extensible firmware interface UEFI instead of BIOS
- UEFI supports booting to partitions larger than 2.2 TB and handles all boot loading duties
- UEFI firmware native 32/64 bit
- Portable to other chip types, not just 16-bit x86
- Apple computers have EFI and CMOS, but Apple designs their systems form the ground up as unified systems

## CMOS

- Stored in ROM

## Power-On Self Test

- Computer turns on or reset, initiates power-on self test
- POST program does health check
- POST doesn't actually do any diagnostics

## Beep Codes

- POST errors are displayed on the screen as text
- Old computers has many beeps during POST
- Modern computers have two main beep codes
- One long beep then two or three short beeps (video card)
- single repeating beep (RAM)
- use a POST card to help troubleshoot the cards

## Boot process

1. Internal power supply turns on and initializes
2. processors first starts up and ready
3. the BIOS performs the power-on self test (POST)
4. BIOS looks for the video card
5. BIOS looks for other devices ROMs and BIOSs
6. BIOS displays its startup screen
7. BIOS does more tests on the system - memory count up, system inventory
8. BIOS detects and configure plugand play devices
9. BIOS will display a summary screen of the configuration
10. BIOS begins the search for the drive to boot from
11. BIOS looks for boot information to start the operating system boot process
12. Code in the boot sector takes over from the BIOS
