import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "FastSpring",
    "numberOfMethods": 60,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "developer_tools",
      "ecommerce",
      "taxes",
      "saas",
      "subscription_management"
    ],
    "index": "fast-spring/typescript",
    "language": "TypeScript",
    "link": "/sdk/fast-spring/typescript/",
    "developerDocumentation": "developer.fastspring.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fastspring/openapi.yaml"
  },
  {
    "name": "FastSpring",
    "numberOfMethods": 60,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "developer_tools",
      "ecommerce",
      "taxes",
      "saas",
      "subscription_management"
    ],
    "index": "fast-spring/python",
    "language": "Python",
    "link": "/sdk/fast-spring/python/",
    "developerDocumentation": "developer.fastspring.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fastspring/openapi.yaml"
  },
  {
    "name": "FastSpring",
    "numberOfMethods": 60,
    "categories": [
      "finance",
      "payments",
      "online_payments",
      "fintech",
      "developer_tools",
      "ecommerce",
      "taxes",
      "saas",
      "subscription_management"
    ],
    "index": "fast-spring/java",
    "language": "Java",
    "link": "/sdk/fast-spring/java/",
    "developerDocumentation": "developer.fastspring.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fastspring/openapi.yaml"
  }
];

export default function FastSpring() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="FastSpring"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fastspring/favicon.png"
      sdks={sdks}
      homepage="fastspring.com/"
      companyKebabCase="fast-spring"
      categories={allCategories}
      metaDescription={`FastSpring is how SaaS, software, and digital product companies sell online in more places around the world. We handle all payment needs from checkout to taxes so you can go farther faster. Founded in 2005, we are a privately owned company headquartered in Santa Barbara with offices in Amsterdam, Belfast and Halifax. For more information, please visit https://www.fastspring.com.`}
    />
  )
}