import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "LeafLink",
    "numberOfMethods": 105,
    "categories": [
      "ecommerce",
      "marketplaces",
      "wholesale",
      "cannabis"
    ],
    "index": "leaf-link/typescript",
    "language": "TypeScript",
    "link": "/sdk/leaf-link/typescript/",
    "developerDocumentation": "developer.leaflink.com/legacy/v2/api/ref/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/leaflink/openapi.yaml"
  },
  {
    "name": "LeafLink",
    "numberOfMethods": 105,
    "categories": [
      "ecommerce",
      "marketplaces",
      "wholesale",
      "cannabis"
    ],
    "index": "leaf-link/python",
    "language": "Python",
    "link": "/sdk/leaf-link/python/",
    "developerDocumentation": "developer.leaflink.com/legacy/v2/api/ref/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/leaflink/openapi.yaml"
  },
  {
    "name": "LeafLink",
    "numberOfMethods": 105,
    "categories": [
      "ecommerce",
      "marketplaces",
      "wholesale",
      "cannabis"
    ],
    "index": "leaf-link/java",
    "language": "Java",
    "link": "/sdk/leaf-link/java/",
    "developerDocumentation": "developer.leaflink.com/legacy/v2/api/ref/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/leaflink/openapi.yaml"
  }
];

export default function LeafLink() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="LeafLink"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/leaflink/favicon.png"
      sdks={sdks}
      homepage="www.leaflink.com/"
      companyKebabCase="leaf-link"
      categories={allCategories}
      metaDescription={`LeafLink is the industry's wholesale platform. Easily and efficiently sell, ship, pay, get paid, advertise and drive margin. LeafLink is live in 30 markets with over $5B in annual orders.`}
    />
  )
}