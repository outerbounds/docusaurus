---
sidebar_label: card_client
title: plugins.cards.card_client
---

## Card Objects

```python
class Card()
```

The object which holds the html of a Metaflow card.

### Usage
```python
card_container = get_cards(task)
# This retrieves a `Card` instance
card = card_container[0]
# View the HTML in browser
card.view()
# Get the HTML of the card
html = card.get()
# calling the instance of `Card` inside a notebook cell will render the card as the output of a cell
card
```

## CardContainer Objects

```python
class CardContainer()
```

A `list` like object that helps iterate through all the stored `Card`s.

### Usage:
```python
card_container = get_cards(task)
# Get all stored cards
cards = list(card_container)
# calling the instance of `CardContainer` inside a notebook will render all cards as the output of a cell
card_container
```

#### get\_cards

```python
get_cards(task, id=None, type=None, follow_resumed=True)
```

Get cards related to a Metaflow `Task`

**Arguments**:

- `task` _str or `Task`_ - A metaflow `Task` object or pathspec (flowname/runid/stepname/taskid)
- `type` _str, optional_ - The type of card to retrieve. Defaults to None.
- `follow_resumed` _bool, optional_ - If a Task has been resumed and cloned, then setting this flag will resolve the card for the origin task. Defaults to True.
  

**Returns**:

  `CardContainer` : A `list` like object that holds `Card` objects.

