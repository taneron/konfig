import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Peach Payments",
    "numberOfMethods": 21,
    "categories": [
      "payments",
      "africa",
      "financial_technology",
      "fintech",
      "e_commerce"
    ],
    "index": "peach-payments/typescript",
    "language": "TypeScript",
    "link": "/sdk/peach-payments/typescript/",
    "developerDocumentation": "developer.peachpayments.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peach-payments/openapi.yaml"
  },
  {
    "name": "Peach Payments",
    "numberOfMethods": 21,
    "categories": [
      "payments",
      "africa",
      "financial_technology",
      "fintech",
      "e_commerce"
    ],
    "index": "peach-payments/python",
    "language": "Python",
    "link": "/sdk/peach-payments/python/",
    "developerDocumentation": "developer.peachpayments.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peach-payments/openapi.yaml"
  },
  {
    "name": "Peach Payments",
    "numberOfMethods": 21,
    "categories": [
      "payments",
      "africa",
      "financial_technology",
      "fintech",
      "e_commerce"
    ],
    "index": "peach-payments/java",
    "language": "Java",
    "link": "/sdk/peach-payments/java/",
    "developerDocumentation": "developer.peachpayments.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peach-payments/openapi.yaml"
  }
];

export default function PeachPayments() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Peach Payments"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peach-payments/favicon.png"
      sdks={sdks}
      homepage="www.peachpayments.com/"
      companyKebabCase="peach-payments"
      categories={allCategories}
      metaDescription={`Peach Payments enables Simple, Seamless and Secure transactions for business and consumers in Africa. We provide our customers with all the tools and solutions they need to sell across any digital channel while ensuring a safe experience for them and their customers.

Customer service is a core part of our DNA and it is our mission to ensure that our customers are happy as they grow from their first transaction past their millionth

Peach Payments currently powers businesses in South Africa, Kenya and Mauritius.`}
    />
  )
}