---
sidebar_label: bytestream
title: plugins.env_escape.communication.bytestream
---

## ByteStream Objects

```python
class ByteStream(object)
```

Basic interface that reads and writes bytes

#### read

```python
 | read(count, timeout=None)
```

Reads exactly count bytes from the stream. This call is blocking until count bytes
are read or an error happens

This call returns a byte array or EOFError if there was a problem
reading.

Parameters
----------
count : int
    Exact number of characters to read

Returns
-------
bytes
    Content read from the stream

Raises
------
EOFError
    Any issue with reading will be raised as a EOFError

#### write

```python
 | write(data)
```

Writes all the data to the stream

This call is blocking until all data is written. EOFError will be
raised if there is a problem writing to the stream

Parameters
----------
data : bytes
    Data to write out

Raises
------
EOFError
    Any issue with writing will be raised as a EOFError

#### close

```python
 | close()
```

Closes the stream releasing all system resources

Once closed, the stream cannot be re-opened or re-used. If a
stream is already closed, this operation will have no effect

#### is\_closed

```python
 | @property
 | is_closed()
```

Returns True if the stream is closed or False otherwise

Returns
-------
bool
    True if closed or False otherwise

