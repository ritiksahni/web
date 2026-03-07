---
title: 'tell-js'
description: Logging and error reporting via Telegram. 23 stars on GitHub.
publishDate: 'Mar 10 2022'
tech:
  - TypeScript
  - Node.js
tags:
  - developer-tools
  - logging
github: ArcifyLabs/tell-js
---

I got tired of SSH-ing into servers to check if my side projects were still alive. So I built a library that sends logs straight to Telegram. No dashboards, no SaaS. Just a bot token, a chat ID, and errors that ping your phone.

Wire it up in a few lines, replace `console.log()` with `tell()`, and suddenly you know exactly when things go wrong. It's picked up 23 stars, which tells me other developers had the same itch.

The API is intentionally tiny. If you need Datadog, use Datadog. If you need to know your cron job failed at 3am without checking anything, use this.
