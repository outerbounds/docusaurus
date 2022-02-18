---
sidebar_label: component_serializer
title: plugins.cards.component_serializer
---

## CardComponentCollector Objects

```python
class CardComponentCollector()
```

This class helps collect `MetaflowCardComponent`s during runtime execution

### Usage with `current`
`current.card` is of type `CardComponentCollector`

### Main Usage TLDR
- [x] `current.card.append` customizes the default editable card.
- [x] Only one card can be default editable in a step.
- [x] The card class must have `ALLOW_USER_COMPONENTS=True` to be considered default editable.
    - [x] Classes with `ALLOW_USER_COMPONENTS=False` are never default editable.
- [x] The user can specify an `id` argument to a card, in which case the card is editable through `current.card[id].append`.
    - [x] A card with an id can be also default editable, if there are no other cards that are eligible to be default editable.
- [x] If multiple default-editable cards exist but only one card doesn’t have an id, the card without an id is considered to be default editable.
- [x] If we can’t resolve a single default editable card through the above rules, `current.card`.append calls show a warning but the call doesn’t fail.
- [x] A card that is not default editable can be still edited through:
    - [x] its `current.card[&#x27;myid&#x27;]`
    - [x] by looking it up by its type, e.g. `current.card.get(type=’pytorch’)`.

#### get

```python
 | get(type=None)
```

`get`
gets all the components arrays for a card `type`.
Since one `@step` can have many `@card` decorators, many decorators can have the same type. That is why this function returns a list of lists.

**Arguments**:

- `type` _[str], optional_ - `type` of MetaflowCard. Defaults to None.
  
- `Returns` - will return empty `list` if `type` is None or not found
  List[List[MetaflowCardComponent]]

