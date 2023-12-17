# Enterprise Authentication Protocols

## Summary

The primary issue of personal authentication is a shared passphrase is not a secure and scalable solution for providing access to a network. 

## 802.1x

Enterprise authentication provides 802.1x authentication method which implements Extensible Authentication Protocol (EAP)

Privdes the ability to connect to a network and pass authentication methods and information alogn without actually providing access to any resources on the network.

### Workflow

1. Station can request accesss to the network, the Access Point (AP) enables the channel for EAPoW traffic only
2. it passes the credentials submitted by the supplicant to an Authentication, Authorization, and Account (AAA) server on the wired network for validation. The AAA server (not the access point) determines whether to accept the credential
3. when the user has been authentication the AAA server transmits a master key (MK) to the wireless PC or laptop. The wireless station and authenticaiton server then derives the same pairwise master key (PMK) from the MK
4. The AAA server transmits the PMK to the access point. The wireless station and access point use the PMK to derive session keys, using either the WPA2 4-way handshake or WPA3 SAE methods

### Advantages

- Does not have to store any user Accounts or Credentials. They are stored securely on the Authentication, Authorization and Account (AAA) server.
- Can use more advanced authentication methods
- Stronger EAP methods use a digital certificate on the server and/or client machines
- allows for multifactor authentication

## EAP with Transport Layer Security (EAP-TLS)

1. Both server and accessor are issued an encryption key-pair and digital certificate
2. On the wireless device, the private key is stored securely in a trusted platform module (TPM) or USB key. Users must authenticate with the device using a PIN, password, bio signature as the first factor
3. When the device associates with the network and starts an EAP session, the sever sends a digital signature handshake and its certificate
4. the supplicant validates the signature and certificate and if trusted, sends its own handshake and certificate. This is the second factor
5. The server checks the supplicant's handshake and certificate and authenticates it if trusted