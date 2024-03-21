import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Dots",
    "numberOfMethods": 64,
    "categories": [
      "payouts",
      "marketplace",
      "payments",
      "ecommerce",
      "onboarding",
      "kyc",
      "money_movement",
      "disbursements",
      "payables"
    ],
    "index": "dots/typescript",
    "language": "TypeScript",
    "link": "/sdk/dots/typescript/",
    "developerDocumentation": "docs.dots.dev/overview/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dots/openapi.yaml"
  },
  {
    "name": "Dots",
    "numberOfMethods": 64,
    "categories": [
      "payouts",
      "marketplace",
      "payments",
      "ecommerce",
      "onboarding",
      "kyc",
      "money_movement",
      "disbursements",
      "payables"
    ],
    "index": "dots/python",
    "language": "Python",
    "link": "/sdk/dots/python/",
    "developerDocumentation": "docs.dots.dev/overview/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dots/openapi.yaml"
  },
  {
    "name": "Dots",
    "numberOfMethods": 64,
    "categories": [
      "payouts",
      "marketplace",
      "payments",
      "ecommerce",
      "onboarding",
      "kyc",
      "money_movement",
      "disbursements",
      "payables"
    ],
    "index": "dots/java",
    "language": "Java",
    "link": "/sdk/dots/java/",
    "developerDocumentation": "docs.dots.dev/overview/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dots/openapi.yaml"
  }
];

export default function Dots() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Dots"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dots/favicon.png"
      sdks={sdks}
      homepage="dots.dev"
      companyKebabCase="dots"
      categories={allCategories}
      metaDescription={`Dots is building a multichannel payouts API for marketplaces. Our API lets a marketplace pay their sellers in the ways they want to be paid, including Venmo, Paypal, ACH and Zelle. As more Americans earn a living by becoming a 1099 worker, marketplaces need to provide flexible payout options and we make supporting these payouts easy through a single API.`}
    />
  )
}