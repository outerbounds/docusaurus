---
sidebar_label: exceptions
title: _vendor.click.exceptions
---

## ClickException Objects

```python
class ClickException(Exception)
```

An exception that Click can handle and show to the user.

#### exit\_code

The exit code for this exception

## UsageError Objects

```python
class UsageError(ClickException)
```

An internal exception that signals a usage error.  This typically
aborts any further handling.

**Arguments**:

            fill in the context automatically in some situations.
- `message`: the error message to display.
- `ctx`: optionally the context that caused this error.  Click will

## BadParameter Objects

```python
class BadParameter(UsageError)
```

An exception that formats out a standardized error message for a
bad parameter.  This is useful when thrown from a callback or type as
Click will attach contextual information to it (for instance, which
parameter it is).

.. versionadded:: 2.0

**Arguments**:

              be left out, and Click will attach this info itself
              if possible.
                   can be used as alternative to `param` in cases
                   where custom validation should happen.  If it is
                   a string it&#x27;s used as such, if it&#x27;s a list then
                   each item is quoted and separated.
- `param`: the parameter object that caused this error.  This can
- `param_hint`: a string that shows up as parameter name.  This

## MissingParameter Objects

```python
class MissingParameter(BadParameter)
```

Raised if click required an option or argument but it was not
provided when invoking the script.

.. versionadded:: 4.0

**Arguments**:

                   The default is to inherit the parameter type from
                   the given `param`.  Valid values are ``&#x27;parameter&#x27;``,
                   ``&#x27;option&#x27;`` or ``&#x27;argument&#x27;``.
- `param_type`: a string that indicates the type of the parameter.

## NoSuchOption Objects

```python
class NoSuchOption(UsageError)
```

Raised if click attempted to handle an option that does not
exist.

.. versionadded:: 4.0

## BadOptionUsage Objects

```python
class BadOptionUsage(UsageError)
```

Raised if an option is generally supplied but the use of the option
was incorrect.  This is for instance raised if the number of arguments
for an option is not correct.

.. versionadded:: 4.0

**Arguments**:

- `option_name`: the name of the option being used incorrectly.

## BadArgumentUsage Objects

```python
class BadArgumentUsage(UsageError)
```

Raised if an argument is generally supplied but the use of the argument
was incorrect.  This is for instance raised if the number of values
for an argument is not correct.

.. versionadded:: 6.0

## FileError Objects

```python
class FileError(ClickException)
```

Raised if a file cannot be opened.

## Abort Objects

```python
class Abort(RuntimeError)
```

An internal signalling exception that signals Click to abort.

## Exit Objects

```python
class Exit(RuntimeError)
```

An exception that indicates that the application should exit with some
status code.

**Arguments**:

- `code`: the status code to exit with.

