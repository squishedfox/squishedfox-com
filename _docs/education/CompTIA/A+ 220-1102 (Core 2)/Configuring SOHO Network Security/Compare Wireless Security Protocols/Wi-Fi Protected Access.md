# Wi-Fi Protected Access

## Summary

Wireless systems are considered to be unsafe because there is no limit to the range being output by the system. Anyone with the ability to listen for a signal can gather the signal and being trying to intercept or spoof it.

## Temporal Key Integrity Protocol

the Wi-Fi Protected Access (WPA) protocal was an evolution from the Wired Equivalant Privacy (WEP) standard. Like WEP the WPA uses RC4 symmetric cipher to encrypt traffic but adds another layer with Temporal Key integrity Protcol 9TKIP) to try and mitigate the various attacks.

## WPA2

Older protocols like WPA and WEP are no longer considered to be securited beacuse they can be cracked using high powered computers. WPA2 uses Advanced Encryption Standard (AES) cipher deployed within the Counter Mode with Ciper block Cahining Message Authentication Code Protocol (CCMP).

Uses a 4 way handshake.

## WPA3

WPA3 is the next version in the Wireless Protocol Access from V2. The better features are

- Simultaneoius Authentication of Equals (SAE): Used to replace the common 4 way handshake WPA2 uses with a more secure SAE mechanism.
- Updated cryptographic pro.tocols: WPA3 replaces AES CCMP with a stronger AES Galois Counter Mode Protocol (GCMP) mode of operation.
- Protected management frames: Lower versions of WPA or WEP are vulnterable to frame spoofing or issues of DoS attacks.
- Wi-Fi Enhanced Open: Open Wi-Fi provides a mechanism for encrypting traffic which has no passphrase for accessing it.

