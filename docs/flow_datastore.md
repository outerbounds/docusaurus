<a name="flow_datastore"></a>

# flow_datastore

<a name="flow_datastore.FlowDataStore"></a>

## FlowDataStore Objects

```python
class FlowDataStore(object)
```

<a name="flow_datastore.FlowDataStore.__init__"></a>

#### \_\_init\_\_

```python
 | __init__(flow_name, environment, metadata=None, event_logger=None, monitor=None, storage_impl=None, ds_root=None)
```

Initialize a Flow level datastore.

This datastore can then be used to get TaskDataStore to store artifacts
and metadata about a task as well as a ContentAddressedStore to store
things like packages, etc.

## Parameters

flow_name : str
The name of the flow
environment : MetaflowEnvironment
Environment this datastore is operating in
metadata : MetadataProvider, optional
The metadata provider to use and update if needed, by default None
event_logger : EventLogger, optional
EventLogger to use to report events, by default None
monitor : Monitor, optional
Monitor to use to measure/monitor events, by default None
storage_impl : type
Class for the backing DataStoreStorage to use; if not provided use
default_storage_impl, optional
ds_root : str
The optional root for this datastore; if not provided, use the
default for the DataStoreStorage, optional

<a name="flow_datastore.FlowDataStore.get_latest_task_datastores"></a>

#### get_latest_task_datastores

```python
 | get_latest_task_datastores(run_id=None, steps=None, pathspecs=None, allow_not_done=False)
```

Return a list of TaskDataStore for a subset of the tasks.

We filter the list based on `steps` if non-None.
Alternatively, `pathspecs` can contain the exact list of pathspec(s)
(run_id/step_name/task_id) that should be filtered.
Note: When `pathspecs` is specified, we expect strict consistency and
not eventual consistency in contrast to other modes.

## Parameters

run_id : str, optional
Run ID to get the tasks from. If not specified, use pathspecs,
by default None
steps : List[str] , optional
Steps to get the tasks from. If run_id is specified, this
must also be specified, by default None
pathspecs : List[str], optional
Full task specs (run_id/step_name/task_id). Can be used instead of
specifiying run_id and steps, by default None
allow_not_done : bool, optional
If True, returns the latest attempt of a task even if that attempt
wasn't marked as done, by default False

## Returns

List[TaskDataStore]
Task datastores for all the tasks specified.

<a name="flow_datastore.FlowDataStore.save_data"></a>

#### save_data

```python
 | save_data(data_iter, len_hint=0)
```

Saves data to the underlying content-addressed store

## Parameters

data : Iterator[bytes]
Iterator over blobs to save; each item in the list will be saved individually.
len_hint : int
Estimate of the number of items that will be produced by the iterator,
by default 0.

## Returns

(str, str)
Tuple containing the URI to access the saved resource as well as
the key needed to retrieve it using load_data. This is returned in
the same order as the input.

<a name="flow_datastore.FlowDataStore.load_data"></a>

#### load_data

```python
 | load_data(keys, force_raw=False)
```

Retrieves data from the underlying content-addressed store

## Parameters

keys : List[str]
Keys to retrieve
force_raw : bool, optional
Backward compatible mode. Raw data will be properly identified with
metadata information but older datastores did not do this. If you
know the data should be handled as raw data, set this to True,
by default False

## Returns

Iterator[bytes]
Iterator over (key, blob) tuples
