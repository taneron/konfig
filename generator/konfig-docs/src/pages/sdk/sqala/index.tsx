import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Sqala",
    "numberOfMethods": 25,
    "categories": [
      "fintech",
      "financial_services",
      "payments",
      "banking"
    ],
    "index": "sqala/typescript",
    "language": "TypeScript",
    "link": "/sdk/sqala/typescript/",
    "developerDocumentation": "sqala.readme.io/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sqala/openapi.yaml"
  },
  {
    "name": "Sqala",
    "numberOfMethods": 25,
    "categories": [
      "fintech",
      "financial_services",
      "payments",
      "banking"
    ],
    "index": "sqala/python",
    "language": "Python",
    "link": "/sdk/sqala/python/",
    "developerDocumentation": "sqala.readme.io/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sqala/openapi.yaml"
  },
  {
    "name": "Sqala",
    "numberOfMethods": 25,
    "categories": [
      "fintech",
      "financial_services",
      "payments",
      "banking"
    ],
    "index": "sqala/java",
    "language": "Java",
    "link": "/sdk/sqala/java/",
    "developerDocumentation": "sqala.readme.io/reference/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sqala/openapi.yaml"
  }
];

export default function Sqala() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Sqala"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sqala/favicon.png"
      sdks={sdks}
      homepage="www.sqala.tech/"
      companyKebabCase="sqala"
      categories={allCategories}
      metaDescription={`At Sqala, we believe that everyone deserves access to financial services, and we are committed to providing secure and reliable payment solutions to clients who may have been overlooked by traditional financial institutions.`}
    />
  )
}