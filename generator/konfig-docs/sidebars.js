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
  tutorialSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest)">DOCUMENTATION</p>`,
      defaultStyle: true,
    },
    {
      type: "doc",
      id: "intro",
    },
    {
      type: "doc",
      id: "why-create-sdks",
    },
    {
      type: "doc",
      id: "quickstart-guide",
    },
    {
      type: "category",
      label: "Tutorials",
      link: {
        type: "generated-index",
      },
      items: [
        "tutorials/setup-linting",
        "tutorials/setup-breaking-change-detection",
        "tutorials/fix-openapi-spec",
        "tutorials/automate-sdk-updates",
        "tutorials/publish-sdks",
        "tutorials/postman-to-openapi",
        "tutorials/naming-operation-ids",
      ],
    },
    {
      type: "category",
      label: "Custom SDKs",
      link: {
        type: "doc",
        id: "custom-sdks",
      },
      items: [
        "custom-sdks/implementing-pagination",
        "custom-sdks/example-customized-sdks",
      ],
    },
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
      },
      items: [
        "reference/supported-package-managers",
        "reference/faq",
        "reference/language-and-oas-support",
      ],
    },
    {
      type: "doc",
      id: "lint-rules",
    },
    {
      type: "category",
      label: "konfig.yaml",
      link: {
        type: "doc",
        id: "konfig-yaml",
      },
      items: [{ type: "doc", id: "konfig-yaml/schema", label: "Schema" }],
    },
    {
      type: "doc",
      id: "example-sdks",
    },
  ],
  openApiSidebar: [
    {
      type: "category",
      label: "API reference",
      link: {
        type: "generated-index",
        title: "API Reference",
        description: "Reference for Konfig's REST API.",
        slug: "/category/api-reference",
      },
      // @ts-ignore
      items: require("./docs/api-reference/sidebar.js"),
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
