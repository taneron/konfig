import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "WANNME",
    "numberOfMethods": 133,
    "categories": [
      "payments",
      "fintech",
      "online_payments",
      "financial_technology",
      "payment_services"
    ],
    "index": "wannme/typescript",
    "language": "TypeScript",
    "link": "/sdk/wannme/typescript/",
    "developerDocumentation": "rest-demo.wannme.com/integration/v2/swagger-ui/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wannme/openapi.yaml"
  },
  {
    "name": "WANNME",
    "numberOfMethods": 133,
    "categories": [
      "payments",
      "fintech",
      "online_payments",
      "financial_technology",
      "payment_services"
    ],
    "index": "wannme/python",
    "language": "Python",
    "link": "/sdk/wannme/python/",
    "developerDocumentation": "rest-demo.wannme.com/integration/v2/swagger-ui/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wannme/openapi.yaml"
  },
  {
    "name": "WANNME",
    "numberOfMethods": 133,
    "categories": [
      "payments",
      "fintech",
      "online_payments",
      "financial_technology",
      "payment_services"
    ],
    "index": "wannme/java",
    "language": "Java",
    "link": "/sdk/wannme/java/",
    "developerDocumentation": "rest-demo.wannme.com/integration/v2/swagger-ui/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wannme/openapi.yaml"
  }
];

export default function Wannme() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="WANNME"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/favicon.png"
      sdks={sdks}
      homepage="www.wannme.com/en/"
      companyKebabCase="wannme"
      categories={allCategories}
      metaDescription={`Wannme es una plataforma de pagos que gestiona todo el proceso del cobro, desde la pasarela de pago hasta las comunicaciones de tu tienda física u online. ¿Cómo lo hacemos? Mediante una única solución, una sola API.
¿Qué te ofrecemos? Una solución personalizada para ti y tu negocio, con múltiples funcionalidades que puedes combinar libremente, fácil de integrar, usar y sin sobrecostes. Todo y más a golpe de clic.
Queremos ser tu partner tecnológico y acompañarte en todo el proceso de cobro a tus clientes. Con la misma tecnología y procesos que usan los grandes, pero adaptada a lo que necesites (tarjeta de crédito, Bizum, efectivo, Split Payments, pagos PSD2… etc.) para que tú te centres en vender y tus clientes en comprar.
Do you want me?`}
    />
  )
}