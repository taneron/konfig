import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Prolific",
    "numberOfMethods": 78,
    "categories": [
      "research",
      "data_collection",
      "platform",
      "participant_management",
      "researchers",
      "data_quality",
      "user_testing",
      "academic",
      "surveys",
      "online_research"
    ],
    "index": "prolific/typescript",
    "language": "TypeScript",
    "link": "/sdk/prolific/typescript/",
    "developerDocumentation": "docs.prolific.com/docs/api-docs/public/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/prolific/openapi.yaml"
  },
  {
    "name": "Prolific",
    "numberOfMethods": 78,
    "categories": [
      "research",
      "data_collection",
      "platform",
      "participant_management",
      "researchers",
      "data_quality",
      "user_testing",
      "academic",
      "surveys",
      "online_research"
    ],
    "index": "prolific/python",
    "language": "Python",
    "link": "/sdk/prolific/python/",
    "developerDocumentation": "docs.prolific.com/docs/api-docs/public/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/prolific/openapi.yaml"
  },
  {
    "name": "Prolific",
    "numberOfMethods": 78,
    "categories": [
      "research",
      "data_collection",
      "platform",
      "participant_management",
      "researchers",
      "data_quality",
      "user_testing",
      "academic",
      "surveys",
      "online_research"
    ],
    "index": "prolific/java",
    "language": "Java",
    "link": "/sdk/prolific/java/",
    "developerDocumentation": "docs.prolific.com/docs/api-docs/public/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/prolific/openapi.yaml"
  }
];

export default function Prolific() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Prolific"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/prolific/favicon.png"
      sdks={sdks}
      homepage="www.prolific.com/"
      companyKebabCase="prolific"
      categories={allCategories}
      metaDescription={`Prolific helps dedicated research teams to collect the very highest-quality human-powered data - at scale - using our simple-to-use platform to target and manage participants from our diverse, vetted participant pool.

The truth matters: the best decisions, and biggest discoveries, are built on the highest-quality data. And with the increasing proliferation of AI, access to reliable, diverse data to develop and train AI models has never been more important.

Created by researchers for researchers, Prolific was founded to provide a better way for researchers and organisations to get high-quality human data and feedback at scale for important research.

Now, more than 30,000 researchers across academia and industry use Prolific to gather definitive human data and feedback from reliable, engaged and fairly-treated participants – with a new study launched every 3 minutes.`}
    />
  )
}