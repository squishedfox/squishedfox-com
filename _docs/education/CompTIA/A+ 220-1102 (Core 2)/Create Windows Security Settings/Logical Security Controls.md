![image](https://github.com/squishedfox/security-training/assets/141427007/51363bbf-cb3d-4742-b2c6-b9b8d77ed791)# Logical Security Controls

## Control Classificication

### Physical Security Controls

Work in the built environment to control access to stites. Exampels include fences, doors, and locks

### Procedural Security Controls

Applied and enforced by peodple. Examples include incident response processes, management oversight, and security awareness training programs.

### Logical Security Controls

Applied and enforced by digitial or cyber systems and software. Exmaples include user authentication, antivirus software, and firewalls.

Logical controls have a trifecta system refered to as AAA (triple "A")

- **Authentication** everything on the system can be identified by a specific account and that account belongs to one specific system or user. The account should only be accessabile by the system or user whom has valid credentials.
- **Authorization** resources on the system can be accesses or denied based on the account roles or permissions. The resources may be things like being able to read a file, or write to a file. Or access a remote server on a specific network.
- **Accounting** is auditing a system and appropriately tracking all the changes done to a system and by whom it has occured.

## Access Control List (ACL)

### Terms

- **subjects** can be a system, application, or service running and attempting to access a resource. Each subject has something called a Subject Identifier (SID) which is unique to the account.
- **access control entry** provides a way to identify a subnect and the permissions for a resource.
- **permissions** are a list of security roles or names which can be keyed to identify whether a subject has different types of access or no access to a resource.

## Implicit Deny

Implicit deny means that unless there there is a specific rule targeting the account, security group, or the permission a subject has, the access to a reosurce is explicitely denied to the subject.

## Least Privilege

Subjects should be provided with the minimum required permissoins to perform thier responsabilities.

