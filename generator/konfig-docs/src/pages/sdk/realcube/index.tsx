import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Realcube",
    "numberOfMethods": 387,
    "categories": [
      "real_estate"
    ],
    "index": "realcube/typescript",
    "language": "TypeScript",
    "link": "/sdk/realcube/typescript/",
    "developerDocumentation": "docs.realcube.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/realcube/openapi.yaml"
  },
  {
    "name": "Realcube",
    "numberOfMethods": 387,
    "categories": [
      "real_estate"
    ],
    "index": "realcube/python",
    "language": "Python",
    "link": "/sdk/realcube/python/",
    "developerDocumentation": "docs.realcube.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/realcube/openapi.yaml"
  },
  {
    "name": "Realcube",
    "numberOfMethods": 387,
    "categories": [
      "real_estate"
    ],
    "index": "realcube/java",
    "language": "Java",
    "link": "/sdk/realcube/java/",
    "developerDocumentation": "docs.realcube.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/realcube/openapi.yaml"
  }
];

export default function Realcube() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Realcube"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/realcube/favicon.png"
      sdks={sdks}
      homepage="realcube.com"
      companyKebabCase="realcube"
      categories={allCategories}
      metaDescription={`Realcube is the cloud solution for smart and flexible digitilization in real estate management. Our API-first platform is here to revolutionize the real estate industry. It is a one-stop-shop for intelligent solutions which are adaptive to every client's individual needs.

Realcube's ecosystem offers a growing number of applications from our valuable and industry-leading partners which aggregate the customer's data. It is worth mentioning that we keep our customers' data privacy and well-being as our top priority.
At Realcube, we enable the real estate companies and their contractual partners to consolidate their data in our state-of-the-art platform. This creates a uniform database that gives access to asset managers and other management levels to all relevant information at all times, just a click away!

Have we grabbed your interest in our innovative solution for your real estate management?
Book a free demo today!

For more information feel free to visit our website or contact us at:
info@realcube.com`}
    />
  )
}