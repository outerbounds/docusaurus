---
sidebar_label: _termui_impl
title: _vendor.click._termui_impl
---

This module contains implementations for the termui module. To keep the
import time of Click down, some infrequently used functionality is
placed in this module and only imported as needed.

## ProgressBar Objects

```python
class ProgressBar(object)
```

#### generator

```python
 | generator()
```

Return a generator which yields the items added to the bar
during construction, and updates the progress bar *after* the
yielded block returns.

#### pager

```python
pager(generator, color=None)
```

Decide what method to use for paging through text.

