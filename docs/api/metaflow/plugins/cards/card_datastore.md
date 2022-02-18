---
sidebar_label: card_datastore
title: plugins.cards.card_datastore
---

## CardDatastore Objects

```python
class CardDatastore(object)
```

#### card\_info\_from\_path

```python
 | @staticmethod
 | card_info_from_path(path)
```

**Arguments**:

- `path` _str_ - The path to the card
  

**Raises**:

- `Exception` - When the card_path is invalid
  

**Returns**:

  CardInfo

#### cache\_locally

```python
 | cache_locally(path, save_path=None)
```

Saves the data present in the `path` the `metaflow_card_cache` directory or to the `save_path`.

