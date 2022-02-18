---
sidebar_label: core
title: _vendor.click.core
---

#### fast\_exit

```python
fast_exit(code)
```

Exit without garbage collection, this speeds up exit by about 10ms for
things like bash completion.

#### augment\_usage\_errors

```python
@contextmanager
augment_usage_errors(ctx, param=None)
```

Context manager that attaches extra information to exceptions.

#### iter\_params\_for\_processing

```python
iter_params_for_processing(invocation_order, declaration_order)
```

Given a sequence of parameters in the order as should be considered
for processing and an iterable of parameters that exist, this returns
a list in the correct order as they should be processed.

## Context Objects

```python
class Context(object)
```

The context is a special internal object that holds state relevant
for the script execution at every single level.  It&#x27;s normally invisible
to commands unless they opt-in to getting access to it.

The context is useful as it can pass internal objects around and can
control special execution features such as reading data from
environment variables.

A context can be used as context manager in which case it will call
:meth:`close` on teardown.

.. versionadded:: 2.0
Added the `resilient_parsing`, `help_option_names`,
`token_normalize_func` parameters.

.. versionadded:: 3.0
Added the `allow_extra_args` and `allow_interspersed_args`
parameters.

.. versionadded:: 4.0
Added the `color`, `ignore_unknown_options`, and
`max_content_width` parameters.

.. versionadded:: 7.1
Added the `show_default` parameter.

**Arguments**:

                  is the most descriptive name for the script or
                  command.  For the toplevel script it is usually
                  the name of the script, for commands below it it&#x27;s
                  the name of the script.
                           variables.  If this is `None` then reading
                           from environment variables is disabled.  This
                           does not affect manually set environment
                           variables which are always read.
                    for parameters.
                       inherit from parent context.  If no context
                       defines the terminal width then auto
                       detection will be applied.
                          Click (this currently only affects help
                          pages).  This defaults to 80 characters if
                          not overridden.  In other words: even if the
                          terminal is larger than that, Click will not
                          format things wider than 80 characters by
                          default.  In addition to that, formatters might
                          add some safety mapping on the right.
                          parse without any interactivity or callback
                          invocation.  Default values will also be
                          ignored.  This is useful for implementing
                          things such as completion support.
                         at the end will not raise an error and will be
                         kept on the context.  The default is to inherit
                         from the command.
                                and arguments cannot be mixed.  The
                                default is to inherit from the command.
                               not know and keeps them for later
                               processing.
                          the default help parameter is named.  The
                          default is ``[&#x27;--help&#x27;]``.
                             normalize tokens (options, choices,
                             etc.).  This for instance can be used to
                             implement case insensitive behavior.
              default is autodetection.  This is only needed if ANSI
              codes are used in texts that Click prints which is by
              default not the case.  This for instance would affect
              help output.
                Even if an option is later created with show_default=False,
                this command-level setting overrides it.
- `command`: the command class for this context.
- `parent`: the parent context.
- `info_name`: the info name for this invocation.  Generally this
- `obj`: an arbitrary object of user data.
- `auto_envvar_prefix`: the prefix to use for automatic environment
- `default_map`: a dictionary (like object) with default values
- `terminal_width`: the width of the terminal.  The default is
- `max_content_width`: the maximum width for content rendered by
- `resilient_parsing`: if this flag is enabled then Click will
- `allow_extra_args`: if this is set to `True` then extra arguments
- `allow_interspersed_args`: if this is set to `False` then options
- `ignore_unknown_options`: instructs click to ignore options it does
- `help_option_names`: optionally a list of strings that define how
- `token_normalize_func`: an optional function that is used to
- `color`: controls if the terminal supports ANSI colors or not.  The
- `show_default`: if True, shows defaults for all options.

#### scope

```python
 | @contextmanager
 | scope(cleanup=True)
```

This helper method can be used with the context object to promote
it to the current thread local (see :func:`get_current_context`).
The default behavior of this is to invoke the cleanup functions which
can be disabled by setting `cleanup` to `False`.  The cleanup
functions are typically used for things such as closing file handles.

If the cleanup is intended the context object can also be directly
used as a context manager.

Example usage::

    with ctx.scope():
        assert get_current_context() is ctx

This is equivalent::

    with ctx:
        assert get_current_context() is ctx

.. versionadded:: 5.0

**Arguments**:

                not.  The default is to run these functions.  In
                some situations the context only wants to be
                temporarily pushed in which case this can be disabled.
                Nested pushes automatically defer the cleanup.
- `cleanup`: controls if the cleanup functions should be run or

#### meta

```python
 | @property
 | meta()
```

This is a dictionary which is shared with all the contexts
that are nested.  It exists so that click utilities can store some
state here if they need to.  It is however the responsibility of
that code to manage this dictionary well.

The keys are supposed to be unique dotted strings.  For instance
module paths are a good choice for it.  What is stored in there is
irrelevant for the operation of click.  However what is important is
that code that places data here adheres to the general semantics of
the system.

Example usage::

    LANG_KEY = f&#x27;{__name__}.lang&#x27;

    def set_language(value):
        ctx = get_current_context()
        ctx.meta[LANG_KEY] = value

    def get_language():
        return get_current_context().meta.get(LANG_KEY, &#x27;en_US&#x27;)

.. versionadded:: 5.0

#### make\_formatter

```python
 | make_formatter()
```

Creates the formatter for the help and usage output.

#### call\_on\_close

```python
 | call_on_close(f)
```

This decorator remembers a function as callback that should be
executed when the context tears down.  This is most useful to bind
resource handling to the script execution.  For instance, file objects
opened by the :class:`File` type will register their close callbacks
here.

**Arguments**:

- `f`: the function to execute on teardown.

#### close

```python
 | close()
```

Invokes all close callbacks.

#### command\_path

```python
 | @property
 | command_path()
```

The computed command path.  This is used for the ``usage``
information on the help page.  It&#x27;s automatically created by
combining the info names of the chain of contexts to the root.

#### find\_root

```python
 | find_root()
```

Finds the outermost context.

#### find\_object

```python
 | find_object(object_type)
```

Finds the closest object of a given type.

#### ensure\_object

```python
 | ensure_object(object_type)
```

Like :meth:`find_object` but sets the innermost object to a
new instance of `object_type` if it does not exist.

#### lookup\_default

```python
 | lookup_default(name)
```

Looks up the default for a parameter name.  This by default
looks into the :attr:`default_map` if available.

#### fail

```python
 | fail(message)
```

Aborts the execution of the program with a specific error
message.

**Arguments**:

- `message`: the error message to fail with.

#### abort

```python
 | abort()
```

Aborts the script.

#### exit

```python
 | exit(code=0)
```

Exits the application with a given exit code.

#### get\_usage

```python
 | get_usage()
```

Helper method to get formatted usage string for the current
context and command.

#### get\_help

```python
 | get_help()
```

Helper method to get formatted help page for the current
context and command.

#### invoke

```python
 | invoke(*args, **kwargs)
```

Invokes a command callback in exactly the way it expects.  There
are two ways to invoke this method:

1.  the first argument can be a callback and all other arguments and
    keyword arguments are forwarded directly to the function.
2.  the first argument is a click command object.  In that case all
    arguments are forwarded as well but proper click parameters
    (options and click arguments) must be keyword arguments and Click
    will fill in defaults.

Note that before Click 3.2 keyword arguments were not properly filled
in against the intention of this code and no context was created.  For
more information about this change and why it was done in a bugfix
release see :ref:`upgrade-to-3.2`.

#### forward

```python
 | forward(*args, **kwargs)
```

Similar to :meth:`invoke` but fills in default keyword
arguments from the current context if the other command expects
it.  This cannot invoke callbacks directly, only other commands.

## BaseCommand Objects

```python
class BaseCommand(object)
```

The base command implements the minimal API contract of commands.
Most code will never use this as it does not implement a lot of useful
functionality but it can act as the direct subclass of alternative
parsing methods that do not depend on the Click parser.

For instance, this can be used to bridge Click and other systems like
argparse or docopt.

Because base commands do not implement a lot of the API that other
parts of Click take for granted, they are not supported for all
operations.  For instance, they cannot be used with the decorators
usually and they have no built-in callback system.

.. versionchanged:: 2.0
Added the `context_settings` parameter.

**Arguments**:

                         passed to the context object.
- `name`: the name of the command to use unless a group overrides it.
- `context_settings`: an optional dictionary with defaults that are

#### allow\_extra\_args

the default for the :attr:`Context.allow_extra_args` flag.

#### allow\_interspersed\_args

the default for the :attr:`Context.allow_interspersed_args` flag.

#### ignore\_unknown\_options

the default for the :attr:`Context.ignore_unknown_options` flag.

#### make\_context

```python
 | make_context(info_name, args, parent=None, **extra)
```

This function when given an info name and arguments will kick
off the parsing and create a new :class:`Context`.  It does not
invoke the actual command callback though.

**Arguments**:

                  is the most descriptive name for the script or
                  command.  For the toplevel script it&#x27;s usually
                  the name of the script, for commands below it it&#x27;s
                  the name of the script.
              constructor.
- `info_name`: the info name for this invokation.  Generally this
- `args`: the arguments to parse as list of strings.
- `parent`: the parent context if available.
- `extra`: extra keyword arguments forwarded to the context

#### parse\_args

```python
 | parse_args(ctx, args)
```

Given a context and a list of arguments this creates the parser
and parses the arguments, then modifies the context as necessary.
This is automatically invoked by :meth:`make_context`.

#### invoke

```python
 | invoke(ctx)
```

Given a context, this invokes the command.  The default
implementation is raising a not implemented error.

#### main

```python
 | main(args=None, prog_name=None, complete_var=None, standalone_mode=True, **extra)
```

This is the way to invoke a script with all the bells and
whistles as a command line application.  This will always terminate
the application after a call.  If this is not wanted, ``SystemExit``
needs to be caught.

This method is also available by directly calling the instance of
a :class:`Command`.

.. versionadded:: 3.0
Added the `standalone_mode` flag to control the standalone mode.

**Arguments**:

             provided, ``sys.argv[1:]`` is used.
                  the program name is constructed by taking the file
                  name from ``sys.argv[0]``.
                     bash completion support.  The default is
                     ``&quot;_&lt;prog_name&gt;_COMPLETE&quot;`` with prog_name in
                     uppercase.
                        in standalone mode.  Click will then
                        handle exceptions and convert them into
                        error messages and the function will never
                        return but shut down the interpreter.  If
                        this is set to `False` they will be
                        propagated to the caller and the return
                        value of this function is the return value
                        of :meth:`invoke`.
              constructor.  See :class:`Context` for more information.
- `args`: the arguments that should be used for parsing.  If not
- `prog_name`: the program name that should be used.  By default
- `complete_var`: the environment variable that controls the
- `standalone_mode`: the default behavior is to invoke the script
- `extra`: extra keyword arguments are forwarded to the context

#### \_\_call\_\_

```python
 | __call__(*args, **kwargs)
```

Alias for :meth:`main`.

## Command Objects

```python
class Command(BaseCommand)
```

Commands are the basic building block of command line interfaces in
Click.  A basic command handles command line parsing and might dispatch
more parsing to commands nested below it.

.. versionchanged:: 2.0
Added the `context_settings` parameter.
.. versionchanged:: 7.1
Added the `no_args_is_help` parameter.

**Arguments**:

                         passed to the context object.
               be either :class:`Option` or :class:`Argument` objects.
               help page after everything else.
                   shown on the command listing of the parent command.
                        option.  This can be disabled by this parameter.
                        provided.  This option is disabled by default.
                        If enabled this will add ``--help`` as argument
                        if no arguments are passed

                         the command is deprecated.
- `name`: the name of the command to use unless a group overrides it.
- `context_settings`: an optional dictionary with defaults that are
- `callback`: the callback to invoke.  This is optional.
- `params`: the parameters to register with this command.  This can
- `help`: the help string to use for this command.
- `epilog`: like the help string but it&#x27;s printed at the end of the
- `short_help`: the short help to use for this command.  This is
- `add_help_option`: by default each command registers a ``--help``
- `no_args_is_help`: this controls what happens if no arguments are
- `hidden`: hide this command from help outputs.
- `deprecated`: issues a message indicating that

#### get\_usage

```python
 | get_usage(ctx)
```

Formats the usage line into a string and returns it.

Calls :meth:`format_usage` internally.

#### format\_usage

```python
 | format_usage(ctx, formatter)
```

Writes the usage line into the formatter.

This is a low-level method called by :meth:`get_usage`.

#### collect\_usage\_pieces

```python
 | collect_usage_pieces(ctx)
```

Returns all the pieces that go into the usage line and returns
it as a list of strings.

#### get\_help\_option\_names

```python
 | get_help_option_names(ctx)
```

Returns the names for the help option.

#### get\_help\_option

```python
 | get_help_option(ctx)
```

Returns the help option object.

#### make\_parser

```python
 | make_parser(ctx)
```

Creates the underlying option parser for this command.

#### get\_help

```python
 | get_help(ctx)
```

Formats the help into a string and returns it.

Calls :meth:`format_help` internally.

#### get\_short\_help\_str

```python
 | get_short_help_str(limit=45)
```

Gets short help for the command or makes it by shortening the
long help string.

#### format\_help

```python
 | format_help(ctx, formatter)
```

Writes the help into the formatter if it exists.

This is a low-level method called by :meth:`get_help`.

This calls the following methods:

-   :meth:`format_usage`
-   :meth:`format_help_text`
-   :meth:`format_options`
-   :meth:`format_epilog`

#### format\_help\_text

```python
 | format_help_text(ctx, formatter)
```

Writes the help text to the formatter if it exists.

#### format\_options

```python
 | format_options(ctx, formatter)
```

Writes all the options into the formatter if they exist.

#### format\_epilog

```python
 | format_epilog(ctx, formatter)
```

Writes the epilog into the formatter if it exists.

#### invoke

```python
 | invoke(ctx)
```

Given a context, this invokes the attached callback (if it exists)
in the right way.

## MultiCommand Objects

```python
class MultiCommand(Command)
```

A multi command is the basic implementation of a command that
dispatches to subcommands.  The most common version is the
:class:`Group`.

**Arguments**:

                               is invoked.  By default it&#x27;s only invoked
                               if a subcommand is provided.
                        provided.  This option is enabled by default if
                        `invoke_without_command` is disabled or disabled
                        if it&#x27;s enabled.  If enabled this will add
                        ``--help`` as argument if no arguments are
                        passed.
                           to indicate the subcommand place.
              is enabled.  This restricts the form of commands in that
              they cannot have optional arguments but it allows
              multiple commands to be chained together.
                        command.
- `invoke_without_command`: this controls how the multi command itself
- `no_args_is_help`: this controls what happens if no arguments are
- `subcommand_metavar`: the string that is used in the documentation
- `chain`: if this is set to `True` chaining of multiple subcommands
- `result_callback`: the result callback to attach to this multi

#### resultcallback

```python
 | resultcallback(replace=False)
```

Adds a result callback to the chain command.  By default if a
result callback is already registered this will chain them but
this can be disabled with the `replace` parameter.  The result
callback is invoked with the return value of the subcommand
(or the list of return values from all subcommands if chaining
is enabled) as well as the parameters as they would be passed
to the main callback.

Example::

    @click.group()
    @click.option(&#x27;-i&#x27;, &#x27;--input&#x27;, default=23)
    def cli(input):
        return 42

    @cli.resultcallback()
    def process_result(result, input):
        return result + input

.. versionadded:: 3.0

**Arguments**:

                callback will be removed.
- `replace`: if set to `True` an already existing result

#### format\_commands

```python
 | format_commands(ctx, formatter)
```

Extra format methods for multi methods that adds all the commands
after the options.

#### get\_command

```python
 | get_command(ctx, cmd_name)
```

Given a context and a command name, this returns a
:class:`Command` object if it exists or returns `None`.

#### list\_commands

```python
 | list_commands(ctx)
```

Returns a list of subcommand names in the order they should
appear.

## Group Objects

```python
class Group(MultiCommand)
```

A group allows a command to have subcommands attached.  This is the
most common way to implement nesting in Click.

**Arguments**:

- `commands`: a dictionary of commands.

#### add\_command

```python
 | add_command(cmd, name=None)
```

Registers another :class:`Command` with this group.  If the name
is not provided, the name of the command is used.

#### command

```python
 | command(*args, **kwargs)
```

A shortcut decorator for declaring and attaching a command to
the group.  This takes the same arguments as :func:`command` but
immediately registers the created command with this instance by
calling into :meth:`add_command`.

#### group

```python
 | group(*args, **kwargs)
```

A shortcut decorator for declaring and attaching a group to
the group.  This takes the same arguments as :func:`group` but
immediately registers the created command with this instance by
calling into :meth:`add_command`.

## CommandCollection Objects

```python
class CommandCollection(MultiCommand)
```

A command collection is a multi command that merges multiple multi
commands together into one.  This is a straightforward implementation
that accepts a list of different multi commands as sources and
provides all the commands for each of them.

#### add\_source

```python
 | add_source(multi_cmd)
```

Adds a new multi command to the chain dispatcher.

## Parameter Objects

```python
class Parameter(object)
```

#### human\_readable\_name

```python
 | @property
 | human_readable_name()
```

Returns the human readable name of this parameter.  This is the
same as the name for options, but the metavar for arguments.

#### get\_default

```python
 | get_default(ctx)
```

Given a context variable this calculates the default value.

#### type\_cast\_value

```python
 | type_cast_value(ctx, value)
```

Given a value this runs it properly through the type system.
This automatically handles things like `nargs` and `multiple` as
well as composite types.

#### process\_value

```python
 | process_value(ctx, value)
```

Given a value and context this runs the logic to convert the
value as necessary.

#### get\_error\_hint

```python
 | get_error_hint(ctx)
```

Get a stringified version of the param for use in error messages to
indicate which param caused the error.

## Option Objects

```python
class Option(Parameter)
```

Options are usually optional values on the command line and
have some extra features that arguments don&#x27;t have.

All other parameters are passed onwards to the parameter constructor.

**Arguments**:

                     help page. Normally, defaults are not shown. If this
                     value is a string, it shows the string instead of the
                     value. This is particularly useful for dynamic options.
                    the help page.  Normally, environment variables
                    are not shown.
               prompted for input.  If set to `True` the prompt will be the
               option name capitalized.
                            if it was prompted for.
                   hidden from the user.  This is useful for password
                   input.
                auto detection.
                   enabled.  This is set to a boolean automatically if
                   the option string contains a slash to mark two options.
                 multiple times and recorded.  This is similar to ``nargs``
                 in how it works but supports arbitrary number of
                 arguments.
                           parameter will be pulled from an environment
                           variable in case a prefix is defined on the
                           context.
- `show_default`: controls if the default value should be shown on the
- `show_envvar`: controls if an environment variable should be shown on
- `prompt`: if set to `True` or a non empty string then the user will be
- `confirmation_prompt`: if set then the value will need to be confirmed
- `hide_input`: if this is `True` then the input on the prompt will be
- `is_flag`: forces this option to act as a flag.  The default is
- `flag_value`: which value should be used for this flag if it&#x27;s
- `multiple`: if this is set to `True` then the argument is accepted
- `count`: this flag makes an option increment an integer.
- `allow_from_autoenv`: if this is enabled then the value of this
- `help`: the help string.
- `hidden`: hide this option from help outputs.

#### prompt\_for\_value

```python
 | prompt_for_value(ctx)
```

This is an alternative flow that can be activated in the full
value processing if a value does not exist.  It will prompt the
user until a valid value exists and then returns the processed
value as result.

## Argument Objects

```python
class Argument(Parameter)
```

Arguments are positional parameters to a command.  They generally
provide fewer features than options but can have infinite ``nargs``
and are required by default.

All parameters are passed onwards to the parameter constructor.

