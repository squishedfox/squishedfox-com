---
title: Windows Networking
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/windows-networking/
questions:
    - question: "<p>You are assisting a user with configuring a static IP address. The user has entered the following configuration values and now cannot access the Internet. Is there a configuration issue or a different problem?</p>
  <ul>
      <li>IP: 192.168.1.1</li>
	    <li>Mask: 255.255.255.0</li>
	    <li>Gateway: 192.168.1.0</li>
	    <li>DNS: 192.168.1.0</li>
  </ul>"
      answer: "There is a configuration problem. `192.168.1.0` is not a host address. With the subnet mask `255.255.255.0``, it identifies the network range as `192.168.1.0/24`. The gateway is usually configured as the first available host address in this range: `192.168.1.1`. The DNS server should also be set to `192.168.1.1``."
    - question: "You are assisting another user who is trying to configure a static IP on a Windows workstation. The user says that `255.255.255.0` is not being accepted in the prefix length box. Should the user open a different dialog to complete the configuration or enter a different value?"
      answer: "The Network & Interface settings Edit IP settings dialog can be used. 255.255.255.0 is the subnet mask in dotted decimal format. The dialog just requires the number of mask bits. Each “255” in a dotted decimal mask represents 8 bits, so the user should enter 24."
    - question: "You are supporting a user who has just replaced a wireless router. The user has joined the new wireless network successfully but can no longer find other computers on the network. What should you check first?"
      answer: "Use Network & Internet to check the network profile type. When the network changed, the user probably selected the wrong option at the prompt to allow the PC to be discoverable, and the profile is probably set to Public. Change the type Private. "
    - question: "A DHCP server has been reconfigured to use a new network address scheme following a network problem. What command would you use to refresh the IP configuration on Windows client workstations?"
      answer: "`ipconfig /renew`"
    - question: "A computer cannot connect to the network. The machine is configured to obtain a TCP/IP configuration automatically. You use ipconfig to determine the IP address and it returns `0.0.0.0`. What does this tell you?"
      answer: "This is an irregular state for a Windows PC. If a DHCP server cannot be contacted, the machine should default to using an APIPA address (169.254.x.y). As it has not done this, something is wrong with the networking software installed on the machine. The best option is probably to perform a network reset via the Settings > Network & Internet > Status page."
    - question: "You are pinging a host at `192.168.0.99` from a host at `192.168.0.200`. The response is “Reply from `192.168.0.200`: Destination host unreachable.” The hosts use the subnet mask `255.255.255.0`. Does the ping output indicate a problem with the default gateway?"
      answer: "No. The hosts are on the same IP network (192.168.0.0/24). This means that 192.168.0.200 does not try to use a router (the gateway) to send the probes. 192.168.0.200 uses address resolution protocol (ARP) to find the host with the IP 192.168.0.99. The host unreachable message indicates that there was no response, but the problem will be an issue such as the host being disconnected from the network or configured to block discovery rather than a gateway issue. "
    - question: "You are checking that a remote Windows workstation will be able to dial into a web conference with good quality audio/video. What is the best tool to use to measure latency between the workstation’s network and the web conferencing server?"
      answer: "pathping measures latency over a longer period and so will return a more accurate measurement than the individual round trip time (RTT) values returned by ping or tracert."
    - question: "Which command produces the output shown in this screenshot?"
      image: https://github.com/squishedfox/security-training/assets/141427007/65d7b473-2e21-4c3a-9fe8-62d82ffa8196
      answer: "This is output from netstat. The -n switch has been used to show ports in numeric format and the -o switch to show the PID of the process that opened the port."
    - question: "True or false? Windows Defender Firewall cannot be disabled."
      answer: "False. It is not usually a good idea to do so, but it can be disabled via Security Center or the Control Panel applet."
    - question: "You need to set up a VPN connection on a user’s Windows laptop. The VPN type is IKEv2. What other information, if any, do you need to configure the connection?"
      answer: ""
---
