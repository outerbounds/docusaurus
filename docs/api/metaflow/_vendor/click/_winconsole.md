---
sidebar_label: _winconsole
title: _vendor.click._winconsole
---

## WindowsChunkedWriter Objects

```python
class WindowsChunkedWriter(object)
```

Wraps a stream (such as stdout), acting as a transparent proxy for all
attribute access apart from method &#x27;write()&#x27; which we wrap to write in
limited chunks due to a Windows limitation on binary console streams.

