import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Relysia",
    "numberOfMethods": 85,
    "categories": [
      "blockchain"
    ],
    "index": "relysia/typescript",
    "language": "TypeScript",
    "link": "/sdk/relysia/typescript/",
    "developerDocumentation": "api.relysia.com/docs/static/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relysia/openapi.yaml"
  },
  {
    "name": "Relysia",
    "numberOfMethods": 85,
    "categories": [
      "blockchain"
    ],
    "index": "relysia/python",
    "language": "Python",
    "link": "/sdk/relysia/python/",
    "developerDocumentation": "api.relysia.com/docs/static/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relysia/openapi.yaml"
  },
  {
    "name": "Relysia",
    "numberOfMethods": 85,
    "categories": [
      "blockchain"
    ],
    "index": "relysia/java",
    "language": "Java",
    "link": "/sdk/relysia/java/",
    "developerDocumentation": "api.relysia.com/docs/static/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relysia/openapi.yaml"
  }
];

export default function Relysia() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Relysia"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relysia/favicon.png"
      sdks={sdks}
      homepage="relysia.com"
      companyKebabCase="relysia"
      categories={allCategories}
      metaDescription={`Relysia is a blockchain as a service provider for any enterprise and commercial companies and start-ups who wish to build their own blockchain applications.

You can use our APIs as building blocks to pick and choose how advanced you want your Bitcoin platform to be.

With over 50 blockchain related APIs, you can build any application you wish. With Relysia API, wallet creation, transactions, data storage, tokens, NFTs and smart contracts are all easy to implement as they require less than 10 lines of code.

We are simplifying Bitcoin application development. By providing our scalable and robust infrastructure, we help businesses reduce their time to market by over 90% allowing them to quickly iterate through ideas and execution strategies to find their product market fit.

You can explore the Relysia API documentation at: https://docs.relysia.com/.
We also have a Swagger implementation for demonstration and testing purposes available at: https://api.relysia.com/docs/.

Our services have empowered many entrepreneurs and companies to actualise their blockchain ideas. Get in touch with us to explore Relysia API in deeper detail.

Relysia by Vaionex Corporation`}
    />
  )
}