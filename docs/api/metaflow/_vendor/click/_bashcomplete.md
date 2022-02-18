---
sidebar_label: _bashcomplete
title: _vendor.click._bashcomplete
---

#### resolve\_ctx

```python
resolve_ctx(cli, prog_name, args)
```

Parse into a hierarchy of contexts. Contexts are connected
through the parent variable.

**Arguments**:

- `cli`: command definition
- `prog_name`: the program that is running
- `args`: full list of args

**Returns**:

the final context/command parsed

#### start\_of\_option

```python
start_of_option(param_str)
```

**Arguments**:

- `param_str`: param_str to check

**Returns**:

whether or not this is the start of an option declaration

#### is\_incomplete\_option

```python
is_incomplete_option(all_args, cmd_param)
```

**Arguments**:

- `all_args`: the full original list of args supplied
- `cmd_param`: the current command paramter

**Returns**:

whether or not the last option declaration (i.e. starts

#### is\_incomplete\_argument

```python
is_incomplete_argument(current_params, cmd_param)
```

**Arguments**:

    argument as already entered
- `current_params`: the current params and values for this
- `cmd_param`: the current command parameter

**Returns**:

whether or not the last argument is incomplete and

#### get\_user\_autocompletions

```python
get_user_autocompletions(ctx, args, incomplete, cmd_param)
```

**Arguments**:

- `ctx`: context associated with the parsed command
- `args`: full list of args
- `incomplete`: the incomplete text to autocomplete
- `cmd_param`: command definition

**Returns**:

all the possible user-specified completions for the param

#### get\_visible\_commands\_starting\_with

```python
get_visible_commands_starting_with(ctx, starts_with)
```

**Arguments**:

:starts_with: string that visible commands must start with.
- `ctx`: context associated with the parsed command

**Returns**:

all visible (not hidden) commands that start with starts_with.

#### get\_choices

```python
get_choices(cli, prog_name, args, incomplete)
```

**Arguments**:

- `cli`: command definition
- `prog_name`: the program that is running
- `args`: full list of args
- `incomplete`: the incomplete text to autocomplete

**Returns**:

all the possible completions for the incomplete

