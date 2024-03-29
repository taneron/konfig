import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Shippo",
    "numberOfMethods": 63,
    "categories": [
      "shipping_api",
      "multi_carrier",
      "logistics_provider",
      "shipping_integration"
    ],
    "index": "shippo/typescript",
    "language": "TypeScript",
    "link": "/sdk/shippo/typescript/",
    "developerDocumentation": "docs.goshippo.com/shippoapi/public-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shippo/openapi.yaml"
  },
  {
    "name": "Shippo",
    "numberOfMethods": 63,
    "categories": [
      "shipping_api",
      "multi_carrier",
      "logistics_provider",
      "shipping_integration"
    ],
    "index": "shippo/python",
    "language": "Python",
    "link": "/sdk/shippo/python/",
    "developerDocumentation": "docs.goshippo.com/shippoapi/public-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shippo/openapi.yaml"
  },
  {
    "name": "Shippo",
    "numberOfMethods": 63,
    "categories": [
      "shipping_api",
      "multi_carrier",
      "logistics_provider",
      "shipping_integration"
    ],
    "index": "shippo/java",
    "language": "Java",
    "link": "/sdk/shippo/java/",
    "developerDocumentation": "docs.goshippo.com/shippoapi/public-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shippo/openapi.yaml"
  }
];

export default function Shippo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Shippo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shippo/favicon.png"
      sdks={sdks}
      homepage="goshippo.com"
      companyKebabCase="shippo"
      categories={allCategories}
      metaDescription={`Shippo lowers the barriers to shipping for businesses around the world. As free and fast shipping becomes the norm, better access to shipping is a competitive advantage for businesses.

Through Shippo, ecommerce businesses, marketplaces, and platforms are able to connect to multiple shipping carriers around the world from one API and dashboard. Businesses can get shipping rates, print labels, automate international documents, track shipments, and facilitate returns. Internally, we think of Shippo as the building blocks of shipping.

Everyday we solve core operational problems for our users and businesses. We work hard to provide value and deliver quality results. We understand that our success is directly tied to the success of our customers.

Shippo is made up of a diverse set of individuals from around the world and across a variety backgrounds. Specifically, we look for culture and skill add from each person. We believe in self-directed growth, putting away our egos and rolling up our sleeves to get important work done everyday. If that sounds like you, join our team and help build the foundation of something great. https://goshippo.com/jobs/

Founded in 2013, we are a proud team of 200+ based out of San Francisco and Austin. Shippo's investors include Union Square Ventures, Uncork Capital, VersionOne Ventures, FundersClub and others.

Learn more about Shippo: https://goshippo.com/`}
    />
  )
}