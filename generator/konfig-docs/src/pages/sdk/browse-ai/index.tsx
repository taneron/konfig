import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Browse AI",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "web_scraping"
    ],
    "index": "browse-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/browse-ai/typescript/",
    "developerDocumentation": "www.browse.ai/docs/api/v2",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browse-ai/openapi.yaml"
  },
  {
    "name": "Browse AI",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "web_scraping"
    ],
    "index": "browse-ai/python",
    "language": "Python",
    "link": "/sdk/browse-ai/python/",
    "developerDocumentation": "www.browse.ai/docs/api/v2",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browse-ai/openapi.yaml"
  },
  {
    "name": "Browse AI",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "web_scraping"
    ],
    "index": "browse-ai/java",
    "language": "Java",
    "link": "/sdk/browse-ai/java/",
    "developerDocumentation": "www.browse.ai/docs/api/v2",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browse-ai/openapi.yaml"
  }
];

export default function BrowseAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Browse AI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browse-ai/favicon.png"
      sdks={sdks}
      homepage="browse.ai"
      companyKebabCase="browse-ai"
      categories={allCategories}
      metaDescription={`We're creating the easiest way to scrape and monitor any website with no code. 

Our mission is to give every individual and business equal opportunity to benefit from information on the internet.`}
    />
  )
}