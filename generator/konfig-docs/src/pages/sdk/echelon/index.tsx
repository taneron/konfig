import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Echelon",
    "numberOfMethods": 16,
    "categories": [
      "global_payments",
      "fintech",
      "online_payments",
      "financial_services"
    ],
    "index": "echelon/typescript",
    "language": "TypeScript",
    "link": "/sdk/echelon/typescript/",
    "developerDocumentation": "developers.echelonpay.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/echelon/openapi.yaml"
  },
  {
    "name": "Echelon",
    "numberOfMethods": 16,
    "categories": [
      "global_payments",
      "fintech",
      "online_payments",
      "financial_services"
    ],
    "index": "echelon/python",
    "language": "Python",
    "link": "/sdk/echelon/python/",
    "developerDocumentation": "developers.echelonpay.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/echelon/openapi.yaml"
  },
  {
    "name": "Echelon",
    "numberOfMethods": 16,
    "categories": [
      "global_payments",
      "fintech",
      "online_payments",
      "financial_services"
    ],
    "index": "echelon/java",
    "language": "Java",
    "link": "/sdk/echelon/java/",
    "developerDocumentation": "developers.echelonpay.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/echelon/openapi.yaml"
  }
];

export default function Echelon() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Echelon"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/echelon/favicon.png"
      sdks={sdks}
      homepage="www.echelonpro.io/"
      companyKebabCase="echelon"
      categories={allCategories}
      metaDescription={`Echelon solutions simplify your payment process, and offer a wide range of features & services to help your business run smoothly.
With our cutting edge technology, global coverage, our alternative solutions - we will connect your business with over 1 billion consumers across Asia.
Echelon offers you an All-In-One API integration, giving your clients access to their preferred local payment method that's also available in their native language.
Offering your business a wide range of services from payments, settlements that are both local and international, international remittance and more, Echelon is your one stop shop for all things payments.
We are here to bring you one step closer to expanding your business in East and South Asia.`}
    />
  )
}