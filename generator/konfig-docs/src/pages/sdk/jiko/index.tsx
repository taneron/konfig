import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Jiko",
    "numberOfMethods": 68,
    "categories": [
      "finance",
      "banking",
      "fintech",
      "financial_services"
    ],
    "index": "jiko/typescript",
    "language": "TypeScript",
    "link": "/sdk/jiko/typescript/",
    "developerDocumentation": "docs.jiko.io",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jiko/openapi.yaml"
  },
  {
    "name": "Jiko",
    "numberOfMethods": 68,
    "categories": [
      "finance",
      "banking",
      "fintech",
      "financial_services"
    ],
    "index": "jiko/python",
    "language": "Python",
    "link": "/sdk/jiko/python/",
    "developerDocumentation": "docs.jiko.io",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jiko/openapi.yaml"
  },
  {
    "name": "Jiko",
    "numberOfMethods": 68,
    "categories": [
      "finance",
      "banking",
      "fintech",
      "financial_services"
    ],
    "index": "jiko/java",
    "language": "Java",
    "link": "/sdk/jiko/java/",
    "developerDocumentation": "docs.jiko.io",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jiko/openapi.yaml"
  }
];

export default function Jiko() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Jiko"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jiko/favicon.png"
      sdks={sdks}
      homepage="jiko.io"
      companyKebabCase="jiko"
      categories={allCategories}
      metaDescription={`Jiko makes Treasuries bankable. We're a new type of bank that innovates US Treasury bills to unlock yield, safety, and scale.

Backed by Upfront Ventures, Airbus Ventures, and others; headquartered in SF with offices in NYC and Reykjavík.`}
    />
  )
}