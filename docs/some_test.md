# Why Metaflow?

Metaflow is a framework to improve the quality of life for data
scientists.

### What problems does Metaflow help to solve❓

- Get training data, train a model on a schedule and keep an audit trail of all the training executions — ✅

- Establish an ETL pipeline with just a few lines of python code — ✅

- Train a large-scale model on AWS, Kubernetes, or Titus — again, with just a few lines of python — ✅

- Quickly establish directed graphs of different computation steps for parallel computing? Possible! ✅

- Resume your compute from a certain step? — Supported! ✅

The prefix _meta_ in Metaflow refers to the fact that Metaflow does not
aim to replace TensorFlow, Scikit learn, R, or any other libraries that
make you productive. It is a _meta_ library that makes it easier to
produce sustainable business value using these libraries.

## From Prototype to Production and Back

Supposedly, this is how machine learning gets developed and deployed in
production:

Anyone who has actually gone through the process knows that it
is anything but clean and linear:

Historically, the tools (e.g. Python) and environments (e.g. laptop)
used during prototyping are very different from the production setup
(e.g. Java in the cloud), which is hugely problematic. One might be able
to deal with this if deploying to production was a one-time event but in
practice machine learning models are subject to continuous development
and refinement, similar to any other software artifacts.

A key benefit of Metaflow is to be able to write code that looks like
idiomatic Python with little overhead from the framework and be able
to run the same code in production with all operational best practices
included by default. When something fails in production, you are able
to reproduce and debug problems locally as easily as with your original
prototype.

!!! note
Python dependency management is still quite tricky and there might be cases when cloud execution environment diverges from scicomp execution environment. We advise to use Conda when possible - more [here](https://manuals.netflix.net/view/mli/mkdocs/master/depsmanagement/)

To learn how we make this happen, see [What is Metaflow](what_is_metaflow).
