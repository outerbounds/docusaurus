---
sidebar_label: core
title: client.core
---

#### metadata

```python
metadata(ms)
```

Switch Metadata provider.

This call has a global effect. Selecting the local metadata will,
for example, not allow access to information stored in remote
metadata providers.

Parameters
----------
ms : string
    Can be a path (selects local metadata), a URL starting with http (selects
    the service metadata) or an explicit specification &lt;metadata_type&gt;@&lt;info&gt;; as an
    example, you can specify local@&lt;path&gt; or service@&lt;url&gt;.

Returns
-------
string
    The description of the metadata selected (equivalent to the result of
    get_metadata())

#### get\_metadata

```python
get_metadata()
```

Returns the current Metadata provider.

This call returns the current Metadata being used to return information
about Metaflow objects.

If this is not set explicitly using metadata(), the default value is
determined through environment variables.

Returns
-------
string
    Information about the Metadata provider currently selected. This information typically
    returns provider specific information (like URL for remote providers or local paths for
    local providers).

#### default\_metadata

```python
default_metadata()
```

Resets the Metadata provider to the default value.

The default value of the Metadata provider is determined through a combination of
environment variables.

Returns
-------
string
    The result of get_metadata() after resetting the provider.

#### namespace

```python
namespace(ns)
```

Switch namespace to the one provided.

This call has a global effect. No objects outside this namespace
will be accessible. To access all objects regardless of namespaces,
pass None to this call.

Parameters
----------
ns : string
    Namespace to switch to or None to ignore namespaces.

Returns
-------
string
    Namespace set (result of get_namespace()).

#### get\_namespace

```python
get_namespace()
```

Return the current namespace that is currently being used to filter objects.

The namespace is a tag associated with all objects in Metaflow.

Returns
-------
string or None
    The current namespace used to filter objects.

#### default\_namespace

```python
default_namespace()
```

Sets or resets the namespace used to filter objects.

The default namespace is in the form &#x27;user:&lt;username&gt;&#x27; and is intended to filter
objects belonging to the user.

Returns
-------
string
    The result of get_namespace() after

## Metaflow Objects

```python
class Metaflow(object)
```

Entry point to all objects in the Metaflow universe.

This object can be used to list all the flows present either through the explicit property
or by iterating over this object.

Attributes
----------
flows : List of all flows.
    Returns the list of all flows. Note that only flows present in the set namespace will
    be returned. A flow is present in a namespace if it has at least one run in the
    namespace.

#### flows

```python
 | @property
 | flows()
```

Returns a list of all the flows present.

Only flows present in the set namespace are returned. A flow is present in a namespace if
it has at least one run that is in the namespace.

Returns
-------
List[Flow]
    List of all flows present.

#### \_\_iter\_\_

```python
 | __iter__()
```

Iterator over all flows present.

Only flows present in the set namespace are returned. A flow is present in a namespace if
it has at least one run that is in the namespace.

Yields
-------
Flow
    A Flow present in the Metaflow universe.

#### \_\_getitem\_\_

```python
 | __getitem__(id)
```

Returns a specific flow by name.

The flow will only be returned if it is present in the current namespace.

Parameters
----------
id : string
    Name of the Flow

Returns
-------
Flow
    Flow with the given ID.

## MetaflowObject Objects

```python
class MetaflowObject(object)
```

Base class for all Metaflow objects.

Creates a new object of a specific type (Flow, Run, Step, Task, DataArtifact) given
a path to it (its `pathspec`).

Accessing Metaflow objects is done through one of two methods:
  - either by directly instantiating it with this class
  - or by accessing it through its parent (iterating over
    all children or accessing directly using the [] operator)

With this class, you can:
  - Get a `Flow`; use `Flow(&#x27;FlowName&#x27;)`.
  - Get a `Run` of a flow; use `Run(&#x27;FlowName/RunID&#x27;)`.
  - Get a `Step` of a run; use `Step(&#x27;FlowName/RunID/StepName&#x27;)`.
  - Get a `Task` of a step, use `Task(&#x27;FlowName/RunID/StepName/TaskID&#x27;)`
  - Get a `DataArtifact` of a task; use
       `DataArtifact(&#x27;FlowName/RunID/StepName/TaskID/ArtifactName&#x27;)`.

Attributes
----------
tags : Set
    Tags associated with the object.
created_at : datetime
    Date and time this object was first created.
parent : MetaflowObject
    Parent of this object. The parent of a `Run` is a `Flow` for example
pathspec : string
    Pathspec of this object (for example: &#x27;FlowName/RunID&#x27; for a `Run`)
path_components : List[string]
    Components of the pathspec
origin_pathspec : str
    Pathspec of the original object this object was cloned from (in the case of a resume).
    None if not applicable.

#### \_\_iter\_\_

```python
 | __iter__()
```

Iterate over all child objects of this object if any.

Note that only children present in the current namespace are returned.

Returns
-------
Iterator[MetaflowObject]
    Iterator over all children

#### is\_in\_namespace

```python
 | is_in_namespace()
```

Returns whether this object is in the current namespace.

If the current namespace is None, this will always return True.

Returns
-------
bool
    Whether or not the object is in the current namespace

#### \_\_getitem\_\_

```python
 | __getitem__(id)
```

Returns the child object named &#x27;id&#x27;.

Parameters
----------
id : string
    Name of the child object

Returns
-------
MetaflowObject
    Child object

Raises
------
KeyError
    If the name does not identify a valid child object

#### \_\_contains\_\_

```python
 | __contains__(id)
```

Tests whether a child named &#x27;id&#x27; exists.

Parameters
----------
id : string
    Name of the child object

Returns
-------
bool
    True if the child exists or False otherwise

#### tags

```python
 | @property
 | tags()
```

Tags associated with this object.

Tags can be user defined or system defined. This returns all tags associated
with the object.

Returns
-------
Set[string]
    Tags associated with the object

#### created\_at

```python
 | @property
 | created_at()
```

Creation time for this object.

This corresponds to the time the object&#x27;s existence was first created which typically means
right before any code is run.

Returns
-------
datetime
    Date time of this object&#x27;s creation.

#### origin\_pathspec

```python
 | @property
 | origin_pathspec()
```

The pathspec of the object from which the current object was cloned.

**Returns**:

  str
  pathspec of the origin object from which current object was cloned.

#### parent

```python
 | @property
 | parent()
```

Returns the parent object of this object or None if none exists.

Returns
-------
MetaflowObject
    The parent of this object

#### pathspec

```python
 | @property
 | pathspec()
```

Returns a string representation uniquely identifying this object.

The string is the same as the one you would pass into the constructor
to build this object except if you are looking for a specific attempt of
a task or a data artifact (in which case you need to add `attempt=&lt;attempt&gt;`
in the constructor).

Returns
-------
string
    Unique representation of this object

#### path\_components

```python
 | @property
 | path_components()
```

List of individual components of the pathspec.

Returns
-------
List[string]
    Individual components of the pathspec

## MetaflowCode Objects

```python
class MetaflowCode(object)
```

Describes the code that is occasionally stored with a run.

A code package will contain the version of Metaflow that was used (all the files comprising
the Metaflow library) as well as selected files from the directory containing the Python
file of the FlowSpec.

Attributes
----------
path : string
    Location (in the datastore provider) of the code package
info : Dict
    Dictionary of information related to this code-package
flowspec : string
    Source code of the file containing the FlowSpec in this code package
tarball : TarFile
    Tar ball containing all the code

#### path

```python
 | @property
 | path()
```

Location (in the datastore provider) of the code package.

Returns
-------
string
    Full path of the code package

#### info

```python
 | @property
 | info()
```

Metadata associated with the code package.

Returns
-------
Dict
    Dictionary of metadata. Keys and values are strings

#### flowspec

```python
 | @property
 | flowspec()
```

Source code of the Python file containing the FlowSpec.

Returns
-------
string
    Content of the Python file

#### tarball

```python
 | @property
 | tarball()
```

TarFile for this code package.

Returns
-------
TarFile
    TarFile for everything in this code package

## DataArtifact Objects

```python
class DataArtifact(MetaflowObject)
```

A single data artifact and associated metadata.

Attributes
----------
data : object
    The unpickled representation of the data contained in this artifact
sha : string
    Encoding representing the unique identity of this artifact
finished_at : datetime
    Alias for created_at

#### data

```python
 | @property
 | data()
```

Unpickled representation of the data contained in this artifact.

Returns
-------
object
    Object contained in this artifact

#### size

```python
 | @property
 | size()
```

Returns the size (in bytes) of the pickled object representing this
DataArtifact

Returns
-------
int
    size of the pickled representation of data artifact (in bytes)

#### sha

```python
 | @property
 | sha()
```

Unique identifier for this artifact.

This is a unique hash of the artifact (historically SHA1 hash)

Returns
-------
string
    Hash of this artifact

#### finished\_at

```python
 | @property
 | finished_at()
```

Creation time for this artifact.

Alias for created_at.

Returns
-------
datetime
    Creation time

## Task Objects

```python
class Task(MetaflowObject)
```

A Task represents an execution of a step.

As such, it contains all data artifacts associated with that execution as
well as all metadata associated with the execution.

Note that you can also get information about a specific *attempt* of a
task. By default, the latest finished attempt is returned but you can
explicitly get information about a specific attempt by using the
following syntax when creating a task:
`Task(&#x27;flow/run/step/task&#x27;, attempt=&lt;attempt&gt;)`. Note that you will not be able to
access a specific attempt of a task through the `.tasks` method of a step
for example (that will always return the latest attempt).

Attributes
----------
metadata : List[Metadata]
    List of all metadata associated with the task
metadata_dict : Dict
    Dictionary where the keys are the names of the metadata and the value are the values
    associated with those names
data : MetaflowData
    Container of all data artifacts produced by this task
artifacts : MetaflowArtifacts
    Container of DataArtifact objects produced by this task
successful : boolean
    True if the task successfully completed
finished : boolean
    True if the task completed
exception : object
    Exception raised by this task if there was one
finished_at : datetime
    Time this task finished
runtime_name : string
    Runtime this task was executed on
stdout : string
    Standard output for the task execution
stderr : string
    Standard error output for the task execution
code : MetaflowCode
    Code package for this task (if present)
environment_info : Dict
    Information about the execution environment (for example Conda)

#### metadata

```python
 | @property
 | metadata()
```

Metadata events produced by this task across all attempts of the task
*except* if you selected a specific task attempt.

Note that Metadata is different from tags.

Returns
-------
List[Metadata]
    Metadata produced by this task

#### metadata\_dict

```python
 | @property
 | metadata_dict()
```

Dictionary mapping metadata names (keys) and their associated values.

Note that unlike the metadata() method, this call will only return the latest
metadata for a given name. For example, if a task executes multiple times (retries),
the same metadata name will be generated multiple times (one for each execution of the
task). The metadata() method returns all those metadata elements whereas this call will
return the metadata associated with the latest execution of the task.

Returns
-------
Dict
    Dictionary mapping metadata name with value

#### index

```python
 | @property
 | index()
```

Returns the index of the innermost foreach loop if this task is run inside at least
one foreach.

The index is what distinguishes the various tasks inside a given step.
This call returns None if this task was not run in a foreach loop.

Returns
-------
int
    Index in the innermost loop for this task

#### data

```python
 | @property
 | data()
```

Returns a container of data artifacts produced by this task.

You can access data produced by this task as follows:
```
print(task.data.my_var)
```

Returns
-------
MetaflowData
    Container of all artifacts produced by this task

#### artifacts

```python
 | @property
 | artifacts()
```

Returns a container of DataArtifacts produced by this task.

You can access each DataArtifact by name like so:
```
print(task.artifacts.my_var)
```
This method differs from data() because it returns DataArtifact objects
(which contain additional metadata) as opposed to just the data.

Returns
-------
MetaflowArtifacts
    Container of all DataArtifacts produced by this task

#### successful

```python
 | @property
 | successful()
```

Indicates whether or not the task completed successfully.

This information is always about the latest task to have completed (in case
of retries).

Returns
-------
bool
    True if the task completed successfully and False otherwise

#### finished

```python
 | @property
 | finished()
```

Indicates whether or not the task completed.

This information is always about the latest task to have completed (in case
of retries).

Returns
-------
bool
    True if the task completed and False otherwise

#### exception

```python
 | @property
 | exception()
```

Returns the exception that caused the task to fail, if any.

This information is always about the latest task to have completed (in case
of retries). If successful() returns False and finished() returns True,
this method can help determine what went wrong.

Returns
-------
object
    Exception raised by the task or None if not applicable

#### finished\_at

```python
 | @property
 | finished_at()
```

Returns the datetime object of when the task finished (successfully or not).

This information is always about the latest task to have completed (in case
of retries). This call will return None if the task is not finished.

Returns
-------
datetime
    Datetime of when the task finished

#### runtime\_name

```python
 | @property
 | runtime_name()
```

Returns the name of the runtime this task executed on.


Returns
-------
string
    Name of the runtime this task executed on

#### stdout

```python
 | @property
 | stdout()
```

Returns the full standard out of this task.

If you specify a specific attempt for this task, it will return the
standard out for that attempt. If you do not specify an attempt,
this will return the current standard out for the latest *started*
attempt of the task. In both cases, multiple calls to this
method will return the most up-to-date log (so if an attempt is not
done, each call will fetch the latest log).

Returns
-------
string
    Standard output of this task

#### stdout\_size

```python
 | @property
 | stdout_size()
```

Returns the size of the stdout log of this task.

Similar to `stdout`, the size returned is the latest size of the log
(so for a running attempt, this value will increase as the task produces
more output).

Returns
-------
int
    Size of the stdout log content (in bytes)

#### stderr

```python
 | @property
 | stderr()
```

Returns the full standard error of this task.

If you specify a specific attempt for this task, it will return the
standard error for that attempt. If you do not specify an attempt,
this will return the current standard error for the latest *started*
attempt. In both cases, multiple calls to this
method will return the most up-to-date log (so if an attempt is not
done, each call will fetch the latest log).

Returns
-------
string
    Standard error of this task

#### stderr\_size

```python
 | @property
 | stderr_size()
```

Returns the size of the stderr log of this task.

Similar to `stderr`, the size returned is the latest size of the log
(so for a running attempt, this value will increase as the task produces
more output).

Returns
-------
int
    Size of the stderr log content (in bytes)

#### current\_attempt

```python
 | @property
 | current_attempt()
```

Get the relevant attempt for this Task.

Returns the specific attempt used when
initializing the instance, or the latest *started* attempt for the Task.

Returns
-------
int
    attempt id for this task object

#### code

```python
 | @cached_property
 | code()
```

Returns the MetaflowCode object for this task, if present.

Not all tasks save their code so this call may return None in those cases.

Returns
-------
MetaflowCode
    Code package for this task

#### environment\_info

```python
 | @cached_property
 | environment_info()
```

Returns information about the environment that was used to execute this task. As an
example, if the Conda environment is selected, this will return information about the
dependencies that were used in the environment.

This environment information is only available for tasks that have a code package.

Returns
-------
Dict
    Dictionary describing the environment

#### loglines

```python
 | loglines(stream, as_unicode=True)
```

Return an iterator over (utc_timestamp, logline) tuples.

If as_unicode=False, logline is returned as a byte object. Otherwise,
it is returned as a (unicode) string.

## Step Objects

```python
class Step(MetaflowObject)
```

A Step represents a user-defined Step (a method annotated with the @step decorator).

As such, it contains all Tasks associated with the step (ie: all executions of the
Step). A linear Step will have only one associated task whereas a foreach Step will have
multiple Tasks.

Attributes
----------
task : Task
    Returns a Task object from the step
finished_at : datetime
    Time this step finished (time of completion of the last task)
environment_info : Dict
    Information about the execution environment (for example Conda)

#### task

```python
 | @property
 | task()
```

Returns a Task object belonging to this step.

This is useful when the step only contains one task (a linear step for example).

Returns
-------
Task
    A task in the step

#### tasks

```python
 | tasks(*tags)
```

Returns an iterator over all the tasks in the step.

An optional filter is available that allows you to filter on tags.
If tags are specified, only tasks associated with all specified tags
are returned.

Parameters
----------
tags : string
    Tags to match

Returns
-------
Iterator[Task]
    Iterator over Task objects in this step

#### control\_task

```python
 | @property
 | control_task()
```

Returns a Control Task object belonging to this step.
This is useful when the step only contains one control task.
Returns
-------
Task
    A control task in the step

#### control\_tasks

```python
 | control_tasks(*tags)
```

Returns an iterator over all the control tasks in the step.
An optional filter is available that allows you to filter on tags. The
control tasks returned if the filter is specified will contain all the
tags specified.
Parameters
----------
tags : string
    Tags to match
Returns
-------
Iterator[Task]
    Iterator over Control Task objects in this step

#### finished\_at

```python
 | @property
 | finished_at()
```

Returns the datetime object of when the step finished (successfully or not).

A step is considered finished when all the tasks that belong to it have
finished. This call will return None if the step has not finished

Returns
-------
datetime
    Datetime of when the step finished

#### environment\_info

```python
 | @property
 | environment_info()
```

Returns information about the environment that was used to execute this step. As an
example, if the Conda environment is selected, this will return information about the
dependencies that were used in the environment.

This environment information is only available for steps that have tasks
for which the code package has been saved.

Returns
-------
Dict
    Dictionary describing the environment

## Run Objects

```python
class Run(MetaflowObject)
```

A Run represents an execution of a Flow

As such, it contains all Steps associated with the flow.

Attributes
----------
data : MetaflowData
    Container of all data artifacts produced by this run
successful : boolean
    True if the run successfully completed
finished : boolean
    True if the run completed
finished_at : datetime
    Time this run finished
code : MetaflowCode
    Code package for this run (if present)
end_task : Task
    Task for the end step (if it is present already)

#### steps

```python
 | steps(*tags)
```

Returns an iterator over all the steps in the run.

An optional filter is available that allows you to filter on tags.
If tags are specified, only steps associated with all specified tags
are returned.

Parameters
----------
tags : string
    Tags to match

Returns
-------
Iterator[Step]
    Iterator over Step objects in this run

#### code

```python
 | @property
 | code()
```

Returns the MetaflowCode object for this run, if present.

Not all runs save their code so this call may return None in those cases.

Returns
-------
MetaflowCode
    Code package for this run

#### data

```python
 | @property
 | data()
```

Returns a container of data artifacts produced by this run.

You can access data produced by this run as follows:
```
print(run.data.my_var)
```
This is a shorthand for `run[&#x27;end&#x27;].task.data`. If the &#x27;end&#x27; step has not yet
executed, returns None.

Returns
-------
MetaflowData
    Container of all artifacts produced by this task

#### successful

```python
 | @property
 | successful()
```

Indicates whether or not the run completed successfully.

A run is successful if its &#x27;end&#x27; step is successful.

Returns
-------
bool
    True if the run completed successfully and False otherwise

#### finished

```python
 | @property
 | finished()
```

Indicates whether or not the run completed.

A run completed if its &#x27;end&#x27; step completed.

Returns
-------
bool
    True if the run completed and False otherwise

#### finished\_at

```python
 | @property
 | finished_at()
```

Returns the datetime object of when the run finished (successfully or not).

The completion time of a run is the same as the completion time of its &#x27;end&#x27; step.
If the &#x27;end&#x27; step has not completed, returns None.

Returns
-------
datetime
    Datetime of when the run finished

#### end\_task

```python
 | @property
 | end_task()
```

Returns the Task corresponding to the &#x27;end&#x27; step.

This returns None if the end step does not yet exist.

Returns
-------
Task
    The &#x27;end&#x27; task

## Flow Objects

```python
class Flow(MetaflowObject)
```

A Flow represents all existing flows with a certain name, in other words,
classes derived from &#x27;FlowSpec&#x27;

As such, it contains all Runs (executions of a flow) related to this flow.

Attributes
----------
latest_run : Run
    Latest Run (in progress or completed, successfully or not) of this Flow
latest_successful_run : Run
    Latest successfully completed Run of this Flow

#### latest\_run

```python
 | @property
 | latest_run()
```

Returns the latest run (either in progress or completed) of this flow.

Note that an in-progress run may be returned by this call. Use latest_successful_run
to get an object representing a completed successful run.

Returns
-------
Run
    Latest run of this flow

#### latest\_successful\_run

```python
 | @property
 | latest_successful_run()
```

Returns the latest successful run of this flow.

Returns
-------
Run
    Latest successful run of this flow

#### runs

```python
 | runs(*tags)
```

Returns an iterator over all the runs in the flow.

An optional filter is available that allows you to filter on tags.
If tags are specified, only runs associated with all specified tags
are returned.

Parameters
----------
tags : string
    Tags to match

Returns
-------
Iterator[Run]
    Iterator over Run objects in this flow

