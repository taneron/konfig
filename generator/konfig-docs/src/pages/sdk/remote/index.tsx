import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Remote",
    "numberOfMethods": 79,
    "categories": [
      "remote",
      "hr",
      "hr_platform",
      "global_employment",
      "remote_work",
      "remote_hiring"
    ],
    "index": "remote/typescript",
    "language": "TypeScript",
    "link": "/sdk/remote/typescript/",
    "developerDocumentation": "gateway.remote.com/v1/docs/openapi.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/remote/openapi.yaml"
  },
  {
    "name": "Remote",
    "numberOfMethods": 79,
    "categories": [
      "remote",
      "hr",
      "hr_platform",
      "global_employment",
      "remote_work",
      "remote_hiring"
    ],
    "index": "remote/python",
    "language": "Python",
    "link": "/sdk/remote/python/",
    "developerDocumentation": "gateway.remote.com/v1/docs/openapi.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/remote/openapi.yaml"
  },
  {
    "name": "Remote",
    "numberOfMethods": 79,
    "categories": [
      "remote",
      "hr",
      "hr_platform",
      "global_employment",
      "remote_work",
      "remote_hiring"
    ],
    "index": "remote/java",
    "language": "Java",
    "link": "/sdk/remote/java/",
    "developerDocumentation": "gateway.remote.com/v1/docs/openapi.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/remote/openapi.yaml"
  }
];

export default function Remote() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Remote"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/remote/favicon.png"
      sdks={sdks}
      homepage="remote.com"
      companyKebabCase="remote"
      categories={allCategories}
      metaDescription={`Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom.

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more.

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.`}
    />
  )
}