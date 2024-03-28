import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Notabene",
    "numberOfMethods": 115,
    "categories": [
      "fintech",
      "crypto",
      "financial_services",
      "crypto_platform"
    ],
    "index": "notabene/typescript",
    "language": "TypeScript",
    "link": "/sdk/notabene/typescript/",
    "developerDocumentation": "doc.notabene.id/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notabene/openapi.yaml"
  },
  {
    "name": "Notabene",
    "numberOfMethods": 115,
    "categories": [
      "fintech",
      "crypto",
      "financial_services",
      "crypto_platform"
    ],
    "index": "notabene/python",
    "language": "Python",
    "link": "/sdk/notabene/python/",
    "developerDocumentation": "doc.notabene.id/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notabene/openapi.yaml"
  },
  {
    "name": "Notabene",
    "numberOfMethods": 115,
    "categories": [
      "fintech",
      "crypto",
      "financial_services",
      "crypto_platform"
    ],
    "index": "notabene/java",
    "language": "Java",
    "link": "/sdk/notabene/java/",
    "developerDocumentation": "doc.notabene.id/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/notabene/openapi.yaml"
  }
];

export default function Notabene() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Notabene"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/notabene/favicon.png"
      sdks={sdks}
      homepage="notabene.id/"
      companyKebabCase="notabene"
      categories={allCategories}
      metaDescription={`Notabene's SafeTransact is an easy-to-use platform that empowers customers to identify and stop high-risk crypto activity before it occurs.`}
    />
  )
}