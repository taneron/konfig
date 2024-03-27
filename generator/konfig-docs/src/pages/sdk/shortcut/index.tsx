import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Shortcut",
    "numberOfMethods": 123,
    "categories": [
      "project_management",
      "software_development",
      "collaboration"
    ],
    "index": "shortcut/typescript",
    "language": "TypeScript",
    "link": "/sdk/shortcut/typescript/",
    "developerDocumentation": "developer.shortcut.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shortcut/openapi.yaml"
  },
  {
    "name": "Shortcut",
    "numberOfMethods": 123,
    "categories": [
      "project_management",
      "software_development",
      "collaboration"
    ],
    "index": "shortcut/python",
    "language": "Python",
    "link": "/sdk/shortcut/python/",
    "developerDocumentation": "developer.shortcut.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shortcut/openapi.yaml"
  },
  {
    "name": "Shortcut",
    "numberOfMethods": 123,
    "categories": [
      "project_management",
      "software_development",
      "collaboration"
    ],
    "index": "shortcut/java",
    "language": "Java",
    "link": "/sdk/shortcut/java/",
    "developerDocumentation": "developer.shortcut.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shortcut/openapi.yaml"
  }
];

export default function Shortcut() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Shortcut"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shortcut/favicon.png"
      sdks={sdks}
      homepage="shortcut.com"
      companyKebabCase="shortcut"
      categories={allCategories}
      metaDescription={`Shortcut is the first project management platform for software development that brings together every team across an organization to build better products. More than 10,000 companies worldwide use Shortcut to facilitate healthier planning and collaboration so teams can focus on what matters – creating software their customers love. A Great Place to Work-Certified™ company, Shortcut is headquartered in New York City with employees spread across the globe and is backed by Battery Ventures, Resolute Ventures, Lerer Hippeau Ventures, and a number of other top-tier investors.

Visit https://www.shortcut.com to learn more.`}
    />
  )
}