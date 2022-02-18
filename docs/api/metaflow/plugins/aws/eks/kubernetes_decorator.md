---
sidebar_label: kubernetes_decorator
title: plugins.aws.eks.kubernetes_decorator
---

## KubernetesDecorator Objects

```python
class KubernetesDecorator(StepDecorator)
```

TODO (savin): Update this docstring.
Step decorator to specify that this step should execute on Kubernetes.

This decorator indicates that your step should execute on Kubernetes. Note
that you can apply this decorator automatically to all steps using the
```--with kubernetes``` argument when calling run/resume. Step level
decorators within the code are overrides and will force a step to execute
on Kubernetes regardless of the ```--with``` specification.

To use, annotate your step as follows:
```
@kubernetes
@step
def my_step(self):
    ...
```
Parameters
----------
cpu : int
    Number of CPUs required for this step. Defaults to 1. If @resources is
    also present, the maximum value from all decorators is used
gpu : int
    Number of GPUs required for this step. Defaults to 0. If @resources is
    also present, the maximum value from all decorators is used
memory : int
    Memory size (in MB) required for this step. Defaults to 4096. If
    @resources is also present, the maximum value from all decorators is
    used
image : string
    Docker image to use when launching on Kubernetes. If not specified, a
    default docker image mapping to the current version of Python is used
shared_memory : int
    The value for the size (in MiB) of the /dev/shm volume for this step.
    This parameter maps to the --shm-size option to docker run.

