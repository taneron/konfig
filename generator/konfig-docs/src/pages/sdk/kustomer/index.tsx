import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Kustomer",
    "numberOfMethods": 375,
    "categories": [
      "customer_service",
      "customer_communication",
      "omnichannel",
      "chat",
      "email",
      "messaging"
    ],
    "index": "kustomer/typescript",
    "language": "TypeScript",
    "link": "/sdk/kustomer/typescript/",
    "developerDocumentation": "developer.kustomer.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kustomer/openapi.yaml"
  },
  {
    "name": "Kustomer",
    "numberOfMethods": 375,
    "categories": [
      "customer_service",
      "customer_communication",
      "omnichannel",
      "chat",
      "email",
      "messaging"
    ],
    "index": "kustomer/python",
    "language": "Python",
    "link": "/sdk/kustomer/python/",
    "developerDocumentation": "developer.kustomer.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kustomer/openapi.yaml"
  },
  {
    "name": "Kustomer",
    "numberOfMethods": 375,
    "categories": [
      "customer_service",
      "customer_communication",
      "omnichannel",
      "chat",
      "email",
      "messaging"
    ],
    "index": "kustomer/java",
    "language": "Java",
    "link": "/sdk/kustomer/java/",
    "developerDocumentation": "developer.kustomer.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kustomer/openapi.yaml"
  }
];

export default function Kustomer() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Kustomer"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kustomer/favicon.png"
      sdks={sdks}
      homepage="kustomer.com"
      companyKebabCase="kustomer"
      categories={allCategories}
      metaDescription={`Kustomer helps businesses grow by delivering exceptional customer service via phone, email, chat, text, social, messaging and more. Kustomer enables fast, personalized, and efficient customer and agent experiences using complete customer visibility, seamless omnichannel conversations, intelligent automation and easy, no-code customization to adapt to change. See why growing brands use Kustomer to build the enduring customer relationships that drive better business results at http://ow.ly/UZ5X50HV0ov`}
    />
  )
}