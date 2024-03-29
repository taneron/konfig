import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Gridbees",
    "numberOfMethods": 77,
    "categories": [
      "e_commerce",
      "ecommerce",
      "retail"
    ],
    "index": "gridbees/typescript",
    "language": "TypeScript",
    "link": "/sdk/gridbees/typescript/",
    "developerDocumentation": "www.gridbees.com/resources/api-documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gridbees/openapi.yaml"
  },
  {
    "name": "Gridbees",
    "numberOfMethods": 77,
    "categories": [
      "e_commerce",
      "ecommerce",
      "retail"
    ],
    "index": "gridbees/python",
    "language": "Python",
    "link": "/sdk/gridbees/python/",
    "developerDocumentation": "www.gridbees.com/resources/api-documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gridbees/openapi.yaml"
  },
  {
    "name": "Gridbees",
    "numberOfMethods": 77,
    "categories": [
      "e_commerce",
      "ecommerce",
      "retail"
    ],
    "index": "gridbees/java",
    "language": "Java",
    "link": "/sdk/gridbees/java/",
    "developerDocumentation": "www.gridbees.com/resources/api-documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/gridbees/openapi.yaml"
  }
];

export default function Gridbees() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Gridbees"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/gridbees/favicon.jpg"
      sdks={sdks}
      homepage="www.gridbees.com/"
      companyKebabCase="gridbees"
      categories={allCategories}
      metaDescription={`Gridbees 🚀 is an API-first headless e-commerce platform for companies in all types of fields of activity who wish to digitize their processes or who have already started their digital transformation.

Gridbees🚀 aggregates their very heterogeneous flows, harmonizes them and processes them for forwarding them to the front office in a homogeneous manner, increasing the efficiency and performance of e-merchants. The end consumer will thus benefit from a smooth shopping experience.
Connectivity, technical know-how, support, agility and flexibility : these assets allow us to provide you with a real digital toolbox, modular and customizable, dedicated to the sales path, around 4 themes :

✅ product and offer management

✅ commercial and promotional animation

✅ the purchasing process

✅ customer service

Gridbees' team is specialized in integrations, offering a highly customizable solution that quickly and easily interconnects with any third party.

Because Gridbees 🚀 is much more than a software solution, entrust us with your most complex e-commerce projects for a tailor-made solution !

Discover all the tools and request your demo on : https://www.gridbees.com/en/

Your contact :
🗣 @Bruno Teplier
🗣 @Faisal Nisar
📧 sales@gridbees.com`}
    />
  )
}