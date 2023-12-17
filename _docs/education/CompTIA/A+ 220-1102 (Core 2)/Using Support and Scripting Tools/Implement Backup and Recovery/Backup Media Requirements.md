# Backup Media Requirements

## Grandfather-Father-Son (GFS) Scheme 

The GFS scheme is a way of storing backups

1. Grandfather has the longest retention period and holds the most data
2. Son tapes have the most recent information on them but also have the leas amount and shortest retention periods.

## Implementation

1. A full backup may be completed every "x" weekday which then appends more data to the father record.
2. Incremental backups are made during the tap and marked as "son" which then only contain maybe every 15 - 30 minutes of data
3. A full backup is performed at the end of the quarter or month and added to the grandfather media storage.
4. The father taps are then recycled in the same order every week and continued

## Onsite versis off site storage

On site backup storage means that th eproduction system and backup media are in the same location. This means that if a disaster strikes the facility there is a risk of both the production and backup information.

offsite is best as it provides the best solution for ensuring that disaster recovery within a region or data center can be easily recovered as the original media is not effected.

## Online versus offline backups

Online backups are ones that are always available on the network. They can be accessed and immediately used by any system to restore a system to a previous state. Offline backups are disconnected from service and only brought online when they are required to be used.

Online is a faster restorage but poses a larger security threat as it then can be accessed by anyone who may gain access to it

## 3-2-1 rule

The 3-21 backup rules is the best-practice maximum that you can apply to your backup procedures to verify that you are implementing a solution that can mitigate the widest possible range of disaster scnearios.

You should have 3 copies of data including production copy, across two different media types, and one copy kept offline line and offsite.