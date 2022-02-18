---
sidebar_label: util
title: util
---

#### all\_equal

```python
all_equal(it)
```

Return True if all elements of the given iterator are equal.

#### url\_quote

```python
url_quote(url)
```

Encode a unicode URL to a safe byte string

#### url\_unquote

```python
url_unquote(url_bytes)
```

Decode a byte string encoded with url_quote to a unicode URL

#### is\_stringish

```python
is_stringish(x)
```

Returns true if the object is a unicode or a bytes object

#### to\_fileobj

```python
to_fileobj(x)
```

Convert any string-line object to a byte-returning fileobj

#### to\_unicode

```python
to_unicode(x)
```

Convert any object to a unicode object

#### to\_bytes

```python
to_bytes(x)
```

Convert any object to a byte string

#### get\_username

```python
get_username()
```

Return the name of the current user, or None if the current user
could not be determined.

#### get\_object\_package\_version

```python
get_object_package_version(obj)
```

Return the top level package name and package version that defines the
class of the given object.

#### which

```python
which(cmd, mode=os.F_OK | os.X_OK, path=None)
```

Given a command, mode, and a PATH string, return the path which
conforms to the given mode on the PATH, or None if there is no such
file.
`mode` defaults to os.F_OK | os.X_OK. `path` defaults to the result
of os.environ.get(&quot;PATH&quot;), or can be overridden with a custom search
path.
Note: This function was backported from the Python 3 source code.

#### to\_pascalcase

```python
to_pascalcase(obj)
```

Convert all keys of a json to pascal case.

