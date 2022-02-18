---
sidebar_label: _compat
title: _vendor.importlib_metadata._compat
---

#### install

```python
install(cls)
```

Class decorator for installation on sys.meta_path.

Adds the backport DistributionFinder to sys.meta_path and
attempts to disable the finder functionality of the stdlib
DistributionFinder.

#### disable\_stdlib\_finder

```python
disable_stdlib_finder()
```

Give the backport primacy for discovering path-based distributions
by monkey-patching the stdlib O_O.

See #91 for more background for rationale on this sketchy
behavior.

## NullFinder Objects

```python
class NullFinder()
```

A &quot;Finder&quot; (aka &quot;MetaClassFinder&quot;) that never finds any modules,
but may find distributions.

## PyPy\_repr Objects

```python
class PyPy_repr()
```

Override repr for EntryPoint objects on PyPy to avoid __iter__ access.
Ref #97, #102.

#### unique\_everseen

```python
unique_everseen(iterable)
```

List unique elements, preserving order. Remember all elements ever seen.

