import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BL.INK",
    "numberOfMethods": 37,
    "categories": [
      "url_shortener",
      "link_management",
      "qr_codes",
      "branded_short_links",
      "short_links"
    ],
    "index": "bl-ink/typescript",
    "language": "TypeScript",
    "link": "/sdk/bl-ink/typescript/",
    "developerDocumentation": "developers.bl.ink/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bl-ink/openapi.yaml"
  },
  {
    "name": "BL.INK",
    "numberOfMethods": 37,
    "categories": [
      "url_shortener",
      "link_management",
      "qr_codes",
      "branded_short_links",
      "short_links"
    ],
    "index": "bl-ink/python",
    "language": "Python",
    "link": "/sdk/bl-ink/python/",
    "developerDocumentation": "developers.bl.ink/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bl-ink/openapi.yaml"
  },
  {
    "name": "BL.INK",
    "numberOfMethods": 37,
    "categories": [
      "url_shortener",
      "link_management",
      "qr_codes",
      "branded_short_links",
      "short_links"
    ],
    "index": "bl-ink/java",
    "language": "Java",
    "link": "/sdk/bl-ink/java/",
    "developerDocumentation": "developers.bl.ink/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bl-ink/openapi.yaml"
  }
];

export default function BlInk() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BL.INK"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bl-ink/favicon.png"
      sdks={sdks}
      homepage="www.bl.ink/"
      companyKebabCase="bl-ink"
      categories={allCategories}
      metaDescription={`BL.INK powers shortened URLs and QR codes with unlimited data and flexibility. 

With BL.INK, you'll create thousands of custom links that capture unlimited data points so you can measure every user touchpoint and perfect every interaction. 

Everyone on your team can create perfect data to accurately measure every element of marketing attribution. Every customer than visits your link gets the information they need, every time, with no broken links. 

Need to change the link when a contest ends, or show the page in the user's own language? It's easy with BL.INK. 

No other URL shortener or QR code creator integrates with your existing tools, helps you avoid broken links, enables zero down-time when updating links, and has a platform built based on how enterprise companies work. Only BL.INK. Trusted by demanding global brands since 2008.`}
    />
  )
}