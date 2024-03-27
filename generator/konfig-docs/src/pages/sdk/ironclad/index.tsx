import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Ironclad",
    "numberOfMethods": 41,
    "categories": [
      "digital_contracting_platform",
      "doc_management",
      "esigned_documents"
    ],
    "index": "ironclad/typescript",
    "language": "TypeScript",
    "link": "/sdk/ironclad/typescript/",
    "developerDocumentation": "developer.ironcladapp.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ironclad/openapi.yaml"
  },
  {
    "name": "Ironclad",
    "numberOfMethods": 41,
    "categories": [
      "digital_contracting_platform",
      "doc_management",
      "esigned_documents"
    ],
    "index": "ironclad/python",
    "language": "Python",
    "link": "/sdk/ironclad/python/",
    "developerDocumentation": "developer.ironcladapp.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ironclad/openapi.yaml"
  },
  {
    "name": "Ironclad",
    "numberOfMethods": 41,
    "categories": [
      "digital_contracting_platform",
      "doc_management",
      "esigned_documents"
    ],
    "index": "ironclad/java",
    "language": "Java",
    "link": "/sdk/ironclad/java/",
    "developerDocumentation": "developer.ironcladapp.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ironclad/openapi.yaml"
  }
];

export default function Ironclad() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Ironclad"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ironclad/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ironclad/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ironclad/favicon.png"
      sdks={sdks}
      homepage="ironcladapp.com"
      companyKebabCase="ironclad"
      categories={allCategories}
      metaDescription={`Ironclad is a California-based digital contracting platform that offers solutions such as data reporting and lifecycle management for sectors including legal and finance.`}
    />
  )
}