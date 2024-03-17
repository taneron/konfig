import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Partna",
    "numberOfMethods": 33,
    "categories": [
      "developer_tools",
      "finance",
      "payments",
      "africa"
    ],
    "index": "partna/typescript",
    "language": "TypeScript",
    "link": "/sdk/partna/typescript/",
    "developerDocumentation": "docs.getpartna.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/partna/openapi.yaml"
  },
  {
    "name": "Partna",
    "numberOfMethods": 33,
    "categories": [
      "developer_tools",
      "finance",
      "payments",
      "africa"
    ],
    "index": "partna/python",
    "language": "Python",
    "link": "/sdk/partna/python/",
    "developerDocumentation": "docs.getpartna.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/partna/openapi.yaml"
  },
  {
    "name": "Partna",
    "numberOfMethods": 33,
    "categories": [
      "developer_tools",
      "finance",
      "payments",
      "africa"
    ],
    "index": "partna/java",
    "language": "Java",
    "link": "/sdk/partna/java/",
    "developerDocumentation": "docs.getpartna.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/partna/openapi.yaml"
  }
];

export default function Partna() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Partna"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/partna/favicon.png"
      sdks={sdks}
      homepage="getpartna.com/"
      companyKebabCase="partna"
      categories={allCategories}
      metaDescription={`Modern companies use Partna's API and B2B payment tools to smoothly launch and operate in Africa`}
    />
  )
}