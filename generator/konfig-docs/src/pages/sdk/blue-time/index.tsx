import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BlueTime",
    "numberOfMethods": 43,
    "categories": [
      "payments",
      "financial_services",
      "fintech",
      "online_payments"
    ],
    "index": "blue-time/typescript",
    "language": "TypeScript",
    "link": "/sdk/blue-time/typescript/",
    "developerDocumentation": "developers.bluetime.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluetime/openapi.yaml"
  },
  {
    "name": "BlueTime",
    "numberOfMethods": 43,
    "categories": [
      "payments",
      "financial_services",
      "fintech",
      "online_payments"
    ],
    "index": "blue-time/python",
    "language": "Python",
    "link": "/sdk/blue-time/python/",
    "developerDocumentation": "developers.bluetime.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluetime/openapi.yaml"
  },
  {
    "name": "BlueTime",
    "numberOfMethods": 43,
    "categories": [
      "payments",
      "financial_services",
      "fintech",
      "online_payments"
    ],
    "index": "blue-time/java",
    "language": "Java",
    "link": "/sdk/blue-time/java/",
    "developerDocumentation": "developers.bluetime.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluetime/openapi.yaml"
  }
];

export default function BlueTime() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BlueTime"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluetime/favicon.png"
      sdks={sdks}
      homepage="bluetime.io/"
      companyKebabCase="blue-time"
      categories={allCategories}
      metaDescription={`Don’t stress over integrating with multiple providers to fulfill your payment needs – Unify your payment processes effortlessly with Orchestra’s comprehensive Payment Orchestration Platform. By integrating once, you gain access to a powerful, all-encompassing, yet simple-to-integrate API that streamlines complex payment procedures, saving you time and resources.`}
    />
  )
}