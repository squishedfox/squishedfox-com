If your local machine is struggling to make connections to services through applications or in general it may be beneficial to see if you can get to local resources on the network but not public resources.

`ping` can be used to access reosurces on any network either by `hostname` or by IP address.
	- By Host name: If this fails it implies that either the service never was setup to have an alias in a Domain Name System on the Network, or the DNS itself is not responsive.
	- By IP Address: If services do not resolve based on their IP addresses you may be dealing with more direct issues on the network related to bad bad hardware on the network or the application or service may be down.