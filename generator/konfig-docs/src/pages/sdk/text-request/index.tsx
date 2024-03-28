import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Text Request",
    "numberOfMethods": 60,
    "categories": [
      "messaging",
      "communications",
      "platform",
      "text_embeddings",
      "mobile",
      "communications_software",
      "text_messaging",
      "sms_marketing",
      "business_texting",
      "customer_engagement"
    ],
    "index": "text-request/typescript",
    "language": "TypeScript",
    "link": "/sdk/text-request/typescript/",
    "developerDocumentation": "www.textrequest.com/api/v3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/text-request/openapi.yaml"
  },
  {
    "name": "Text Request",
    "numberOfMethods": 60,
    "categories": [
      "messaging",
      "communications",
      "platform",
      "text_embeddings",
      "mobile",
      "communications_software",
      "text_messaging",
      "sms_marketing",
      "business_texting",
      "customer_engagement"
    ],
    "index": "text-request/python",
    "language": "Python",
    "link": "/sdk/text-request/python/",
    "developerDocumentation": "www.textrequest.com/api/v3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/text-request/openapi.yaml"
  },
  {
    "name": "Text Request",
    "numberOfMethods": 60,
    "categories": [
      "messaging",
      "communications",
      "platform",
      "text_embeddings",
      "mobile",
      "communications_software",
      "text_messaging",
      "sms_marketing",
      "business_texting",
      "customer_engagement"
    ],
    "index": "text-request/java",
    "language": "Java",
    "link": "/sdk/text-request/java/",
    "developerDocumentation": "www.textrequest.com/api/v3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/text-request/openapi.yaml"
  }
];

export default function TextRequest() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Text Request"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/text-request/favicon.png"
      sdks={sdks}
      homepage="www.textrequest.com/"
      companyKebabCase="text-request"
      categories={allCategories}
      metaDescription={`Text Request is the business texting platform built to ignite customer engagement. We've crafted plug-and-play messaging solutions to your everyday communication problems, so you can cut through the noise and connect with customers anytime, anywhere.

Text Request is designed to scale with you, from one person handling a few conversations, to thousands of employees sending millions of messages, to custom solutions built on our API.

Learn more about how we help busy business leaders like you with conversational texting and customer engagement at textrequest.com.`}
    />
  )
}