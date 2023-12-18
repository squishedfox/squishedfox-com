---
title: SQL Injection Attacks
layout: page
parent: Configuring SOHO (Small Office, Home Office) Network Security
grand_parent: Explain Attacks, Threats, and Vulnerabilities
has_children: false
permalink: /education/comptia/a-plus/core-two/soho/threats/sql-injection/
---

# SQL Injection Attacks

A web application is likely to use Structured Query Language (SQL) to read/write to a data store.

If no input sanitization is handled on the server for requests then an attacker can attempt to write SQL which may execute in the database when passed along. 

if there is a database table called `USERS` for example a user could attempt to make a payload looks like below to a web server

```json
{
    "username": "; DELETE USERS;"
}
```

When the web server attempts to validate if a user with the username already exists it will perform the action

```sql
SELECT 1
FROM USERS
WHERE = ; DELETE USERS;
```

The server will error first, on the `SELECT` statement, and then move onto the `DELETE` statement which will utlimately delete the files
