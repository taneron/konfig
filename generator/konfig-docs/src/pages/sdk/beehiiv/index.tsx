import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "beehiiv",
    "numberOfMethods": 38,
    "categories": [
      "writing",
      "newsletter"
    ],
    "index": "beehiiv/typescript",
    "language": "TypeScript",
    "link": "/sdk/beehiiv/typescript/",
    "developerDocumentation": "developers.beehiiv.com/docs/v2",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beehiiv/openapi.yaml"
  },
  {
    "name": "beehiiv",
    "numberOfMethods": 38,
    "categories": [
      "writing",
      "newsletter"
    ],
    "index": "beehiiv/python",
    "language": "Python",
    "link": "/sdk/beehiiv/python/",
    "developerDocumentation": "developers.beehiiv.com/docs/v2",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beehiiv/openapi.yaml"
  },
  {
    "name": "beehiiv",
    "numberOfMethods": 38,
    "categories": [
      "writing",
      "newsletter"
    ],
    "index": "beehiiv/java",
    "language": "Java",
    "link": "/sdk/beehiiv/java/",
    "developerDocumentation": "developers.beehiiv.com/docs/v2",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beehiiv/openapi.yaml"
  }
];

export default function Beehiiv() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="beehiiv"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beehiiv/favicon.png"
      sdks={sdks}
      homepage="beehiiv.com"
      companyKebabCase="beehiiv"
      categories={allCategories}
      metaDescription={`beehiiv is a New York-based digital platform that enables users to write, monetize and distribute newsletters.`}
    />
  )
}