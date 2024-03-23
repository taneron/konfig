import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Pay.com",
    "numberOfMethods": 30,
    "categories": [
      "payments"
    ],
    "index": "pay-com/typescript",
    "language": "TypeScript",
    "link": "/sdk/pay-com/typescript/",
    "developerDocumentation": "pay.com/docs/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pay-com/openapi.yaml"
  },
  {
    "name": "Pay.com",
    "numberOfMethods": 30,
    "categories": [
      "payments"
    ],
    "index": "pay-com/python",
    "language": "Python",
    "link": "/sdk/pay-com/python/",
    "developerDocumentation": "pay.com/docs/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pay-com/openapi.yaml"
  },
  {
    "name": "Pay.com",
    "numberOfMethods": 30,
    "categories": [
      "payments"
    ],
    "index": "pay-com/java",
    "language": "Java",
    "link": "/sdk/pay-com/java/",
    "developerDocumentation": "pay.com/docs/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pay-com/openapi.yaml"
  }
];

export default function PayCom() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Pay.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pay-com/favicon.png"
      sdks={sdks}
      homepage="pay.com"
      companyKebabCase="pay-com"
      categories={allCategories}
      metaDescription={`Our mission at Pay.com is to create an all-inclusive economy.
We help big entrepreneurs to move big payments. And micro-merchants to realize their biggest dreams.


The company was launched in 2020 and is currently expanding with 5 global offices offering top-tier customer service. Find out more at www.Pay.com.`}
    />
  )
}