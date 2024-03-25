import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BrowserCat",
    "numberOfMethods": 23,
    "categories": [
      "automation",
      "developer_tools",
      "headless_browsers",
      "browser_automation",
      "web_scraping"
    ],
    "index": "browser-cat/typescript",
    "language": "TypeScript",
    "link": "/sdk/browser-cat/typescript/",
    "developerDocumentation": "www.browsercat.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browsercat/openapi.yaml"
  },
  {
    "name": "BrowserCat",
    "numberOfMethods": 23,
    "categories": [
      "automation",
      "developer_tools",
      "headless_browsers",
      "browser_automation",
      "web_scraping"
    ],
    "index": "browser-cat/python",
    "language": "Python",
    "link": "/sdk/browser-cat/python/",
    "developerDocumentation": "www.browsercat.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browsercat/openapi.yaml"
  },
  {
    "name": "BrowserCat",
    "numberOfMethods": 23,
    "categories": [
      "automation",
      "developer_tools",
      "headless_browsers",
      "browser_automation",
      "web_scraping"
    ],
    "index": "browser-cat/java",
    "language": "Java",
    "link": "/sdk/browser-cat/java/",
    "developerDocumentation": "www.browsercat.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/browsercat/openapi.yaml"
  }
];

export default function BrowserCat() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BrowserCat"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/browsercat/favicon.png"
      sdks={sdks}
      homepage="browsercat.com"
      companyKebabCase="browser-cat"
      categories={allCategories}
      metaDescription={`The purr-fect headless browser API for busy businesses! Easy, fast, and affordable web automation, scraping, e2e testing, image/video/pdf generation, and more. 🐾`}
    />
  )
}