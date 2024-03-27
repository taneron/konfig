import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Zendesk",
    "numberOfMethods": 437,
    "categories": [
      "customer_service",
      "help_desks",
      "customer_support"
    ],
    "index": "zendesk/typescript",
    "language": "TypeScript",
    "link": "/sdk/zendesk/typescript/",
    "developerDocumentation": "developer.zendesk.com/api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zendesk/openapi.yaml"
  },
  {
    "name": "Zendesk",
    "numberOfMethods": 437,
    "categories": [
      "customer_service",
      "help_desks",
      "customer_support"
    ],
    "index": "zendesk/python",
    "language": "Python",
    "link": "/sdk/zendesk/python/",
    "developerDocumentation": "developer.zendesk.com/api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zendesk/openapi.yaml"
  },
  {
    "name": "Zendesk",
    "numberOfMethods": 437,
    "categories": [
      "customer_service",
      "help_desks",
      "customer_support"
    ],
    "index": "zendesk/java",
    "language": "Java",
    "link": "/sdk/zendesk/java/",
    "developerDocumentation": "developer.zendesk.com/api-reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/zendesk/openapi.yaml"
  }
];

export default function Zendesk() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Zendesk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/zendesk/favicon.png"
      sdks={sdks}
      homepage="zendesk.com"
      companyKebabCase="zendesk"
      categories={allCategories}
      metaDescription={`Zendesk started the customer experience revolution in 2007 by enabling any business around the world to take their customer service online. Today, Zendesk is the champion of great service everywhere for everyone, and powers billions of conversations, connecting more than 100,000 brands with hundreds of millions of customers over telephony, chat, email, messaging, social channels, communities, review sites and help centers. Zendesk products are built with love to be loved. The company was conceived in Copenhagen, Denmark, built and grown in California, taken public in New York City, and today employs more than 4,000 people across the world.`}
    />
  )
}