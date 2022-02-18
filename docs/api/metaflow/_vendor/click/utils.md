---
sidebar_label: utils
title: _vendor.click.utils
---

#### safecall

```python
safecall(func)
```

Wraps a function so that it swallows exceptions.

#### make\_str

```python
make_str(value)
```

Converts a value into a valid string.

#### make\_default\_short\_help

```python
make_default_short_help(help, max_length=45)
```

Return a condensed version of help string.

## LazyFile Objects

```python
class LazyFile(object)
```

A lazy file works like a regular file but it does not fully open
the file but it does perform some basic checks early to see if the
filename parameter does make sense.  This is useful for safely opening
files for writing.

#### open

```python
 | open()
```

Opens the file if it&#x27;s not yet open.  This call might fail with
a :exc:`FileError`.  Not handling this error will produce an error
that Click shows.

#### close

```python
 | close()
```

Closes the underlying file, no matter what.

#### close\_intelligently

```python
 | close_intelligently()
```

This function only closes the file if it was opened by the lazy
file wrapper.  For instance this will never close stdin.

#### echo

```python
echo(message=None, file=None, nl=True, err=False, color=None)
```

Prints a message plus a newline to the given file or stdout.  On
first sight, this looks like the print function, but it has improved
support for handling Unicode and binary data that does not fail no
matter how badly configured the system is.

Primarily it means that you can print binary data as well as Unicode
data on both 2.x and 3.x to the given file in the most appropriate way
possible.  This is a very carefree function in that it will try its
best to not fail.  As of Click 6.0 this includes support for unicode
output on the Windows console.

In addition to that, if `colorama`_ is installed, the echo function will
also support clever handling of ANSI codes.  Essentially it will then
do the following:

-   add transparent handling of ANSI color codes on Windows.
-   hide ANSI codes automatically if the destination file is not a
    terminal.

.. _colorama: https://pypi.org/project/colorama/

.. versionchanged:: 6.0
As of Click 6.0 the echo function will properly support unicode
output on the windows console.  Not that click does not modify
the interpreter in any way which means that `sys.stdout` or the
print statement or function will still not provide unicode support.

.. versionchanged:: 2.0
Starting with version 2.0 of Click, the echo function will work
with colorama if it&#x27;s installed.

.. versionadded:: 3.0
The `err` parameter was added.

.. versionchanged:: 4.0
Added the `color` flag.

**Arguments**:

            ``stdout``.  This is faster and easier than calling
            :func:`get_text_stderr` yourself.
              default is autodetection.
- `message`: the message to print
- `file`: the file to write to (defaults to ``stdout``)
- `err`: if set to true the file defaults to ``stderr`` instead of
- `nl`: if set to `True` (the default) a newline is printed afterwards.
- `color`: controls if the terminal supports ANSI colors or not.  The

#### get\_binary\_stream

```python
get_binary_stream(name)
```

Returns a system stream for byte processing.  This essentially
returns the stream from the sys module with the given name but it
solves some compatibility issues between different Python versions.
Primarily this function is necessary for getting binary streams on
Python 3.

**Arguments**:

             ``&#x27;stdout&#x27;`` and ``&#x27;stderr&#x27;``
- `name`: the name of the stream to open.  Valid names are ``&#x27;stdin&#x27;``,

#### get\_text\_stream

```python
get_text_stream(name, encoding=None, errors="strict")
```

Returns a system stream for text processing.  This usually returns
a wrapped stream around a binary stream returned from
:func:`get_binary_stream` but it also can take shortcuts on Python 3
for already correctly configured streams.

**Arguments**:

             ``&#x27;stdout&#x27;`` and ``&#x27;stderr&#x27;``
- `name`: the name of the stream to open.  Valid names are ``&#x27;stdin&#x27;``,
- `encoding`: overrides the detected default encoding.
- `errors`: overrides the default error mode.

#### open\_file

```python
open_file(filename, mode="r", encoding=None, errors="strict", lazy=False, atomic=False)
```

This is similar to how the :class:`File` works but for manual
usage.  Files are opened non lazy by default.  This can open regular
files as well as stdin/stdout if ``&#x27;-&#x27;`` is passed.

If stdin/stdout is returned the stream is wrapped so that the context
manager will not close the stream accidentally.  This makes it possible
to always use the function like this without having to worry to
accidentally close a standard stream::

    with open_file(filename) as f:
        ...

.. versionadded:: 3.0

**Arguments**:

               moved on close.
- `filename`: the name of the file to open (or ``&#x27;-&#x27;`` for stdin/stdout).
- `mode`: the mode in which to open the file.
- `encoding`: the encoding to use.
- `errors`: the error handling for this file.
- `lazy`: can be flipped to true to open the file lazily.
- `atomic`: in atomic mode writes go into a temporary file and it&#x27;s

#### get\_os\_args

```python
get_os_args()
```

This returns the argument part of sys.argv in the most appropriate
form for processing.  What this means is that this return value is in
a format that works for Click to process but does not necessarily
correspond well to what&#x27;s actually standard for the interpreter.

On most environments the return value is ``sys.argv[:1]`` unchanged.
However if you are on Windows and running Python 2 the return value
will actually be a list of unicode strings instead because the
default behavior on that platform otherwise will not be able to
carry all possible values that sys.argv can have.

.. versionadded:: 6.0

#### format\_filename

```python
format_filename(filename, shorten=False)
```

Formats a filename for user display.  The main purpose of this
function is to ensure that the filename can be displayed at all.  This
will decode the filename to unicode if necessary in a way that it will
not fail.  Optionally, it can shorten the filename to not include the
full path to the filename.

**Arguments**:

                 the filename into unicode without failing.
                path that leads up to it.
- `filename`: formats a filename for UI display.  This will also convert
- `shorten`: this optionally shortens the filename to strip of the

## PacifyFlushWrapper Objects

```python
class PacifyFlushWrapper(object)
```

This wrapper is used to catch and suppress BrokenPipeErrors resulting
from ``.flush()`` being called on broken pipe during the shutdown/final-GC
of the Python interpreter. Notably ``.flush()`` is always called on
``sys.stdout`` and ``sys.stderr``. So as to have minimal impact on any
other cleanup code, and the case where the underlying file is not a broken
pipe, all calls and attributes are proxied.

