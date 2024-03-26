import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Okta",
    "numberOfMethods": 341,
    "categories": [
      "identity_and_access_management",
      "security",
      "authentication",
      "identity_management",
      "access_management",
      "single_signon",
      "user_management",
      "idaas"
    ],
    "index": "okta/typescript",
    "language": "TypeScript",
    "link": "/sdk/okta/typescript/",
    "developerDocumentation": "developer.okta.com/docs/reference/core-okta-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/okta/openapi.yaml"
  },
  {
    "name": "Okta",
    "numberOfMethods": 341,
    "categories": [
      "identity_and_access_management",
      "security",
      "authentication",
      "identity_management",
      "access_management",
      "single_signon",
      "user_management",
      "idaas"
    ],
    "index": "okta/python",
    "language": "Python",
    "link": "/sdk/okta/python/",
    "developerDocumentation": "developer.okta.com/docs/reference/core-okta-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/okta/openapi.yaml"
  },
  {
    "name": "Okta",
    "numberOfMethods": 341,
    "categories": [
      "identity_and_access_management",
      "security",
      "authentication",
      "identity_management",
      "access_management",
      "single_signon",
      "user_management",
      "idaas"
    ],
    "index": "okta/java",
    "language": "Java",
    "link": "/sdk/okta/java/",
    "developerDocumentation": "developer.okta.com/docs/reference/core-okta-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/okta/openapi.yaml"
  }
];

export default function Okta() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Okta"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/okta/favicon.png"
      sdks={sdks}
      homepage="okta.com"
      companyKebabCase="okta"
      categories={allCategories}
      metaDescription={`Okta gives you a neutral, powerful and extensible platform that puts identity at the heart of your stack. No matter what industry, use case, or level of support you need, we've got you covered.`}
    />
  )
}