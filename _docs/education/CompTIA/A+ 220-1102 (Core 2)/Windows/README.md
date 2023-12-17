---
title: Windows
layout: page
parent: CompTIA A+ 220-1102 (Core 2)
has_children: true
permalink: /education/comptia/a-plus/core-two/windows/
---

# CompTIA A+ 220-1102 (Core 2)

# Windows

## Disclaimer

All notes are taken from the official CompTIA A+ Core 2 Study Guide (Exam 220-1102) Self-Study E-Book. None of these ideas are my own or are original to me.

## Objectives

- Configure Windows user settings
- Configure Windows system settings

### Exam Objectives

- 1.4 Given a scenario, use the appropriate Microsoft Windows 10 Control Panel utility.
- 1.5 Given a scneario, use the appropriate Windows settings

## Windows Interfaces

### Windows 10 Desktop

Contains various Graphical User Interface components to enable the user to modify functionalty of existing or new applications running on the Operating System.

### Windows 11 Desktop

Center aligned taskbar and beter spacing for touch control, and rounded corners. 
- Enabled multiple desktops more excessible for things like personal use and business applications

### Settings and Control Panel

- Allow for system configuration from the Graphical User Interface (GUI) instead of shell or console

## Account Settings

- User accounts control access to the computer
- Each account can be assigned rights and privledges on the system
- Each user account is associated with a Profile
- App settings and configuration
  - Your information
  - Email & accounts
  - Configure sign-in options
  - Access work or school
  - Family and others
  - Sync Settings
 
### Profiles

Profiles have local state on a machine for items like Documents, Videos, Pictures, Downloads, Temporary storage data under hidden folders, and my even have their own subset of applications that are not available to other users.

### Privacy Settings

- Change how Microsoft obtains user specific information about usage of the Operating Systems and it's Applications though something called telemetry.

### Time and Language Settings

- Time and Language settings allow for users to adjust their timezone manually or by syncronizing with public servers based on their Machines geolocated timezone.
- It can change the locale settings for things such as on-screen text and keyboard usage

### Personalization

- Allow for users to adjust how the operating system looks and feels to them.
- Some inforamtion includes what applets are loaded or displayed by default on the desktop
- The theme of the operating system like colors and desktop wallpaper

### Ease of Access Settings

Configures input and output options to best suite each user based on their accessability needs
- Configures how the topography of text. i.e. the font and size of the text displayed by default on the operating system buttons but possibly the browser
- Turns on text to speech for visually impared users whom may not be able to read the text at all on the screen and easily nagivate the system using the keyboard input

### File management and explorer

The file explorer app is a Graphical User Interface (GUID) ontop of the shell/console. It allows users to visually inspect the structure of their files and folders. The File Explorer Application allows users to inspect other connected hard drives, poripheral devices, or virutally mounted devices on their system in the same way they may see their own filers or folders.

- System files live under C:\Program Files for 64-bit systems and applications and C:\Program Files for 32-bit systems and/or applications.
- User specific folders and files are located under C:\Users\{username}
- Windows specific files and folders are under C:\Windows or C:\Windows32


#### File Explorer Options

You may change specific permissions of a single file or whole directory
You may chose to show hidden files and folders by default or on an opt-in basis
- Allow for showing or hiding files and folder extensions
- Choose to index folders for easier searching through the Windows Search Bar or File Explorer search bar

### System Settings

View page for configuring input and output devices, power, remote desktop, notifications, and clipboard

### Updates and Security Settings

- Security applications provide defense against milicious actors whom are attempting to exploit a system for gain in various interests.
- The importants of system updates is due to the need for system patching which may ensure that said systems cannot be exploited through zero day vulnterabilities
- 

### Activation

Microsoft Product Activation is an anti-piracy technology that verifies that the software was purchased through the Microsoft platform either by a third party vendor or directly through Microsoft.


### Device Settings

- Many systems that are Microsoft Windows compatible support Plug and Play support, meaning that you may plug the paripheral device in using a USB connector, CD, PCI Cards, Network Interface Cards, etc.
- Devices can be configured through this panel to be enabled, disabled, adjust the settings of the paripheral for devices like microphones which may need to increase or decrease boost, increase or decrease the mouse settings or always display it's location, enable or disable wireless devices such as bluetooth, etc.
- 

### Display and Sound Settings

- Allows users to change the level of output to the audio paripheral device
- Allows users to change how many displays may be used at any given time, which display is the main display, whether a display is mirrored or if it's extended, or possibly even adjust the resolution.
- Allows for users to change the color output
- 

### Power Options

- Allows users to adjust the way a system consumes power and hwo it's allocated towards the usage goals. i.e. gaming systems, thin clients, servers, power saving etc.
- Preconfigure settings are setup to allow users to quickly change between high power, lower poer, and balanced consumptions settings
- Different settings will apply how the system may turn off displays, go to sleep, or use peripherals


### App Settings

- Allows users to view currently installed applications, their size on disk, when it was last installed or modified
- Allows users to click on an application and uninstall it

### Mail

- Allow users to add Mail clients and accounts to their computer to aggregate into the Mail app

### Gaming

- Keeps your computer form gling to sleep if there is inactivity
- Helps with certain frame rates
- Prevents windows updating notifcations and installations during game play


## Networking

- Windows can support several types of interfaces for consuming network connections based on supported devices and drivers.
- Networking can be managed through Network and Internet configuration
- Network Connections (ncpa.cpl)
- Network and Sharing Center allows users to view thir intenet connections and peer networks

## Windows Defener Firefall

- Users can enable or disable the Windows builtin firewall through this app
- The firewall prevents certain applications from communicating externally outside of the computer network

## Administrative Tools

- Provides an interface for the user to interact with more granular sybsystem configuration for things like users, disk usage, the regisry, event viewer, etc.

### Tools

- computer Management (compmgmt.msc): Allows for configring users and groups, disks, servies, devices, and so on
- defragment and opitmize drives (dfrgui.exe): maintain disk performance by optimizing file storage pattenrs
- disk Cleanup (cleanmgr.exe): regin disk capacity by deleting unwanted files
- event viewer (eventvwr.msc): review system, security, and application logs
- local securitypolicy (secpol.msc): view and edit the security settings
- resource monitor (resmon.exe): and performance monitoring (perfmon.msc) view and log performance statistics
- Registry Editor (regedit.exe): make manual edits to the database of windows configuration settings
- Services console (services.msc): Start, Stop, and apuse processes running in the background
- Task Schedulinger (tasksch.mcs): Runsoftware and scripts accoridng to calendar or event riggers 


