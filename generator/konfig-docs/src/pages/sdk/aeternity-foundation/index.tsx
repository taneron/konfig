import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Aeternity Foundation",
    "numberOfMethods": 70,
    "categories": [
      "blockchain",
      "cryptocurrency"
    ],
    "index": "aeternity-foundation/typescript",
    "language": "TypeScript",
    "link": "/sdk/aeternity-foundation/typescript/",
    "developerDocumentation": "api-docs.aeternity.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/aeternity-foundation/openapi.yaml"
  },
  {
    "name": "Aeternity Foundation",
    "numberOfMethods": 70,
    "categories": [
      "blockchain",
      "cryptocurrency"
    ],
    "index": "aeternity-foundation/python",
    "language": "Python",
    "link": "/sdk/aeternity-foundation/python/",
    "developerDocumentation": "api-docs.aeternity.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/aeternity-foundation/openapi.yaml"
  },
  {
    "name": "Aeternity Foundation",
    "numberOfMethods": 70,
    "categories": [
      "blockchain",
      "cryptocurrency"
    ],
    "index": "aeternity-foundation/java",
    "language": "Java",
    "link": "/sdk/aeternity-foundation/java/",
    "developerDocumentation": "api-docs.aeternity.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/aeternity-foundation/openapi.yaml"
  }
];

export default function AeternityFoundation() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Aeternity Foundation"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/aeternity-foundation/favicon.png"
      sdks={sdks}
      homepage="aeternity.com/"
      companyKebabCase="aeternity-foundation"
      categories={allCategories}
      metaDescription={`The Aeternity Foundation's mission is to support the future of the æternity blockchain ecosystem through targeted grants, strategic partnerships, and dedicated events. The commitment to advancing blockchain technology is realized by empowering a network of developers and creators, backed by the Foundation's support and collaborative ventures.

Follow us as we highlight the achievements within the æternity ecosystem, from cutting-edge projects to the strategic alliances that broaden our horizons. Discover how the Aeternity Foundation is not just pioneering blockchain solutions but actively supporting the creativity and innovation of its community, leveraging the advanced capabilities of æternity to set new standards in the industry.`}
    />
  )
}