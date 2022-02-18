---
sidebar_label: basic
title: plugins.cards.card_modules.basic
---

## DefaultComponent Objects

```python
class DefaultComponent(MetaflowCardComponent)
```

The `DefaultCard` and the `BlankCard` use a JS framework that build the HTML dynamically from JSON. The `DefaultComponent` is the base component that helps build the JSON when `render` is called.

The underlying JS framewok consists of various types of objects. These can be found in: &quot;metaflow/plugins/cards/ui/types.ts&quot;. The `type` attribute in a `DefaultComponent` corresponds to the type of component in the Javascript framework.

## TaskInfoComponent Objects

```python
class TaskInfoComponent(MetaflowCardComponent)
```

Properties
    page_content : a list of MetaflowCardComponents going as task info
    final_component: the dictionary returned by the `render` function of this class.

#### render

```python
 | render()
```

**Returns**:

  a dictionary of form:
  dict(metadata = {},components= [])

