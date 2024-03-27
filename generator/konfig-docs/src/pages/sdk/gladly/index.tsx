import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Gladly",
    "numberOfMethods": 68,
    "categories": [
      "customer_communication",
      "customer_support",
      "communication",
      "support"
    ],
    "index": "gladly/typescript",
    "language": "TypeScript",
    "link": "/sdk/gladly/typescript/",
    "developerDocumentation": "developer.gladly.com/rest/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gladly/openapi.yaml"
  },
  {
    "name": "Gladly",
    "numberOfMethods": 68,
    "categories": [
      "customer_communication",
      "customer_support",
      "communication",
      "support"
    ],
    "index": "gladly/python",
    "language": "Python",
    "link": "/sdk/gladly/python/",
    "developerDocumentation": "developer.gladly.com/rest/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gladly/openapi.yaml"
  },
  {
    "name": "Gladly",
    "numberOfMethods": 68,
    "categories": [
      "customer_communication",
      "customer_support",
      "communication",
      "support"
    ],
    "index": "gladly/java",
    "language": "Java",
    "link": "/sdk/gladly/java/",
    "developerDocumentation": "developer.gladly.com/rest/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gladly/openapi.yaml"
  }
];

export default function Gladly() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Gladly"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gladly/favicon.png"
      sdks={sdks}
      homepage="gladly.com"
      companyKebabCase="gladly"
      categories={allCategories}
      metaDescription={`Gladly is the only customer service software built around people, not tickets.

AI is revolutionizing how we work and communicate. Consumer expectations of how they're known and treated by brands has never been greater. At the same time brands are under pressure to do more with less and must balance the tension between saving money with AI and automation, while still delivering world-class experiences for consumers. The right experiences create connection, loyalty and customer lifetime value.

Customer service software built on tickets fails to navigate this tension. And brands who rely on ticketing software are failing in this new economy. Bloated tech stacks. Duplicate tickets. Consumer repetition and frustration. Fumbling and flustered agents. Two bad service experiences will lose a customer for life.

Gladly applies AI differently, to help commerce brands deliver radically personal, concierge-level customer service at scale. With Gladly, consumers help themselves when they want and customer service agents are made into superheroes, gaining efficiency and productivity. Every conversation in Gladly starts with a real-time understanding of the customer -- who they are, their preferences, their conversation and purchase history with the brand, every interaction in one place. And with every channel built-in natively - VOICE, email, SMS, chat, social messaging, self-service – brands have one, lifelong conversation stream with their customers.

Gladly's customers are the world's most loved brands -- Allbirds, Bombas, Crate & Barrel, Deckers, Eddie Bauer, FTD, Nordstrom, REI, Ulta Beauty, and Warby Parker. These brands and hundreds more leverage Gladly to build lifelong loyal customers through deep connections.

Make customer service your business with Gladly.`}
    />
  )
}