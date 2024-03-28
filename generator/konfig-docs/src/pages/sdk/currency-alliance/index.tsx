import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Currency Alliance",
    "numberOfMethods": 60,
    "categories": [
      "loyalty_programs",
      "loyalty_partners",
      "loyalty_partner_management",
      "loyalty_platform"
    ],
    "index": "currency-alliance/typescript",
    "language": "TypeScript",
    "link": "/sdk/currency-alliance/typescript/",
    "developerDocumentation": "api.currencyalliance.com/api-docs/v3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/currency-alliance/openapi.yaml"
  },
  {
    "name": "Currency Alliance",
    "numberOfMethods": 60,
    "categories": [
      "loyalty_programs",
      "loyalty_partners",
      "loyalty_partner_management",
      "loyalty_platform"
    ],
    "index": "currency-alliance/python",
    "language": "Python",
    "link": "/sdk/currency-alliance/python/",
    "developerDocumentation": "api.currencyalliance.com/api-docs/v3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/currency-alliance/openapi.yaml"
  },
  {
    "name": "Currency Alliance",
    "numberOfMethods": 60,
    "categories": [
      "loyalty_programs",
      "loyalty_partners",
      "loyalty_partner_management",
      "loyalty_platform"
    ],
    "index": "currency-alliance/java",
    "language": "Java",
    "link": "/sdk/currency-alliance/java/",
    "developerDocumentation": "api.currencyalliance.com/api-docs/v3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/currency-alliance/openapi.yaml"
  }
];

export default function CurrencyAlliance() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Currency Alliance"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/currency-alliance/favicon.png"
      sdks={sdks}
      homepage="www.currencyalliance.com/"
      companyKebabCase="currency-alliance"
      categories={allCategories}
      metaDescription={`Loyalty programs once worked miracles for customer engagement.

But with a dizzying range of disjointed loyalty schemes from countless brands, the majority of customers now rarely earn enough points with any one brand to put them to good use.

So, at the start of 2015, our team set out to create a new global loyalty ecosystem.

We're helping customers and brands alike discover the elusive customer loyalty that had become lost among less frequent customers.

We are accelerating the customer's journey to rewards by making it easier for them to earn and spend points with a wider range of brands.

Brands, meanwhile, benefit from the insights of a larger network, and the tools needed to enable better experiences for their most loyal customers.

And, more importantly, our partners can discover those less frequent customers who - with the right incentives - can become loyal advocates.`}
    />
  )
}