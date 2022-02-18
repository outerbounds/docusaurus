---
sidebar_label: decorators
title: decorators
---

## Decorator Objects

```python
class Decorator(object)
```

Base class for all decorators.

## FlowDecorator Objects

```python
class FlowDecorator(Decorator)
```

#### flow\_init

```python
 | flow_init(flow, graph, environment, flow_datastore, metadata, logger, echo, options)
```

Called when all decorators have been created for this flow.

#### get\_top\_level\_options

```python
 | get_top_level_options()
```

Return a list of option-value pairs that correspond to top-level
options that should be passed to subprocesses (tasks). The option
names should be a subset of the keys in self.options.

If the decorator has a non-empty set of options in self.options, you
probably want to return the assigned values in this method.

## StepDecorator Objects

```python
class StepDecorator(Decorator)
```

Base class for all step decorators.

**Example**:

  
  @my_decorator
  @step
  def a(self):
  pass
  
  @my_decorator
  @step
  def b(self):
  pass
  
  To make the above work, define a subclass
  
  class MyDecorator(StepDecorator):
  name = &quot;my_decorator&quot;
  
  and include it in plugins.STEP_DECORATORS. Now both a() and b()
  get an instance of MyDecorator, so you can keep step-specific
  state easily.
  
- `TODO` _savin_ - Initialize the decorators with flow, graph,
  step.__name__ etc., so that we don&#x27;t have to
  pass them around with every lifecycle call.

#### step\_init

```python
 | step_init(flow, graph, step_name, decorators, environment, flow_datastore, logger)
```

Called when all decorators have been created for this step

#### package\_init

```python
 | package_init(flow, step_name, environment)
```

Called to determine package components

#### add\_to\_package

```python
 | add_to_package()
```

Called to add custom packages needed for a decorator. This hook will be
called in the `MetaflowPackage` class where metaflow compiles the code package
tarball. This hook is invoked in the `MetaflowPackage`&#x27;s `path_tuples`
function. The `path_tuples` function is a generator that yields a tuple of
`(file_path, arcname)`.`file_path` is the path of the file in the local file system;
the `arcname` is the path of the file in the constructed tarball or the path of the file
after decompressing the tarball.

Returns a list of tuples where each tuple represents (file_path, arcname)

#### step\_task\_retry\_count

```python
 | step_task_retry_count()
```

Called to determine the number of times this task should be retried.
Returns a tuple of (user_code_retries, error_retries). Error retries
are attempts to run the process after the user code has failed all
its retries.

Typically, the runtime takes the maximum of retry counts across
decorators and user specification to determine the task retry count.
If you want to force no retries, return the special values (None, None).

#### runtime\_init

```python
 | runtime_init(flow, graph, package, run_id)
```

Top-level initialization before anything gets run in the runtime
context.

#### runtime\_task\_created

```python
 | runtime_task_created(task_datastore, task_id, split_index, input_paths, is_cloned, ubf_context)
```

Called when the runtime has created a task related to this step.

#### runtime\_finished

```python
 | runtime_finished(exception)
```

Called when the runtime created task finishes or encounters an interrupt/exception.

#### runtime\_step\_cli

```python
 | runtime_step_cli(cli_args, retry_count, max_user_code_retries, ubf_context)
```

Access the command line for a step execution in the runtime context.

#### task\_pre\_step

```python
 | task_pre_step(step_name, task_datastore, metadata, run_id, task_id, flow, graph, retry_count, max_user_code_retries, ubf_context, inputs)
```

Run before the step function in the task context.

#### task\_post\_step

```python
 | task_post_step(step_name, flow, graph, retry_count, max_user_code_retries)
```

Run after the step function has finished successfully in the task
context.

#### task\_exception

```python
 | task_exception(exception, step_name, flow, graph, retry_count, max_user_code_retries)
```

Run if the step function raised an exception in the task context.

If this method returns True, it is assumed that the exception has
been taken care of and the flow may continue.

#### task\_finished

```python
 | task_finished(step_name, flow, graph, is_task_ok, retry_count, max_user_code_retries)
```

Run after the task context has been finalized.

is_task_ok is set to False if the user code raised an exception that
was not handled by any decorator.

Note that you can&#x27;t create or modify data artifacts in this method
since the task has been finalized by the time this method
is called. Also note that the task may fail after this method has been
called, so this method may get called multiple times for a task over
multiple attempts, similar to all task_ methods.

#### step

```python
step(f)
```

The step decorator. Makes a method a step in the workflow.

