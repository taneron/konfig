import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Rivery",
    "numberOfMethods": 57,
    "categories": [
      "data_transformation",
      "data_sync"
    ],
    "index": "rivery/typescript",
    "language": "TypeScript",
    "link": "/sdk/rivery/typescript/",
    "developerDocumentation": "api.rivery.io/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rivery/openapi.yaml"
  },
  {
    "name": "Rivery",
    "numberOfMethods": 57,
    "categories": [
      "data_transformation",
      "data_sync"
    ],
    "index": "rivery/python",
    "language": "Python",
    "link": "/sdk/rivery/python/",
    "developerDocumentation": "api.rivery.io/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rivery/openapi.yaml"
  },
  {
    "name": "Rivery",
    "numberOfMethods": 57,
    "categories": [
      "data_transformation",
      "data_sync"
    ],
    "index": "rivery/java",
    "language": "Java",
    "link": "/sdk/rivery/java/",
    "developerDocumentation": "api.rivery.io/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rivery/openapi.yaml"
  }
];

export default function Rivery() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Rivery"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rivery/favicon.png"
      sdks={sdks}
      homepage="rivery.io"
      companyKebabCase="rivery"
      categories={allCategories}
      metaDescription={`Whether you're building out your data stack or transitioning to the cloud, managing your data workflows to analyze your business can be a real challenge.

Developing an in-house solution requires valuable resources and upkeep, while integrating several tools adds new layers of complexity.

Rivery's SaaS platform provides a fully-managed solution for data ingestion, data transformation, data orchestration, reverse ETL and more, with built-in support for your data operations development and deployment lifecycles.

Designed to be nimble for non-technical users and with advanced capabilities for experts, Rivery enables you to manage data workflows as the foundation of a modern data stack.

If you're looking to accelerate your time to value, get in touch today.`}
    />
  )
}