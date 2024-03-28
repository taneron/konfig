import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Stark Bank",
    "numberOfMethods": 72,
    "categories": [
      "fintech",
      "banking",
      "boletos",
      "open_banking"
    ],
    "index": "stark-bank/typescript",
    "language": "TypeScript",
    "link": "/sdk/stark-bank/typescript/",
    "developerDocumentation": "www.starkbank.com/docs/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stark-bank/openapi.yaml"
  },
  {
    "name": "Stark Bank",
    "numberOfMethods": 72,
    "categories": [
      "fintech",
      "banking",
      "boletos",
      "open_banking"
    ],
    "index": "stark-bank/python",
    "language": "Python",
    "link": "/sdk/stark-bank/python/",
    "developerDocumentation": "www.starkbank.com/docs/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stark-bank/openapi.yaml"
  },
  {
    "name": "Stark Bank",
    "numberOfMethods": 72,
    "categories": [
      "fintech",
      "banking",
      "boletos",
      "open_banking"
    ],
    "index": "stark-bank/java",
    "language": "Java",
    "link": "/sdk/stark-bank/java/",
    "developerDocumentation": "www.starkbank.com/docs/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/stark-bank/openapi.yaml"
  }
];

export default function StarkBank() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Stark Bank"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/stark-bank/favicon.png"
      sdks={sdks}
      homepage="starkbank.com/en"
      companyKebabCase="stark-bank"
      categories={allCategories}
      metaDescription={`Nós somos um challenger bank focado em enterprise no Brasil. 

Tudo que fazemos é para impulsionar empresas e empreendedores a desafiarem o status quo e mudarem o Brasil para melhor.`}
    />
  )
}