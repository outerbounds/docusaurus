---
sidebar_label: metaflow_environment
title: metaflow_environment
---

## MetaflowEnvironment Objects

```python
class MetaflowEnvironment(object)
```

#### init\_environment

```python
 | init_environment(echo)
```

Run before any step decorators are initialized.

#### validate\_environment

```python
 | validate_environment(echo)
```

Run before any command to validate that we are operating in
a desired environment.

#### decospecs

```python
 | decospecs()
```

Environment may insert decorators, equivalent to setting --with
options on the command line.

#### bootstrap\_commands

```python
 | bootstrap_commands(step_name)
```

A list of shell commands to bootstrap this environment in a remote runtime.

#### add\_to\_package

```python
 | add_to_package()
```

A list of tuples (file, arcname) to add to the job package.
`arcname` is an alternative name for the file in the job package.

#### pylint\_config

```python
 | pylint_config()
```

Environment may override pylint config.

#### get\_client\_info

```python
 | @classmethod
 | get_client_info(cls, flow_name, metadata)
```

Environment may customize the information returned to the client about the environment

Parameters
----------
flow_name : str
    Name of the flow
metadata : dict
    Metadata information regarding the task

Returns
-------
str : Information printed and returned to the user

