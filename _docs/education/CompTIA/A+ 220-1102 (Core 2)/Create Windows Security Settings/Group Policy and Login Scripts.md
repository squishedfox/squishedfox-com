---
title: Group Policy and Login Scripts
layout: page
parent: Create Windows Security Settings
grand_parent: CompTIA A+ 220-1102 (Core 2)
has_children: false
permalink: /education/comptia/a-plus/core-two/windows-security-settings/authentication-methods/
---

# Group Policy and Login Scripts

## Group Policy Settings

Group policy Settings are a way of applying required properties/attributes to a group of users with a policy. For example, certain users may required 2-Factor Authentication, while others don't, or other users may have access to the sales Excel files but other's don't. some users may require being able to grant themselves elevated privilges to install pieces of software, etc.

### Group Policy Updates

`gpupdate` is a command used to update group policies on a windows service. These are typically refereshed every 90 minutes but at times may require to be faster so the `/force` command can be used to require the domain controller to update the policy and "push" it to the necessary users.
`gpresult` displays the RSoP for the computer and user account. This shows the policies that a user and the computer have on the domain.
