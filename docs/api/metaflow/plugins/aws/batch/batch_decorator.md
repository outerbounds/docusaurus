---
sidebar_label: batch_decorator
title: plugins.aws.batch.batch_decorator
---

## BatchDecorator Objects

```python
class BatchDecorator(StepDecorator)
```

Step decorator to specify that this step should execute on AWS Batch.

This decorator indicates that your step should execute on AWS Batch. Note
that you can apply this decorator automatically to all steps using the
```--with batch``` argument when calling run/resume. Step level decorators
within the code are overrides and will force a step to execute on AWS Batch
regardless of the ```--with``` specification.

To use, annotate your step as follows:
```
@batch
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
    Docker image to use when launching on AWS Batch. If not specified, a
    default docker image mapping to the current version of Python is used
queue : string
    AWS Batch Job Queue to submit the job to. Defaults to the one
    specified by the environment variable METAFLOW_BATCH_JOB_QUEUE
iam_role : string
    AWS IAM role that AWS Batch container uses to access AWS cloud resources
    (Amazon S3, Amazon DynamoDb, etc). Defaults to the one specified by the
    environment variable METAFLOW_ECS_S3_ACCESS_IAM_ROLE
execution_role : string
    AWS IAM role that AWS Batch can use to trigger AWS Fargate tasks.
    Defaults to the one determined by the environment variable
    METAFLOW_ECS_FARGATE_EXECUTION_ROLE https://docs.aws.amazon.com/batch/latest/userguide/execution-IAM-role.html
shared_memory : int
    The value for the size (in MiB) of the /dev/shm volume for this step.
    This parameter maps to the --shm-size option to docker run.
max_swap : int
    The total amount of swap memory (in MiB) a container can use for this
    step. This parameter is translated to the --memory-swap option to
    docker run where the value is the sum of the container memory plus the
    max_swap value.
swappiness : int
    This allows you to tune memory swappiness behavior for this step.
    A swappiness value of 0 causes swapping not to happen unless absolutely
    necessary. A swappiness value of 100 causes pages to be swapped very
    aggressively. Accepted values are whole numbers between 0 and 100.

