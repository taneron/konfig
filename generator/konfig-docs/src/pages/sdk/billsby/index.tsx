import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Billsby",
    "numberOfMethods": 58,
    "categories": [
      "billing",
      "payments",
      "subscription_billing",
      "recurring_payments",
      "payment_services"
    ],
    "index": "billsby/typescript",
    "language": "TypeScript",
    "link": "/sdk/billsby/typescript/",
    "developerDocumentation": "support.billsby.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/billsby/openapi.yaml"
  },
  {
    "name": "Billsby",
    "numberOfMethods": 58,
    "categories": [
      "billing",
      "payments",
      "subscription_billing",
      "recurring_payments",
      "payment_services"
    ],
    "index": "billsby/python",
    "language": "Python",
    "link": "/sdk/billsby/python/",
    "developerDocumentation": "support.billsby.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/billsby/openapi.yaml"
  },
  {
    "name": "Billsby",
    "numberOfMethods": 58,
    "categories": [
      "billing",
      "payments",
      "subscription_billing",
      "recurring_payments",
      "payment_services"
    ],
    "index": "billsby/java",
    "language": "Java",
    "link": "/sdk/billsby/java/",
    "developerDocumentation": "support.billsby.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/billsby/openapi.yaml"
  }
];

export default function Billsby() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Billsby"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/billsby/favicon.png"
      sdks={sdks}
      homepage="www.billsby.com/"
      companyKebabCase="billsby"
      categories={allCategories}
      metaDescription={`Billsby is a feature-rich "Saas" recurring payment platform, ranked as the leading subscription billing software by G2.

Billsby is designed to ensure customers can go live quickly, often within 1-2 hours.  To help facilitate this process we have a team of friendly knowledgeable advisors ready to help your business go live.

Billsby specializes in providing great customer service at an affordable price point - our technology is rated No 1 on G2 by our customers.

If you are a developer creating a solution for your customer, Billsby has a friendly well-documented API.  The Billsby team are here to provide support to developers in order to ensure a smooth migration or new system build.

Why not book a call, talk through your Billing requirements and we can let you know how we can help you transform your business..`}
    />
  )
}