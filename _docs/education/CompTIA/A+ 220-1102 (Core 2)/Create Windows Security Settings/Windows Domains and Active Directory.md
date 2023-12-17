# Windows Domains and Active Directory

## Domain Controllers

Domain Controllers (DC) stores a database of network information called Active Directory (AD). The database stores users, groups, and computer objects. Domain Controllers are responsible for authentication for systems trying to utalize resources. 

## Member Servers

A system connected to the domain but does not maintain a copy of the Active Directory (AD) database. This means the server does not authenticate the user but is allowed to verify, because it's on the same network as the Domain Controller (DC), that a user has access to a resource.


## Security Groups

Security groups can be used to assign permissions with a broader brush than if you were to provide invidivual permission to each and ever users for each and every resource. Security Groups provide a way to give users, applications, service access to resources based on an inherited role they gain which is validated through the Domain Controller on the system.

## Organizational Unit (OU)

A way of dividing up domain into different administrative realms. There may be different domains for your organization that all belong to the same Active Directory but may have completely different roles in the company. For example you may have a Sales Team, a Marketing Team, Operations Team, Infrastrcuture Team, etc. Each of these teams may be assigned a different Organizational Unit (OU) which can have different policies applied to them.
