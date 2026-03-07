---
title: 'zip-over-range'
description: Browse and extract files from remote ZIPs using HTTP Range requests. No full download needed.
publishDate: 'Oct 12 2025'
tech:
  - JavaScript
tags:
  - browser
  - networking
github: ritiksahni/zip-over-range
---

Could I look inside a giant ZIP without downloading the whole thing? Turns out, yes. ZIP files store their index at the end. A couple of HTTP Range requests, and you can read the table of contents of a multi-gigabyte archive using only kilobytes.

This runs entirely in the browser. No server, no uploads. Point it at a URL and browse what's inside. Click a file to download just that one.

I wrote a detailed breakdown of the ZIP architecture and the technique behind this in a [blog post](/blog/peeking-inside-gigantic-zips-with-only-kilobytes/). The kind of project where the research was half the fun.
