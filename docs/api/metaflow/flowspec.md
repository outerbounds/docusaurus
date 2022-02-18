---
sidebar_label: flowspec
title: flowspec
---

## ParallelUBF Objects

```python
class ParallelUBF(UnboundedForeachInput)
```

Unbounded-for-each placeholder for supporting parallel (multi-node) steps.

## FlowSpec Objects

```python
class FlowSpec(object)
```

Main class from which all Flows should inherit.

Attributes
----------
script_name
index
input

#### \_\_init\_\_

```python
 | __init__(use_cli=True)
```

Construct a FlowSpec

Parameters
----------
use_cli : bool, optional, default: True
    Set to True if the flow is invoked from __main__ or the command line

#### script\_name

```python
 | @property
 | script_name()
```

Returns the name of the script containing the flow

Returns
-------
str
    A string containing the name of the script

#### \_\_iter\_\_

```python
 | __iter__()
```

Iterate over all steps in the Flow

Returns
-------
Iterator[graph.DAGNode]
    Iterator over the steps in the flow

#### index

```python
 | @property
 | index()
```

Index of the task in a foreach step

In a foreach step, multiple instances of this step (tasks) will be executed,
one for each element in the foreach.
This property returns the zero based index of the current task. If this is not
a foreach step, this returns None.

See Also
--------
foreach_stack: A detailed example is given in the documentation of this function

Returns
-------
int
    Index of the task in a foreach step

#### input

```python
 | @property
 | input()
```

Value passed to the task in a foreach step

In a foreach step, multiple instances of this step (tasks) will be executed,
one for each element in the foreach.
This property returns the element passed to the current task. If this is not
a foreach step, this returns None.

See Also
--------
foreach_stack: A detailed example is given in the documentation of this function

Returns
-------
object
    Input passed to the task (can be any object)

#### foreach\_stack

```python
 | foreach_stack()
```

Returns the current stack of foreach steps for the current step

This effectively corresponds to the indexes and values at the various levels of nesting.
For example, considering the following code:
```
@step
def root(self):
    self.split_1 = [&#x27;a&#x27;, &#x27;b&#x27;, &#x27;c&#x27;]
    self.next(self.nest_1, foreach=&#x27;split_1&#x27;)

@step
def nest_1(self):
    self.split_2 = [&#x27;d&#x27;, &#x27;e&#x27;, &#x27;f&#x27;, &#x27;g&#x27;]
    self.next(self.nest_2, foreach=&#x27;split_2&#x27;):

@step
def nest_2(self):
    foo = self.foreach_stack()
```
foo will take the following values in the various tasks for nest_2:
    [(0, 3, &#x27;a&#x27;), (0, 4, &#x27;d&#x27;)]
    [(0, 3, &#x27;a&#x27;), (1, 4, &#x27;e&#x27;)]
    ...
    [(0, 3, &#x27;a&#x27;), (3, 4, &#x27;g&#x27;)]
    [(1, 3, &#x27;b&#x27;), (0, 4, &#x27;d&#x27;)]
    ...

where each tuple corresponds to:
    - the index of the task for that level of the loop
    - the number of splits for that level of the loop
    - the value for that level of the loop
Note that the last tuple returned in a task corresponds to:
    - first element: value returned by self.index
    - third element: value returned by self.input

Returns
-------
List[Tuple[int, int, object]]
    An array describing the current stack of foreach steps

#### merge\_artifacts

```python
 | merge_artifacts(inputs, exclude=[], include=[])
```

Merge the artifacts coming from each merge branch (from inputs)

This function takes all the artifacts coming from the branches of a
join point and assigns them to self in the calling step. Only artifacts
not set in the current step are considered. If, for a given artifact, different
values are present on the incoming edges, an error will be thrown (and the artifacts
that &quot;conflict&quot; will be reported).

As a few examples, in the simple graph: A splitting into B and C and joining in D:
A:
  self.x = 5
  self.y = 6
B:
  self.b_var = 1
  self.x = from_b
C:
  self.x = from_c

D:
  merge_artifacts(inputs)

In D, the following artifacts are set:
  - y (value: 6), b_var (value: 1)
  - if from_b and from_c are the same, x will be accessible and have value from_b
  - if from_b and from_c are different, an error will be thrown. To prevent this error,
    you need to manually set self.x in D to a merged value (for example the max) prior to
    calling merge_artifacts.

Parameters
----------
inputs : List[Steps]
    Incoming steps to the join point
exclude : List[str], optional
    If specified, do not consider merging artifacts with a name in `exclude`.
    Cannot specify if `include` is also specified
include : List[str], optional
    If specified, only merge artifacts specified. Cannot specify if `exclude` is
    also specified

Raises
------
MetaflowException
    This exception is thrown if this is not called in a join step
UnhandledInMergeArtifactsException
    This exception is thrown in case of unresolved conflicts
MissingInMergeArtifactsException
    This exception is thrown in case an artifact specified in `include cannot
    be found

#### next

```python
 | next(*dsts, **kwargs)
```

Indicates the next step to execute at the end of this step

This statement should appear once and only once in each and every step (except the `end`
step). Furthermore, it should be the last statement in the step.

There are several valid formats to specify the next step:
    - Straight-line connection: self.next(self.next_step) where `next_step` is a method in
      the current class decorated with the `@step` decorator
    - Static fan-out connection: self.next(self.step1, self.step2, ...) where `stepX` are
      methods in the current class decorated with the `@step` decorator
    - Foreach branch:
        self.next(self.foreach_step, foreach=&#x27;foreach_iterator&#x27;)
      In this situation, `foreach_step` is a method in the current class decorated with the
      `@step` docorator and `foreach_iterator` is a variable name in the current class that
      evaluates to an iterator. A task will be launched for each value in the iterator and
      each task will execute the code specified by the step `foreach_step`.

Raises
------
InvalidNextException
    Raised if the format of the arguments does not match one of the ones given above.

