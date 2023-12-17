# Boot Process

1. Do a POST to verify the system components are present and functioning as expected
2. Operating System Boot
  2.a.1. With Legacy BIOS, the firmware scans the disk identified as the boot device and reads the master boot record (MBR). BOOTMGR.EXE then executes to find the WINLOAD.EXE stored in the system root folder on the boot partition
  2.a.2. WINLOAD.EXE boots into the kernal NTOSKRNL.EXE with the hardware abstraction layer (HAL.DLL), and boot device drivers
 2.b.1. With EFI boot the initial part of the boot process is different. The following POST, the firmware reads the GUID partition table (GPT) on the boot device.
