# User and Group Accounts

## Definition

A user acccount is the principal means of controlling access to a computer and network resource and assigning rights or privileges. In Windows, a user can be setup with a local account or a Microsoft Account.

### Local Account

Exist only on the machine the user is utalizing

### Microsoft Account

Managed in an online portal or active directory on a network

## Security Groups

A security group is a collection of user accounts. Security groups are used when assigning permissiona dn rights, as it is more efficient to assign permissions to a group than to assign them individually to each user. 

**Standard Account** - Standard user accounts can only configure their own profile and settings on the computer they are assigned to. If the need elevated privlidges they must request them from the computer or network administraotor.
**Administrator Account** can do all the required management tasks of a machine.

## net user commands

### Create new user account and force them to create a new password

```cmd
net user ACCOUNT_NAME SET_PASSWORD_HERE /add fullname:"FIRST_NAME LAST_NAME" /logonpasswordchg:yes
```

### Disable an account

```cmd
net user ACCOUNT_NAME /active:no
```

### Show the user properties of the account

```cmd
net user ACCOUNT_NAME
```

### Adding an account to the administrators local group

```cmd
net localgroup Administrators ACCOUNT_NAME /add
``
