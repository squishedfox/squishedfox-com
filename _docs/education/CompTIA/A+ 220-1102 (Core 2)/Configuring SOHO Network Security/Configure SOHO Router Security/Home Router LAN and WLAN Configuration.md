---
title: Home Router LAN and WLAN Configuration
layout: page
parent: Configure SOHO Router Security
grand_parent: Configuring SOHO (Small Office, Home Office) Network Security
has_children: false
permalink: /education/comptia/a-plus/core-two/soho/router-security/lan-and-wlan/
---

# Home Router LAN and WLAN Configuration

## Summary

The home router setup provides access to a Wide Area Network (WAN) through connecting to the home router wirelessly or via a RJ45 ethernet cable.

## Service Set ID

The Service Set ID (SSID) is a name assigned to the network. 

Each manufacture has their own format for default SSIDs when the Home Router Setup is initially taking place.

There is nothing stopping someone else from naming their network the same SSID outside of your network and threat actors often will name their network close to the same name to get users to connect and access their network traffic in hopes of sniffing packets, this method of attack is called the Evil Twin Attack.

## Disabling Broadcast

Some Home Router Configurations will disable the broadcast name. This does not stop different users from being able to connect but it will no longer appear in modern network connectivity utilities on Windows, MacOS, or Linux Systems.

This does not secure the network through hiding is as it still can be connected to via the name if someone knows it.

## Encryption Settings

Almost every Home Router setup provides the ability to some sort of wireless encryption and security setting, e.g. WPA2, WPA3

## Disabling Guest Access

Guest networks allow users to connect to a network wirelessly without being prompted for a password.

## Changing Channels

Common radio frequencies for Wireless Network Connectivity are 2.4 Ghz, 5 Ghz, and 6 Ghz. Each have their own benefit and drawbacks for use.

Some routers allow for "mixed mode" which allows for multiple frequencies to be broadcast, or you can select to broadcast a single frequency.

Different Channels can be used to reduce conflict and network interruptions if there are many networks around which also are broadcasting their own signals