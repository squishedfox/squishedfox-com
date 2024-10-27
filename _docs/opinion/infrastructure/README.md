---
title: Infrastructure 
layout: home
has_children: false
permalink: /opinion/infrastructure/
---

# Infrastructure

Infrastructure as a Service Providers I have used and their capabilities as-well-as their tools such as Containers, Images, custom configuration languages.

It's worth nothing before even bothering with anything else that I do not like the state of devops as of the writing of this (2024). Years prior I was quite interested in the field knowing that it would take off, but it has gone in a direction that I find has become unecessarily challenging for developers to have the responsability of knowing. The tools and configurations, in my experience, are built with poor developer experience in mind and with little assistance other than to be thrown into the fire and required to learn it. At no time, do I think a developer should have to understand many of the topics or ideas for infrastructure and where their application lives outside of any hardware, permissions, or network limitations that may be met. There are entire teams of people designated to infrastructure, and as such should be their responsability to maintin the knowledge and communications necessary to ensure a healthy uptime to the best of their capabilities, full stop. 

## Docker and Kubernetees

Docker itself is a great product. I have gone back and forth on loving and hating it at the same time.

When it doesn't work it's a nightmare that you are left searching the weeds of the internet hoping someone else has found the issue because if they haven't you either crawl into the hole of imposter syndrome and hide-trying to figure out the issue without letting your peers know-working into the early hours of the next morning to find the answer. You hope to discover it before you sheepishly have to go back to your product manager/owner and tell them you've ran into a constraint.  

Kubernetees to me feels like it supposed to be this layer ontop of your hosting provider like Amazon Web Services, Microsoft Azure, or the nightmare that is Google Cloud Hosting Provider. I really have not spent a ton of time understanding how this works, but more end up digging through logs that only end up just sending me to the hosting provider and digging through a EC2 instance somewhere to look at the out put. Why InfraOps people don't just use autoscaling in hosting providers that offer it as a product I don't know.

## Amazon Web Services

Full disclosure, I hate amazon for everything it is and stands for. I avoid it with as much research and dilligance as possible and urge others to do the same. For some reasons organizations continue to use this disaster of a service. 

I think the documentation and the tools that are given from Amazon to build and use their products are great. Better than Google Cloud Provider and Microsoft Azure. They give multiple examples in their documentation as-well-as links to web tools that will assist you in writing scripts or policies for your web services.

Hosting is stupid expensive, and I think the scaling for cost is great if your an enterprise company.