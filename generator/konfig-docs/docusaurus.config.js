// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { remarkCodeHike } = require("konfig-code-hike-mdx");
const mermaid = require("@jakxz/mdx-mermaid");

const beforeRemarkPlugins = [
  [
    remarkCodeHike,
    {
      theme: "github-from-css",
      lineNumbers: true,
      showCopyButton: true,
      skipLanguages: ["", "mermaid"],
    },
  ],
];

const remarkPlugins = [
  [
    mermaid,
    {
      theme: { light: "default", dark: "dark" },
    },
  ],
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Konfig",
  tagline: "Generate SDKs for your REST API",
  url: "https://konfigthis.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  themes: [
    "docusaurus-json-schema-plugin",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
      },
    ],
    "mdx-v2",
  ],
  plugins: [],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: "facebook", // Usually your GitHub org/user name.
  // projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          beforeDefaultRemarkPlugins: beforeRemarkPlugins,
          remarkPlugins: remarkPlugins,
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [
            require.resolve("@code-hike/mdx/styles.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
        blog: {
          beforeDefaultRemarkPlugins: beforeRemarkPlugins,
          remarkPlugins: remarkPlugins,
          showReadingTime: true,
        },
        gtag: {
          trackingID: "G-S1WP8SMM27",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Konfig",
        logo: {
          alt: "Konfig Logo",
          src: "img/favicon.png",
          href: "https://konfigthis.com",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/schedule-demo", label: "Schedule Demo", position: "right" },
        ],
      },
      api: {
        authPersistance: "localStorage",
        serverVariablesPersistance: "localStorage",
      },
      footer: {
        style: "light",
        links: [
          {
            title: "About Us",
            items: [
              {
                label: "Website",
                to: "https://konfigthis.com",
              },
              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/konfig",
              },
            ],
          },
          // {
          //   title: "Docs",
          //   items: [
          //     {
          //       label: "Introduction",
          //       to: "/docs/intro",
          //     },
          //   ],
          // },
          // {
          //   title: "Community",
          //   items: [
          //     {
          //       label: "Stack Overflow",
          //       href: "https://stackoverflow.com/questions/tagged/docusaurus",
          //     },
          //     {
          //       label: "Discord",
          //       href: "https://discordapp.com/invite/docusaurus",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/docusaurus",
          //     },
          //   ],
          // },
          // {
          //   title: "More",
          //   items: [
          //     {
          //       label: "Blog",
          //       to: "/blog",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/facebook/docusaurus",
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Konfig, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),
};

module.exports = config;
