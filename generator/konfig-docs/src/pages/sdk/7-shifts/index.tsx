import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "7shifts",
    "numberOfMethods": 138,
    "categories": [
      "team_management",
      "restaurant",
      "scheduling",
      "labor_costs",
      "team_communication",
      "workforce_insights",
      "hr_metrics",
      "hr_analytics",
      "hr_reporting",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "food_beverages",
      "restaurants",
      "staff_scheduling",
      "restaurant_scheduling",
      "restaurant_communication",
      "scheduling_software",
      "labor_tools",
      "staff_management"
    ],
    "index": "7-shifts/typescript",
    "language": "TypeScript",
    "link": "/sdk/7-shifts/typescript/",
    "developerDocumentation": "developers.7shifts.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/7-shifts/openapi.yaml"
  },
  {
    "name": "7shifts",
    "numberOfMethods": 138,
    "categories": [
      "team_management",
      "restaurant",
      "scheduling",
      "labor_costs",
      "team_communication",
      "workforce_insights",
      "hr_metrics",
      "hr_analytics",
      "hr_reporting",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "food_beverages",
      "restaurants",
      "staff_scheduling",
      "restaurant_scheduling",
      "restaurant_communication",
      "scheduling_software",
      "labor_tools",
      "staff_management"
    ],
    "index": "7-shifts/python",
    "language": "Python",
    "link": "/sdk/7-shifts/python/",
    "developerDocumentation": "developers.7shifts.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/7-shifts/openapi.yaml"
  },
  {
    "name": "7shifts",
    "numberOfMethods": 138,
    "categories": [
      "team_management",
      "restaurant",
      "scheduling",
      "labor_costs",
      "team_communication",
      "workforce_insights",
      "hr_metrics",
      "hr_analytics",
      "hr_reporting",
      "workforce_planning",
      "human_capital_management",
      "workforce_solutions",
      "food_beverages",
      "restaurants",
      "staff_scheduling",
      "restaurant_scheduling",
      "restaurant_communication",
      "scheduling_software",
      "labor_tools",
      "staff_management"
    ],
    "index": "7-shifts/java",
    "language": "Java",
    "link": "/sdk/7-shifts/java/",
    "developerDocumentation": "developers.7shifts.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/7-shifts/openapi.yaml"
  }
];

export default function Sdk7Shifts() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="7shifts"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/7-shifts/favicon.jpg"
      sdks={sdks}
      homepage="7shifts.com"
      companyKebabCase="7-shifts"
      categories={allCategories}
      metaDescription={`7shifts is a team management software designed for restaurants. We help managers and operators spend less time and effort scheduling their staff, reduce their monthly labor costs and improve team communication. The result is simplified team management, one shift at a time.

7shifts also offers free mobile apps (iOS and Android) allowing managers and employees to have everything at their fingertips.

Start your free trial or request a demo at www.7shifts.com.`}
    />
  )
}