/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  python: [
    {
      type: "doc",
      id: "r/README",
      label: "📚 R Docs",
    },
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "introduction/why-metaflow",
        "introduction/what-is-metaflow",
        "introduction/release-notes",
        "introduction/roadmap",
        "introduction/contributing-to-metaflow",
        "introduction/getting-in-touch",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["getting-started/install", "getting-started/tutorials/README"],
    },
    {
      type: "category",
      label: "Metaflow on AWS",
      collapsed: false,
      items: [
        "metaflow-on-aws/metaflow-on-aws",
        "metaflow-on-aws/metaflow-sandbox",
        "metaflow-on-aws/deploy-to-aws",
      ],
    },
    {
      type: "category",
      label: "Developing with Metaflow",
      collapsed: false,
      items: [
        "metaflow/basics",
        "metaflow/client",
        "metaflow/visualizing-results/README",
        "metaflow/debugging",
        "metaflow/scaling",
        "metaflow/data",
        "metaflow/dependencies",
        "metaflow/failures",
        "metaflow/tagging",
      ],
    },
    {
      type: "category",
      label: "Going to Production with Metaflow",
      collapsed: false,
      items: [
        "going-to-production-with-metaflow/scheduling-metaflow-flows",
        "going-to-production-with-metaflow/coordinating-larger-metaflow-projects",
      ],
    },
    {
      type: "category",
      label: "Internals of Metaflow",
      collapsed: false,
      items: [
        "internals-of-metaflow/technical-overview",
        "internals-of-metaflow/testing-philosophy",
      ],
    },
  ],

  r: [
    {
      type: "doc",
      id: "index",
      label: "📚 Python Docs",
    },
    {
      type: "category",
      label: "Introduction",
      collapsed: false,
      items: [
        "r/introduction/why-metaflow",
        "r/introduction/what-is-metaflow",
        "r/introduction/release-notes",
        "r/introduction/roadmap",
        "r/introduction/contributing-to-metaflow",
        "r/introduction/getting-in-touch",
      ],
    },
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "r/getting-started/install",
        "r/getting-started/tutorials/README",
      ],
    },
    {
      type: "category",
      label: "Metaflow on AWS",
      collapsed: false,
      items: [
        "r/metaflow-on-aws/metaflow-on-aws",
        "r/metaflow-on-aws/metaflow-sandbox",
        "r/metaflow-on-aws/deploy-to-aws",
      ],
    },
    {
      type: "category",
      label: "Developing with Metaflow",
      collapsed: false,
      items: [
        "r/metaflow/basics",
        "r/metaflow/client",
        "r/metaflow/debugging",
        "r/metaflow/scaling",
        "r/metaflow/failures",
        "r/metaflow/tagging",
      ],
    },
    {
      type: "category",
      label: "Going to Production with Metaflow",
      collapsed: false,
      items: ["r/going-to-production-with-metaflow/scheduling-metaflow-flows"],
    },
  ],
};

module.exports = sidebars;
