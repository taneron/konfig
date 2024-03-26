import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Cleemy Expenses",
    "numberOfMethods": 6,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "cleemy-expenses/typescript",
    "language": "TypeScript",
    "link": "/sdk/lucca/cleemy-expenses/typescript/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/cleemy-expenses/openapi.yaml"
  },
  {
    "name": "Cleemy Expenses",
    "numberOfMethods": 6,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "cleemy-expenses/python",
    "language": "Python",
    "link": "/sdk/lucca/cleemy-expenses/python/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/cleemy-expenses/openapi.yaml"
  },
  {
    "name": "Cleemy Expenses",
    "numberOfMethods": 6,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "cleemy-expenses/java",
    "language": "Java",
    "link": "/sdk/lucca/cleemy-expenses/java/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/cleemy-expenses/openapi.yaml"
  },
  {
    "name": "Directory",
    "numberOfMethods": 4,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "directory/typescript",
    "language": "TypeScript",
    "link": "/sdk/lucca/directory/typescript/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/directory/openapi.yaml"
  },
  {
    "name": "Directory",
    "numberOfMethods": 4,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "directory/python",
    "language": "Python",
    "link": "/sdk/lucca/directory/python/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/directory/openapi.yaml"
  },
  {
    "name": "Directory",
    "numberOfMethods": 4,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "directory/java",
    "language": "Java",
    "link": "/sdk/lucca/directory/java/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/directory/openapi.yaml"
  },
  {
    "name": "Timmi Absences",
    "numberOfMethods": 14,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "timmi-absences/typescript",
    "language": "TypeScript",
    "link": "/sdk/lucca/timmi-absences/typescript/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-absences/openapi.yaml"
  },
  {
    "name": "Timmi Absences",
    "numberOfMethods": 14,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "timmi-absences/python",
    "language": "Python",
    "link": "/sdk/lucca/timmi-absences/python/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-absences/openapi.yaml"
  },
  {
    "name": "Timmi Absences",
    "numberOfMethods": 14,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "timmi-absences/java",
    "language": "Java",
    "link": "/sdk/lucca/timmi-absences/java/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-absences/openapi.yaml"
  },
  {
    "name": "Organization",
    "numberOfMethods": 9,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "organization/typescript",
    "language": "TypeScript",
    "link": "/sdk/lucca/organization/typescript/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/organization/openapi.yaml"
  },
  {
    "name": "Organization",
    "numberOfMethods": 9,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "organization/python",
    "language": "Python",
    "link": "/sdk/lucca/organization/python/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/organization/openapi.yaml"
  },
  {
    "name": "Organization",
    "numberOfMethods": 9,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "organization/java",
    "language": "Java",
    "link": "/sdk/lucca/organization/java/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/organization/openapi.yaml"
  },
  {
    "name": "Timmi Timesheet",
    "numberOfMethods": 18,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "timmi-timesheet/typescript",
    "language": "TypeScript",
    "link": "/sdk/lucca/timmi-timesheet/typescript/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-timesheet/openapi.yaml"
  },
  {
    "name": "Timmi Timesheet",
    "numberOfMethods": 18,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "timmi-timesheet/python",
    "language": "Python",
    "link": "/sdk/lucca/timmi-timesheet/python/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-timesheet/openapi.yaml"
  },
  {
    "name": "Timmi Timesheet",
    "numberOfMethods": 18,
    "categories": [
      "hr",
      "hr_management",
      "resource_management",
      "human_resources",
      "scheduling",
      "time_management",
      "attendance_management",
      "hr_automation"
    ],
    "index": "timmi-timesheet/java",
    "language": "Java",
    "link": "/sdk/lucca/timmi-timesheet/java/",
    "developerDocumentation": "developers.lucca.fr/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lucca/timmi-timesheet/openapi.yaml"
  }
];

export default function Lucca() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Lucca"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lucca/cleemy-expenses/favicon.png"
      sdks={sdks}
      homepage="lucca-hr.com"
      companyKebabCase="lucca"
      categories={allCategories}
      metaDescription={`Nereo est un éditeur de logiciels de gestion des ressources humaines, basé à Saint Etienne, qui propose à ses clients des solutions accessibles en ligne pour faciliter des tâches chronophages et sans réelle valeur ajoutée telles que la gestion des congés, des temps et activités ou encore des notes de frais.

Créée en décembre 2011, Nereo propose déjà une solution complète de gestion de congés et absences en mode SaaS baptisée Nereo Congés.`}
    />
  )
}