---
sidebar_label: renderer_tools
title: plugins.cards.card_modules.renderer_tools
---

#### render\_safely

```python
render_safely(func)
```

This is a decorator that can be added to any `MetaflowCardComponent.render`
The goal is to render sub components safely and ensure that they are JSON serializable.

