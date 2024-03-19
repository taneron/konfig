import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Helcim",
    "numberOfMethods": 28,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "billing",
      "ecommerce",
      "payment_solutions"
    ],
    "index": "helcim/typescript",
    "language": "TypeScript",
    "link": "/sdk/helcim/typescript/",
    "developerDocumentation": "devdocs.helcim.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/helcim/openapi.yaml"
  },
  {
    "name": "Helcim",
    "numberOfMethods": 28,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "billing",
      "ecommerce",
      "payment_solutions"
    ],
    "index": "helcim/python",
    "language": "Python",
    "link": "/sdk/helcim/python/",
    "developerDocumentation": "devdocs.helcim.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/helcim/openapi.yaml"
  },
  {
    "name": "Helcim",
    "numberOfMethods": 28,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "billing",
      "ecommerce",
      "payment_solutions"
    ],
    "index": "helcim/java",
    "language": "Java",
    "link": "/sdk/helcim/java/",
    "developerDocumentation": "devdocs.helcim.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/helcim/openapi.yaml"
  }
];

export default function Helcim() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Helcim"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/helcim/favicon.png"
      sdks={sdks}
      homepage="www.helcim.com/"
      companyKebabCase="helcim"
      categories={allCategories}
      metaDescription={`Helcim provides Canadian & American businesses an opportunity to accept credit card payments at affordable & transparent rates. A wide range of online, ecommerce, cloud-based, mobile & retail payment platforms allows Helcim to offer a total payments solution. The lack of cancellation fees, no monthly minimums & the removal of long-term contracts have made Helcim the preferred choice for credit card processing.

It's the fair & transparent pricing structures that help Helcim build long-term relationships with each of our merchants, clients & partners.`}
    />
  )
}