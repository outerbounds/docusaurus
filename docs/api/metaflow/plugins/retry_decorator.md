---
sidebar_label: retry_decorator
title: plugins.retry_decorator
---

## RetryDecorator Objects

```python
class RetryDecorator(StepDecorator)
```

Step decorator to specify that a step should be retried on failure.

This decorator indicates that if this step fails, it should be retried a certain number of times.

This decorator is useful if transient errors (like networking issues) are likely in your step.

This can be used in conjunction with the @retry decorator. In that case, catch will only
activate if all retries fail and will catch the last exception thrown by the last retry.

To use, annotate your step as follows:
```
@retry(times=3)
@step
def myStep(self):
    ...
```

Parameters
----------
times : int
    Number of times to retry this step. Defaults to 3
minutes_between_retries : int
    Number of minutes between retries

