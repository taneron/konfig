import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "WeFitter",
    "numberOfMethods": 74,
    "categories": [
      "health_data"
    ],
    "index": "we-fitter/typescript",
    "language": "TypeScript",
    "link": "/sdk/we-fitter/typescript/",
    "developerDocumentation": "www.wefitter.com/en-us/developers/documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wefitter/openapi.yaml"
  },
  {
    "name": "WeFitter",
    "numberOfMethods": 74,
    "categories": [
      "health_data"
    ],
    "index": "we-fitter/python",
    "language": "Python",
    "link": "/sdk/we-fitter/python/",
    "developerDocumentation": "www.wefitter.com/en-us/developers/documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wefitter/openapi.yaml"
  },
  {
    "name": "WeFitter",
    "numberOfMethods": 74,
    "categories": [
      "health_data"
    ],
    "index": "we-fitter/java",
    "language": "Java",
    "link": "/sdk/we-fitter/java/",
    "developerDocumentation": "www.wefitter.com/en-us/developers/documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wefitter/openapi.yaml"
  }
];

export default function WeFitter() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="WeFitter"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wefitter/favicon.png"
      sdks={sdks}
      homepage="wefitter.com"
      companyKebabCase="we-fitter"
      categories={allCategories}
      metaDescription={`WeFitter helps digital health platforms improve business performance, engagement and data insights introducing an aggregator API that provides connections with todays most used fitness app's, wearables & gamification elements.

WeFitter's easy to integrate API will boost up user engagement and gives insight in users health profiles in order to personalize content, offerings and health advise. 

WeFitter is build by Thunderbyte.AI, a Dutch Al/ ML organisation with over 12 years of experience in building digital health products.  

Ask for a demo > business@wefitter.com`}
    />
  )
}