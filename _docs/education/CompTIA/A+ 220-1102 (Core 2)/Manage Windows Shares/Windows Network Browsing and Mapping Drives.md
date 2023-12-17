## Browsing Network Computers

On Microsoft Windows, you can browse network servers or clients that are connected and have resource sharing enabled. You can do this by opening up the Windows Explorer and then Opening the Network Leaf under the Sidebar context. In the Sidebar context you will observe one or many machines listed by their hostname, which can then be also opened up to view any shared resources.

## Mapped Drives

Drives can be aliases for other computer resources on the network or to Network File Storage (NFS) devices. Mapped drives can be temporarily mapped as a one time assignment, or they may be persisted by checking the box labelled "Reconnect at sign-in"

## net use Commands

`net /?` Displays all the available commands using the `net` command
`net view` displays a list of servers on the local network
`net view \\MYSERVER` view the shares available on the server named MYSERVER
`net use M: \\MYSERVER\DATA /persistent:yes`  Maps the DATA folder on MYSERVER to the M: drive
`net use M: /delete` Removes the M: drive mapping
`net use * delete` Removes all mapping drives