---
sidebar_label: aws_utils
title: plugins.aws.aws_utils
---

#### get\_docker\_registry

```python
get_docker_registry(image_uri)
```

Explanation:
(.+?(?:[:.].+?)\/)? - [GROUP 0] REGISTRY
.+?                 - A registry must start with at least one character
(?:[:.].+?)\/       - A registry must have &quot;:&quot; or &quot;.&quot; and end with &quot;/&quot;
?                   - Make a registry optional
(.*?)               - [GROUP 1] REPOSITORY
.*?                 - Get repository name until separator
(?:[@:])?           - SEPARATOR
?:                  - Don&#x27;t capture separator
[@:]                - The separator must be either &quot;@&quot; or &quot;:&quot;
?                   - The separator is optional
((?&lt;=[@:]).*)?      - [GROUP 2] TAG / DIGEST
(?&lt;=[@:])           - A tag / digest must be preceeded by &quot;@&quot; or &quot;:&quot;
.*                  - Capture rest of tag / digest
?                   - A tag / digest is optional

**Examples**:

  image
  - None
  - image
  - None
  example/image
  - None
  - example/image
  - None
  example/image:tag
  - None
  - example/image
  - tag
  example.domain.com/example/image:tag
  - example.domain.com/
  - example/image
  - tag
  123.123.123.123:123/example/image:tag
  - 123.123.123.123:123/
  - example/image
  - tag
  example.domain.com/example/image@sha256:45b23dee0
  - example.domain.com/
  - example/image
  - sha256:45b23dee0

#### compute\_resource\_attributes

```python
compute_resource_attributes(decos, compute_deco, resource_defaults)
```

Compute resource values taking into account defaults, the values specified
in the compute decorator (like @batch or @kubernetes) directly, and
resources specified via @resources decorator.

Returns a dictionary of resource attr -&gt; value (str).

