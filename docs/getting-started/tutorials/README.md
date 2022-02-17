---
pagination_next: getting-started/tutorials/season-1-the-local-experience/README
---

# Tutorials

This set of tutorials provides a hands-on introduction to Metaflow. The basic concepts are introduced in practice, and you can find out more details about the functionality showcased in these tutorials in [Basics of Metaflow](../../metaflow/basics) and the following sections.

### Setting up.

Metaflow comes packaged with the tutorials, so getting started is easy. You can make copies of all the tutorials in your current directory using the metaflow command line interface:

```
metaflow tutorials pull
```

This creates a directory _**metaflow-tutorials**_ in your current working directory with a subdirectory for each tutorial.&#x20;

Each tutorial has a brief description and instructions that you can view using the links below. Alternatively, you can use the command line interface to list available tutorials or get info about a specific one:

```
metaflow tutorials list
metaflow tutorials info 00-helloworld
```

### [Season 1: The Local Experience.](season-1-the-local-experience/)

- [**Episode 0: Metaflow says Hi!**](season-1-the-local-experience/episode00)
- [**Episode 1: Let's build you a movie playlist.**](season-1-the-local-experience/episode01)
- [**Episode 2: Is this Data Science?**](season-1-the-local-experience/episode02)
- [**Episode 3: Follow the Money.**](season-1-the-local-experience/episode03)
- [**Episode 4: The Final Showdown.**](season-1-the-local-experience/episode04)

### [Season 2: Scaling Out and Up](season-2-scaling-out-and-up/).

- [**Episode 5: Look Mom, We're in the Cloud.**](season-2-scaling-out-and-up/episode05)
- [**Episode 6: Computing in the Cloud.**](season-2-scaling-out-and-up/episode06)
- [**Episode 7: Way up here.**](season-2-scaling-out-and-up/episode07)

### What's next?

- Explore fault tolerant flows with [`@catch`](../../metaflow/failures#catching-exceptions-with-catch-decorator), [`@retry`](../../metaflow/failures#retrying-tasks-with-retry-decorator), [`@timeout`](../../metaflow/failures#timing-out-with-timeout-decorator) decorators.
- Try a library like [Tensorflow](https://www.tensorflow.org) with [`@conda`](../../metaflow/dependencies) and [`@batch`](../../metaflow/scaling#using-aws-batch-selectively-with-batch-decorator)
- Debug failed runs with [resume](../../metaflow/debugging#how-to-use-the-resume-command).
- Access large data fast with [metaflow.S3](../../metaflow/data#data-in-s-3-metaflow-s3).
- Explore results across experiments with the [Client API](../../metaflow/client).
- See how to organize results and collaborate with [namespaces](../../metaflow/tagging#namespaces) and [tags](../../metaflow/tagging#tagging).
