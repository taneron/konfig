import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Intercom",
    "numberOfMethods": 110,
    "categories": [
      "communication",
      "customer_service",
      "help_desk",
      "customer_communication"
    ],
    "index": "intercom/typescript",
    "language": "TypeScript",
    "link": "/sdk/intercom/typescript/",
    "developerDocumentation": "developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intercom/openapi.yaml"
  },
  {
    "name": "Intercom",
    "numberOfMethods": 110,
    "categories": [
      "communication",
      "customer_service",
      "help_desk",
      "customer_communication"
    ],
    "index": "intercom/python",
    "language": "Python",
    "link": "/sdk/intercom/python/",
    "developerDocumentation": "developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intercom/openapi.yaml"
  },
  {
    "name": "Intercom",
    "numberOfMethods": 110,
    "categories": [
      "communication",
      "customer_service",
      "help_desk",
      "customer_communication"
    ],
    "index": "intercom/java",
    "language": "Java",
    "link": "/sdk/intercom/java/",
    "developerDocumentation": "developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intercom/openapi.yaml"
  }
];

export default function Intercom() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Intercom"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intercom/favicon.png"
      sdks={sdks}
      homepage="intercom.com"
      companyKebabCase="intercom"
      categories={allCategories}
      metaDescription={`Intercom is the only complete Customer Service solution that provides a seamless customer experience across automation and human support, delivering increased customer satisfaction while reducing costs. We're building a future where most customer conversations are successfully resolved without needing human support, freeing up the team to work on higher value customer conversations.

More than 25,000 global organizations, including Atlassian, Amazon and Lyft Business, rely on Intercom to deliver unparalleled user experiences at any scale. Intercom's platform is used to send over 500 million messages per month and enables interactions with over 600 million monthly active end users.

Founded in 2011 and backed by leading venture capitalists, including Kleiner Perkins, Bessemer Venture Partners and Social Capital, Intercom is on a mission to make internet business personal.`}
    />
  )
}