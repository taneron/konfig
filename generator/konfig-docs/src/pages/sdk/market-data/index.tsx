import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "MarketData",
    "numberOfMethods": 14,
    "categories": [
      "finance"
    ],
    "index": "market-data/typescript",
    "language": "TypeScript",
    "link": "/sdk/market-data/typescript/",
    "developerDocumentation": "api.marketdata.app/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/marketdata/openapi.yaml"
  },
  {
    "name": "MarketData",
    "numberOfMethods": 14,
    "categories": [
      "finance"
    ],
    "index": "market-data/python",
    "language": "Python",
    "link": "/sdk/market-data/python/",
    "developerDocumentation": "api.marketdata.app/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/marketdata/openapi.yaml"
  },
  {
    "name": "MarketData",
    "numberOfMethods": 14,
    "categories": [
      "finance"
    ],
    "index": "market-data/java",
    "language": "Java",
    "link": "/sdk/market-data/java/",
    "developerDocumentation": "api.marketdata.app/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/marketdata/openapi.yaml"
  }
];

export default function MarketData() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="MarketData"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/marketdata/favicon.png"
      sdks={sdks}
      homepage="marketdata.app"
      companyKebabCase="market-data"
      categories={allCategories}
      metaDescription={`Somos un centro de información que analiza el mercado bursátil, financiero y econonómico.`}
    />
  )
}