---
sidebar_label: conda_flow_decorator
title: plugins.conda.conda_flow_decorator
---

## CondaFlowDecorator Objects

```python
class CondaFlowDecorator(FlowDecorator)
```

Conda decorator that sets a default Conda step decorator for all
steps in the flow.

To use, add this decorator directly on top of your Flow class:
```
@conda_base
class MyFlow(FlowSpec):
    ...
```

Any step level Conda decorator will override any setting by this decorator.

Parameters
----------
libraries : Dict
    Libraries to use for this flow. The key is the name of the package and the value
    is the version to use. Defaults to {}
python : string
    Version of Python to use (for example: &#x27;3.7.4&#x27;). Defaults to None
    (specified at the step level)
disabled : bool
    If set to True, disables Conda (note that this is overridden if a step level decorator
    sets to True). Defaults to None (specified at the step level)
Raises
------
InvalidEnvironmentException
    Raised if --environment=conda is not specified

