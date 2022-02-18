---
sidebar_label: includefile
title: includefile
---

## LocalObject Objects

```python
class LocalObject(object)
```

This object represents a local object. It is a very thin wrapper
to allow it to be used in the same way as the S3Object (only as needed
in this usecase)

Get or list calls return one or more of LocalObjects.

#### exists

```python
 | @property
 | exists()
```

Does this key correspond to an actual file?

#### url

```python
 | @property
 | url()
```

Local location of the object; this is the path prefixed with local://

#### path

```python
 | @property
 | path()
```

Path to the local file

## Local Objects

```python
class Local(object)
```

This class allows you to access the local filesystem in a way similar to the S3 datatools
client. It is a stripped down version for now and only implements the functionality needed
for this use case.

In the future, we may want to allow it to be used in a way similar to the S3() client.

#### \_\_init\_\_

```python
 | __init__()
```

Initialize a new context for Local file operations. This object is based used as
a context manager for a with statement.

