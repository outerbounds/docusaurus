---
sidebar_label: types
title: _vendor.click.types
---

## ParamType Objects

```python
class ParamType(object)
```

Helper for converting values through types.  The following is
necessary for a valid type:

*   it needs a name
*   it needs to pass through None unchanged
*   it needs to convert from a string
*   it needs to convert its result type through unchanged
    (eg: needs to be idempotent)
*   it needs to be able to deal with param and context being `None`.
    This can be the case when the object is used with prompt
    inputs.

#### name

the descriptive name of this type

#### envvar\_list\_splitter

if a list of this type is expected and the value is pulled from a
string environment variable, this is what splits it up.  `None`
means any whitespace.  For all parameters the general rule is that
whitespace splits them up.  The exception are paths and files which
are split by ``os.path.pathsep`` by default (&quot;:&quot; on Unix and &quot;;&quot; on
Windows).

#### get\_metavar

```python
 | get_metavar(param)
```

Returns the metavar default for this param if it provides one.

#### get\_missing\_message

```python
 | get_missing_message(param)
```

Optionally might return extra information about a missing
parameter.

.. versionadded:: 2.0

#### convert

```python
 | convert(value, param, ctx)
```

Converts the value.  This is not invoked for values that are
`None` (the missing value).

#### split\_envvar\_value

```python
 | split_envvar_value(rv)
```

Given a value from an environment variable this splits it up
into small chunks depending on the defined envvar list splitter.

If the splitter is set to `None`, which means that whitespace splits,
then leading and trailing whitespace is ignored.  Otherwise, leading
and trailing splitters usually lead to empty items being included.

#### fail

```python
 | fail(message, param=None, ctx=None)
```

Helper method to fail with an invalid value message.

## Choice Objects

```python
class Choice(ParamType)
```

The choice type allows a value to be checked against a fixed set
of supported values. All of these values have to be strings.

You should only pass a list or tuple of choices. Other iterables
(like generators) may lead to surprising results.

The resulting value will always be one of the originally passed choices
regardless of ``case_sensitive`` or any ``ctx.token_normalize_func``
being specified.

See :ref:`choice-opts` for an example.

**Arguments**:

    insensitive. Defaults to true.
- `case_sensitive`: Set to false to make choices case

## DateTime Objects

```python
class DateTime(ParamType)
```

The DateTime type converts date strings into `datetime` objects.

The format strings which are checked are configurable, but default to some
common (non-timezone aware) ISO 8601 formats.

When specifying *DateTime* formats, you should only pass a list or a tuple.
Other iterables, like generators, may lead to surprising results.

The format strings are processed using ``datetime.strptime``, and this
consequently defines the format strings which are allowed.

Parsing is tried using each format, in order, and the first format which
parses successfully is used.

**Arguments**:

                which they should be tried. Defaults to
                ``&#x27;%Y-%m-%d&#x27;``, ``&#x27;%Y-%m-%dT%H:%M:%S&#x27;``,
                ``&#x27;%Y-%m-%d %H:%M:%S&#x27;``.
- `formats`: A list or tuple of date format strings, in the order in

## IntRange Objects

```python
class IntRange(IntParamType)
```

A parameter that works similar to :data:`click.INT` but restricts
the value to fit into a range.  The default behavior is to fail if the
value falls outside the range, but it can also be silently clamped
between the two edges.

See :ref:`ranges` for an example.

## FloatRange Objects

```python
class FloatRange(FloatParamType)
```

A parameter that works similar to :data:`click.FLOAT` but restricts
the value to fit into a range.  The default behavior is to fail if the
value falls outside the range, but it can also be silently clamped
between the two edges.

See :ref:`ranges` for an example.

## File Objects

```python
class File(ParamType)
```

Declares a parameter to be a file for reading or writing.  The file
is automatically closed once the context tears down (after the command
finished working).

Files can be opened for reading or writing.  The special value ``-``
indicates stdin or stdout depending on the mode.

By default, the file is opened for reading text data, but it can also be
opened in binary mode or for writing.  The encoding parameter can be used
to force a specific encoding.

The `lazy` flag controls if the file should be opened immediately or upon
first IO. The default is to be non-lazy for standard input and output
streams as well as files opened for reading, `lazy` otherwise. When opening a
file lazily for reading, it is still opened temporarily for validation, but
will not be held open until first IO. lazy is mainly useful when opening
for writing to avoid creating the file until it is needed.

Starting with Click 2.0, files can also be opened atomically in which
case all writes go into a separate file in the same folder and upon
completion the file will be moved over to the original location.  This
is useful if a file regularly read by other users is modified.

See :ref:`file-args` for more information.

## Path Objects

```python
class Path(ParamType)
```

The path type is similar to the :class:`File` type but it performs
different checks.  First of all, instead of returning an open file
handle it returns just the filename.  Secondly, it can perform various
basic checks about what the file or directory should be.

.. versionchanged:: 6.0
`allow_dash` was added.

**Arguments**:

               this value to be valid.  If this is not required and a
               file does indeed not exist, then all further checks are
               silently skipped.
                     before the value is passed onwards.  This means
                     that it&#x27;s absolute and symlinks are resolved.  It
                     will not expand a tilde-prefix, as this is
                     supposed to be done by the shell only.
                   standard streams is permitted.
                  represent the path.  The default is `None` which
                  means the return value will be either bytes or
                  unicode depending on what makes most sense given the
                  input data Click deals with.
- `exists`: if set to true, the file or directory needs to exist for
- `file_okay`: controls if a file is a possible value.
- `dir_okay`: controls if a directory is a possible value.
- `writable`: if true, a writable check is performed.
- `readable`: if true, a readable check is performed.
- `resolve_path`: if this is true, then the path is fully resolved
- `allow_dash`: If this is set to `True`, a single dash to indicate
- `path_type`: optionally a string type that should be used to

## Tuple Objects

```python
class Tuple(CompositeParamType)
```

The default behavior of Click is to apply a type on a value directly.
This works well in most cases, except for when `nargs` is set to a fixed
count and different types should be used for different items.  In this
case the :class:`Tuple` type can be used.  This type can only be used
if `nargs` is set to a fixed number.

For more information see :ref:`tuple-type`.

This can be selected by using a Python tuple literal as a type.

**Arguments**:

- `types`: a list of types that should be used for the tuple items.

#### convert\_type

```python
convert_type(ty, default=None)
```

Converts a callable or python type into the most appropriate
param type.

#### UNPROCESSED

A dummy parameter type that just does nothing.  From a user&#x27;s
perspective this appears to just be the same as `STRING` but internally
no string conversion takes place.  This is necessary to achieve the
same bytes/unicode behavior on Python 2/3 in situations where you want
to not convert argument types.  This is usually useful when working
with file paths as they can appear in bytes and unicode.

For path related uses the :class:`Path` type is a better choice but
there are situations where an unprocessed type is useful which is why
it is is provided.

.. versionadded:: 4.0

#### STRING

A unicode string parameter type which is the implicit default.  This
can also be selected by using ``str`` as type.

#### INT

An integer parameter.  This can also be selected by using ``int`` as
type.

#### FLOAT

A floating point value parameter.  This can also be selected by using
``float`` as type.

#### BOOL

A boolean parameter.  This is the default for boolean flags.  This can
also be selected by using ``bool`` as a type.

#### UUID

A UUID parameter.

