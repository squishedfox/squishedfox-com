# Cross Site Scripting Attacks

Cross Site Scripting is a way of embedding what might look like trusted scripts from a source which the user may frequently visit. The steps below are what it may look like for an attacker to exploit a Cross Site Scripting (XSS) Vulnterability.

1. The attacker identifies an input validation vulnerability in the trusted site.
2. The attacker will create a url which will direct the user to where they should be, but also inject the custom code which the attacker has injected.
3. The user will then receive a link in the form of an attachment or email or possibly even on a web page redirect.
4. The malicious code then can steal information or spy on users. It can perform any action necessary to complete a task necessary for the attacker to complete their goals.