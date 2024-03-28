import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BlueSnap",
    "numberOfMethods": 32,
    "categories": [
      "payments",
      "embedded_payments",
      "global_payments"
    ],
    "index": "blue-snap/typescript",
    "language": "TypeScript",
    "link": "/sdk/blue-snap/typescript/",
    "developerDocumentation": "developers.bluesnap.com/v8976-JSON/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluesnap/openapi.yaml"
  },
  {
    "name": "BlueSnap",
    "numberOfMethods": 32,
    "categories": [
      "payments",
      "embedded_payments",
      "global_payments"
    ],
    "index": "blue-snap/python",
    "language": "Python",
    "link": "/sdk/blue-snap/python/",
    "developerDocumentation": "developers.bluesnap.com/v8976-JSON/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluesnap/openapi.yaml"
  },
  {
    "name": "BlueSnap",
    "numberOfMethods": 32,
    "categories": [
      "payments",
      "embedded_payments",
      "global_payments"
    ],
    "index": "blue-snap/java",
    "language": "Java",
    "link": "/sdk/blue-snap/java/",
    "developerDocumentation": "developers.bluesnap.com/v8976-JSON/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bluesnap/openapi.yaml"
  }
];

export default function BlueSnap() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BlueSnap"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bluesnap/favicon.png"
      sdks={sdks}
      homepage="www.bluesnap.com/"
      companyKebabCase="blue-snap"
      categories={allCategories}
      metaDescription={`At BlueSnap, we look at payments a little differently. Our Payment Orchestration Platform helps businesses accept payments globally and is designed to increase revenue and reduces costs. We provide a comprehensive back-end solutions that simplifies the complexity of payments, managing the full process from start to finish.

BlueSnap supports payments through multiple sales channels such as online and mobile sales, marketplaces, subscriptions, invoice payments and manual orders through a virtual terminal. And for businesses looking for embedded payments, we offer white-labeled payments for platforms with automated underwriting and onboarding that supports marketplaces and split payments.

And with one integration and contract, businesses can sell in over 200 geographies with access to local acquiring in 47 countries, 110+ currencies and 100+ global payment types, including popular eWallets, automated accounts receivable, world-class fraud protection and chargeback management, built-in solutions for regulation and tax compliance, and unified global reporting to help businesses grow.

With a US headquarters in Waltham, MA, and EU headquarters in Dublin, Ireland, BlueSnap is backed by world-class private equity investors including Great Hill Partners and Parthenon Capital Partners.

Learn more at BlueSnap.com`}
    />
  )
}