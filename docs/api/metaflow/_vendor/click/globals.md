---
sidebar_label: globals
title: _vendor.click.globals
---

#### get\_current\_context

```python
get_current_context(silent=False)
```

Returns the current click context.  This can be used as a way to
access the current context object from anywhere.  This is a more implicit
alternative to the :func:`pass_context` decorator.  This function is
primarily useful for helpers such as :func:`echo` which might be
interested in changing its behavior based on the current context.

To push the current context, :meth:`Context.scope` can be used.

.. versionadded:: 5.0

**Arguments**:

               is available.  The default behavior is to raise a
               :exc:`RuntimeError`.
- `silent`: if set to `True` the return value is `None` if no context

#### push\_context

```python
push_context(ctx)
```

Pushes a new context to the current stack.

#### pop\_context

```python
pop_context()
```

Removes the top level from the stack.

#### resolve\_color\_default

```python
resolve_color_default(color=None)
```

&quot;Internal helper to get the default value of the color flag.  If a
value is passed it&#x27;s returned unchanged, otherwise it&#x27;s looked up from
the current context.

