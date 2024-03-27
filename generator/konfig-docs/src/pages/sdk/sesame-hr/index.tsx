import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Sesame HR",
    "numberOfMethods": 118,
    "categories": [
      "hr"
    ],
    "index": "sesame-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/sesame-hr/typescript/",
    "developerDocumentation": "apidocs.sesametime.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sesame-hr/openapi.yaml"
  },
  {
    "name": "Sesame HR",
    "numberOfMethods": 118,
    "categories": [
      "hr"
    ],
    "index": "sesame-hr/python",
    "language": "Python",
    "link": "/sdk/sesame-hr/python/",
    "developerDocumentation": "apidocs.sesametime.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sesame-hr/openapi.yaml"
  },
  {
    "name": "Sesame HR",
    "numberOfMethods": 118,
    "categories": [
      "hr"
    ],
    "index": "sesame-hr/java",
    "language": "Java",
    "link": "/sdk/sesame-hr/java/",
    "developerDocumentation": "apidocs.sesametime.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sesame-hr/openapi.yaml"
  }
];

export default function SesameHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Sesame HR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sesame-hr/favicon.png"
      sdks={sdks}
      homepage="sesamehr.com"
      companyKebabCase="sesame-hr"
      categories={allCategories}
      metaDescription={`Sesame HR provides a comprehensive HR management platform that streamlines processes such as employee onboarding, time tracking, performance management, and payroll. Their intuitive interface and automation tools help businesses of all sizes efficiently manage their human resources tasks.`}
    />
  )
}