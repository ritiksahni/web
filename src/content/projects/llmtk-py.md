---
title: 'llmtk-py'
description: Generate OpenAI-compatible tool call schemas from Python functions automatically.
publishDate: 'Nov 15 2024'
tech:
  - Python
tags:
  - ai
  - developer-tools
  - llm
github: ArcifyLabs/llmtk-py
---

Every time I built an AI agent, I'd spend 20 minutes hand-writing JSON schemas for tool calls. Same boilerplate, every time. llmtk-py makes that go away.

Annotate your Python functions, and it generates OpenAI-compatible tool call schemas automatically. It introspects signatures, type hints, and docstrings to produce clean, spec-compliant output.

The schema generation step should be automatic, not something you write by hand for the tenth time.
