import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "TalentLink",
    "numberOfMethods": 178,
    "categories": [
      "hr",
      "talent_management"
    ],
    "index": "talent-link/typescript",
    "language": "TypeScript",
    "link": "/sdk/cornerstone-on-demand/talent-link/typescript/",
    "developerDocumentation": "developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cornerstone-ondemand/talent-link/openapi.yaml"
  },
  {
    "name": "TalentLink",
    "numberOfMethods": 178,
    "categories": [
      "hr",
      "talent_management"
    ],
    "index": "talent-link/python",
    "language": "Python",
    "link": "/sdk/cornerstone-on-demand/talent-link/python/",
    "developerDocumentation": "developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cornerstone-ondemand/talent-link/openapi.yaml"
  },
  {
    "name": "TalentLink",
    "numberOfMethods": 178,
    "categories": [
      "hr",
      "talent_management"
    ],
    "index": "talent-link/java",
    "language": "Java",
    "link": "/sdk/cornerstone-on-demand/talent-link/java/",
    "developerDocumentation": "developer.lumesse-talenthub.com/rest-api-developers-guide/1.21.33/index.html?page=rest-api&subpage=developer-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cornerstone-ondemand/talent-link/openapi.yaml"
  }
];

export default function CornerstoneOnDemand() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Cornerstone OnDemand"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cornerstone-ondemand/talent-link/favicon.png"
      sdks={sdks}
      homepage="www.cornerstoneondemand.com"
      companyKebabCase="cornerstone-on-demand"
      categories={allCategories}
      metaDescription={`Cornerstone OnDemand provides comprehensive talent management solutions to help organizations recruit, develop, and retain top talent. Their cloud-based platform offers tools for learning, performance, and HR management, empowering businesses to drive employee engagement and success.`}
    />
  )
}