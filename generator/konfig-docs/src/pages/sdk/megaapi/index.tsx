import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Megaapi",
    "numberOfMethods": 28,
    "categories": [
      "api",
      "messaging",
      "whatsapp",
      "communication"
    ],
    "index": "megaapi/typescript",
    "language": "TypeScript",
    "link": "/sdk/megaapi/typescript/",
    "developerDocumentation": "apistart01.megaapi.com.br/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/megaapi/openapi.yaml"
  },
  {
    "name": "Megaapi",
    "numberOfMethods": 28,
    "categories": [
      "api",
      "messaging",
      "whatsapp",
      "communication"
    ],
    "index": "megaapi/python",
    "language": "Python",
    "link": "/sdk/megaapi/python/",
    "developerDocumentation": "apistart01.megaapi.com.br/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/megaapi/openapi.yaml"
  },
  {
    "name": "Megaapi",
    "numberOfMethods": 28,
    "categories": [
      "api",
      "messaging",
      "whatsapp",
      "communication"
    ],
    "index": "megaapi/java",
    "language": "Java",
    "link": "/sdk/megaapi/java/",
    "developerDocumentation": "apistart01.megaapi.com.br/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/megaapi/openapi.yaml"
  }
];

export default function Megaapi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Megaapi"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/megaapi/favicon.png"
      sdks={sdks}
      homepage="mega-api.app.br/"
      companyKebabCase="megaapi"
      categories={allCategories}
      metaDescription={`Está precisando de uma API para integrar o sistema da empresa em que você trabalha ao WhatsApp?
A MEGAAPI é a melhor api whatsapp do Brasil.
Utilize a nossa API no seu sistema para enviar catálogos de produtos, cobranças automáticas, agendamento de consultas, enviar pesquisas de satisfação e outras inúmeras feautures para você escolher a que encaixa no perfil da sua empresa.
Integre seu sistema agora mesmo no Whatsapp
Api muito simples e fácil de utilizar
🎧 Suporte Nacional
💰 Pagamento Nacional e Internacional`}
    />
  )
}