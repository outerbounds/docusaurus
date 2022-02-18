---
sidebar_label: filecache
title: client.filecache
---

## FileCache Objects

```python
class FileCache(object)
```

#### get\_artifact\_size\_by\_location

```python
 | get_artifact_size_by_location(ds_type, location, attempt, flow_name, run_id, step_name, task_id, name)
```

Gets the size of the artifact content (in bytes) for the name at the location

#### get\_artifact\_size

```python
 | get_artifact_size(ds_type, ds_root, attempt, flow_name, run_id, step_name, task_id, name)
```

Gets the size of the artifact content (in bytes) for the name

