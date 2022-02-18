---
sidebar_label: sidecar
title: sidecar
---

## PipeUnavailableError Objects

```python
class PipeUnavailableError(Exception)
```

raised when unable to write to pipe given allotted time

## NullSidecarError Objects

```python
class NullSidecarError(Exception)
```

raised when trying to poll or interact with the fake subprocess in the null sidecar

## MsgTimeoutError Objects

```python
class MsgTimeoutError(Exception)
```

raised when trying unable to send message to sidecar in allocated time

