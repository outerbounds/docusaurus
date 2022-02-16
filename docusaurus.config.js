// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
// const { remarkCodeHike } = require("@code-hike/mdx");
// const theme = require("shiki/themes/monokai.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // remarkPlugins: [[remarkCodeHike, { theme }]],
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/Metaflow_Logo_Vertical_FullColor_Ribbon_Dark_RGB.png",
      navbar: {
        logo: {
          alt: "Metaflow Logo",
          srcDark: "img/Metaflow_Logo_Horizontal_OneColor_White_RGB.png",
          src: "img/Metaflow_Logo_Horizontal_OneColor_White_RGB.png",
          href: "/docs",
          height: "64px",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "index",
            label: "Python Docs",
          },
          {
            type: "doc",
            position: "left",
            docId: "r/README",
            label: "R Docs",
          },
          {
            href: "https://admin-docs.metaflow.org/",
            position: "left",
            label: "Admin Docs",
          },
          {
            type: "search",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
