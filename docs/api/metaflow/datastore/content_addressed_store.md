---
sidebar_label: content_addressed_store
title: datastore.content_addressed_store
---

## ContentAddressedStore Objects

```python
class ContentAddressedStore(object)
```

This class is not meant to be overridden and is meant to be common across
different datastores.

#### \_\_init\_\_

```python
 | __init__(prefix, storage_impl)
```

Initialize a ContentAddressedStore

A content-addressed store stores data using a name/key that is a hash
of the content. This means that duplicate content is only stored once.

Parameters
----------
prefix : string
    Prefix that will be prepended when storing a file
storage_impl : type
    Implementation for the backing storage implementation to use

#### save\_blobs

```python
 | save_blobs(blob_iter, raw=False, len_hint=0)
```

Saves blobs of data to the datastore

The blobs of data are saved as is if raw is True. If raw is False, the
datastore may process the blobs and they should then only be loaded
using load_blob

NOTE: The idea here is that there are two modes to access the file once
it is saved to the datastore:
  - if raw is True, you would be able to access it directly using the
    URI returned; the bytes that are passed in as &#x27;blob&#x27; would be
    returned directly by reading the object at that URI. You would also
    be able to access it using load_blob passing the key returned
  - if raw is False, no URI would be returned (the URI would be None)
    and you would only be able to access the object using load_blob.
  - The API also specifically takes a list to allow for parallel writes
    if available in the datastore. We could also make a single
    save_blob&#x27; API and save_blobs but this seems superfluous

Parameters
----------
blob_iter : Iterator over bytes objects to save
raw : bool, optional
    Whether to save the bytes directly or process them, by default False
len_hint : Hint of the number of blobs that will be produced by the
    iterator, by default 0

Returns
-------
List of save_blobs_result:
    The list order is the same as the blobs passed in. The URI will be
    None if raw is False.

#### load\_blobs

```python
 | load_blobs(keys, force_raw=False)
```

Mirror function of save_blobs

This function is guaranteed to return the bytes passed to save_blob for
the keys

Parameters
----------
keys : List of string
    Key describing the object to load
force_raw : bool, optional
    Support for backward compatibility with previous datastores. If
    True, this will force the key to be loaded as is (raw). By default,
    False

Returns
-------
Returns an iterator of (string, bytes) tuples; the iterator may return keys
in a different order than were passed in.

