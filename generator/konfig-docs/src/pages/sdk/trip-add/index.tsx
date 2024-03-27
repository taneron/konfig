import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "TripAdd",
    "numberOfMethods": 5,
    "categories": [
      "ai",
      "travel_expenses",
      "marketplace"
    ],
    "index": "trip-add/typescript",
    "language": "TypeScript",
    "link": "/sdk/trip-add/typescript/",
    "developerDocumentation": "api.tripadd.com/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tripadd/openapi.yaml"
  },
  {
    "name": "TripAdd",
    "numberOfMethods": 5,
    "categories": [
      "ai",
      "travel_expenses",
      "marketplace"
    ],
    "index": "trip-add/python",
    "language": "Python",
    "link": "/sdk/trip-add/python/",
    "developerDocumentation": "api.tripadd.com/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tripadd/openapi.yaml"
  },
  {
    "name": "TripAdd",
    "numberOfMethods": 5,
    "categories": [
      "ai",
      "travel_expenses",
      "marketplace"
    ],
    "index": "trip-add/java",
    "language": "Java",
    "link": "/sdk/trip-add/java/",
    "developerDocumentation": "api.tripadd.com/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tripadd/openapi.yaml"
  }
];

export default function TripAdd() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="TripAdd"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tripadd/favicon.jpg"
      sdks={sdks}
      homepage="tripadd.com/"
      companyKebabCase="trip-add"
      categories={allCategories}
      metaDescription={`Tripadd is a global travel ancillary product marketplace powered by AI. 

Boost your sales with ancillary products from around the world. Seamlessly integrate thousands of products through a single API into your checkout path with personalization for every customer.

Sign up today at www.tripadd.com`}
    />
  )
}