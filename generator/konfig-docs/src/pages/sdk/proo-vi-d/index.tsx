import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "PROOViD",
    "numberOfMethods": 31,
    "categories": [
      "regtech",
      "risk_management",
      "kyc",
      "aml"
    ],
    "index": "proo-vi-d/typescript",
    "language": "TypeScript",
    "link": "/sdk/proo-vi-d/typescript/",
    "developerDocumentation": "proovidapi.azurewebsites.net/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proovid/openapi.yaml"
  },
  {
    "name": "PROOViD",
    "numberOfMethods": 31,
    "categories": [
      "regtech",
      "risk_management",
      "kyc",
      "aml"
    ],
    "index": "proo-vi-d/python",
    "language": "Python",
    "link": "/sdk/proo-vi-d/python/",
    "developerDocumentation": "proovidapi.azurewebsites.net/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proovid/openapi.yaml"
  },
  {
    "name": "PROOViD",
    "numberOfMethods": 31,
    "categories": [
      "regtech",
      "risk_management",
      "kyc",
      "aml"
    ],
    "index": "proo-vi-d/java",
    "language": "Java",
    "link": "/sdk/proo-vi-d/java/",
    "developerDocumentation": "proovidapi.azurewebsites.net/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proovid/openapi.yaml"
  }
];

export default function ProoViD() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="PROOViD"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proovid/favicon.png"
      sdks={sdks}
      homepage="www.proovid.com/"
      companyKebabCase="proo-vi-d"
      categories={allCategories}
      metaDescription={`PROOViD is a regulatory technology (RegTech) company based in Nicosia, Cyprus consisting of a multi-disciplinary team of Compliance / AML Experts, who over the years have built a consolidated system comprising a fully Integrated one-stop shop offering for KYC and Risk Management.`}
    />
  )
}