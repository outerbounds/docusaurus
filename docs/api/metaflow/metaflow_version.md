---
sidebar_label: metaflow_version
title: metaflow_version
---

Get version identification for the package

See the documentation of get_version for more information

#### call\_git\_describe

```python
call_git_describe(abbrev=7)
```

return the string output of git describe

#### format\_git\_describe

```python
format_git_describe(git_str, pep440=False)
```

format the result of calling &#x27;git describe&#x27; as a python version

#### read\_info\_version

```python
read_info_version()
```

Read version information from INFO file

#### get\_version

```python
get_version(pep440=False)
```

Tracks the version number.

pep440: bool
    When True, this function returns a version string suitable for
    a release as defined by PEP 440. When False, the githash (if
    available) will be appended to the version string.

If the script is located within an active git repository,
git-describe is used to get the version information.

Otherwise, the version logged by package installer is returned.

If even that information isn&#x27;t available (likely when executing on a
remote cloud instance), the version information is returned from INFO file
in the current directory.

