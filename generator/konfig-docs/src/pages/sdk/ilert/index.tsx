import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ilert",
    "numberOfMethods": 162,
    "categories": [
      "alerting",
      "on_call_management",
      "incident_communication"
    ],
    "index": "ilert/typescript",
    "language": "TypeScript",
    "link": "/sdk/ilert/typescript/",
    "developerDocumentation": "api.ilert.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ilert/openapi.yaml"
  },
  {
    "name": "ilert",
    "numberOfMethods": 162,
    "categories": [
      "alerting",
      "on_call_management",
      "incident_communication"
    ],
    "index": "ilert/python",
    "language": "Python",
    "link": "/sdk/ilert/python/",
    "developerDocumentation": "api.ilert.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ilert/openapi.yaml"
  },
  {
    "name": "ilert",
    "numberOfMethods": 162,
    "categories": [
      "alerting",
      "on_call_management",
      "incident_communication"
    ],
    "index": "ilert/java",
    "language": "Java",
    "link": "/sdk/ilert/java/",
    "developerDocumentation": "api.ilert.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ilert/openapi.yaml"
  }
];

export default function Ilert() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ilert"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ilert/favicon.png"
      sdks={sdks}
      homepage="ilert.com"
      companyKebabCase="ilert"
      categories={allCategories}
      metaDescription={`ilert is a SaaS company for alerting, on-call management and incident communication and helps companies to increase their digital uptime. B2C and B2B companies from across the globe, including well-known brands such as Bertelsmann, TeamViewer and REWE, trust ilert to empower their operations teams and ensure everything is running smoothly.`}
    />
  )
}