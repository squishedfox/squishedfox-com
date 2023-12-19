---
title: Backup and Recovery
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/backup-and-recovery/
has_children: false
questions:
    - question: "What backup issue does the synthetic job type address?"
      answer: "A synthetic full backup reduces data transfer requirements and, therefore, backup job time by synthesizing a full backup from previous incremental backups rather than directly from the source data."
    - question: "You are documenting workstation backup and recovery methods and want to include the 3-2-1 backup rule. What is this rule?"
      answer: "It states that you should have three copies of your data across two media types, with one copy held offline and offsite. The production data counts as one copy."
    - question: "For which backup/restore issue is a cloud-based backup service an effective solution?"
      answer: "The issue of provisioning an off-site copy of a backup. Cloud storage can also provide extra capacity."
    - question: "What frequent tests should you perform to ensure the integrity of backup settings and media?"
      answer: "You can perform a test restore and validate the files. You can run an integrity check on the media by using, for example, `chkdsk` on a hard drive used for backup. Backup software can often be configured to perform an integrity check on each file during a backup operation. You can also perform an audit of files included in a backup against a list of source files to ensure that everything has been included."
---