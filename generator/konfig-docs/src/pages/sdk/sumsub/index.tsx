import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Sumsub",
    "numberOfMethods": 81,
    "categories": [
      "security",
      "identity_and_access_management",
      "fraud_prevention",
      "identity_verification"
    ],
    "index": "sumsub/typescript",
    "language": "TypeScript",
    "link": "/sdk/sumsub/typescript/",
    "developerDocumentation": "docs.sumsub.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sumsub/openapi.yaml"
  },
  {
    "name": "Sumsub",
    "numberOfMethods": 81,
    "categories": [
      "security",
      "identity_and_access_management",
      "fraud_prevention",
      "identity_verification"
    ],
    "index": "sumsub/python",
    "language": "Python",
    "link": "/sdk/sumsub/python/",
    "developerDocumentation": "docs.sumsub.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sumsub/openapi.yaml"
  },
  {
    "name": "Sumsub",
    "numberOfMethods": 81,
    "categories": [
      "security",
      "identity_and_access_management",
      "fraud_prevention",
      "identity_verification"
    ],
    "index": "sumsub/java",
    "language": "Java",
    "link": "/sdk/sumsub/java/",
    "developerDocumentation": "docs.sumsub.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sumsub/openapi.yaml"
  }
];

export default function Sumsub() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Sumsub"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sumsub/favicon.png"
      sdks={sdks}
      homepage="sumsub.com/"
      companyKebabCase="sumsub"
      categories={allCategories}
      metaDescription={`Sumsub is the one verification platform to secure the whole user journey. With Sumsub's customizable KYC, KYB, transaction monitoring and fraud prevention solutions, you can orchestrate your verification process, welcome more customers worldwide, meet compliance requirements, reduce costs and protect your business.

Sumsub has over 2,000 clients in fintech, crypto, transportation, trading, e-commerce and gaming industries including Binance, Wirex, Avis, Bybit, Huobi, Unlimit, Flutter, Kaizen Gaming, and TransferGo.`}
    />
  )
}