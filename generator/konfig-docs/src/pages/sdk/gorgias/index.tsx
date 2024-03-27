import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Gorgias",
    "numberOfMethods": 101,
    "categories": [
      "communication",
      "customer_operations",
      "support"
    ],
    "index": "gorgias/typescript",
    "language": "TypeScript",
    "link": "/sdk/gorgias/typescript/",
    "developerDocumentation": "developers.gorgias.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gorgias/openapi.yaml"
  },
  {
    "name": "Gorgias",
    "numberOfMethods": 101,
    "categories": [
      "communication",
      "customer_operations",
      "support"
    ],
    "index": "gorgias/python",
    "language": "Python",
    "link": "/sdk/gorgias/python/",
    "developerDocumentation": "developers.gorgias.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gorgias/openapi.yaml"
  },
  {
    "name": "Gorgias",
    "numberOfMethods": 101,
    "categories": [
      "communication",
      "customer_operations",
      "support"
    ],
    "index": "gorgias/java",
    "language": "Java",
    "link": "/sdk/gorgias/java/",
    "developerDocumentation": "developers.gorgias.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gorgias/openapi.yaml"
  }
];

export default function Gorgias() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Gorgias"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gorgias/favicon.png"
      sdks={sdks}
      homepage="gorgias.com"
      companyKebabCase="gorgias"
      categories={allCategories}
      metaDescription={`Gorgias is a one-of-a-kind customer service platform specifically designed for ecommerce businesses to deliver effortless customer service at every stage of growth. With cutting-edge automation and AI capabilities, Gorgias revolutionizes how online stores interact with their customers by providing efficient and personalized support across email, voice, SMS, live chat, and social media channels.

Founded in 2015, Gorgias began as a two-person team and has grown to more than 250 employees and nine offices in San Francisco, New York, Charlotte, Toronto, Belgrade, Buenos Aires, Paris, Lisbon, and Sydney. As a certified B Corporation, Gorgias is proud to be a leader in sustainable and equitable workplace practices.

Today, Gorgias serves 13,000+ merchants in the ecommerce space, including Steve Madden, Glossier, BrüMate, and TUSHY.`}
    />
  )
}