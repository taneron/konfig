import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Hypatos",
    "numberOfMethods": 34,
    "categories": [
      "machine_learning",
      "ai",
      "document_processing"
    ],
    "index": "hypatos/typescript",
    "language": "TypeScript",
    "link": "/sdk/hypatos/typescript/",
    "developerDocumentation": "hypatos.redoc.ly/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hypatos/openapi.yaml"
  },
  {
    "name": "Hypatos",
    "numberOfMethods": 34,
    "categories": [
      "machine_learning",
      "ai",
      "document_processing"
    ],
    "index": "hypatos/python",
    "language": "Python",
    "link": "/sdk/hypatos/python/",
    "developerDocumentation": "hypatos.redoc.ly/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hypatos/openapi.yaml"
  },
  {
    "name": "Hypatos",
    "numberOfMethods": 34,
    "categories": [
      "machine_learning",
      "ai",
      "document_processing"
    ],
    "index": "hypatos/java",
    "language": "Java",
    "link": "/sdk/hypatos/java/",
    "developerDocumentation": "hypatos.redoc.ly/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hypatos/openapi.yaml"
  }
];

export default function Hypatos() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Hypatos"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hypatos/favicon.png"
      sdks={sdks}
      homepage="hypatos.ai"
      companyKebabCase="hypatos"
      categories={allCategories}
      metaDescription={`Balancing humans and machines to accelerate business.

Hypatos adds value to critical business operations using third wave AI and advanced automation technologies for document processing. By replacing routine and complex tasks with intelligent solutions, we are unlocking human potential and reshaping the workplace. As AI agents manage administrative tasks efficiently, accurately and cost effectively, people focus on strategic decisions and designing innovative solutions to bring business to the next level.

Data Protection Policy:
https://www.hypatos.ai/privacy-policy`}
    />
  )
}