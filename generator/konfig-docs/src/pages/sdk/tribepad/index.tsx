import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Tribepad",
    "numberOfMethods": 30,
    "categories": [
      "recruiting",
      "hr",
      "talent_management_analytics"
    ],
    "index": "tribepad/typescript",
    "language": "TypeScript",
    "link": "/sdk/tribepad/typescript/",
    "developerDocumentation": "docs.tribepad.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tribepad/openapi.yaml"
  },
  {
    "name": "Tribepad",
    "numberOfMethods": 30,
    "categories": [
      "recruiting",
      "hr",
      "talent_management_analytics"
    ],
    "index": "tribepad/python",
    "language": "Python",
    "link": "/sdk/tribepad/python/",
    "developerDocumentation": "docs.tribepad.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tribepad/openapi.yaml"
  },
  {
    "name": "Tribepad",
    "numberOfMethods": 30,
    "categories": [
      "recruiting",
      "hr",
      "talent_management_analytics"
    ],
    "index": "tribepad/java",
    "language": "Java",
    "link": "/sdk/tribepad/java/",
    "developerDocumentation": "docs.tribepad.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tribepad/openapi.yaml"
  }
];

export default function Tribepad() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Tribepad"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tribepad/favicon.png"
      sdks={sdks}
      homepage="tribepad.com"
      companyKebabCase="tribepad"
      categories={allCategories}
      metaDescription={`Tribepad is the trusted tech ally to smart(er) recruiters everywhere, designed to help you fall back in love with recruiting. Our simple, flexible talent acquisition platform takes your recruitment headaches away - giving power to the people finders.

Combining ATS, CRM, Video Interviewing, and Onboarding plus a strong integration ecosystem and a switched-on, passionate team cheering you on, our tech is a springboard for faster, fairer, better hiring. 

Trusted by organisations like the Tesco, NHS Professionals, KFC, Subway, Sodexo, G4S and Local Authorities across the UK, 25 million people in 16 languages use Tribepad. 

Cast-iron security with G-Cloud 12 approved suppliers and data stored in ISO27001-compliant UK data centres.`}
    />
  )
}