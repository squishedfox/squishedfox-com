# Data Destruction Methods

## Recycled Devices

For devices that will be recycled and reused in other systems it's important to appropriately remove all the information off a disk.

## Do Not

Simply deleting records and files off of a storage devices does not delete the files. Deleting directories and files off of a storage only tells the Operating System that it can re-use those sectors, but the data is still there. 

Reformat the drive using standard Operating System Formatting will do similar actions as deleting files. Reformatting a drive often just allows the operating system to write over areas of the drive, but doesn't actually delete any files.

## Erasing/Wiping

Erasing/wiping software clears out sectors of a drive with random data or it will write just a series of "0s" onto the drive to ensure there is nothing stored there.

## Low Level Format

- Secure Erase (SE) - Follows the process of filling zeros onto blocks
- Instant Secure Erase (ISE) - This encryptes the disk and effectively makes the data useless as there is no way to recover the data/information