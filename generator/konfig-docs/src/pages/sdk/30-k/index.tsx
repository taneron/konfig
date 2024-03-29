import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Milefy",
    "numberOfMethods": 18,
    "categories": [
      "travel_expenses",
      "online_travel",
      "air_travel_loyalty_programs"
    ],
    "index": "milefy/typescript",
    "language": "TypeScript",
    "link": "/sdk/30-k/milefy/typescript/",
    "developerDocumentation": "milefy-api-docs.30k.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/30-k/milefy/openapi.yaml"
  },
  {
    "name": "Milefy",
    "numberOfMethods": 18,
    "categories": [
      "travel_expenses",
      "online_travel",
      "air_travel_loyalty_programs"
    ],
    "index": "milefy/python",
    "language": "Python",
    "link": "/sdk/30-k/milefy/python/",
    "developerDocumentation": "milefy-api-docs.30k.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/30-k/milefy/openapi.yaml"
  },
  {
    "name": "Milefy",
    "numberOfMethods": 18,
    "categories": [
      "travel_expenses",
      "online_travel",
      "air_travel_loyalty_programs"
    ],
    "index": "milefy/java",
    "language": "Java",
    "link": "/sdk/30-k/milefy/java/",
    "developerDocumentation": "milefy-api-docs.30k.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/30-k/milefy/openapi.yaml"
  }
];

export default function Sdk30K() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="30K"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/30-k/milefy/favicon.png"
      sdks={sdks}
      homepage="30k.com"
      companyKebabCase="30-k"
      categories={allCategories}
      metaDescription={`30K is the only remaining independent provider of Fare Attribute and the only credible provider of Mileage Earning and Frequent Flyer Benefit data to help personalize flight search results for air travel shoppers. Proven increase in conversion for air travel retailers and happiness for travelers.

- Reaching 2.3 M users per day, mainly in Europe, China and USA.
- Voted "Best Business Travel Innovation" by GBTA in 2017.
- One of top companies to watch in 2019 according to Amadeus.`}
    />
  )
}