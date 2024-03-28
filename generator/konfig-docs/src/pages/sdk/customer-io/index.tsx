import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Data Pipelines",
    "numberOfMethods": 7,
    "categories": [
      "marketing",
      "big_data_analytics",
      "customer_data_platform"
    ],
    "index": "data-pipelines/typescript",
    "language": "TypeScript",
    "link": "/sdk/customer-io/data-pipelines/typescript/",
    "developerDocumentation": "customer.io/docs/api/cdp/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/data-pipelines/openapi.yaml"
  },
  {
    "name": "Data Pipelines",
    "numberOfMethods": 7,
    "categories": [
      "marketing",
      "big_data_analytics",
      "customer_data_platform"
    ],
    "index": "data-pipelines/python",
    "language": "Python",
    "link": "/sdk/customer-io/data-pipelines/python/",
    "developerDocumentation": "customer.io/docs/api/cdp/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/data-pipelines/openapi.yaml"
  },
  {
    "name": "Data Pipelines",
    "numberOfMethods": 7,
    "categories": [
      "marketing",
      "big_data_analytics",
      "customer_data_platform"
    ],
    "index": "data-pipelines/java",
    "language": "Java",
    "link": "/sdk/customer-io/data-pipelines/java/",
    "developerDocumentation": "customer.io/docs/api/cdp/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/data-pipelines/openapi.yaml"
  },
  {
    "name": "Journeys App",
    "numberOfMethods": 111,
    "categories": [
      "messaging",
      "email",
      "marketing"
    ],
    "index": "journeys-app/typescript",
    "language": "TypeScript",
    "link": "/sdk/customer-io/journeys-app/typescript/",
    "developerDocumentation": "customer.io/docs/api/app/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-app/openapi.yaml"
  },
  {
    "name": "Journeys App",
    "numberOfMethods": 111,
    "categories": [
      "messaging",
      "email",
      "marketing"
    ],
    "index": "journeys-app/python",
    "language": "Python",
    "link": "/sdk/customer-io/journeys-app/python/",
    "developerDocumentation": "customer.io/docs/api/app/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-app/openapi.yaml"
  },
  {
    "name": "Journeys App",
    "numberOfMethods": 111,
    "categories": [
      "messaging",
      "email",
      "marketing"
    ],
    "index": "journeys-app/java",
    "language": "Java",
    "link": "/sdk/customer-io/journeys-app/java/",
    "developerDocumentation": "customer.io/docs/api/app/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-app/openapi.yaml"
  },
  {
    "name": "Journeys Track",
    "numberOfMethods": 18,
    "categories": [
      "automation",
      "marketing",
      "messaging"
    ],
    "index": "journeys-track/typescript",
    "language": "TypeScript",
    "link": "/sdk/customer-io/journeys-track/typescript/",
    "developerDocumentation": "customer.io/docs/api/track/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-track/openapi.yaml"
  },
  {
    "name": "Journeys Track",
    "numberOfMethods": 18,
    "categories": [
      "automation",
      "marketing",
      "messaging"
    ],
    "index": "journeys-track/python",
    "language": "Python",
    "link": "/sdk/customer-io/journeys-track/python/",
    "developerDocumentation": "customer.io/docs/api/track/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-track/openapi.yaml"
  },
  {
    "name": "Journeys Track",
    "numberOfMethods": 18,
    "categories": [
      "automation",
      "marketing",
      "messaging"
    ],
    "index": "journeys-track/java",
    "language": "Java",
    "link": "/sdk/customer-io/journeys-track/java/",
    "developerDocumentation": "customer.io/docs/api/track/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/customer-io/journeys-track/openapi.yaml"
  }
];

export default function CustomerIo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Customer.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/customer-io/data-pipelines/favicon.png"
      sdks={sdks}
      homepage="customer.io/"
      companyKebabCase="customer-io"
      categories={allCategories}
      metaDescription={`Customer.io is a versatile marketing automation tool for sending relevant messages based on behavior across web and mobile products. 

Impersonal messages lead to bad experiences. That's why we use real-time data to help you deliver the right message, exactly when it's needed — like sending an event reminder over SMS or the perfect onboarding email.

Our robust platform enables you to:
- Automate your product messaging, with the ability to build, test, and send messages from one platform. 
- Create and manage newsletters, transactional messages, and behavioral messages 
- Do more with your behavior and data -- connect our powerful segmentation and automation engine with other apps to drive user behavior and save time. 

Learn more: https://customer.io`}
    />
  )
}