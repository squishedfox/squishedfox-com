+++
title = "Setting Up Kali Linux on QEMU/KVM on Arch Linux"
date = 2026-07-19
description = "Two approaches to running Kali Linux as a QEMU guest on Arch Linux — hardware-accelerated KVM vs pure software emulation"
+++

Kali Linux is the go-to distro for penetration testing and security research, and running it as a virtual machine on your Arch Linux system is a clean, isolated way to work. QEMU/KVM gives you near-native performance and far more flexibility than VirtualBox or VMware.

This guide covers two approaches:

- **Option A (Recommended): KVM acceleration** — near-native performance using your CPU's virtualization extensions
- **Option B: Pure software emulation** — no special hardware required, but slower

Both options assume you're on Arch Linux (or an Arch-based distro).

---

## Installation

### Prerequisites

Before anything, make sure your CPU supports hardware virtualization:

```bash
grep -E --color=auto 'vmx|svm' /proc/cpuinfo
```

If you see vmx (Intel) or svm (AMD), you’re good for Option A. If not, you’ll need Option B.

Also grab the Kali ISO from the [official download page](https://www.kali.org/get-kali/).

### Comparison

You have two options (Option A and Option B)

| Feature         | Option A (KVM)   | Option B (Emulation) |
| --------------- | ---------------- | -------------------- |
| Performance     | Near-native      | Slow                 |
| CPU requirement | VMX/SVM required | No special hardware  |
| Installation    | virt-manager GUI | Command-line QEMU    |
| Disk I/O        | virtio (fast)    | Default (slower)     |
| Use case        | daily driver VM  | Occasional CLI use   |

### Tips

- Shared clipboard: With Option A, SPICE agent handles this. With Option B, you’re better off using SSH and sshfs.
- Snapshots: In virt-manager, go to View → Snapshots to save and restore VM states.
- Networking: The default NAT in virt-manager gives the VM internet access. For Hack The Box / TryHackMe, this works out of the box.
- USB passthrough: In virt-manager, go to Add Hardware → USB Host Device to pass through a USB Wi-Fi adapter or other device.

## Option A: KVM Acceleration (Recommended)

```bash
sudo pacman -S qemu-desktop libvirt virt-manager edk2-ovmf dnsmasq
```

- qemu-desktop — QEMU with x86_64 emulation and GUI support
- libvirt — hypervisor management daemon
- virt-manager — graphical VM management UI
- edk2-ovmf — UEFI firmware for VMs
- dnsmasq — DHCP/DNS for virtual networking

### Step 2: Start and Enable libvirtd

```bash
sudo systemctl enable --now libvirtd.service
```

### Step 3: Add Your User to the libvirt Group

```bash
sudo usermod -aG libvirt $(whoami)
```

Log out and back in (or newgrp libvirt) for this to take effect.

### Step 4: Create the VM via virt-manager

1. **Download the pre-built QEMU image** from [kali.org/get-kali](kali.org/get-kali). Look for the **QEMU** sectino. It comes as a `.7z` archive containing a `.qcow2` file.
2. **Extract it** into your libvirt images directory:

```bash
sudo pacman -S p7zip
7z x kali-linux-*-qemu-amd64.7z
sudo mv kali-linux-*-qemu-amd64.qcow2 /var/lib/libvirt/images/
```

3. **In virt-manager** when creating the VM:
   - Select Import existing disk image instead of Local install media
   - Browse to the .qcow2 file
   - Set OS type to Debian 12
   - Allocate RAM/CPUs as normal
   - In customization, set Firmware to UEFI if you want (the pre-built image works with both BIOS and UEFI)

That’s it. Boots straight into Kali with default credentials kali/kali.

### Step 5. Post-Install Tweaks

For better performance, install the SPICE guest tools and virtio drivers inside Kali:

- sudo apt update
- sudo apt install spice-vdagent qemu-guest-agent
- sudo systemctl enable --now spice-vdagent qemu-guest-agent

Shut down the VM, then in virt-manager go to VM settings → Channel and ensure the SPICE channel is present. Under Disk bus, switch from SATA to virtio for faster I/O.

### Troubleshooting

**“KVM not available”** error:
Make sure virtualization is enabled in your BIOS/UEFI. Check with:

```bash
lsmod | grep kvm
```

If empty, load the module:

```bash
sudo modprobe kvm_amd # for AMD
sudo modprobe kvm_intel $ for intel
```

## Option B: Pure Software Emulation (No KVM)

Use this if your CPU doesn’t support hardware virtualization or you’re running inside another VM (nested virtualization without passthrough).

### Step 1: Install QEMU

```bash
sudo pacman -S qemu-desktop
```

### Step 2: Download the Kali QEMU Image

Grab the pre-built image from kali.org/get-kali (look for the QEMU section). It comes as a .7z archive.

```bash
# Install 7zip if you don't have it
sudo pacman -S p7zip

# Download the image (adjust URL for the current release)
wget https://kali.download/base-images/kali-2026.1-qemu-amd64.7z

# Extract it
7z x kali-2026.1-qemu-amd64.7z
```

This gives you a .qcow2 disk image — no installation needed.

### Step 3: Boot Kali

```bash
qemu-system-x86_64 \
  -m 4096 \
  -smp 2 \
  -drive file=kali-linux-2026.1-qemu-amd64.qcow2,format=qcow2 \
  -vga virtio \
  -display gtk
```

That’s it. Kali boots straight up. Default credentials: kali / kali.

> Note: Without KVM, expect noticeably slower performance. GUI-heavy tools like Burp Suite or browser-based testing will feel laggy. This option is really only suitable for lightweight CLI work or when KVM genuinely isn’t available.

## Troubleshooting

**Virt-manager says “Cannot access storage file”:**
Ensure your user has read/write permissions on the directory where the disk image lives. Add your user to the kvm group:

```bash
sudo usermod -aG kvm $(whoami)
```

**No network in the VM:**
Make sure `libvirtd` is running and the default network is active:

```bash
sudo virsh net-start default
sudo virsh net-autostart default
```
