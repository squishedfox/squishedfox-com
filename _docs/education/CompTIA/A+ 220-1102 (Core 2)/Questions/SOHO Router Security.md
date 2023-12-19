---
title: SOHO Router Security
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/soho-router-security/
has_children: false
questions:
    - question: "You have selected a secure location for a new home router, changed the default password, and verified the WAN IP address and Internet link. What next step should you perform before configuring wireless settings?"
      answer: "Check for a firmware update. Using the latest firmware is important to mitigate risks from software vulnerabilities."
    - question: "<p>You are reviewing a secure deployment checklist for home router wireless configuration. Following the CompTIA A+ objectives, what additional setting should be considered along with the following four settings?<p>

      <ul>
        <li>Changing the service set identifier (SSID)</li>
        <li>Disabling SSID broadcast</li>
        <li>Encryption settings</li>
        <li>Changing channels</li>
      </ul>
    "
      answer: "Disabling guest access. It might be appropriate to allow a guest network depending on the circumstances, but the general principle is that services and access methods that are not required should be disabled."
    - question: "You are assisting a user with setting up Internet access to a web server on a home network. You want to configure a DHCP reservation to set the web server’s IP address, allow external clients to connect to the secure port TCP/443, but configure the web server to listen on port TCP/8080. Is this configuration possible on a typical home router?"
      answer: "Yes. You need to configure a port-mapping rule so that the router takes requests arriving at its WAN IP for TCP/443 and forwards them to the server’s IP address on TCP/8080. Using a known IP address for the server by configuring a Dynamic Host Configuration Protocol (DHCP) reservation simplifies this configuration. The home router’s DHCP server must be configured with the media access control (MAC) address or hardware identifier of the web server."
    - question: "A different user wants to configure a multiplayer game server by using the DMZ feature of the router. Is this the best configuration option?"
      answer: "Probably not. Using a home router’s “demilitarized zone” or DMZ host option forwards traffic for all ports not covered by specific port-forwarding rules to the host. It is possible to achieve a secure configuration with this option by blocking unauthorized ports and protecting the host using a personal firewall, but using specific port-forwarding/mapping rules is better practice. The most secure solution is to isolate the game server in a screened subnet so that is separated from other LAN hosts, but this typically requires multiple router/firewalls."
---