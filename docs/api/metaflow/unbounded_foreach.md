---
sidebar_label: unbounded_foreach
title: unbounded_foreach
---

## UnboundedForeachInput Objects

```python
class UnboundedForeachInput(object)
```

Plugins that wish to support `UnboundedForeach` need their special
input(s) subclass this class.
This is used by the runtime to detect the difference between bounded
and unbounded foreach, based on the variable passed to `foreach`.

