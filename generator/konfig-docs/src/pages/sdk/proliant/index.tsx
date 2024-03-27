import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Proliant",
    "numberOfMethods": 187,
    "categories": [
      "payroll"
    ],
    "index": "proliant/typescript",
    "language": "TypeScript",
    "link": "/sdk/proliant/typescript/",
    "developerDocumentation": "www.readypayonline.com/CompanyAPI/swagger/ui/index#!/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proliant/openapi.yaml"
  },
  {
    "name": "Proliant",
    "numberOfMethods": 187,
    "categories": [
      "payroll"
    ],
    "index": "proliant/python",
    "language": "Python",
    "link": "/sdk/proliant/python/",
    "developerDocumentation": "www.readypayonline.com/CompanyAPI/swagger/ui/index#!/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proliant/openapi.yaml"
  },
  {
    "name": "Proliant",
    "numberOfMethods": 187,
    "categories": [
      "payroll"
    ],
    "index": "proliant/java",
    "language": "Java",
    "link": "/sdk/proliant/java/",
    "developerDocumentation": "www.readypayonline.com/CompanyAPI/swagger/ui/index#!/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/proliant/openapi.yaml"
  }
];

export default function Proliant() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Proliant"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/proliant/favicon.png"
      sdks={sdks}
      homepage="proliant.com"
      companyKebabCase="proliant"
      categories={allCategories}
      metaDescription={`Proliant provides a fully integrated, cloud-based human capital management solution that simplifies payroll and HR processes, improves accuracy, and ensures industry compliance. From day one, Proliant's dedicated account managers work closely with clients to ensure they get the most out of their investment.

Our all-in-one solution simplifies every aspect of workforce and talent management across the entire employment life cycle. Everyone in your organization—from the C-suite to managers and employees—benefits from using Proliant's easy to use, innovative platform. Our people are dedicated to helping your team manage their most critical assets—your people.

Proliant delivers a perfect balance of technology and services supported by experienced industry experts. Over the years we have invested time in developing innovative products that solve complex regulatory issues. Proliant is the workforce management solution of choice for over 4,000 companies nationwide.

"Proliant has done a great job managing all of our HR and tax service needs, but it's their people and customer service that have made Proliant our most preferred vendor."  - CFO for a prominent Atlanta legal firm`}
    />
  )
}