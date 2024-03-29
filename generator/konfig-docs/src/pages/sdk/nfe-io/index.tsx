import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "NFE.io",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "finance_technology"
    ],
    "index": "nfe-io/typescript",
    "language": "TypeScript",
    "link": "/sdk/nfe-io/typescript/",
    "developerDocumentation": "nfe.io/docs/desenvolvedores/rest-api/consulta-de-nota-fiscal-v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nfe-io/openapi.yaml"
  },
  {
    "name": "NFE.io",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "finance_technology"
    ],
    "index": "nfe-io/python",
    "language": "Python",
    "link": "/sdk/nfe-io/python/",
    "developerDocumentation": "nfe.io/docs/desenvolvedores/rest-api/consulta-de-nota-fiscal-v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nfe-io/openapi.yaml"
  },
  {
    "name": "NFE.io",
    "numberOfMethods": 4,
    "categories": [
      "finance",
      "payments",
      "finance_technology"
    ],
    "index": "nfe-io/java",
    "language": "Java",
    "link": "/sdk/nfe-io/java/",
    "developerDocumentation": "nfe.io/docs/desenvolvedores/rest-api/consulta-de-nota-fiscal-v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nfe-io/openapi.yaml"
  }
];

export default function NfeIo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="NFE.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/favicon.png"
      sdks={sdks}
      homepage="nfe.io/"
      companyKebabCase="nfe-io"
      categories={allCategories}
      metaDescription={`Tempo é dinheiro, certo? A gente sabe, assim como sabemos que a emissão de notas fiscais pode demorar bastante. Por isso criamos uma API para facilitar sua vida. Uma vez que você integre seu meio de pagamento com a NFE, sua empresa não gastará mais nenhum minuto com a emissão de notas.`}
    />
  )
}