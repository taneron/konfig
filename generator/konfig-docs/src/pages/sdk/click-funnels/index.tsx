import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ClickFunnels",
    "numberOfMethods": 159,
    "categories": [
      "marketing",
      "workspace"
    ],
    "index": "click-funnels/typescript",
    "language": "TypeScript",
    "link": "/sdk/click-funnels/typescript/",
    "developerDocumentation": "developers.myclickfunnels.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickfunnels/openapi.yaml"
  },
  {
    "name": "ClickFunnels",
    "numberOfMethods": 159,
    "categories": [
      "marketing",
      "workspace"
    ],
    "index": "click-funnels/python",
    "language": "Python",
    "link": "/sdk/click-funnels/python/",
    "developerDocumentation": "developers.myclickfunnels.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickfunnels/openapi.yaml"
  },
  {
    "name": "ClickFunnels",
    "numberOfMethods": 159,
    "categories": [
      "marketing",
      "workspace"
    ],
    "index": "click-funnels/java",
    "language": "Java",
    "link": "/sdk/click-funnels/java/",
    "developerDocumentation": "developers.myclickfunnels.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clickfunnels/openapi.yaml"
  }
];

export default function ClickFunnels() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ClickFunnels"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clickfunnels/favicon.png"
      sdks={sdks}
      homepage="www.clickfunnels.com/"
      companyKebabCase="click-funnels"
      categories={allCategories}
      metaDescription={`With ClickFunnels, you are just a few simple clicks away from a beautifully-designed website marketing funnel. Because we believe that's how it should be!`}
    />
  )
}