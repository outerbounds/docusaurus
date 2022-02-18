---
sidebar_label: datastore_storage
title: datastore.datastore_storage
---

## CloseAfterUse Objects

```python
class CloseAfterUse(object)
```

Class that can be used to wrap data and a closer (cleanup code).
This class should be used in a with statement and, when the with
scope exits, `close` will be called on the closer object

## DataStoreStorage Objects

```python
class DataStoreStorage(object)
```

A DataStoreStorage defines the interface of communication between the
higher-level datastores and the actual storage system.

Both the ContentAddressedStore and the TaskDataStore use these methods to
read/write/list from the actual storage system. These methods are meant to
be low-level; they are in a class to provide better abstraction but this
class itself is not meant to be initialized.

#### get\_datastore\_root\_from\_config

```python
 | @classmethod
 | get_datastore_root_from_config(cls, echo, create_on_absent=True)
```

Returns a default choice for datastore_root from metaflow_config

Parameters
----------
echo : function
    Function to use to print out messages
create_on_absent : bool, optional
    Create the datastore root if it doesn&#x27;t exist, by default True

#### get\_datastore\_root\_from\_location

```python
 | @classmethod
 | get_datastore_root_from_location(cls, path, flow_name)
```

Extracts the datastore_root location from a path using
a content-addressed store.

NOTE: This leaks some detail of the content-addressed store so not ideal

This method will raise an exception if the flow_name is not as expected

Parameters
----------
path : str
    Location from which to extract the datastore root value
flow_name : str
    Flow name (for verification purposes)

Returns
-------
str
    The datastore_root value that can be used to initialize an instance
    of this datastore storage.

Raises
------
DataException
    Raised if the path is not a valid path from this datastore.

#### is\_file

```python
 | is_file(paths)
```

Returns True or False depending on whether path refers to a valid
file-like object

This method returns False if path points to a directory

Parameters
----------
path : List[string]
    Path to the object

Returns
-------
List[bool]

#### info\_file

```python
 | info_file(path)
```

Returns a tuple where the first element is True or False depending on
whether path refers to a valid file-like object (like is_file) and the
second element is a dictionary of metadata associated with the file or
None if the file does not exist or there is no metadata.

Parameters
----------
path : string
    Path to the object

Returns
-------
tuple
    (bool, dict)

#### size\_file

```python
 | size_file(path)
```

Returns file size at the indicated &#x27;path&#x27;, or None if file can not be found.

Parameters
----------
path : string
    Path to the object

Returns
-------
Optional
    int

#### list\_content

```python
 | list_content(paths)
```

Lists the content of the datastore in the directory indicated by &#x27;paths&#x27;.

This is similar to executing a &#x27;ls&#x27;; it will only list the content one
level down and simply returns the paths to the elements present as well
as whether or not those elements are files (if not, they are further
directories that can be traversed)

The path returned always include the path passed in. As an example,
if your filesystem contains the files: A/b.txt A/c.txt and the directory
A/D, on return, you would get, for an input of [&#x27;A&#x27;]:
[(&#x27;A/b.txt&#x27;, True), (&#x27;A/c.txt&#x27;, True), (&#x27;A/D&#x27;, False)]

Parameters
----------
paths : List[string]
    Directories to list

Returns
-------
List[list_content_result]
    Content of the directory

#### save\_bytes

```python
 | save_bytes(path_and_bytes_iter, overwrite=False, len_hint=0)
```

Creates objects and stores them in the datastore.

If overwrite is False, any existing object will not be overwritten and
an error will be returned.

The objects are specified in an iterator over (path, obj) tuples where
the path is the path to store the object and the value is a file-like
object from which bytes can be read.

Parameters
----------
path_and_bytes_iter : Iterator[(string, (RawIOBase|BufferedIOBase, metadata))]
    Iterator over objects to store; the first element in the outermost
    tuple is the path to store the bytes at. The second element in the
    outermost tuple is either a RawIOBase or BufferedIOBase or a tuple
    where the first element is a RawIOBase or BufferedIOBase and the
    second element is a dictionary of metadata to associate with the
    object.
    Keys for the metadata must be ascii only string and elements
    can be anything that can be converted to a string using json.dumps.
    If you have no metadata, you can simply pass a RawIOBase or
    BufferedIOBase.
overwrite : bool
    True if the objects can be overwritten. Defaults to False.
len_hint : int
    Estimated number of items produced by the iterator

Returns
-------
None

#### load\_bytes

```python
 | load_bytes(keys)
```

Gets objects from the datastore

Note that objects may be fetched in parallel so if order is important
for your consistency model, the caller is responsible for calling this
multiple times in the proper order.

Parameters
----------
keys : List[string]
    Keys to fetch

Returns
-------
CloseAfterUse :
    A CloseAfterUse which should be used in a with statement. The data
    in the CloseAfterUse will be an iterator over (key, file_path, metadata)
    tuples. File_path and metadata will be None if the key was missing.
    Metadata will be None if no metadata is present; otherwise it is
    a dictionary of metadata associated with the object.

    Note that the file at `file_path` may no longer be accessible outside of
    the scope of the returned object.

    The order of items in the list is not to be relied on (ie: rely on the key
    in the returned tuple and not on the order of the list). This function will,
    however, return as many elements as passed in even in the presence of
    duplicate keys.

