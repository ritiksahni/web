---
title: 'X Timeline Architecture'
description: Distributed timeline system inspired by Designing Data-Intensive Applications.
publishDate: 'Jul 01 2024'
tech:
  - Go
tags:
  - systems
  - distributed-systems
  - architecture
github: ritiksahni/x-timeline-architecture-demo
---

I was reading *Designing Data-Intensive Applications* and kept thinking: I should build this, not just read about it.

This is a working demo of how a social media timeline (like X/Twitter) can work at scale. It implements both fan-out-on-write and fan-out-on-read so you can see the trade-offs firsthand. How high-follower accounts behave differently, how read-heavy and write-heavy workloads push you toward different designs.

Built in Go with clarity over production-readiness. The point was to internalize the concepts by getting my hands dirty, not to ship a Twitter clone.
