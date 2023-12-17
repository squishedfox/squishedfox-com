# Operating System (OS) Requirements for Applications

## Summary

Some Applications have different distributables based on a Linux Distribution, a Windows Version, or a MacOS Version. The application installation and runtime will depend on the Operating System you are utalizing. 

### Linux

Some linux Distributions require installation files to be in a special *.gzip archive format which the Operating system then has a tool to install on the local disk and add run the necessary scripts to enable the software to run as required. Other Linux Systems may require a file type of *.dep, *.rpm or even be built completely from the source code on the target machine because there are no distributions of the software packaged for that Linux Distribution

### MacOS

MacOS has installation packages with the extension *.dmg which are downloaded on to the operating system. The Operating System Installer knows how to open the special archived folder, extract the necessary contents to specific part of the drives, and execute any necessary setup scripts to enable the software to run as required. 

### Microsoft Windows

Microsoft Windows has a few different ways in which software is distributed and installed. The first is the traditional *.exe files which are archived folders that contain scripts and files to be extracted onto the local file system and executated as necessary. Later on in the 64-bit verion of windows they moved to the *.msi installer which had a different type of format for installing and made packages smaller and easier to distribute. 
