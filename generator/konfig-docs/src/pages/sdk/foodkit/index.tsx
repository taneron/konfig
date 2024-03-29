import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Foodkit",
    "numberOfMethods": 34,
    "categories": [
      "restaurant",
      "food_beverages"
    ],
    "index": "foodkit/typescript",
    "language": "TypeScript",
    "link": "/sdk/foodkit/typescript/",
    "developerDocumentation": "docs.foodkit.dev/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/foodkit/openapi.yaml"
  },
  {
    "name": "Foodkit",
    "numberOfMethods": 34,
    "categories": [
      "restaurant",
      "food_beverages"
    ],
    "index": "foodkit/python",
    "language": "Python",
    "link": "/sdk/foodkit/python/",
    "developerDocumentation": "docs.foodkit.dev/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/foodkit/openapi.yaml"
  },
  {
    "name": "Foodkit",
    "numberOfMethods": 34,
    "categories": [
      "restaurant",
      "food_beverages"
    ],
    "index": "foodkit/java",
    "language": "Java",
    "link": "/sdk/foodkit/java/",
    "developerDocumentation": "docs.foodkit.dev/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/foodkit/openapi.yaml"
  }
];

export default function Foodkit() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Foodkit"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/foodkit/favicon.png"
      sdks={sdks}
      homepage="foodkit.io"
      companyKebabCase="foodkit"
      categories={allCategories}
      metaDescription={`Foodkit is an end-to-end white-label restaurant platform, and API - Including iOS and Android e-commerce apps, websites and kiosks, enterprise customer service and CRM, delivery logistics optimization, omnichannel marketing and loyalty programs, POS integration and more.

One powerful platform, complete flexibility, less cost - so you can focus on growing your brand, instead of worrying about backend technology and code.

We believe in building exceptional technology,  empowering restaurants and removing the expense of building and maintaining complicated technology infrastructure.

WHY FOODKIT?
✔ We power the world's best restaurant brands from the cloud
✔ We provide a best-in-class platform and open API
✔ We eliminate the complexity and high costs associated with developing and maintaining a digital restaurant business
✔ We offer outstanding customer service 24/7

Contact us at:
✎ https://www.foodkit.io/`}
    />
  )
}