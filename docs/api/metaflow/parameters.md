---
sidebar_label: parameters
title: parameters
---

## DeployTimeField Objects

```python
class DeployTimeField(object)
```

This a wrapper object for a user-defined function that is called
at the deploy time to populate fields in a Parameter. The wrapper
is needed to make Click show the actual value returned by the
function instead of a function pointer in its help text. Also this
object curries the context argument for the function, and pretty
prints any exceptions that occur during evaluation.

