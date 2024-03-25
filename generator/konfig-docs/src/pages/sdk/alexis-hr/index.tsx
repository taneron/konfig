import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "AlexisHR",
    "numberOfMethods": 92,
    "categories": [
      "hr",
      "work_management",
      "human_resources",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "talent_management",
      "hrms",
      "people_management_platform",
      "hr_systems",
      "hr_services",
      "hr_solutions",
      "hr_tech",
      "employee_engagement",
      "hr_platform",
      "personnel_management",
      "hris",
      "people_analytics",
      "whistleblowing",
      "reviews"
    ],
    "index": "alexis-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/alexis-hr/typescript/",
    "developerDocumentation": "docs.alexishr.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/alexishr/openapi.yaml"
  },
  {
    "name": "AlexisHR",
    "numberOfMethods": 92,
    "categories": [
      "hr",
      "work_management",
      "human_resources",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "talent_management",
      "hrms",
      "people_management_platform",
      "hr_systems",
      "hr_services",
      "hr_solutions",
      "hr_tech",
      "employee_engagement",
      "hr_platform",
      "personnel_management",
      "hris",
      "people_analytics",
      "whistleblowing",
      "reviews"
    ],
    "index": "alexis-hr/python",
    "language": "Python",
    "link": "/sdk/alexis-hr/python/",
    "developerDocumentation": "docs.alexishr.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/alexishr/openapi.yaml"
  },
  {
    "name": "AlexisHR",
    "numberOfMethods": 92,
    "categories": [
      "hr",
      "work_management",
      "human_resources",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "talent_management",
      "hrms",
      "people_management_platform",
      "hr_systems",
      "hr_services",
      "hr_solutions",
      "hr_tech",
      "employee_engagement",
      "hr_platform",
      "personnel_management",
      "hris",
      "people_analytics",
      "whistleblowing",
      "reviews"
    ],
    "index": "alexis-hr/java",
    "language": "Java",
    "link": "/sdk/alexis-hr/java/",
    "developerDocumentation": "docs.alexishr.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/alexishr/openapi.yaml"
  }
];

export default function AlexisHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="AlexisHR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/alexishr/favicon.png"
      sdks={sdks}
      homepage="alexishr.com"
      companyKebabCase="alexis-hr"
      categories={allCategories}
      metaDescription={`Alexis kompletta HR-plattform förenklar din och medarbetarnas vardag
genom automatisering och intuitiv hantering av personaladministration. 

Vi ger företag möjlighet att spara tid, fatta klokare beslut och i slutändan skapa en bättre arbetsplats. En modern och enkel lösning med samlad funktionalitet som låter dig arbeta datadrivet och hantera allt mellan onboarding till offboarding, men också tidrapportering, medarbetarsamtal och integrationer.

AlexisHR har kunder som NAKD, Bokio, Qred och används av företag och anställda i över 65 länder.`}
    />
  )
}