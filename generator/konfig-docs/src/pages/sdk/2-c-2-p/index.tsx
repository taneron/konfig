import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "2C2P",
    "numberOfMethods": 22,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech"
    ],
    "index": "2-c-2-p/typescript",
    "language": "TypeScript",
    "link": "/sdk/2-c-2-p/typescript/",
    "developerDocumentation": "developer.2c2p.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/2-c-2-p/openapi.yaml"
  },
  {
    "name": "2C2P",
    "numberOfMethods": 22,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech"
    ],
    "index": "2-c-2-p/python",
    "language": "Python",
    "link": "/sdk/2-c-2-p/python/",
    "developerDocumentation": "developer.2c2p.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/2-c-2-p/openapi.yaml"
  },
  {
    "name": "2C2P",
    "numberOfMethods": 22,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech"
    ],
    "index": "2-c-2-p/java",
    "language": "Java",
    "link": "/sdk/2-c-2-p/java/",
    "developerDocumentation": "developer.2c2p.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/2-c-2-p/openapi.yaml"
  }
];

export default function Sdk2C2P() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="2C2P"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/2-c-2-p/favicon.png"
      sdks={sdks}
      homepage="2c2p.com/"
      companyKebabCase="2-c-2-p"
      categories={allCategories}
      metaDescription={`2C2P is a global payments platform helping businesses securely accept payments across online, mobile and in-store channels. The company is headquartered in Singapore and operates across Southeast Asia, North Asia, Europe and the US. It is the preferred payments platform provider of regional airlines, travel companies and global retailers.`}
    />
  )
}