import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SpotDraft",
    "numberOfMethods": 134,
    "categories": [
      "doc_management",
      "legal",
      "contract_management_software",
      "contract_lifecycle_management",
      "clm"
    ],
    "index": "spot-draft/typescript",
    "language": "TypeScript",
    "link": "/sdk/spot-draft/typescript/",
    "developerDocumentation": "api.spotdraft.com/api/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotdraft/openapi.yaml"
  },
  {
    "name": "SpotDraft",
    "numberOfMethods": 134,
    "categories": [
      "doc_management",
      "legal",
      "contract_management_software",
      "contract_lifecycle_management",
      "clm"
    ],
    "index": "spot-draft/python",
    "language": "Python",
    "link": "/sdk/spot-draft/python/",
    "developerDocumentation": "api.spotdraft.com/api/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotdraft/openapi.yaml"
  },
  {
    "name": "SpotDraft",
    "numberOfMethods": 134,
    "categories": [
      "doc_management",
      "legal",
      "contract_management_software",
      "contract_lifecycle_management",
      "clm"
    ],
    "index": "spot-draft/java",
    "language": "Java",
    "link": "/sdk/spot-draft/java/",
    "developerDocumentation": "api.spotdraft.com/api/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/spotdraft/openapi.yaml"
  }
];

export default function SpotDraft() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SpotDraft"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotdraft/favicon.png"
      sdks={sdks}
      homepage="spotdraft.com"
      companyKebabCase="spot-draft"
      categories={allCategories}
      metaDescription={`Businesses like Notion, ChargeBee, Turing, Airbnb, CRED, and more trust SpotDraft to help:

- their in-house legal team automate repetitive, mind-numbing aspects of contracting and free up time so they can focus on high-leverage work.
- their business teams close more contracts on their own without depending on legal for every small edit and review.
- bring more speed, visibility, efficiency & structure to the entire contracting process, and more.

Founded by a Harvard Law School lawyer and two Carnegie Mellon computer scientists, SpotDraft is the perfect co-pilot for your legal team that democratizes legal paperwork and speeds up the contract lifecycle.`}
    />
  )
}