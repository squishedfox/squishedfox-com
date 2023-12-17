# Radius, TACACS+, and Kerberos

## Radius

Remote Authentication dial-In User Service (RADIUS) is a mechanism for implimenting the Authentication, Authorization, and Account (AAA) server with enterprise authentication.

Radius servers have no ability to read user credentials but rather act as a node in the system knowing where to forward a authentication request.

The wireless access point must be configured with the host name or IP address of the RADIUS server and a shared secret. The shared secret allows the RADIUS server and access point to trust one another.

## TACACS+

Terminal Access Controller Access Control system Plus (TACACS+) is another mechanism for implemtnation the Authentication, Authorization, and Account (AAA) server with enterprise authentication. 

Developed by CISCO
Open used for VPN connections for users

## Kerberos

Kerberos is a way of authenticating a user against a windows Domain Controller (DC) over a trusted local cable segment, as a Single Sign On (SSO). 

Users are provided a ticket which the system then can use as a way for identifying possible rights and permisions on servers.