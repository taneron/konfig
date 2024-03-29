import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Secoda",
    "numberOfMethods": 104,
    "categories": [
      "data_management"
    ],
    "index": "secoda/typescript",
    "language": "TypeScript",
    "link": "/sdk/secoda/typescript/",
    "developerDocumentation": "docs.secoda.co/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/secoda/openapi.yaml"
  },
  {
    "name": "Secoda",
    "numberOfMethods": 104,
    "categories": [
      "data_management"
    ],
    "index": "secoda/python",
    "language": "Python",
    "link": "/sdk/secoda/python/",
    "developerDocumentation": "docs.secoda.co/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/secoda/openapi.yaml"
  },
  {
    "name": "Secoda",
    "numberOfMethods": 104,
    "categories": [
      "data_management"
    ],
    "index": "secoda/java",
    "language": "Java",
    "link": "/sdk/secoda/java/",
    "developerDocumentation": "docs.secoda.co/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/secoda/openapi.yaml"
  }
];

export default function Secoda() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Secoda"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/secoda/favicon.png"
      sdks={sdks}
      homepage="secoda.co"
      companyKebabCase="secoda"
      categories={allCategories}
      metaDescription={`The all-in-one data management platform. Secoda is the first AI powered data search, catalog, lineage, and monitoring platform to double your data team's efficiency.

Data teams at companies like Panasonic, Mode, and Vanta use Secoda to automate data discovery, documentation, and take the grunt-work out of their day.

By automatically ingesting the metadata across all of your data sources, Secoda makes it easy to make decisions from a single source of truth.

Built for users of the modern data stack, Secoda helps data teams take control of their data sprawl and reliably scale their tech stacks.

With Secoda, data teams save time and enable revenue teams with better data, faster.`}
    />
  )
}