import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Baserow",
    "numberOfMethods": 299,
    "categories": [
      "database",
      "no_code"
    ],
    "index": "baserow/typescript",
    "language": "TypeScript",
    "link": "/sdk/baserow/typescript/",
    "developerDocumentation": "baserow.io/docs/index",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baserow/openapi.yaml"
  },
  {
    "name": "Baserow",
    "numberOfMethods": 299,
    "categories": [
      "database",
      "no_code"
    ],
    "index": "baserow/python",
    "language": "Python",
    "link": "/sdk/baserow/python/",
    "developerDocumentation": "baserow.io/docs/index",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baserow/openapi.yaml"
  },
  {
    "name": "Baserow",
    "numberOfMethods": 299,
    "categories": [
      "database",
      "no_code"
    ],
    "index": "baserow/java",
    "language": "Java",
    "link": "/sdk/baserow/java/",
    "developerDocumentation": "baserow.io/docs/index",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/baserow/openapi.yaml"
  }
];

export default function Baserow() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Baserow"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/baserow/favicon.png"
      sdks={sdks}
      homepage="baserow.io"
      companyKebabCase="baserow"
      categories={allCategories}
      metaDescription={`Baserow is the most flexible platform for creating databases and applications—without coding.

Get all the power of a database with the familiarity of a spreadsheet. Organize your data and build applications faster, with greater security and at any scale. Only Baserow has self-hosting, real-time collaboration, APIs, plugins, and no vendor lock-in. 

Create Kanban boards, calendars, forms, integrate with other tools, and more to provide the best representation of your data. Today, thousands of customers around the world use our powerful and easy-to-use tools as their CRM, project management systems, or to power websites.

We live by open source principles: our code, product, and community are all open for everyone to join and contribute to. We're looking for passionate individuals to join us: baserow.io/jobs`}
    />
  )
}