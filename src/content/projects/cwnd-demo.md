---
title: 'TCP Slow-Start Demo'
description: Interactive visualization of TCP congestion window growth during slow-start.
publishDate: 'Sep 15 2024'
tech:
  - Go
tags:
  - networking
  - systems
github: ritiksahni/cwnd-demo
---

I kept reading about TCP congestion control and nodding along without really *getting* it. So I built this.

It's a visualization of how TCP's congestion window grows during slow-start. Doubling each round-trip, feeling its way through the network until something breaks. You can watch the window expand in real time and see the exact moment packet loss kicks in and the algorithm backs off.

Built in Go because networking code should feel close to the wire. The implementation follows the RFC rather than hiding behind abstractions. Sometimes the best way to learn a protocol is to be the protocol.
