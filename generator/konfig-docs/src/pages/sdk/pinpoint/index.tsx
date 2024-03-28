import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Pinpoint",
    "numberOfMethods": 68,
    "categories": [
      "applicant_tracking",
      "hr"
    ],
    "index": "pinpoint/typescript",
    "language": "TypeScript",
    "link": "/sdk/pinpoint/typescript/",
    "developerDocumentation": "developers.pinpointhq.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pinpoint/openapi.yaml"
  },
  {
    "name": "Pinpoint",
    "numberOfMethods": 68,
    "categories": [
      "applicant_tracking",
      "hr"
    ],
    "index": "pinpoint/python",
    "language": "Python",
    "link": "/sdk/pinpoint/python/",
    "developerDocumentation": "developers.pinpointhq.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pinpoint/openapi.yaml"
  },
  {
    "name": "Pinpoint",
    "numberOfMethods": 68,
    "categories": [
      "applicant_tracking",
      "hr"
    ],
    "index": "pinpoint/java",
    "language": "Java",
    "link": "/sdk/pinpoint/java/",
    "developerDocumentation": "developers.pinpointhq.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pinpoint/openapi.yaml"
  }
];

export default function Pinpoint() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Pinpoint"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pinpoint/favicon.png"
      sdks={sdks}
      homepage="pinpointhq.com"
      companyKebabCase="pinpoint"
      categories={allCategories}
      metaDescription={`Applicant tracking software that’s ready for anything. Get more control with branded careers sites, flexible templates, tailored workflows, beautiful reports, and an easier hiring process—not just for your candidates, but for your own team too. Make better hiring decisions—faster–with Pinpoint.`}
    />
  )
}