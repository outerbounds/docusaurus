---
sidebar_label: timeout_decorator
title: plugins.timeout_decorator
---

## TimeoutDecorator Objects

```python
class TimeoutDecorator(StepDecorator)
```

Step decorator to specify a timeout for your step.

This decorator is useful if this step may hang indefinitely.

This can be used in conjunction with the @retry decorator as well as the @catch decorator.
A timeout is considered to be an exception thrown by the step and will cause the step to be
retried if needed and the exception will be caught by the &#x27;catch&#x27; decorator if present.

To use, annotate your step as follows:
```
@timeout(minutes=1)
@step
def myStep(self):
    ...
```

Note that all the values specified in parameters are added together so if you specify
60 seconds and 1 hour, the decorator will have an effective timeout of 1 hour and 1 minute.
Parameters
----------
seconds : int
    Number of seconds to wait prior to timing out.
minutes : int
    Number of minutes to wait prior to timing out
hours : int
    Number of hours to wait prior to timing out
minutes_between_retries : int
    Number of minutes between retries

