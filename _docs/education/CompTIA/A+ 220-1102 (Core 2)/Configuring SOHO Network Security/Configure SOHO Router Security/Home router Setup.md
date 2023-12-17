# Home Router Setup

## Summary

SOHOs typically utilize a home network device which is called a router or gateway which is connected to a larger network (WAN) or (MAN) via DSL/Ethernet, or Cable Model system. Newer networks will use smaller wireless devices that connect directly to a WAN and provide wireless only connections.

## Physical Placement/Secure Locations

Router placement is often limited by the place of entry which provides access between the Gateway or Router setup, thus this will not always be in a physically secure location. 

Malicious threat actors may be able to easily access the router or gateway and modify any USB or Ethernet ports.

## Home Router Setup

Different access points provide different requirements for accessing the Wide Area Network (WAN) through a provider.

- F-Connector: A coax cable typically connecting directly to a Modem which is then connected via an Ethernet Cable between the Home Router Setup and the Modem.
- RJ11: A smaller phone/DSL cable setup which connects directly to a Model which is the connected via an Ethernet Cable between the Home Router Setup and the Modem.
- RJ45: Typically an Ethernet Cable which can go directly to a Home Router, or sometimes Modem.

### Dynamic Home Configuration Protocol (DCHP)

The Dynamic Home Configuration Protocol (DHCP) starts up on Home Router systems and begins to assign IP addresses based on the configuration settings in the Home Router Setup. 

IP Addresses in a Home Network typically start with 192.168.x.x.

### Default Gateway

The Default gateway and the Router IP is typically reserved and set to be either `192.168.1.1` or `192.168.0.1`.

Different routers may have their own hostname on the network for easier memory such as asus which can be accessed through `asusrouter.com` which will direct you to the login page for your Home Router Setup.

### Password

Different routers have different setup configurations for initial logins. Some setups have no password and use `root` or `admin` as their setup. 

Some setups have `admin/admin` for username/password setup

Some setups will come with a preconfigured secure password and setup should you decide to reset your router which don't directly expose you to any threat actors.


## Internet Access and Static Wide Area Network IP

Any Modem will typically be assigned a Static IP which will appear for all traffic coming form the internal Network. This is a secure practice for a Network Address Translation (NAT) Setting.

