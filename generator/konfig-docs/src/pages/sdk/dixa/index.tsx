import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Dixa",
    "numberOfMethods": 84,
    "categories": [
      "customer_service",
      "conversational_ai",
      "customer_support"
    ],
    "index": "dixa/typescript",
    "language": "TypeScript",
    "link": "/sdk/dixa/typescript/",
    "developerDocumentation": "docs.dixa.io/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dixa/openapi.yaml"
  },
  {
    "name": "Dixa",
    "numberOfMethods": 84,
    "categories": [
      "customer_service",
      "conversational_ai",
      "customer_support"
    ],
    "index": "dixa/python",
    "language": "Python",
    "link": "/sdk/dixa/python/",
    "developerDocumentation": "docs.dixa.io/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dixa/openapi.yaml"
  },
  {
    "name": "Dixa",
    "numberOfMethods": 84,
    "categories": [
      "customer_service",
      "conversational_ai",
      "customer_support"
    ],
    "index": "dixa/java",
    "language": "Java",
    "link": "/sdk/dixa/java/",
    "developerDocumentation": "docs.dixa.io/docs/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dixa/openapi.yaml"
  }
];

export default function Dixa() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Dixa"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dixa/favicon.png"
      sdks={sdks}
      homepage="dixa.com"
      companyKebabCase="dixa"
      categories={allCategories}
      metaDescription={`Dixa enables companies to deliver customer service as it is meant to be. We help customer service leaders to create effortless experiences for customers and teams that unlock loyalty.
Dixa's Conversational Customer Service Platform combines powerful AI with a human touch to deliver a highly-personalized service experience that scales. Our dedicated customer success team ensures you are up and running quickly. Dixa powers more than 30 million conversations a year and is trusted by leading brands such as Interflora, On, Wise, Deezer, Rapha, Too Good to Go, Hello Print, and Wistia. Learn more by visiting dixa.com.`}
    />
  )
}