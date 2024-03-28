import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Belvo",
    "numberOfMethods": 80,
    "categories": [
      "finance",
      "open_banking",
      "fintech",
      "financial_services",
      "latam",
      "latin_america",
      "open_finance"
    ],
    "index": "belvo/typescript",
    "language": "TypeScript",
    "link": "/sdk/belvo/typescript/",
    "developerDocumentation": "developers.belvo.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/belvo/openapi.yaml"
  },
  {
    "name": "Belvo",
    "numberOfMethods": 80,
    "categories": [
      "finance",
      "open_banking",
      "fintech",
      "financial_services",
      "latam",
      "latin_america",
      "open_finance"
    ],
    "index": "belvo/python",
    "language": "Python",
    "link": "/sdk/belvo/python/",
    "developerDocumentation": "developers.belvo.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/belvo/openapi.yaml"
  },
  {
    "name": "Belvo",
    "numberOfMethods": 80,
    "categories": [
      "finance",
      "open_banking",
      "fintech",
      "financial_services",
      "latam",
      "latin_america",
      "open_finance"
    ],
    "index": "belvo/java",
    "language": "Java",
    "link": "/sdk/belvo/java/",
    "developerDocumentation": "developers.belvo.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/belvo/openapi.yaml"
  }
];

export default function Belvo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Belvo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/belvo/favicon.png"
      sdks={sdks}
      homepage="belvo.com"
      companyKebabCase="belvo"
      categories={allCategories}
      metaDescription={`Belvo es la plataforma líder de datos y pagos de open finance en Latinoamérica. Ayudamos a innovadores financieros a acceder a los datos financieros de tus usuarios, entender mejor su comportamiento y habilitar pagos instantáneos gracias al open finance, con el objetivo de impulsar productos más eficientes, seguros e inclusivos.`}
    />
  )
}