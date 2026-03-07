---
title: 'http-parse'
description: Raw HTTP request/response parser built from scratch.
publishDate: 'Aug 05 2023'
tech:
  - Python
tags:
  - security
  - networking
  - parser
github: ritiksahni/http-parse
---

No frameworks, no libraries. Just bytes and the HTTP spec.

http-parse takes raw request and response data and turns it into structured objects. It came straight from my security days: when you're analyzing traffic or building tooling, you need to see HTTP at the byte level, not the abstraction level. Most libraries hide the messy details. This one exposes them.

It handles chunked transfer encoding, multipart bodies, and the edge cases that trip up naive parsers. Half the work was reading the RFC. The other half was finding out where real-world traffic disagrees with it.
