---
sidebar_label: card_cli
title: plugins.cards.card_cli
---

#### resolve\_task\_from\_pathspec

```python
resolve_task_from_pathspec(flow_name, pathspec)
```

resolves a task object for the pathspec query on the CLI.

**Arguments**:

  flow_name : (str) : name of flow
  pathspec (str) : can be `stepname` / `runid/stepname` / `runid/stepname/taskid`
  

**Returns**:

  metaflow.Task | None

#### resolve\_card

```python
resolve_card(ctx, pathspec, follow_resumed=True, hash=None, type=None, card_id=None, no_echo=False)
```

Resolves the card path for a query.

**Arguments**:

- `ctx` - click context object
- `pathspec` - pathspec can be `stepname` or `runid/stepname` or `runid/stepname/taskid`
- `hash` _optional_ - This is to specifically resolve the card via the hash. This is useful when there may be many card with same id or type for a pathspec.
  type : type of card
  card_id : `id` given to card
  no_echo : if set to `True` then supress logs about pathspec resolution.

**Raises**:

- `CardNotPresentException` - No card could be found for the pathspec
  

**Returns**:

  (card_paths, card_datastore, taskpathspec) : Tuple[List[str], CardDatastore, str]

#### view

```python
@card.command()
@click.argument("pathspec")
@card_read_options_and_arguments
@click.pass_context
view(ctx, pathspec, hash=None, type=None, id=None, follow_resumed=False)
```

View the HTML card in browser based on the pathspec.\n
The pathspec can be of the form:\n
    - &lt;stepname&gt;\n
    - &lt;runid&gt;/&lt;stepname&gt;\n
    - &lt;runid&gt;/&lt;stepname&gt;/&lt;taskid&gt;\n

#### get

```python
@card.command()
@click.argument("pathspec")
@click.argument("path", required=False)
@card_read_options_and_arguments
@click.pass_context
get(ctx, pathspec, path, hash=None, type=None, id=None, follow_resumed=False)
```

Get the HTML string of the card based on pathspec.\n
The pathspec can be of the form:\n
    - &lt;stepname&gt;\n
    - &lt;runid&gt;/&lt;stepname&gt;\n
    - &lt;runid&gt;/&lt;stepname&gt;/&lt;taskid&gt;\n

Save the card by adding the `path` argument.
```
python myflow.py card get start a.html --type default
```

