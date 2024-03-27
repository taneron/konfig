import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Data",
    "numberOfMethods": 29,
    "categories": [
      "hr",
      "payroll",
      "talent"
    ],
    "index": "data/typescript",
    "language": "TypeScript",
    "link": "/sdk/personio/data/typescript/",
    "developerDocumentation": "developer.personio.de/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/personio/data/openapi.yaml"
  },
  {
    "name": "Data",
    "numberOfMethods": 29,
    "categories": [
      "hr",
      "payroll",
      "talent"
    ],
    "index": "data/python",
    "language": "Python",
    "link": "/sdk/personio/data/python/",
    "developerDocumentation": "developer.personio.de/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/personio/data/openapi.yaml"
  },
  {
    "name": "Data",
    "numberOfMethods": 29,
    "categories": [
      "hr",
      "payroll",
      "talent"
    ],
    "index": "data/java",
    "language": "Java",
    "link": "/sdk/personio/data/java/",
    "developerDocumentation": "developer.personio.de/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/personio/data/openapi.yaml"
  }
];

export default function Personio() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Personio"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/personio/data/favicon.png"
      sdks={sdks}
      homepage="personio.com"
      companyKebabCase="personio"
      categories={allCategories}
      metaDescription={`Personio's all-in-one software makes HR processes as efficient and effective as possible so organizations can focus on what matters: people.`}
    />
  )
}