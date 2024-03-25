import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Tremendous",
    "numberOfMethods": 36,
    "categories": [
      "payments",
      "finance",
      "developer_tools",
      "payouts"
    ],
    "index": "tremendous/typescript",
    "language": "TypeScript",
    "link": "/sdk/tremendous/typescript/",
    "developerDocumentation": "developers.tremendous.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tremendous/openapi.yaml"
  },
  {
    "name": "Tremendous",
    "numberOfMethods": 36,
    "categories": [
      "payments",
      "finance",
      "developer_tools",
      "payouts"
    ],
    "index": "tremendous/python",
    "language": "Python",
    "link": "/sdk/tremendous/python/",
    "developerDocumentation": "developers.tremendous.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tremendous/openapi.yaml"
  },
  {
    "name": "Tremendous",
    "numberOfMethods": 36,
    "categories": [
      "payments",
      "finance",
      "developer_tools",
      "payouts"
    ],
    "index": "tremendous/java",
    "language": "Java",
    "link": "/sdk/tremendous/java/",
    "developerDocumentation": "developers.tremendous.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tremendous/openapi.yaml"
  }
];

export default function Tremendous() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Tremendous"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tremendous/favicon.png"
      sdks={sdks}
      homepage="www.tremendous.com/"
      companyKebabCase="tremendous"
      categories={allCategories}
      metaDescription={`Tremendous is the simplest way to send rewards and payouts around the world. We've helped businesses send over 10 million payouts globally. We handle everything related to international sending, so you can issue rewards to recipients in over 200 countries. And you can give them the gift of choice: we offer 1,000 different redemption options. Plus, we're free to use. You only spend what you send. And if you or your recipients ever hit a snag, our best-in-class customer support team has you covered.

We're 75 people, fully remote, highly profitable, and self-funded (yes, crazy, we know.) Even if you like your job, you'll probably be happier at Tremendous. Come work with us!`}
    />
  )
}