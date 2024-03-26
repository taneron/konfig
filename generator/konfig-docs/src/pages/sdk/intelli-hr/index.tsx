import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "intelliHR",
    "numberOfMethods": 128,
    "categories": [
      "hr",
      "hr_management",
      "hr_software",
      "human_resources",
      "people_management_platform",
      "hr_platform",
      "hr_management_system",
      "hr_services",
      "hr_solutions",
      "employee_engagement",
      "talent_management",
      "human_resource_management",
      "hr_systems",
      "people_analytics",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "talent_acquisition_analytics",
      "people_management_software",
      "hris",
      "people",
      "strategic_hr",
      "culture",
      "people_decisions"
    ],
    "index": "intelli-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/intelli-hr/typescript/",
    "developerDocumentation": "developers.intellihr.io/docs/v1/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intellihr/openapi.yaml"
  },
  {
    "name": "intelliHR",
    "numberOfMethods": 128,
    "categories": [
      "hr",
      "hr_management",
      "hr_software",
      "human_resources",
      "people_management_platform",
      "hr_platform",
      "hr_management_system",
      "hr_services",
      "hr_solutions",
      "employee_engagement",
      "talent_management",
      "human_resource_management",
      "hr_systems",
      "people_analytics",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "talent_acquisition_analytics",
      "people_management_software",
      "hris",
      "people",
      "strategic_hr",
      "culture",
      "people_decisions"
    ],
    "index": "intelli-hr/python",
    "language": "Python",
    "link": "/sdk/intelli-hr/python/",
    "developerDocumentation": "developers.intellihr.io/docs/v1/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intellihr/openapi.yaml"
  },
  {
    "name": "intelliHR",
    "numberOfMethods": 128,
    "categories": [
      "hr",
      "hr_management",
      "hr_software",
      "human_resources",
      "people_management_platform",
      "hr_platform",
      "hr_management_system",
      "hr_services",
      "hr_solutions",
      "employee_engagement",
      "talent_management",
      "human_resource_management",
      "hr_systems",
      "people_analytics",
      "hr_metrics",
      "hr_analytics",
      "hr_dashboard",
      "hr_reporting",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "talent_acquisition_analytics",
      "people_management_software",
      "hris",
      "people",
      "strategic_hr",
      "culture",
      "people_decisions"
    ],
    "index": "intelli-hr/java",
    "language": "Java",
    "link": "/sdk/intelli-hr/java/",
    "developerDocumentation": "developers.intellihr.io/docs/v1/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/intellihr/openapi.yaml"
  }
];

export default function IntelliHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="intelliHR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/intellihr/favicon.png"
      sdks={sdks}
      homepage="intellihr.com"
      companyKebabCase="intelli-hr"
      categories={allCategories}
      metaDescription={`IntelliHR, a Humanforce company, is an intelligent people platform that's revolutionising human resources management by empowering global HR leaders to foster inclusive, engaging, high-performing, and aligned workplace cultures.

Designed for today's hybrid work environment, intelliHR's cloud-based platform seamlessly enhances employee engagement, performance, and retention. With ease of implementation, best-of-breed integrations, and robust data-driven capabilities, intelliHR is the preferred HR software for hundreds of forward-thinking organisations and 70,000 users globally. 

Ideal for mid-to-large-sized businesses, intelliHR offers comprehensive features, including:
•	centralised data management
•	seamless onboarding
•	automated reviews
•	goal tracking
•	continuous feedback
•	engagement surveys
•	compliance management

Its full configurability ensures a tailored fit for specific needs, while advanced people analytics empower HR leaders and executive teams to make informed, strategic decisions. IntelliHR is not just software; it's a strategic partner dedicated to optimising workforce management and creating impactful workplace experiences for sustained success across diverse industries and geographies.`}
    />
  )
}