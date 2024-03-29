import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Malga",
    "numberOfMethods": 46,
    "categories": [
      "payments",
      "fintech",
      "payment_services"
    ],
    "index": "malga/typescript",
    "language": "TypeScript",
    "link": "/sdk/malga/typescript/",
    "developerDocumentation": "docs.malga.io/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/malga/openapi.yaml"
  },
  {
    "name": "Malga",
    "numberOfMethods": 46,
    "categories": [
      "payments",
      "fintech",
      "payment_services"
    ],
    "index": "malga/python",
    "language": "Python",
    "link": "/sdk/malga/python/",
    "developerDocumentation": "docs.malga.io/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/malga/openapi.yaml"
  },
  {
    "name": "Malga",
    "numberOfMethods": 46,
    "categories": [
      "payments",
      "fintech",
      "payment_services"
    ],
    "index": "malga/java",
    "language": "Java",
    "link": "/sdk/malga/java/",
    "developerDocumentation": "docs.malga.io/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/malga/openapi.yaml"
  }
];

export default function Malga() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Malga"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/favicon.png"
      sdks={sdks}
      homepage="malga.io"
      companyKebabCase="malga"
      categories={allCategories}
      metaDescription={`A Plug agora é Malga!
Mais do que uma plataforma de pagamentos, queremos ser uma comunidade que empodera negócios digitais. A única e última plataforma de integração de pagamentos.
Com tecnologia agnóstica, adaptável e resiliente. Desenvolvendo as melhores experiências para empresas, desenvolvedores e consumidores. Simplificando o que é complexo e evoluindo todos os dias.
Somos uma startup apoiada por investidores focados em tecnologia com a missão de ajudar empresas digitais a descobrirem todo o potencial de pagamentos. Fomos acelerados pela Y Combinator, fundada em 2005 no Vale do Silício (EUA) e considerada a maior aceleradora de tecnologia do mundo. Por isso, temos muito orgulho de colocar em nosso nome essa sigla pequena, mas com tanto significado: YC S21.`}
    />
  )
}