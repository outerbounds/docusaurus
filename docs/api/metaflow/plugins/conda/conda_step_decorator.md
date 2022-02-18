---
sidebar_label: conda_step_decorator
title: plugins.conda.conda_step_decorator
---

## CondaStepDecorator Objects

```python
class CondaStepDecorator(StepDecorator)
```

Conda decorator that sets the Conda environment for your step

To use, add this decorator to your step:
```
@conda
@step
def MyStep(self):
    ...
```

Information in this decorator will override any eventual @conda_base flow level decorator.
Parameters
----------
libraries : Dict
    Libraries to use for this flow. The key is the name of the package and the value
    is the version to use. Defaults to {}
python : string
    Version of Python to use (for example: &#x27;3.7.4&#x27;). Defaults to None
    (will use the current python version)
disabled : bool
    If set to True, disables Conda. Defaults to False

