---
sidebar_label: decorators
title: _vendor.click.decorators
---

#### pass\_context

```python
pass_context(f)
```

Marks a callback as wanting to receive the current context
object as first argument.

#### pass\_obj

```python
pass_obj(f)
```

Similar to :func:`pass_context`, but only pass the object on the
context onwards (:attr:`Context.obj`).  This is useful if that object
represents the state of a nested system.

#### make\_pass\_decorator

```python
make_pass_decorator(object_type, ensure=False)
```

Given an object type this creates a decorator that will work
similar to :func:`pass_obj` but instead of passing the object of the
current context, it will find the innermost context of type
:func:`object_type`.

This generates a decorator that works roughly like this::

    from functools import update_wrapper

    def decorator(f):
        @pass_context
        def new_func(ctx, *args, **kwargs):
            obj = ctx.find_object(object_type)
            return ctx.invoke(f, obj, *args, **kwargs)
        return update_wrapper(new_func, f)
    return decorator

**Arguments**:

               remembered on the context if it&#x27;s not there yet.
- `object_type`: the type of the object to pass.
- `ensure`: if set to `True`, a new object will be created and

#### group

```python
group(name=None, **attrs)
```

Creates a new :class:`Group` with a function as callback.  This
works otherwise the same as :func:`command` just that the `cls`
parameter is set to :class:`Group`.

#### argument

```python
argument(*param_decls, **attrs)
```

Attaches an argument to the command.  All positional arguments are
passed as parameter declarations to :class:`Argument`; all keyword
arguments are forwarded unchanged (except ``cls``).
This is equivalent to creating an :class:`Argument` instance manually
and attaching it to the :attr:`Command.params` list.

**Arguments**:

            :class:`Argument`.
- `cls`: the argument class to instantiate.  This defaults to

#### option

```python
option(*param_decls, **attrs)
```

Attaches an option to the command.  All positional arguments are
passed as parameter declarations to :class:`Option`; all keyword
arguments are forwarded unchanged (except ``cls``).
This is equivalent to creating an :class:`Option` instance manually
and attaching it to the :attr:`Command.params` list.

**Arguments**:

            :class:`Option`.
- `cls`: the option class to instantiate.  This defaults to

#### confirmation\_option

```python
confirmation_option(*param_decls, **attrs)
```

Shortcut for confirmation prompts that can be ignored by passing
``--yes`` as parameter.

This is equivalent to decorating a function with :func:`option` with
the following parameters::

    def callback(ctx, param, value):
        if not value:
            ctx.abort()

    @click.command()
    @click.option(&#x27;--yes&#x27;, is_flag=True, callback=callback,
                  expose_value=False, prompt=&#x27;Do you want to continue?&#x27;)
    def dropdb():
        pass

#### password\_option

```python
password_option(*param_decls, **attrs)
```

Shortcut for password prompts.

This is equivalent to decorating a function with :func:`option` with
the following parameters::

    @click.command()
    @click.option(&#x27;--password&#x27;, prompt=True, confirmation_prompt=True,
                  hide_input=True)
    def changeadmin(password):
        pass

#### version\_option

```python
version_option(version=None, *param_decls, **attrs)
```

Adds a ``--version`` option which immediately ends the program
printing out the version number.  This is implemented as an eager
option that prints the version and exits the program in the callback.

**Arguments**:

                attempts an auto discovery via setuptools.
                (``&#x27;%(prog)s, version %(version)s&#x27;``)
- `version`: the version number to show.  If not provided Click
- `prog_name`: the name of the program (defaults to autodetection)
- `message`: custom message to show instead of the default
- `others`: everything else is forwarded to :func:`option`.

#### help\_option

```python
help_option(*param_decls, **attrs)
```

Adds a ``--help`` option which immediately ends the program
printing out the help page.  This is usually unnecessary to add as
this is added by default to all commands unless suppressed.

Like :func:`version_option`, this is implemented as eager option that
prints in the callback and exits.

All arguments are forwarded to :func:`option`.

