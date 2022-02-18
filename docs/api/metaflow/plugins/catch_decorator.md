---
sidebar_label: catch_decorator
title: plugins.catch_decorator
---

## CatchDecorator Objects

```python
class CatchDecorator(StepDecorator)
```

Step decorator to specify error handling for your step.

This decorator indicates that exceptions in the step should be caught and not fail the entire
flow.

This can be used in conjunction with the @retry decorator. In that case, catch will only
activate if all retries fail and will catch the last exception thrown by the last retry.

To use, annotate your step as follows:
```
@catch(var=&#x27;foo&#x27;)
@step
def myStep(self):
    ...
```

Parameters
----------
var : string
    Name of the artifact in which to store the caught exception. If not specified,
    the exception is not stored
print_exception : bool
    Determines whether or not the exception is printed to stdout when caught. Defaults
    to True

