---
sidebar_label: zipp
title: _vendor.zipp
---

## CompleteDirs Objects

```python
class CompleteDirs(zipfile.ZipFile)
```

A ZipFile subclass that ensures that implied directories
are always included in the namelist.

#### resolve\_dir

```python
 | resolve_dir(name)
```

If the name represents a directory, return that name
as a directory (with the trailing slash).

#### make

```python
 | @classmethod
 | make(cls, source)
```

Given a source (filename or zipfile), return an
appropriate CompleteDirs subclass.

## FastLookup Objects

```python
class FastLookup(CompleteDirs)
```

ZipFile subclass to ensure implicit
dirs exist and are resolved rapidly.

## Path Objects

```python
class Path()
```

A pathlib-compatible interface for zip files.

Consider a zip file with this structure::

    .
    ├── a.txt
    └── b
        ├── c.txt
        └── d
            └── e.txt

&gt;&gt;&gt; data = io.BytesIO()
&gt;&gt;&gt; zf = zipfile.ZipFile(data, &#x27;w&#x27;)
&gt;&gt;&gt; zf.writestr(&#x27;a.txt&#x27;, &#x27;content of a&#x27;)
&gt;&gt;&gt; zf.writestr(&#x27;b/c.txt&#x27;, &#x27;content of c&#x27;)
&gt;&gt;&gt; zf.writestr(&#x27;b/d/e.txt&#x27;, &#x27;content of e&#x27;)
&gt;&gt;&gt; zf.filename = &#x27;mem/abcde.zip&#x27;

Path accepts the zipfile object itself or a filename

&gt;&gt;&gt; root = Path(zf)

From there, several path operations are available.

Directory iteration (including the zip file itself):

&gt;&gt;&gt; a, b = root.iterdir()
&gt;&gt;&gt; a
Path(&#x27;mem/abcde.zip&#x27;, &#x27;a.txt&#x27;)
&gt;&gt;&gt; b
Path(&#x27;mem/abcde.zip&#x27;, &#x27;b/&#x27;)

name property:

&gt;&gt;&gt; b.name
&#x27;b&#x27;

join with divide operator:

&gt;&gt;&gt; c = b / &#x27;c.txt&#x27;
&gt;&gt;&gt; c
Path(&#x27;mem/abcde.zip&#x27;, &#x27;b/c.txt&#x27;)
&gt;&gt;&gt; c.name
&#x27;c.txt&#x27;

Read text:

&gt;&gt;&gt; c.read_text()
&#x27;content of c&#x27;

existence:

&gt;&gt;&gt; c.exists()
True
&gt;&gt;&gt; (b / &#x27;missing.txt&#x27;).exists()
False

Coercion to string:

&gt;&gt;&gt; import os
&gt;&gt;&gt; str(c).replace(os.sep, posixpath.sep)
&#x27;mem/abcde.zip/b/c.txt&#x27;

At the root, ``name``, ``filename``, and ``parent``
resolve to the zipfile. Note these attributes are not
valid and will raise a ``ValueError`` if the zipfile
has no filename.

&gt;&gt;&gt; root.name
&#x27;abcde.zip&#x27;
&gt;&gt;&gt; str(root.filename).replace(os.sep, posixpath.sep)
&#x27;mem/abcde.zip&#x27;
&gt;&gt;&gt; str(root.parent)
&#x27;mem&#x27;

#### \_\_init\_\_

```python
 | __init__(root, at="")
```

Construct a Path from a ZipFile or filename.

Note: When the source is an existing ZipFile object,
its type (__class__) will be mutated to a
specialized type. If the caller wishes to retain the
original type, the caller should either create a
separate ZipFile object or pass a filename.

#### open

```python
 | open(mode='r', *args, *, pwd=None, **kwargs)
```

Open this entry as text or binary following the semantics
of ``pathlib.Path.open()`` by passing arguments through
to io.TextIOWrapper().

