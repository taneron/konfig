import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Wallester",
    "numberOfMethods": 248,
    "categories": [
      "card_issuing"
    ],
    "index": "wallester/typescript",
    "language": "TypeScript",
    "link": "/sdk/wallester/typescript/",
    "developerDocumentation": "api-doc.wallester.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wallester/openapi.yaml"
  },
  {
    "name": "Wallester",
    "numberOfMethods": 248,
    "categories": [
      "card_issuing"
    ],
    "index": "wallester/python",
    "language": "Python",
    "link": "/sdk/wallester/python/",
    "developerDocumentation": "api-doc.wallester.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wallester/openapi.yaml"
  },
  {
    "name": "Wallester",
    "numberOfMethods": 248,
    "categories": [
      "card_issuing"
    ],
    "index": "wallester/java",
    "language": "Java",
    "link": "/sdk/wallester/java/",
    "developerDocumentation": "api-doc.wallester.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wallester/openapi.yaml"
  }
];

export default function Wallester() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Wallester"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wallester/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wallester/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wallester/favicon.png"
      sdks={sdks}
      homepage="wallester.com"
      companyKebabCase="wallester"
      categories={allCategories}
      metaDescription={`Wallester is a Licensed white label VISA Card issuer and the payment institution specializing in offering transaction processing services on an "all-in-one" model. Various types of businesses can benefit from a wide range of diversified solutions and individual approaches that are offered. Be it debit, credit, virtual or loyalty cards, our modern API platform simplifies traditional card processing methods, allowing businesses to launch and integrate their latest card products in no time!`}
    />
  )
}