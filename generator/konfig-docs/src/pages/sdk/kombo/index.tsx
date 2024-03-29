import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Kombo",
    "numberOfMethods": 54,
    "categories": [
      "integrations",
      "ats",
      "hris",
      "payroll"
    ],
    "index": "kombo/typescript",
    "language": "TypeScript",
    "link": "/sdk/kombo/typescript/",
    "developerDocumentation": "docs.kombo.dev",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kombo/openapi.yaml"
  },
  {
    "name": "Kombo",
    "numberOfMethods": 54,
    "categories": [
      "integrations",
      "ats",
      "hris",
      "payroll"
    ],
    "index": "kombo/python",
    "language": "Python",
    "link": "/sdk/kombo/python/",
    "developerDocumentation": "docs.kombo.dev",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kombo/openapi.yaml"
  },
  {
    "name": "Kombo",
    "numberOfMethods": 54,
    "categories": [
      "integrations",
      "ats",
      "hris",
      "payroll"
    ],
    "index": "kombo/java",
    "language": "Java",
    "link": "/sdk/kombo/java/",
    "developerDocumentation": "docs.kombo.dev",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kombo/openapi.yaml"
  }
];

export default function Kombo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Kombo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kombo/favicon.png"
      sdks={sdks}
      homepage="kombo.dev"
      companyKebabCase="kombo"
      categories={allCategories}
      metaDescription={`Kombo is changing how B2B SaaS companies provide HR integrations to their customers. Instead of having to build and maintain many APIs themselves, Kombos customers can integrate with Kombo's API once and offer dozens of APIs to their customers instantly.`}
    />
  )
}