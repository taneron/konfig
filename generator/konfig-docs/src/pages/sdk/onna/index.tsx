import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Onna",
    "numberOfMethods": 29,
    "categories": [
      "data_management",
      "processing",
      "data_integration",
      "unstructured_data"
    ],
    "index": "onna/typescript",
    "language": "TypeScript",
    "link": "/sdk/onna/typescript/",
    "developerDocumentation": "dev.onna.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onna/openapi.yaml"
  },
  {
    "name": "Onna",
    "numberOfMethods": 29,
    "categories": [
      "data_management",
      "processing",
      "data_integration",
      "unstructured_data"
    ],
    "index": "onna/python",
    "language": "Python",
    "link": "/sdk/onna/python/",
    "developerDocumentation": "dev.onna.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onna/openapi.yaml"
  },
  {
    "name": "Onna",
    "numberOfMethods": 29,
    "categories": [
      "data_management",
      "processing",
      "data_integration",
      "unstructured_data"
    ],
    "index": "onna/java",
    "language": "Java",
    "link": "/sdk/onna/java/",
    "developerDocumentation": "dev.onna.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onna/openapi.yaml"
  }
];

export default function Onna() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Onna"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onna/favicon.png"
      sdks={sdks}
      homepage="onna.com/"
      companyKebabCase="onna"
      categories={allCategories}
      metaDescription={`Onna enables enterprises to quickly gain business value from their unstructured data. Onna's Data Management Platform provides a central workflow that spans across today's workplace applications like Slack, Google Workspace, Microsoft 365, and more, producing a unified set of actionable data. By connecting and unifying disparate data sources, legal and IT teams enhance key use cases like eDiscovery, internal investigations, and information governance. With teams across North America and Europe, Onna supports some of the world's leading companies, including Dropbox, Electronic Arts, Lyft, Carvana, and NewsCorp.
For more information, please visit us at www.onna.com.`}
    />
  )
}