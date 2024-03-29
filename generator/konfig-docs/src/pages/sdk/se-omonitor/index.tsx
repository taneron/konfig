import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SEOmonitor",
    "numberOfMethods": 23,
    "categories": [
      "seo",
      "analytics"
    ],
    "index": "se-omonitor/typescript",
    "language": "TypeScript",
    "link": "/sdk/se-omonitor/typescript/",
    "developerDocumentation": "api.seomonitor.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seomonitor/openapi.yaml"
  },
  {
    "name": "SEOmonitor",
    "numberOfMethods": 23,
    "categories": [
      "seo",
      "analytics"
    ],
    "index": "se-omonitor/python",
    "language": "Python",
    "link": "/sdk/se-omonitor/python/",
    "developerDocumentation": "api.seomonitor.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seomonitor/openapi.yaml"
  },
  {
    "name": "SEOmonitor",
    "numberOfMethods": 23,
    "categories": [
      "seo",
      "analytics"
    ],
    "index": "se-omonitor/java",
    "language": "Java",
    "link": "/sdk/se-omonitor/java/",
    "developerDocumentation": "api.seomonitor.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seomonitor/openapi.yaml"
  }
];

export default function SeOmonitor() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SEOmonitor"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seomonitor/favicon.png"
      sdks={sdks}
      homepage="seomonitor.com"
      companyKebabCase="se-omonitor"
      categories={allCategories}
      metaDescription={`SEOmonitor is the platform that empowers SEO agencies to plan and track keyword performance with high accuracy, connect organic keywords with conversions and sessions, forecast SEO with high precision & algorithm transparency, and research keywords and websites with no restrictions to data. All of that is connected in a specifically designed dashboard that gathers all critical customer data in one place. API, Google Sheets, and Data Studio are included in a dynamic subscription — where users pay only for what they use.`}
    />
  )
}