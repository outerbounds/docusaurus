---
sidebar_label: testing
title: _vendor.click.testing
---

## Result Objects

```python
class Result(object)
```

Holds the captured result of an invoked CLI script.

#### output

```python
 | @property
 | output()
```

The (standard) output as unicode string.

#### stdout

```python
 | @property
 | stdout()
```

The standard output as unicode string.

#### stderr

```python
 | @property
 | stderr()
```

The standard error as unicode string.

## CliRunner Objects

```python
class CliRunner(object)
```

The CLI runner provides functionality to invoke a Click command line
script for unittesting purposes in a isolated environment.  This only
works in single-threaded systems without any concurrency as it changes the
global interpreter state.

**Arguments**:

                UTF-8 by default and should not be changed currently as
                the reporting to Click only works in Python 2 properly.
                   to stdout.  This is useful for showing examples in
                   some circumstances.  Note that regular prompts
                   will automatically echo the input.
                   preserved as independent streams.  This is useful for
                   Unix-philosophy apps that have predictable stdout and
                   noisy stderr, such that each may be measured
                   independently
- `charset`: the character set for the input and output data.  This is
- `env`: a dictionary with environment variables for overriding.
- `echo_stdin`: if this is set to `True`, then reading from stdin writes
- `mix_stderr`: if this is set to `False`, then stdout and stderr are

#### get\_default\_prog\_name

```python
 | get_default_prog_name(cli)
```

Given a command object it will return the default program name
for it.  The default is the `name` attribute or ``&quot;root&quot;`` if not
set.

#### make\_env

```python
 | make_env(overrides=None)
```

Returns the environment overrides for invoking a script.

#### isolation

```python
 | @contextlib.contextmanager
 | isolation(input=None, env=None, color=False)
```

A context manager that sets up the isolation for invoking of a
command line tool.  This sets up stdin with the given input data
and `os.environ` with the overrides from the given dictionary.
This also rebinds some internals in Click to be mocked (like the
prompt functionality).

This is automatically done in the :meth:`invoke` method.

.. versionadded:: 4.0
The ``color`` parameter was added.

**Arguments**:

              application can still override this explicitly.
- `input`: the input stream to put into sys.stdin.
- `env`: the environment overrides as dictionary.
- `color`: whether the output should contain color codes. The

#### invoke

```python
 | invoke(cli, args=None, input=None, env=None, catch_exceptions=True, color=False, **extra)
```

Invokes a command in an isolated environment.  The arguments are
forwarded directly to the command line script, the `extra` keyword
arguments are passed to the :meth:`~clickpkg.Command.main` function of
the command.

This returns a :class:`Result` object.

.. versionadded:: 3.0
The ``catch_exceptions`` parameter was added.

.. versionchanged:: 3.0
The result object now has an `exc_info` attribute with the
traceback if available.

.. versionadded:: 4.0
The ``color`` parameter was added.

**Arguments**:

             or a string. When given as string it will be interpreted
             as a Unix shell command. More details at
             :func:`shlex.split`.
                         ``SystemExit``.
              application can still override this explicitly.
- `cli`: the command to invoke
- `args`: the arguments to invoke. It may be given as an iterable
- `input`: the input data for `sys.stdin`.
- `env`: the environment overrides.
- `catch_exceptions`: Whether to catch any other exceptions than
- `extra`: the keyword arguments to pass to :meth:`main`.
- `color`: whether the output should contain color codes. The

#### isolated\_filesystem

```python
 | @contextlib.contextmanager
 | isolated_filesystem()
```

A context manager that creates a temporary folder and changes
the current working directory to it for isolated filesystem tests.

