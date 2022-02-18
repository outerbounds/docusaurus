---
sidebar_label: stub
title: plugins.env_escape.stub
---

#### with\_metaclass

```python
with_metaclass(meta, *bases)
```

Create a base class with a metaclass.

## Stub Objects

```python
class Stub(with_metaclass(StubMetaClass, object))
```

Local reference to a remote object.

The stub looks and behaves like the remote object but all operations on the stub
happen on the remote side (server).

