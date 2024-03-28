import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "HiBob",
    "numberOfMethods": 93,
    "categories": [
      "hr",
      "human_resources",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "hr_management_system",
      "hr_softwares",
      "hr_management",
      "hr_platform",
      "personnel_management",
      "hris",
      "software",
      "hr_tech",
      "recruitment_software_business_process_outsourcing"
    ],
    "index": "hi-bob/typescript",
    "language": "TypeScript",
    "link": "/sdk/hi-bob/typescript/",
    "developerDocumentation": "apidocs.hibob.com/reference/getting-started-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hibob/openapi.yaml"
  },
  {
    "name": "HiBob",
    "numberOfMethods": 93,
    "categories": [
      "hr",
      "human_resources",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "hr_management_system",
      "hr_softwares",
      "hr_management",
      "hr_platform",
      "personnel_management",
      "hris",
      "software",
      "hr_tech",
      "recruitment_software_business_process_outsourcing"
    ],
    "index": "hi-bob/python",
    "language": "Python",
    "link": "/sdk/hi-bob/python/",
    "developerDocumentation": "apidocs.hibob.com/reference/getting-started-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hibob/openapi.yaml"
  },
  {
    "name": "HiBob",
    "numberOfMethods": 93,
    "categories": [
      "hr",
      "human_resources",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "hr_management_system",
      "hr_softwares",
      "hr_management",
      "hr_platform",
      "personnel_management",
      "hris",
      "software",
      "hr_tech",
      "recruitment_software_business_process_outsourcing"
    ],
    "index": "hi-bob/java",
    "language": "Java",
    "link": "/sdk/hi-bob/java/",
    "developerDocumentation": "apidocs.hibob.com/reference/getting-started-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hibob/openapi.yaml"
  }
];

export default function HiBob() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="HiBob"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hibob/favicon.png"
      sdks={sdks}
      homepage="hibob.com"
      companyKebabCase="hi-bob"
      categories={allCategories}
      metaDescription={`HiBob is on a mission to transform how organizations operate in the modern world of work with its HR platform, "Bob." Leading the way for the future workplace, Bob offers resilient, agile technology that wraps all the complexities of HR processes into a game-changing, user-friendly tool that touches every employee across the business.

Since late 2015, trusted and empowered "Bobbers" from around the world have brought their authentic selves to work, inspired to build our exceptional HR systems that will revolutionize the work experience for HR professionals, managers, and employees alike. Agile and adaptable, HiBob innovates through continuous learning loops to produce seismic cultural shifts for companies with dynamic, distributed workforces. Organizations using Bob are able to accelerate hiring, retain the best talent, and elevate employee engagement.`}
    />
  )
}