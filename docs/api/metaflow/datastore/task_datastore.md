---
sidebar_label: task_datastore
title: datastore.task_datastore
---

## TaskDataStore Objects

```python
class TaskDataStore(object)
```

TaskDataStore is obtained through FlowDataStore.get_datastore_for_task and
is used to store three things:
    - Task artifacts (using save_artifacts and load_artifacts) which will
      ultimately be stored using ContentAddressedStore&#x27;s save_blobs and
      load_blobs. This is basically the content indexed portion of the
      storage (identical objects are stored only once).
    - Metadata information (using save_metadata and load_metadata) which
      stores JSON encoded metadata about a task in a non-content indexed
      way in a hierarchical manner (ie: the files are stored
      in a path indicated by the pathspec (run_id/step_name/task_id)).
      This portion of the store can be viewed as name indexed (storing
      two metadata items with the same name will overwrite the previous item
      so the condition of equality is the name as
      opposed to the content).
    - Logs which are a special sort of task metadata but are handled
      differently (they are not JSON-encodable dictionaries).

#### init\_task

```python
 | @only_if_not_done
 | @require_mode("w")
 | init_task()
```

Call this to initialize the datastore with a new attempt.

This method requires mode &#x27;w&#x27;.

#### save\_artifacts

```python
 | @only_if_not_done
 | @require_mode("w")
 | save_artifacts(artifacts_iter, force_v4=False, len_hint=0)
```

Saves Metaflow Artifacts (Python objects) to the datastore and stores
any relevant metadata needed to retrieve them.

Typically, objects are pickled but the datastore may perform any
operation that it deems necessary. You should only access artifacts
using load_artifacts

This method requires mode &#x27;w&#x27;.

Parameters
----------
artifacts : Iterator[(string, object)]
    Iterator over the human-readable name of the object to save
    and the object itself
force_v4 : boolean or Dict[string -&gt; boolean]
    Indicates whether the artifact should be pickled using the v4
    version of pickle. If a single boolean, applies to all artifacts.
    If a dictionary, applies to the object named only. Defaults to False
    if not present or not specified
len_hint: integer
    Estimated number of items in artifacts_iter

#### load\_artifacts

```python
 | @require_mode(None)
 | load_artifacts(names)
```

Mirror function to save_artifacts

This function will retrieve the objects referenced by &#x27;name&#x27;. Each
object will be fetched and returned if found. Note that this function
will return objects that may not be the same as the ones saved using
saved_objects (taking into account possible environment changes, for
example different conda environments) but it will return objects that
can be used as the objects passed in to save_objects.

This method can be used in both &#x27;r&#x27; and &#x27;w&#x27; mode. For the latter use
case, this can happen when `passdown_partial` is called and an artifact
passed down that way is then loaded.

Parameters
----------
names : List[string]
    List of artifacts to retrieve

Returns
-------
Iterator[(string, object)] :
    An iterator over objects retrieved.

#### get\_artifact\_sizes

```python
 | @require_mode("r")
 | get_artifact_sizes(names)
```

Retrieves file sizes of artifacts defined in &#x27;names&#x27; from their respective
stored file metadata.

Usage restricted to only &#x27;r&#x27; mode due to depending on the metadata being written

Parameters
----------
names : List[string]
    List of artifacts to retrieve

Returns
-------
Iterator[(string, int)] :
    An iterator over sizes retrieved.

#### save\_metadata

```python
 | @only_if_not_done
 | @require_mode("w")
 | save_metadata(contents, allow_overwrite=True, add_attempt=True)
```

Save task metadata. This is very similar to save_artifacts; this
function takes a dictionary with the key being the name of the metadata
to save and the value being the metadata.
The metadata, however, will not be stored in the CAS but rather directly
in the TaskDataStore.

This method requires mode &#x27;w&#x27;

Parameters
----------
contents : Dict[string -&gt; JSON-ifiable objects]
    Dictionary of metadata to store
allow_overwrite : boolean, optional
    If True, allows the overwriting of the metadata, defaults to True
add_attempt : boolean, optional
    If True, adds the attempt identifier to the metadata. defaults to
    True

#### load\_metadata

```python
 | @require_mode("r")
 | load_metadata(names, add_attempt=True)
```

Loads metadata saved with `save_metadata`

Parameters
----------
names : List[string]
    The name of the metadata elements to load
add_attempt : bool, optional
    Adds the attempt identifier to the metadata name if True,
    by default True

Returns
-------
Dict: string -&gt; JSON decoded object
    Results indexed by the name of the metadata loaded

#### has\_metadata

```python
 | @require_mode(None)
 | has_metadata(name, add_attempt=True)
```

Checks if this TaskDataStore has the metadata requested

TODO: Should we make this take multiple names like the other calls?

This method operates like load_metadata in both &#x27;w&#x27; and &#x27;r&#x27; modes.

Parameters
----------
names : string
    Metadata name to fetch
add_attempt : bool, optional
    Adds the attempt identifier to the metadata name if True,
    by default True

Returns
-------
boolean
    True if the metadata exists or False otherwise

#### get

```python
 | @require_mode(None)
 | get(name, default=None)
```

Convenience method around load_artifacts for a given name and with a
provided default.

This method requires mode &#x27;r&#x27;.

Parameters
----------
name : str
    Name of the object to get
default : object, optional
    Returns this value if object not found, by default None

#### is\_none

```python
 | @require_mode("r")
 | is_none(name)
```

Convenience method to test if an artifact is None

This method requires mode &#x27;r&#x27;.

Parameters
----------
name : string
    Name of the artifact

#### done

```python
 | @only_if_not_done
 | @require_mode("w")
 | done()
```

Mark this task-datastore as &#x27;done&#x27; for the current attempt

Will throw an exception if mode != &#x27;w&#x27;

#### clone

```python
 | @only_if_not_done
 | @require_mode("w")
 | clone(origin)
```

Clone the information located in the TaskDataStore origin into this
datastore

Parameters
----------
origin : TaskDataStore
    TaskDataStore to clone

#### persist

```python
 | @only_if_not_done
 | @require_mode("w")
 | persist(flow)
```

Persist any new artifacts that were produced when running flow

NOTE: This is a DESTRUCTIVE operation that deletes artifacts from
the given flow to conserve memory. Don&#x27;t rely on artifact attributes
of the flow object after calling this function.

Parameters
----------
flow : FlowSpec
    Flow to persist

#### save\_logs

```python
 | @only_if_not_done
 | @require_mode("w")
 | save_logs(logsource, stream_data)
```

Save log files for multiple streams, represented as
a dictionary of streams. Each stream is identified by a type (a string)
and is either a stringish or a BytesIO object or a Path object.

Parameters
----------
logsource : string
    Identifies the source of the stream (runtime, task, etc)

stream_data : Dict[string -&gt; bytes or Path]
    Each entry should have a string as the key indicating the type
    of the stream (&#x27;stderr&#x27;, &#x27;stdout&#x27;) and as value should be bytes or
    a Path from which to stream the log.

#### load\_log\_legacy

```python
 | @require_mode("r")
 | load_log_legacy(stream, attempt_override=None)
```

Load old-style, pre-mflog, log file represented as a bytes object.

