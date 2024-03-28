import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Brevo",
    "numberOfMethods": 221,
    "categories": [
      "email",
      "sms",
      "chat"
    ],
    "index": "brevo/typescript",
    "language": "TypeScript",
    "link": "/sdk/brevo/typescript/",
    "developerDocumentation": "developers.brevo.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brevo/openapi.yaml"
  },
  {
    "name": "Brevo",
    "numberOfMethods": 221,
    "categories": [
      "email",
      "sms",
      "chat"
    ],
    "index": "brevo/python",
    "language": "Python",
    "link": "/sdk/brevo/python/",
    "developerDocumentation": "developers.brevo.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brevo/openapi.yaml"
  },
  {
    "name": "Brevo",
    "numberOfMethods": 221,
    "categories": [
      "email",
      "sms",
      "chat"
    ],
    "index": "brevo/java",
    "language": "Java",
    "link": "/sdk/brevo/java/",
    "developerDocumentation": "developers.brevo.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/brevo/openapi.yaml"
  }
];

export default function Brevo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Brevo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/brevo/favicon.png"
      sdks={sdks}
      homepage="brevo.com"
      companyKebabCase="brevo"
      categories={allCategories}
      metaDescription={`Brevo, formerly known as Sendinblue, is the leading customer relationship management (CRM) suite designed to fully cultivate long-term customer relationships and to empower businesses to expand in a fast changing digital world. With Brevo, businesses have a unified view of the customer journey in one easy-to-use platform to grow meaningful relationships.

🙌Brevo Fun Facts 🙌
- Founded in 2012 by Armand Thiberge with a mission to help businesses of all sizes build stronger customer relationships and grow beyond their wildest dreams
- 500,000 customers across 180 countries 
- Fully compliant with GDPR regulations
- Service and platform available in six languages
- Headquartered in Paris with eight other offices in Seattle, Toronto, Berlin, Vienna, Sofia, Noida, and Bengaluru
- 700+ talented employees representing over 67 nationalities
- Continuous efforts to reduce and monitor its carbon footprint
- Achieved centaur status—$100M in ARR—in 2022 
- Award wins include Top 100 Software Company by The Software Report (TSR), Stevie Award: Relationship Management Solution, MarTech Breakthrough Award: Best Overall Marketing Automation Platform, G2: Leader Winter, Leader Enterprise Winter, Best Results Mid-Market, Best Software Awards: Top 50 Marketing Products, Best Software Awards: Top 100 Fastest Growing Products`}
    />
  )
}