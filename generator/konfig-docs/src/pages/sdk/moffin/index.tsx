import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Moffin",
    "numberOfMethods": 36,
    "categories": [
      "financial_services",
      "fintech",
      "data_integration",
      "kyc"
    ],
    "index": "moffin/typescript",
    "language": "TypeScript",
    "link": "/sdk/moffin/typescript/",
    "developerDocumentation": "moffin.mx/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/moffin/openapi.yaml"
  },
  {
    "name": "Moffin",
    "numberOfMethods": 36,
    "categories": [
      "financial_services",
      "fintech",
      "data_integration",
      "kyc"
    ],
    "index": "moffin/python",
    "language": "Python",
    "link": "/sdk/moffin/python/",
    "developerDocumentation": "moffin.mx/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/moffin/openapi.yaml"
  },
  {
    "name": "Moffin",
    "numberOfMethods": 36,
    "categories": [
      "financial_services",
      "fintech",
      "data_integration",
      "kyc"
    ],
    "index": "moffin/java",
    "language": "Java",
    "link": "/sdk/moffin/java/",
    "developerDocumentation": "moffin.mx/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/moffin/openapi.yaml"
  }
];

export default function Moffin() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Moffin"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/moffin/favicon.png"
      sdks={sdks}
      homepage="moffin.mx/"
      companyKebabCase="moffin"
      categories={allCategories}
      metaDescription={`Moffin is a leading data integration platform as a service (iPaaS) company that helps its customers digitize client screening and credit analysis. More than 60 companies across Mexico, in industries ranging from financial services to pharmaceuticals, trust Moffin's modern financial infrastructure for the KYC needs. Moffin allows clients to access its platform through either a REST API or no-code forms, saving them tens of thousands of dollars and months of delays from trying to create an in-house client screening solution. Moffin is backed by Ralicap, AngelHub, and Yaydoo.`}
    />
  )
}