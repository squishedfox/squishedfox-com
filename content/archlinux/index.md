+++
title = "Arch Linux: Encrypted Install with LVM, Separate Partitions & KDE Plasma"
description = "Step-by-step guide to installing Arch Linux with LUKS encryption, LVM logical volumes for root, home, var, and swap, plus the KDE Plasma desktop environment."
date = 2026-07-19
updated = 2026-07-19
draft = false

tags = ["arch-linux", "linux", "encryption", "kde", "guide"]

[extra]
toc = true
+++

## Summary

This guide walks through a full Arch Linux installation with:

- UEFI boot (modern systems)
- LUKS full disk encryption via cryptsetup
- LVM on LUKS — one encrypted container holding logical volumes for /, /home, /var, and swap
- KDE Plasma desktop environment with SDDM display manager
- systemd-boot as the bootloader

> Prerequisites: An Arch Linux USB installer, a working internet connection, and a system booted in UEFI mode. Verify with ls /sys/firmware/efi/efivars — if the directory exists, you’re in UEFI mode.

## Pre-Installation

### 1.1 Keyboard Layout

Set your preffered keymap (default is US)

```bash
loadkeys us # or 'loadkeys de', 'loadkeys r', etc.
```

### 1.2 Verify Boot Mode

```bash
ls /sys/firmware/efi/efivars
```

### 1.3 Connect to the internet

Wired — should work automatically via DHCP.

Wi-Fi use `iwctl`

```bash
iwctl
[iwd]# device list
[iwd]# station wlan0 scan
[iwd]# station wlan0 connect "YourSSID"
[iwd]# exit
```

Verify with:

```bash
ping archlinux.org
```

### 1.4 Update System Clock

```bash
timedatectl set-ntp true
timedatectl status
```

## 2. Disk Partition

We’ll partition a single disk (e.g., `/dev/nvme0n1` or `/dev/sda`) into:

| Partition        | Size         | Type       | Mountpoint            |
| ---------------- | ------------ | ---------- | --------------------- |
| `/dev/nvme0n1p1` | 1 GiB        | EFI System | `/boot`               |
| `/dev/nvme0n1p2` | Rest of disk | Linux LUKS | (encrypted container) |

> Note: On NVMe drives, partitions are `nvme0n1p1`, `nvme0n1p2`, etc. On SATA drives, they're `sda1`, `sda2`, etc. Adjust accordingly.

### 2.1 Wipe the Disk (Optional but Recommand)

```bash
# For SSDs — use blkdiscard
blkdiscard /dev/nvme0n1

# For HDDs — write zeros
dd if=/dev/zero of=/dev/sda bs=1M status=progress
```

### 2.2 Create Partitions with `fdisk`

```bash
fdisk /dev/nvme0n1
```

Inside `fdisk`

1.  Type g to create a new GPT partition table.
2.  Type n then 1 for partition number. Accept default first sector. Set last sector as +1G for the EFI partition.
3.  Type t then 1 to set type to EFI System.
4.  Type n then 2 for the second partition. Accept defaults to use the rest of the disk.
5.  Type t then 2 then 31 to set type to Linux LUKS (or just leave as Linux filesystem — the type label doesn’t matter functionally).
6.  Type w to write changes and exit.

### 2.3 Format the EFI Partition

```bash
mkfs.fat -F32 /dev nvme0n1p1
```

## 3. Encryption Setup (LUKS)

### 3.1 Create the LUKS Container

```bash
cryptsetup luksFormat /dev/nvme0n1p2
```

You'll be prompted to confirm (type `YES` in uppercase) and set a passphrase. **Choose a strong passphrase -- this is your master key.**

### 3.2 Open the LUKS Container

```bash
cryptsetup open /dev/nvme0n1p2 cryptlvm
```

This maps the decrypted container to `/dev/mapper/cryptlvm`

## 4. LVM Setup

Now we create logical volumes inside the unlocked container

### 4.1 Create Physical Volume & Volume Group

```bash
pvcreate /dev/mapper/cryptlvm
vgcreate vg0 /dev/mapper/cryptlvm
```

### 4.2 Create Logical Volumes

Size guidelines (adjust based on your disk size and needs)

| LV     | Size                                      | Mountpoint |
| ------ | ----------------------------------------- | ---------- |
| `swap` | 8 - 16 GiB (or RAM sizse for hibernation) | swap       |
| `root` | 30 - 60 GiB                               | `/`        |
| `var`  | 10 - 20 GiB                               | `/var`     |
| `home` | Remaining space                           | `home`     |

```bash
lvcreate -L 16G vg0 -n swap
lvcreate -L 50G vg0 -n root
lvcreate -L 15G vg0 -n var
lvcreate -l 100%FREE vg0 -n home
```

### 4.3 Format the Logical Volumes

```bash
mkfs.ext4 /dev/vg0/root
mkfs.ext4 /dev/vg0/home
mkfs.ext4 /dev/vg0/var
mkswap /dev/vg0/swap
```

## 5. Mount Everything

```bash
mount /dev/vg0/root /mnt
mkdir -p /mnt/{boot,home,var}
mount /dev/nvme0n1p1 /mnt/boot
mount /dev/vg0/home /mnt/home
mount /dev/vg0/var /mnt/var
swapon /dev/vg0/swap
```

## 6. Base System installation

### 6.1 Install Base Packages

```bash
pacstrap -K /mnt base base-devel linux linux-headers linux-firmware \
  lvm2 vim sudo man-db man-pages bash-completion networkmanager \
  amd-ucode  # or intel-ucode for Intel CPUs
```

> lvm2 is critical here it provides the LVM tools needed inside the installed system

### 6.2 Generate fstab

```bash
genfstab -U /mnt >> /mnt/etc/fstab
```

Verify the file looks correct:

```bash
cat /mnt/etc/fstab
```

## 7 Chroot and Configure

```bash
arch-chroot /mnt
```

### 7.1 Time Zone

Make sure to replace {Region} and {Zone} before running below

```bash
ln -sf /usr/share/zoneinfo/{Region}/{Zone} /etc/localtime/
hwclock --systohc
```

### 7.2 Localization

Edit `/etc/locale/gen` and uncomment your desired locales

```bash
vim /etc/locale.gen
# Uncomment: en_US.UTF-8 UTF-8
# Uncomment: your locale if needed
locale-gen
```

Create `/etc/locale/conf`

```bash
echo "LANG=en_US.UTF-8" > /etc/local.conf
```

### 7.3 Hostname

```bash
echo "archbox" > /etc/hostname
```

Edit `/etc/hosts`

```bash
vim /etc/hosts
```

Contents:

```bash
127.0.0.1   localhost
::1         localhost
127.0.1.1   archbox.localdomain archbox
```

### 7.4 Root Password

```bash
passwd
```

### 7.5 Enable NEtwork manager

```bash
systemctl enable NetworkManager
```

## 8. Initramfs Configuration

This is the most critical step for an encrypted LUKS setup. The initramfs needs to know how to unlock the drive at boot.

### 8.1 Edit `/etc/mkinitcpio.conf`

```bash
vim /etc/mkinitcpio.conf
```

Set the `HOOKS` line to include `encrypt` and `lvm2` **before** `filesystems`

```bash
HOOKS=(base udev autodetect microcode modconf kms keyboard keymap consolefont block encrypt lvm2 filesystems fsck)
```

The order matters `encrypt` unlocks the LUKS container, then `lvm2` activities the volume groups

### 8.2 Rebuild Initramfs

```bash
mkinitcpio -P
```

## 9. Bootloader (systemd-boot)

### 9.1 Install systemd-boot

```bash
bootctl install
```

### 9.2 Get the LUKS Partition UUID

```bash
blkid -s UUID -o value /dev/nvme0n1p2
```

Copy the UUID you'll need it for the boot entry

### 9.3 Create boot entry

```bash
vim /boot/loader/entries/arch.conf
```

Contents

```Ini
title   Arch Linux
linux   /vmlinuz-linux
initrd  /amd-ucode.img
initrd  /initramfs-linux.img
options cryptdevice=UUID=YOUR_LUKS_UUID:cryptlvm root=/dev/vg0/root resume=/dev/vg0/swap rw quiet
```

Replace `YOUR_LUKS_UUID` with the UUID from step 9.2

If you have an Intel CPU, use `intel-ucode.img` instead

### 9.4 Set Default entry

```bash
vim /boot/loader/loader.conf
```

Contents

```Init
default arch.conf
timeout 4
console-mode max
editor yes
```

## 10. GPU Drivers

Chose based on your hardware

### AMD

```bash
pacman -S mesa lib32-mesa vulkan-radeon lib32-vulkan-radeon
```

### Intel

```bash
pacman -S mesa lib32-mesa vulkan-intel lib32-vulkan-intel
```

### NVIDIA

```bash
pacman -S nvidia nvidia-utils lib32-nvidia-utils nvidia-settings
```

## 11. Desktop GU

### 11.1 KDE Plasma Desktop

#### 11.1.1 Install KDE Plasma

```bash
pacman -S plasma-meta plasma-wayland-session sddm
```

#### 11.1.2 Enable SDDM

```bash
systemctl enable sddm
```

#### 11.1.3 Install Useful KDE Apps (Optional)

```bash
pacman -S konsole dolphin ark gwenview kcalc spectacle
```

## 12 Create User

```bash
useradd -m -G wheel -s /bin/bash yourusername
passwd yourusername
```

Grant sudo access:

```bash
EDITOR=vim visudo
```

Uncomment the line:

```
%wheel ALL=(ALL:ALL) ALL
```

## 13 Firewall Setup with UFW

### 13.1 Install UFW

```bash
pacman -S ufw
```

### 13.2 Allow essential services

```bash
ufw allow ssh              # port 22, if you use SSH
ufw allow 1025-65535/udp   # required for KDE Connect to work
```

### 13.3 Set Default Policies

```bash
ufw default deny incoming
ufw default allow outgoing
```

If you run any servers (HTTP, etc.), allow those too:

```bash
ufw allow http             # port 80
ufw allow https            # port 443
```

### 13.4 Enable ufw

```bash
ufw enable
```

### 13.5 Enable at Boot

```bash
systemctl enable ufw
```

### 13.6. Check status

```bash
ufw status verbose
```

### If you're on KDE

KDE Connect uses dynamic ports in the 1025-65535 range over UDP. The broad allow above covers it. If you’d rather be more restrictive, you can find the specific port KDE Connect is using on your network and allow only that — but it can change, so the range is the pragmatic approach.

## 14 Final Steps & Reboot

### 14.1 Exist and Unmount

```bash
exit
umount -R /mnt
swapoff /dev/vg0/swap
```

### 14.2 Reboot

```bash
reboot
```

Remove the USB Installer when prompted. You should see a password prompt for LUKS during boot, then SDDM will great you with the KDE login screen

## Post Install Tips

### Automatic Unlock at Boot (Optional)

If you'd rather not type your LUKS passphrase twice (once for the initramfs, once for SDDM/KDE Wallet), you can setup a keyfile or use `plymouth` for a graphical unlock prompt

```bash
pacman -S plymouth
```

### Keep System Updated

```bash
sudo pacman -Syu
```

### Enable `paccache.timer`

```bash
sudo pacman -S pacman-contrib
sudo systemctl enable paccache.timer
```

### Check LVM Layout

```bash
sudo lvdisplay
sudo vgdisplay
sudo pvdisplay
```

# Troubleshooting

## Boot drops to emergency shell

Check That

- The `cryptdevice` UUID in the boot entry matches the LUKS partition (e.g., `/dev/nvme0n1p2`), not the EFI partition or the logical volumes.
- `encrypt` and `lvm2` hooks are present and in the right order in `mkinitcpio.conf`.
- You rebuilt `initramfs` with `mkinitcpio -P`.

## "Volume group not found" error

The `lmv2` package must be installed in the chroot (`pacstrap` phase). Re-enter the live environment, chroot in, and verify `lvm2` is installed.

## KDE won't start

Ensure `sddm` is enabled and check logs:

```bash
sudo journalctl -xe -u sddm
```
