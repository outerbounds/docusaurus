---
sidebar_label: metadata
title: metadata.metadata
---

## MetadataProvider Objects

```python
@with_metaclass(MetadataProviderMeta)
class MetadataProvider(object)
```

#### compute\_info

```python
 | @classmethod
 | compute_info(cls, val)
```

Compute the new information for this provider

The computed value should be returned and will then be accessible directly as cls.INFO.
This information will be printed by the client when describing this metadata provider

Parameters
----------
val : str
    Provider specific information used in computing the new information. For example, this
    can be a path.

Returns
-------
str :
    Value to be set to INFO

#### default\_info

```python
 | @classmethod
 | default_info(cls)
```

Returns the default information for this provider

This should compute and return the default value for the information regarding this provider.
For example, this can compute where the metadata is stored

Returns
-------
str
    Value to be set by default in INFO

#### version

```python
 | version()
```

Returns the version of this provider

Returns
-------
str
    Version of the provider

#### new\_run\_id

```python
 | new_run_id(tags=None, sys_tags=None)
```

Creates an ID and registers this new run.

The run ID will be unique within a given flow.

Parameters
----------
tags : list, optional
    Tags to apply to this particular run, by default None
sys_tags : list, optional
    System tags to apply to this particular run, by default None

Returns
-------
int
    Run ID for the run

#### register\_run\_id

```python
 | register_run_id(run_id, tags=None, sys_tags=None)
```

No-op operation in this implementation.

Parameters
----------
run_id : int
    Run ID for this run
tags : list, optional
    Tags to apply to this particular run, by default None
sys_tags : list, optional
    System tags to apply to this particular run, by default None

#### new\_task\_id

```python
 | new_task_id(run_id, step_name, tags=None, sys_tags=None)
```

Creates an ID and registers this new task.

The task ID will be unique within a flow, run and step

Parameters
----------
run_id : int
    ID of the run
step_name : string
    Name of the step
tags : list, optional
    Tags to apply to this particular task, by default None
sys_tags : list, optional
    System tags to apply to this particular task, by default None

Returns
-------
int
    Task ID for the task

#### register\_task\_id

```python
 | register_task_id(run_id, step_name, task_id, attempt=0, tags=None, sys_tags=None)
```

No-op operation in this implementation.

Parameters
----------
run_id : int or convertible to int
    Run ID for this run
step_name : string
    Name of the step
task_id : int
    Task ID
tags : list, optional
    Tags to apply to this particular run, by default []
sys_tags : list, optional
    System tags to apply to this particular run, by default []

#### get\_runtime\_environment

```python
 | get_runtime_environment(runtime_name)
```

Returns a dictionary of environment variables to be set

Parameters
----------
runtime_name : string
    Name of the runtime for which to get the environment

Returns
-------
dict[string] -&gt; string
    Environment variables from this metadata provider

#### register\_data\_artifacts

```python
 | register_data_artifacts(run_id, step_name, task_id, attempt_id, artifacts)
```

Registers the fact that the data-artifacts are associated with
the particular task.

Artifacts produced by a given task can be associated with the
task using this call

Parameters
----------
run_id : int
    Run ID for the task
step_name : string
    Step name for the task
task_id : int
    Task ID for the task
attempt_id : int
    Attempt for the task
artifacts : List of DataArtifact
    Artifacts associated with this task

#### register\_metadata

```python
 | register_metadata(run_id, step_name, task_id, metadata)
```

Registers metadata with a task.

Note that the same metadata can be registered multiple times for the same task (for example
by multiple attempts). Internally, the timestamp of when the registration call is made is
also recorded allowing the user to determine the latest value of the metadata.

Parameters
----------
run_id : int
    Run ID for the task
step_name : string
    Step name for the task
task_id : int
    Task ID for the task
metadata : List of MetaDatum
    Metadata associated with this task

#### add\_sticky\_tags

```python
 | add_sticky_tags(tags=None, sys_tags=None)
```

Adds tags to be added to every run and task

Tags can be added to record information about a run/task. Such tags can be specified on a
per run or task basis using the new_run_id/register_run_id or new_task_id/register_task_id
functions but can also be set globally using this function. Tags added here will be
added to every run/task created after this call is made.

Parameters
----------
tags : list, optional
    Tags to add to every run/task, by default None
sys_tags : list, optional
    System tags to add to every run/task, by default None

#### get\_object

```python
 | @classmethod
 | get_object(cls, obj_type, sub_type, filters, attempt, *args)
```

Returns the requested object depending on obj_type and sub_type

obj_type can be one of &#x27;root&#x27;, &#x27;flow&#x27;, &#x27;run&#x27;, &#x27;step&#x27;, &#x27;task&#x27;,
or &#x27;artifact&#x27;

sub_type describes the aggregation required and can be either:
&#x27;metadata&#x27;, &#x27;self&#x27; or any of obj_type provided that it is slotted below
the object itself. For example, if obj_type is &#x27;flow&#x27;, you can
specify &#x27;run&#x27; to get all the runs in that flow.
A few special rules:
    - &#x27;metadata&#x27; is only allowed for obj_type &#x27;task&#x27;
    - For obj_type &#x27;artifact&#x27;, only &#x27;self&#x27; is allowed
A few examples:
    - To get a list of all flows:
        - set obj_type to &#x27;root&#x27; and sub_type to &#x27;flow&#x27;
    - To get a list of all tasks:
        - set obj_type to &#x27;root&#x27; and sub_type to &#x27;task&#x27;
    - To get a list of all artifacts in a task:
        - set obj_type to &#x27;task&#x27; and sub_type to &#x27;artifact&#x27;
    - To get information about a specific flow:
        - set obj_type to &#x27;flow&#x27; and sub_type to &#x27;self&#x27;

Parameters
----------
obj_type : string
    One of &#x27;root&#x27;, &#x27;flow&#x27;, &#x27;run&#x27;, &#x27;step&#x27;, &#x27;task&#x27;, &#x27;artifact&#x27; or &#x27;metadata&#x27;
sub_type : string
    Same as obj_type with the addition of &#x27;self&#x27;
filters : dict
    Dictionary with keys &#x27;any_tags&#x27;, &#x27;tags&#x27; and &#x27;system_tags&#x27;. If specified
    will return only objects that have the specified tags present. Filters
    are ANDed together so all tags must be present for the object to be returned.
attempt : int or None
    If None, for metadata and artifacts:
      - returns information about the latest attempt for artifacts
      - returns all metadata across all attempts
    Otherwise, returns information about metadata and artifacts for that
    attempt only.
    NOTE: For older versions of Metaflow (pre 2.4.0), the attempt for
    metadata is not known; in that case, all metadata is returned (as
    if None was passed in).

Return
------
    object or list :
        Depending on the call, the type of object return varies

