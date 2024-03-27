import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Insightly",
    "numberOfMethods": 577,
    "categories": [
      "crm"
    ],
    "index": "insightly/typescript",
    "language": "TypeScript",
    "link": "/sdk/insightly/typescript/",
    "developerDocumentation": "api.na1.insightly.com/v3.1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/insightly/openapi.yaml"
  },
  {
    "name": "Insightly",
    "numberOfMethods": 577,
    "categories": [
      "crm"
    ],
    "index": "insightly/python",
    "language": "Python",
    "link": "/sdk/insightly/python/",
    "developerDocumentation": "api.na1.insightly.com/v3.1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/insightly/openapi.yaml"
  },
  {
    "name": "Insightly",
    "numberOfMethods": 577,
    "categories": [
      "crm"
    ],
    "index": "insightly/java",
    "language": "Java",
    "link": "/sdk/insightly/java/",
    "developerDocumentation": "api.na1.insightly.com/v3.1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/insightly/openapi.yaml"
  }
];

export default function Insightly() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Insightly"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/insightly/favicon.png"
      sdks={sdks}
      homepage="insightly.com"
      companyKebabCase="insightly"
      categories={allCategories}
      metaDescription={`Insightly, the new breed of CRM, helps modern businesses of all sizes build lifelong customer relationships and grow faster than ever before. Insightly's out of the box capabilities allow you to tailor each user's experience for every customer facing role. It is easy to use, easy to set up, highly customizable to your industry, and offers fast time to value at a low total cost of ownership. Join more than 1.5M Insightly users who are already building better customer relationships. 

Founded in 2009 and based in San Francisco, Insightly is backed by $38 million in funding over three rounds from leading venture capital firms: Emergence Capital Partners, Cloud Apps Capital Partners, Scott Bommer and Sozo Ventures.`}
    />
  )
}