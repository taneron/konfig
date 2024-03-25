import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BambooHR",
    "numberOfMethods": 164,
    "categories": [
      "hr",
      "hr_dashboard",
      "hr_reporting",
      "human_resources",
      "hr_analytics",
      "hr_metrics",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "talent_management",
      "employee_engagement",
      "hr_platform",
      "personnel_management",
      "hris",
      "hr_software",
      "human_resource_information_system",
      "human_resource_management_system",
      "employee_selfservice",
      "manager_selfservice",
      "payroll"
    ],
    "index": "bamboo-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/bamboo-hr/typescript/",
    "developerDocumentation": "documentation.bamboohr.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bamboohr/openapi.yaml"
  },
  {
    "name": "BambooHR",
    "numberOfMethods": 164,
    "categories": [
      "hr",
      "hr_dashboard",
      "hr_reporting",
      "human_resources",
      "hr_analytics",
      "hr_metrics",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "talent_management",
      "employee_engagement",
      "hr_platform",
      "personnel_management",
      "hris",
      "hr_software",
      "human_resource_information_system",
      "human_resource_management_system",
      "employee_selfservice",
      "manager_selfservice",
      "payroll"
    ],
    "index": "bamboo-hr/python",
    "language": "Python",
    "link": "/sdk/bamboo-hr/python/",
    "developerDocumentation": "documentation.bamboohr.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bamboohr/openapi.yaml"
  },
  {
    "name": "BambooHR",
    "numberOfMethods": 164,
    "categories": [
      "hr",
      "hr_dashboard",
      "hr_reporting",
      "human_resources",
      "hr_analytics",
      "hr_metrics",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "talent_management",
      "employee_engagement",
      "hr_platform",
      "personnel_management",
      "hris",
      "hr_software",
      "human_resource_information_system",
      "human_resource_management_system",
      "employee_selfservice",
      "manager_selfservice",
      "payroll"
    ],
    "index": "bamboo-hr/java",
    "language": "Java",
    "link": "/sdk/bamboo-hr/java/",
    "developerDocumentation": "documentation.bamboohr.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bamboohr/openapi.yaml"
  }
];

export default function BambooHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BambooHR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bamboohr/favicon.png"
      sdks={sdks}
      homepage="bamboohr.com"
      companyKebabCase="bamboo-hr"
      categories={allCategories}
      metaDescription={`Serving more than 34,000 customers and 3 million employees, BambooHR is the leading software provider powering the strategic evolution of HR in small and medium businesses.

BambooHR's cloud-based system is an intuitive, affordable way for growing companies to manage essential employee information in a personalized Human Resources Information System (HRIS). Its software sets HR free to do great work and be more strategic, which helps the entire organization do the same. BambooHR's clients include innovators like SoundCloud, Foursquare, Freshbooks, Stance, Reddit, Magnolia Homes, and others in more than 100 countries and 8 languages worldwide. To find out more, visit bamboohr.com or follow on Twitter at @bamboohr.`}
    />
  )
}