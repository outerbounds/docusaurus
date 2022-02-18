---
sidebar_label: kubernetes
title: plugins.aws.eks.kubernetes
---

#### generate\_rfc1123\_name

```python
generate_rfc1123_name(flow_name, run_id, step_name, task_id, attempt)
```

Generate RFC 1123 compatible name. Specifically, the format is:
    &lt;let-or-digit&gt;[*[&lt;let-or-digit-or-hyphen&gt;]&lt;let-or-digit&gt;]

The generated name consists from a human-readable prefix, derived from
flow/step/task/attempt, and a hash suffux.

