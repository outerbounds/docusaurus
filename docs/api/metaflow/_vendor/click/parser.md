---
sidebar_label: parser
title: _vendor.click.parser
---

This module started out as largely a copy paste from the stdlib&#x27;s
optparse module with the features removed that we do not need from
optparse because we implement them in Click on a higher level (for
instance type handling, help formatting and a lot more).

The plan is to remove more and more from here over time.

The reason this is a different module and not optparse from the stdlib
is that there are differences in 2.x and 3.x about the error messages
generated and optparse in the stdlib uses gettext for no good reason
and might cause us issues.

Click uses parts of optparse written by Gregory P. Ward and maintained
by the Python Software Foundation. This is limited to code in parser.py.

Copyright 2001-2006 Gregory P. Ward. All rights reserved.
Copyright 2002-2006 Python Software Foundation. All rights reserved.

#### split\_arg\_string

```python
split_arg_string(string)
```

Given an argument string this attempts to split it into small parts.

## OptionParser Objects

```python
class OptionParser(object)
```

The option parser is an internal class that is ultimately used to
parse options and arguments.  It&#x27;s modelled after optparse and brings
a similar but vastly simplified API.  It should generally not be used
directly as the high level Click classes wrap it for you.

It&#x27;s not nearly as extensible as optparse or argparse as it does not
implement features that are implemented on a higher level (such as
types or defaults).

**Arguments**:

            should go with.
- `ctx`: optionally the :class:`~click.Context` where this parser

#### add\_option

```python
 | add_option(opts, dest, action=None, nargs=1, const=None, obj=None)
```

Adds a new option named `dest` to the parser.  The destination
is not inferred (unlike with optparse) and needs to be explicitly
provided.  Action can be any of ``store``, ``store_const``,
``append``, ``appnd_const`` or ``count``.

The `obj` can be used to identify the option in the order list
that is returned from the parser.

#### add\_argument

```python
 | add_argument(dest, nargs=1, obj=None)
```

Adds a positional argument named `dest` to the parser.

The `obj` can be used to identify the option in the order list
that is returned from the parser.

#### parse\_args

```python
 | parse_args(args)
```

Parses positional arguments and returns ``(values, args, order)``
for the parsed options and arguments as well as the leftover
arguments if there are any.  The order is a list of objects as they
appear on the command line.  If arguments appear multiple times they
will be memorized multiple times as well.

