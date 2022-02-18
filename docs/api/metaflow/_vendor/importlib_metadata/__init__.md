---
sidebar_label: importlib_metadata
title: _vendor.importlib_metadata
---

## PackageNotFoundError Objects

```python
class PackageNotFoundError(ModuleNotFoundError)
```

The package was not found.

## EntryPoint Objects

```python
class EntryPoint(
        PyPy_repr, 
        collections.namedtuple('EntryPointBase', 'name value group'))
```

An entry point as defined by Python packaging conventions.

See `the packaging docs on entry points
&lt;https://packaging.python.org/specifications/entry-points/&gt;`_
for more information.

#### pattern

A regular expression describing the syntax for an entry point,
which might look like:

    - module
    - package.module
    - package.module:attribute
    - package.module:object.attribute
    - package.module:attr [extra1, extra2]

Other combinations are possible as well.

The expression is lenient about whitespace around the &#x27;:&#x27;,
following the attr, and following any extras.

#### load

```python
 | load()
```

Load the entry point from its definition. If only a module
is indicated by the value, return that module. Otherwise,
return the named object.

#### \_\_iter\_\_

```python
 | __iter__()
```

Supply iter so one may construct dicts of EntryPoints easily.

## PackagePath Objects

```python
class PackagePath(pathlib.PurePosixPath)
```

A reference to a path in a package

#### locate

```python
 | locate()
```

Return a path-like object for this path

## Distribution Objects

```python
class Distribution()
```

A Python distribution package.

#### read\_text

```python
 | @abc.abstractmethod
 | read_text(filename)
```

Attempt to load metadata file given by the name.

**Arguments**:

- `filename`: The name of the file in the distribution info.

**Returns**:

The text if found, otherwise None.

#### locate\_file

```python
 | @abc.abstractmethod
 | locate_file(path)
```

Given a path to a file in this distribution, return a path
to it.

#### from\_name

```python
 | @classmethod
 | from_name(cls, name)
```

Return the Distribution for the given package name.

**Arguments**:

- `name`: The name of the distribution package to search for.

**Returns**:

The Distribution instance (or subclass thereof) for the named

**Raises**:

- `PackageNotFoundError`: When the named package&#x27;s distribution
    metadata cannot be found.

#### discover

```python
 | @classmethod
 | discover(cls, **kwargs)
```

Return an iterable of Distribution objects for all packages.

Pass a ``context`` or pass keyword arguments for constructing
a context.

:context: A ``DistributionFinder.Context`` object.

**Returns**:

Iterable of Distribution objects for all packages.

#### at

```python
 | @staticmethod
 | at(path)
```

Return a Distribution for the indicated metadata path

**Arguments**:

- `path`: a string or path-like object

**Returns**:

a concrete Distribution instance for the path

#### metadata

```python
 | @property
 | metadata()
```

Return the parsed metadata for this Distribution.

The returned object will have keys that name the various bits of
metadata.  See PEP 566 for details.

#### version

```python
 | @property
 | version()
```

Return the &#x27;Version&#x27; metadata for the distribution package.

#### files

```python
 | @property
 | files()
```

Files in this distribution.

**Returns**:

List of PackagePath for this distribution or None

#### requires

```python
 | @property
 | requires()
```

Generated requirements specified for this Distribution

## DistributionFinder Objects

```python
class DistributionFinder(MetaPathFinder)
```

A MetaPathFinder capable of discovering installed distributions.

## Context Objects

```python
class Context()
```

Keyword arguments presented by the caller to
``distributions()`` or ``Distribution.discover()``
to narrow the scope of a search for distributions
in all DistributionFinders.

Each DistributionFinder may expect any parameters
and should attempt to honor the canonical
parameters defined below when appropriate.

#### name

Specific name for which a distribution finder should match.
A name of ``None`` matches all distributions.

#### path

```python
 | @property
 | path()
```

The path that a distribution finder should search.

Typically refers to Python package paths and defaults
to ``sys.path``.

#### find\_distributions

```python
 | @abc.abstractmethod
 | find_distributions(context=Context())
```

Find distributions.

Return an iterable of all Distribution instances capable of
loading the metadata for packages matching the ``context``,
a DistributionFinder.Context instance.

## FastPath Objects

```python
class FastPath()
```

Micro-optimized class for searching a path for
children.

## Prepared Objects

```python
class Prepared()
```

A prepared search for metadata on a possibly-named package.

#### normalize

```python
 | @staticmethod
 | normalize(name)
```

PEP 503 normalization plus dashes as underscores.

#### legacy\_normalize

```python
 | @staticmethod
 | legacy_normalize(name)
```

Normalize the package name as found in the convention in
older packaging tools versions and specs.

## MetadataPathFinder Objects

```python
@install
class MetadataPathFinder(NullFinder,  DistributionFinder)
```

A degenerate finder for distribution packages on the file system.

This finder supplies only a find_distributions() method for versions
of Python that do not have a PathFinder find_distributions().

#### find\_distributions

```python
 | find_distributions(context=DistributionFinder.Context())
```

Find distributions.

Return an iterable of all Distribution instances capable of
loading the metadata for packages matching ``context.name``
(or all names if ``None`` indicated) along the paths in the list
of directories ``context.path``.

## PathDistribution Objects

```python
class PathDistribution(Distribution)
```

#### \_\_init\_\_

```python
 | __init__(path)
```

Construct a distribution from a path to the metadata directory.

**Arguments**:

             .joinpath(), __div__, .parent, and .read_text().
- `path`: A pathlib.Path or similar object supporting

#### distribution

```python
distribution(distribution_name)
```

Get the ``Distribution`` instance for the named package.

**Arguments**:

- `distribution_name`: The name of the distribution package as a string.

**Returns**:

A ``Distribution`` instance (or subclass thereof).

#### distributions

```python
distributions(**kwargs)
```

Get all ``Distribution`` instances in the current environment.

**Returns**:

An iterable of ``Distribution`` instances.

#### metadata

```python
metadata(distribution_name)
```

Get the metadata for the named package.

**Arguments**:

- `distribution_name`: The name of the distribution package to query.

**Returns**:

An email.Message containing the parsed metadata.

#### version

```python
version(distribution_name)
```

Get the version string for the named package.

**Arguments**:

- `distribution_name`: The name of the distribution package to query.

**Returns**:

The version string for the package as defined in the package&#x27;s

#### entry\_points

```python
entry_points()
```

Return EntryPoint objects for all installed packages.

**Returns**:

EntryPoint objects for all installed packages.

#### files

```python
files(distribution_name)
```

Return a list of files for the named package.

**Arguments**:

- `distribution_name`: The name of the distribution package to query.

**Returns**:

List of files composing the distribution.

#### requires

```python
requires(distribution_name)
```

Return a list of requirements for the named package.

**Returns**:

An iterator of requirements, suitable for

