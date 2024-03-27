import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ConnexPay",
    "numberOfMethods": 59,
    "categories": [
      "financial_services",
      "online_payments",
      "fintech",
      "payments",
      "payment_services"
    ],
    "index": "connex-pay/typescript",
    "language": "TypeScript",
    "link": "/sdk/connex-pay/typescript/",
    "developerDocumentation": "docs.connexpay.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/connexpay/openapi.yaml"
  },
  {
    "name": "ConnexPay",
    "numberOfMethods": 59,
    "categories": [
      "financial_services",
      "online_payments",
      "fintech",
      "payments",
      "payment_services"
    ],
    "index": "connex-pay/python",
    "language": "Python",
    "link": "/sdk/connex-pay/python/",
    "developerDocumentation": "docs.connexpay.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/connexpay/openapi.yaml"
  },
  {
    "name": "ConnexPay",
    "numberOfMethods": 59,
    "categories": [
      "financial_services",
      "online_payments",
      "fintech",
      "payments",
      "payment_services"
    ],
    "index": "connex-pay/java",
    "language": "Java",
    "link": "/sdk/connex-pay/java/",
    "developerDocumentation": "docs.connexpay.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/connexpay/openapi.yaml"
  }
];

export default function ConnexPay() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ConnexPay"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/connexpay/favicon.png"
      sdks={sdks}
      homepage="connexpay.com/"
      companyKebabCase="connex-pay"
      categories={allCategories}
      metaDescription={`ConnexPay is the first and only company to bring together the two sides of the payment process—payments acceptance and virtual payments issuing—into a single platform with one contract and one reconciliation.

The flexibility of this technology allows clients to adopt the full end-to-end acquiring and issuing solution or leverage ConnexPay's innovative intelligent routing issuing-only platform.

Through innovative and patent-pending payments technology, ConnexPay provides reduced payments risk, a new source of revenue, automated reconciliation, and guaranteed lower merchant processing fees—all while avoiding large lines of credit or prepayments.

Founded in 2017, ConnexPay is a leading payments provider for travel agencies and brokers, ecommerce providers, online marketplaces, and more.`}
    />
  )
}