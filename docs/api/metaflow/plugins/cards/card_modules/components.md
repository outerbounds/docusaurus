---
sidebar_label: components
title: plugins.cards.card_modules.components
---

## Artifact Objects

```python
class Artifact(UserComponent)
```

This class helps visualize any variable on the `MetaflowCard`.
The variable will be truncated using `reprlib.Repr.repr()`.

### Usage :
```python
@card
@step
def my_step(self):
    from metaflow.cards import Artifact
    from metaflow import current
    x = dict(a=2,b=2..)
    current.card.append(Artifact(x)) # Adds a name to the artifact
    current.card.append(Artifact(x,&#x27;my artifact name&#x27;))
```

## Table Objects

```python
class Table(UserComponent)
```

This class helps visualize information in the form of a table in a `MetaflowCard`.
`Table` can take other `MetaflowCardComponent`s like `Artifact`, `Image`, `Markdown` and `Error` as sub elements.

### Parameters
- `data` (List[List[Any]]) : The data to see in the table. Input is a 2d list that contains native types or `MetaflowCardComponent`s like `Artifact`, `Image`, `Markdown` and `Error`. Doesn&#x27;t play friendly with `dict` as a sub-element. If passing a `dict`, pass it via `Artifact`. Example : `Table([[Artifact(my_dictionary)]])`. If a non serializable object is passed as a sub-element then the table cell on the `MetaflowCard` will show up as `&lt;object&gt;`. columns.  Defaults to [[]].
- `headers` (List[str]) : The names of the columns.  Defaults to [].

### Usage with other components:
```python
@card
@step
def my_step(self):
    from metaflow.cards import Table, Artifact
    from metaflow import current
    x = dict(a=2,b=2..)
    y = dict(b=3,c=2..)
    # Can take other components as arguments
    current.card.append(
        Table([[
            Artifact(x), # Adds a name to the artifact
            Artifact(y), # Adds a name to the artifact
        ]])
    current.card.append(Artifact(x,&#x27;my artifact name&#x27;))
```
### Usage with dataframes:
```python
@card
@step
def my_step(self):
    from metaflow.cards import Table
    from metaflow import current
    # Can be created from a dataframe
    import pandas as pd
    import numpy as np
    current.card.append(
        Table.from_dataframe(
            pandas.DataFrame(
                np.random.randint(0, 100, size=(15, 4)),
                columns=list(&quot;ABCD&quot;),
            )
        )
    )
```

## Image Objects

```python
class Image(UserComponent)
```

This class helps visualize an image in a `MetaflowCard`. `Image`s can be created direcly from `bytes` or `PIL.Image`s or Matplotib figures.

### Parameters
- `src` (bytes) : The image source in `bytes`.
- `label` (str) : Label to the image show on the `MetaflowCard`.

### Usage
```python
@card
@step
def my_step(self):
    from metaflow.cards import Image
    from metaflow import current
    import requests
    current.card.append(
        Image(
            requests.get(&quot;https://www.gif-vif.com/hacker-cat.gif&quot;).content,
            &quot;Image From Bytes&quot;,
        ),
    )
```

#### `Image.from_matplotlib` :
```python
@card
@step
def my_step(self):
    from metaflow.cards import Image
    from metaflow import current
    import pandas as pd
    import numpy as np
    current.card.append(
        Image.from_matplotlib(
            pandas.DataFrame(
                np.random.randint(0, 100, size=(15, 4)),
                columns=list(&quot;ABCD&quot;),
            ).plot()
        )
    )
```
#### `Image.from_pil_image` :
```python
@card
@step
def my_step(self):
    from metaflow.cards import Image
    from metaflow import current
    from PIL import Image as PILImage
    current.card.append(
        Image.from_pil_image(
            PILImage.fromarray(np.random.randn(1024, 768), &quot;RGB&quot;),
            &quot;From PIL Image&quot;,
        ),
    )
```

## Error Objects

```python
class Error(UserComponent)
```

This class helps visualize Error&#x27;s on the `MetaflowCard`. It can help catch and print stack traces to errors that happen in `@step` code.

### Parameters
- `exception` (Exception) : The `Exception` to visualize. This value will be `repr`&#x27;d before passed down to `MetaflowCard`
- `title` (str) : The title that will appear over the visualized  `Exception`.

### Usage
```python
@card
@step
def my_step(self):
    from metaflow.cards import Error
    from metaflow import current
    try:
        ...
        ...
    except Exception as e:
        current.card.append(
            Error(e,&quot;Something misbehaved&quot;)
        )
    ...
```

## Markdown Objects

```python
class Markdown(UserComponent)
```

This class helps visualize Markdown on the `MetaflowCard`

### Parameters
- `text` (str) : A markdown string

### Usage
```python
@card
@step
def my_step(self):
    from metaflow.cards import Markdown
    from metaflow import current
    current.card.append(
        Markdown(&quot;# This is a header appended from @step code&quot;)
    )
    ...
```

