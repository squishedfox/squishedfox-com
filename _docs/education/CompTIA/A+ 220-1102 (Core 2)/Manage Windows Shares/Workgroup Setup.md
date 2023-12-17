A **workgroup** is is a way for systems to share resources over a network but the management of those resources are completed on the individual systems themselves. 

A **Domain** provides an interface for security between the client and server systems

## Joining a Workgroup

windows by default will be setup with a workgroup called *WORKGROUP* each computer is identified in the network browser by a hostname, which can be changed using the System Properties Dialog or using `sysdm.cpl`

## Network Discovery and File Sharing

Private workgroups will provide more security for resource sharing and provide a way for the system to be discoverable. 

If the joining network is public, by default the computer is not discoverable, and resources are not shared unless specified through Windows Explorer or changed in the Network & Internet Settings.

## Security Concerns

**Not recommended** you can disabled password-protected sharing so that anyone with the ability to "discover" the resource can also access it and interface with it.  You can **enable** this feature by enabling the Guest user account for network access only.