---
title: Web
layout: page
parent: OSINT
has_children: true
permalink: /education/tcm-academy/osint/web/
---

# Website OSINT

## Summary

Look at what we can with websites and hunting through websites and their details and information. 

## Tools

- https://builtwith.com/ identifies what technologies is/are used to build an application
- https://centralops.net/co
- https://dnslytics.com/
- https://spyonweb.com/
- https://virustotal.com/
- https://backlinkwatch.com/
- https://viewdnsinfo.com/
- https://pentest-tools.com/
- https://crt.sh/
- https://shodan.io/
- https://web.archive.org/ helps to search for historical web application states
- https://github.com/khast3x/h8mail is a password breach hunting tool

## Tips

- Use google to search for links to a website that you may be looking for. e.g. search "tcm-sec.com" to find any websites that may link to that specific domain.
- Finding information for builtwith.com to understand how a website may be exploited. 
- https://CentralOpts.net/co to find DNS records, security certificates, domain WHOIS records, etc.
- Reverse lookup websites on https://dnslytics.com which point back to a specific owner of a website or IP address.
- Use https://spyonweb.com/ to find more information about a specific IP address or domain. It's helpful for whois information.
- Use https://virtustotal.com/ to find metadata about any files or metadata or analytics that is tied to a google analytics.
- Use https://backlinkwatch.com/ to find any sort of references that may track back to a specific websites.
- Use https://viewdnsinfo.com/ to find any other websites that may be sitting at the same IP address or possibly even same machine as another based on IP address or domain.
- Find subdomains that aren't easily findable or are "hidden" on websites that are not meant to find. Looking for subdomains can give clues as to what technologies or resources a subject uses for protect themselves, or possibly not.
- Use certificate searching for a website or domain and if it is indeed valid or can be hacked.
- Paid accounts for shodan are useful to find any unlimited number of searches.
- Many IoT devices are exposed easily and are findable through https://shodan.io/ to either watch people through web cams, or through.
- Shodan can do a service scan and find open ports that should not be open or used on a service.
- The way back machine can provide evidence of how websites once were layed out or working prior to a security change or there are pages that may no longer be present.
