import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Ashby",
    "numberOfMethods": 89,
    "categories": [
      "recruitment"
    ],
    "index": "ashby/typescript",
    "language": "TypeScript",
    "link": "/sdk/ashby/typescript/",
    "developerDocumentation": "developers.ashbyhq.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ashby/openapi.yaml"
  },
  {
    "name": "Ashby",
    "numberOfMethods": 89,
    "categories": [
      "recruitment"
    ],
    "index": "ashby/python",
    "language": "Python",
    "link": "/sdk/ashby/python/",
    "developerDocumentation": "developers.ashbyhq.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ashby/openapi.yaml"
  },
  {
    "name": "Ashby",
    "numberOfMethods": 89,
    "categories": [
      "recruitment"
    ],
    "index": "ashby/java",
    "language": "Java",
    "link": "/sdk/ashby/java/",
    "developerDocumentation": "developers.ashbyhq.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ashby/openapi.yaml"
  }
];

export default function Ashby() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Ashby"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ashby/favicon.png"
      sdks={sdks}
      homepage="ashbyhq.com"
      companyKebabCase="ashby"
      categories={allCategories}
      metaDescription={`Ashby is a California-based SaaS platform that provides solutions such as recruitment management and data analytics for enterprises.`}
    />
  )
}