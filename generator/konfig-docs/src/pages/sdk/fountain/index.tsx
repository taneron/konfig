import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Fountain",
    "numberOfMethods": 80,
    "categories": [
      "recruiting",
      "remote_work",
      "hr"
    ],
    "index": "fountain/typescript",
    "language": "TypeScript",
    "link": "/sdk/fountain/typescript/",
    "developerDocumentation": "developer.fountain.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fountain/openapi.yaml"
  },
  {
    "name": "Fountain",
    "numberOfMethods": 80,
    "categories": [
      "recruiting",
      "remote_work",
      "hr"
    ],
    "index": "fountain/python",
    "language": "Python",
    "link": "/sdk/fountain/python/",
    "developerDocumentation": "developer.fountain.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fountain/openapi.yaml"
  },
  {
    "name": "Fountain",
    "numberOfMethods": 80,
    "categories": [
      "recruiting",
      "remote_work",
      "hr"
    ],
    "index": "fountain/java",
    "language": "Java",
    "link": "/sdk/fountain/java/",
    "developerDocumentation": "developer.fountain.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fountain/openapi.yaml"
  }
];

export default function Fountain() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Fountain"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fountain/favicon.png"
      sdks={sdks}
      homepage="fountain.com"
      companyKebabCase="fountain"
      categories={allCategories}
      metaDescription={`Fountain's all-in-one high volume hiring platform empowers the world's leading enterprises to find the right people through smart, fast, and seamless recruiting. Candidates can apply anytime, anywhere in minutes, right from their phone. Automated and customizable processes streamline the candidate experience and save time for recruitment teams so they can scale with growing hiring needs. Advanced analytics provide end-to-end process visibility so managers can make swift, data-driven decisions. Throughout the candidate journey, the openly integrated platform enables companies to find, qualify and convert more applicants. Fountain's global customers hire over 1.2 million workers annually in 78 countries.

Why Work with Us:

- Generous compensation, San Francisco rate compensation regardless of location in US
- 100% Remote and Flexible Hours
- Unlimited PTO
- Equity grants
- Comprehensive healthcare benefits
- 16 weeks paid parental leave for all parents
- Wellness and gym reimbursement
- Home office stipend
- Phone stipend
- 401K plan
- Learning and development reimbursement
- Company events
- FSA & HSA
- Life Insurance & Long-Term Disability/Short-Term Disability

Visit us at https://get.fountain.com to learn more.`}
    />
  )
}