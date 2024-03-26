import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Namely",
    "numberOfMethods": 54,
    "categories": [
      "hr",
      "payroll",
      "benefits",
      "compliance",
      "hr_analytics",
      "talent"
    ],
    "index": "namely/typescript",
    "language": "TypeScript",
    "link": "/sdk/namely/typescript/",
    "developerDocumentation": "developers.namely.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/namely/openapi.yaml"
  },
  {
    "name": "Namely",
    "numberOfMethods": 54,
    "categories": [
      "hr",
      "payroll",
      "benefits",
      "compliance",
      "hr_analytics",
      "talent"
    ],
    "index": "namely/python",
    "language": "Python",
    "link": "/sdk/namely/python/",
    "developerDocumentation": "developers.namely.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/namely/openapi.yaml"
  },
  {
    "name": "Namely",
    "numberOfMethods": 54,
    "categories": [
      "hr",
      "payroll",
      "benefits",
      "compliance",
      "hr_analytics",
      "talent"
    ],
    "index": "namely/java",
    "language": "Java",
    "link": "/sdk/namely/java/",
    "developerDocumentation": "developers.namely.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/namely/openapi.yaml"
  }
];

export default function Namely() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Namely"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/namely/favicon.png"
      sdks={sdks}
      homepage="namely.com"
      companyKebabCase="namely"
      categories={allCategories}
      metaDescription={`Namely is the HR, Payroll, and Benefits platform your employees will love. Finally, there's HR software that employees actually use—built to fit your company culture. Manage all of your HR data in one place, with personalized service to help your company get better, faster. Namely is used by some of the world's most innovative and exciting companies in media, technology, commerce, and more.`}
    />
  )
}