---
title: Windows Security Protocols
layout: questions
parent: Questions
grand_parent: CompTIA A+ 220-1102 (Core 2)
permalink: /education/comptia/a-plus/core-two/questions/workstation-security-issues/
has_children: false
questions:
    - question: "Why might a PC infected with malware display no obvious symptoms?"
      answer: "If the malware is used with the intent to steal information or record behavior, it will not try to make its presence obvious. A rootkit may be very hard to detect even when a rigorous investigation is made."
    - question: "Why might you need to use a virus encyclopedia?"
      answer: "You might need to verify symptoms of infection. Also, if a virus cannot be removed automatically, you might want to find a manual removal method. You might also want to identify the consequences of infection—whether the virus might have stolen passwords, and so on."
    - question: "Early in the day, a user called the help desk saying that his computer is running slowly and freezing up. Shortly after this user called, other help desk technicians who overheard your call also received calls from users who report similar symptoms. Is this likely to be a malware infection?"
      answer: "It is certainly possible. Software updates are often applied when a computer is started in the morning, so that is another potential cause, but you should investigate and log a warning so that all support staff are alerted. It is very difficult to categorize malware when the only symptom is performance issues. However, performance issues could be a result of a badly written Trojan, or a Trojan/backdoor application might be using resources maliciously (for DDoS, Bitcoin mining, spam, and so on)."
    - question: "You receive a support call from a user who is 'stuck' on a web page. She is trying to use the Back button to return to her search results, but the page just displays again with a pop-up message. Is her computer infected with malware?"
      answer: "If it only occurs on certain sites, it is probably part of the site design. A script running on the site can prevent use of the Back button. It could also be a sign of adware or spyware though, so it would be safest to scan the computer using up-to-date anti-malware software."
    - question: "Another user calls to say he is trying to sign-on to his online banking service, but the browser reports that the certificate is invalid. Should the bank update its certificate, or do you suspect another cause?"
      answer: "It would be highly unlikely for a commercial bank to allow its website certificates to run out of date or otherwise be misconfigured. You should strongly suspect redirection by malware or a phishing/pharming scam."
    - question: "Why is DNS configuration a step in the malware remediation process?"
      answer: "Compromising domain-name resolution is a very effective means of redirecting users to malicious websites. Following malware infection, it is important to ensure that DNS is being performed by valid servers."
---