import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Channel",
    "numberOfMethods": 3,
    "categories": [
      "customer_operations",
      "support",
      "sales",
      "account_management",
      "customer_service",
      "help_desk",
      "customer_communication",
      "churn_prevention",
      "channel_routing",
      "real_time_collaboration",
      "email_collaboration",
      "shared_inbox",
      "management_software"
    ],
    "index": "channel/typescript",
    "language": "TypeScript",
    "link": "/sdk/front/channel/typescript/",
    "developerDocumentation": "dev.frontapp.com/reference/introduction-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/channel/openapi.yaml"
  },
  {
    "name": "Channel",
    "numberOfMethods": 3,
    "categories": [
      "customer_operations",
      "support",
      "sales",
      "account_management",
      "customer_service",
      "help_desk",
      "customer_communication",
      "churn_prevention",
      "channel_routing",
      "real_time_collaboration",
      "email_collaboration",
      "shared_inbox",
      "management_software"
    ],
    "index": "channel/python",
    "language": "Python",
    "link": "/sdk/front/channel/python/",
    "developerDocumentation": "dev.frontapp.com/reference/introduction-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/channel/openapi.yaml"
  },
  {
    "name": "Channel",
    "numberOfMethods": 3,
    "categories": [
      "customer_operations",
      "support",
      "sales",
      "account_management",
      "customer_service",
      "help_desk",
      "customer_communication",
      "churn_prevention",
      "channel_routing",
      "real_time_collaboration",
      "email_collaboration",
      "shared_inbox",
      "management_software"
    ],
    "index": "channel/java",
    "language": "Java",
    "link": "/sdk/front/channel/java/",
    "developerDocumentation": "dev.frontapp.com/reference/introduction-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/channel/openapi.yaml"
  },
  {
    "name": "Core",
    "numberOfMethods": 197,
    "categories": [
      "messaging",
      "email",
      "communication",
      "customer_operations",
      "support",
      "sales",
      "account_management",
      "customer_service",
      "help_desk",
      "customer_communication",
      "churn_prevention",
      "channel_routing",
      "real_time_collaboration",
      "collaboration",
      "email_collaboration",
      "shared_inbox"
    ],
    "index": "core/typescript",
    "language": "TypeScript",
    "link": "/sdk/front/core/typescript/",
    "developerDocumentation": "dev.frontapp.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/core/openapi.yaml"
  },
  {
    "name": "Core",
    "numberOfMethods": 197,
    "categories": [
      "messaging",
      "email",
      "communication",
      "customer_operations",
      "support",
      "sales",
      "account_management",
      "customer_service",
      "help_desk",
      "customer_communication",
      "churn_prevention",
      "channel_routing",
      "real_time_collaboration",
      "collaboration",
      "email_collaboration",
      "shared_inbox"
    ],
    "index": "core/python",
    "language": "Python",
    "link": "/sdk/front/core/python/",
    "developerDocumentation": "dev.frontapp.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/core/openapi.yaml"
  },
  {
    "name": "Core",
    "numberOfMethods": 197,
    "categories": [
      "messaging",
      "email",
      "communication",
      "customer_operations",
      "support",
      "sales",
      "account_management",
      "customer_service",
      "help_desk",
      "customer_communication",
      "churn_prevention",
      "channel_routing",
      "real_time_collaboration",
      "collaboration",
      "email_collaboration",
      "shared_inbox"
    ],
    "index": "core/java",
    "language": "Java",
    "link": "/sdk/front/core/java/",
    "developerDocumentation": "dev.frontapp.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/front/core/openapi.yaml"
  }
];

export default function Front() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Front"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/front/channel/favicon.png"
      sdks={sdks}
      homepage="front.com"
      companyKebabCase="front"
      categories={allCategories}
      metaDescription={`Front is a customer operations platform that enables support, sales, and account management teams to deliver exceptional service at scale. Front streamlines customer communication by combining the efficiency of a help desk and the familiarity of email, with automated workflows and real-time collaboration behind the scenes.

With Front, teams can centralize messages across channels, route them to the right person, and unlock visibility and insights across all of their customer operations. More than 8000 businesses use Front to drive operational efficiency that prevents churn, improves retention, and propels customer growth.`}
    />
  )
}