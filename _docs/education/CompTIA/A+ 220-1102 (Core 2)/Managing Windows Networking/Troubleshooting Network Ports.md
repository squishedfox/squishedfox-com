---
title: Troubleshooting Network Ports
layout: page
parent: Managing Windows Networking
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/windows-networking/ports/
---

# Troubleshooting Network Ports

## netstat command

- used to verify port connections on the local host for thins like file sharing or email ports being open on a remote server.

### Examples

```sh
$ netstat
```

**output**

```sh
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 MACHINE_NAME:39054        xxx.xxx.xxx.xxx.bc:https TIME_WAIT  
tcp        0      0 MACHINE_NAME:34028        xxx-xxx-xxx-xxx-xx:https ESTABLISHED
tcp        0      0 MACHINE_NAME:51304        IP_ADDRESS.bc:https TIME_WAIT  
tcp        0      0 MACHINE_NAME:59256        IP_ADDRESS:https      ESTABLISHED
tcp       32      0 MACHINE_NAME:47948        xxx-x-xxx-xx-xx.c:https CLOSE_WAIT 
tcp        0      0 MACHINE_NAME:33262        IP_ADDRESS:https      TIME_WAIT  
tcp        0      0 MACHINE_NAME:39632        IP_ADDRESS.bc.g:http TIME_WAIT  
tcp        0      0 MACHINE_NAME:34082        server-xx-xxx-xxx:https ESTABLISHED
tcp        0      0 MACHINE_NAME:42918        IP_ADDRESS.bc.g:https ESTABLISHED
tcp        0      0 MACHINE_NAME:36362        xxx-x-xxx-xx-xx.c:https ESTABLISHED
tcp        0      0 MACHINE_NAME:36024        IP_ADDRESS:https        ESTABLISHED
tcp        0      0 MACHINE_NAME:51248        IP_ADDRESS.bc:https TIME_WAIT  
tcp        0      0 MACHINE_NAME:59686        lb-xxx-xx-xxx-xx-:https ESTABLISHED
udp        0      0 MACHINE_NAME:bootpc       RT-xxxxx-xxxxx:bootps    ESTABLISHED
```

```sh
$ netstat -a
```

**output includes UDP ports in the listening state**

```sh
Active Internet connections (servers and established)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 localhost:ipp           0.0.0.0:*               LISTEN     
tcp        0      0 localhost:postgresql    0.0.0.0:*               LISTEN     
tcp        0      0 localhost:5433          0.0.0.0:*               LISTEN     
tcp        0      0 localhost:domain        0.0.0.0:*               LISTEN     
tcp        0      0 b450m-ds3h:48790        76.237.120.34.bc.:https TIME_WAIT  
tcp       32      0 b450m-ds3h:34028        ec2-34-200-107-25:https CLOSE_WAIT 
tcp       32      0 b450m-ds3h:54880        ec2-3-225-38-57.c:https CLOSE_WAIT 
tcp        0      0 b450m-ds3h:59256        104.18.13.33:https      ESTABLISHED
tcp       32      0 b450m-ds3h:47948        ec2-3-225-38-57.c:https CLOSE_WAIT 
tcp        0      0 b450m-ds3h:40312        lb-140-82-112-25-:https ESTABLISHED
tcp        0      0 b450m-ds3h:53530        server-54-230-202:https TIME_WAIT  
tcp        0      0 b450m-ds3h:55882        1.97.149.34.bc.go:https TIME_WAIT  
tcp       32      0 b450m-ds3h:54894        ec2-3-225-38-57.c:https CLOSE_WAIT 
tcp        0      0 b450m-ds3h:44952        55.65.117.34.bc.g:https ESTABLISHED
tcp        0      0 b450m-ds3h:33860        ec2-44-214-229-86:https TIME_WAIT  
tcp        0      0 b450m-ds3h:36024        75.75.77.4:https        ESTABLISHED
tcp        0      0 b450m-ds3h:47268        123.208.120.34.bc:https TIME_WAIT  
tcp        1     25 b450m-ds3h:59686        lb-140-82-112-25-:https CLOSING    
tcp6       0      0 ip6-localhost:ipp       [::]:*                  LISTEN     
udp        0      0 localhost:domain        0.0.0.0:*                          
udp        0      0 b450m-ds3h:bootpc       RT-AX58U-D978:bootps    ESTABLISHED
udp        0      0 0.0.0.0:631             0.0.0.0:*                          
udp        0      0 0.0.0.0:mdns            0.0.0.0:*                          
udp        0      0 0.0.0.0:38292           0.0.0.0:*                          
udp6       0      0 [::]:60084              [::]:*                             
udp6       0      0 [::]:mdns               [::]:*                             
raw6       0      0 [::]:ipv6-icmp          [::]:*
```

