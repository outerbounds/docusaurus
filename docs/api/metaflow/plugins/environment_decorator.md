---
sidebar_label: environment_decorator
title: plugins.environment_decorator
---

## EnvironmentDecorator Objects

```python
class EnvironmentDecorator(StepDecorator)
```

Step decorator to add or update environment variables prior to the execution of your step.

The environment variables set with this decorator will be present during the execution of the
step.

To use, annotate your step as follows:
```
@environment(vars={&#x27;MY_ENV&#x27;: &#x27;value&#x27;})
@step
def myStep(self):
    ...
```

Parameters
----------
vars : Dict
    Dictionary of environment variables to add/update prior to executing your step.

