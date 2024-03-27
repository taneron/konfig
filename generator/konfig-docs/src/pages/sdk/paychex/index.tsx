import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Paychex",
    "numberOfMethods": 97,
    "categories": [
      "hr",
      "payroll",
      "benefits"
    ],
    "index": "paychex/typescript",
    "language": "TypeScript",
    "link": "/sdk/paychex/typescript/",
    "developerDocumentation": "developer.paychex.com/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paychex/openapi.yaml"
  },
  {
    "name": "Paychex",
    "numberOfMethods": 97,
    "categories": [
      "hr",
      "payroll",
      "benefits"
    ],
    "index": "paychex/python",
    "language": "Python",
    "link": "/sdk/paychex/python/",
    "developerDocumentation": "developer.paychex.com/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paychex/openapi.yaml"
  },
  {
    "name": "Paychex",
    "numberOfMethods": 97,
    "categories": [
      "hr",
      "payroll",
      "benefits"
    ],
    "index": "paychex/java",
    "language": "Java",
    "link": "/sdk/paychex/java/",
    "developerDocumentation": "developer.paychex.com/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paychex/openapi.yaml"
  }
];

export default function Paychex() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Paychex"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paychex/favicon.png"
      sdks={sdks}
      homepage="paychex.com"
      companyKebabCase="paychex"
      categories={allCategories}
      metaDescription={`As the future of work continues to evolve, Paychex leads the way by making complex HR, payroll, and benefits brilliantly simple. Our unique combination of digital HR technology and advisory solutions meets the changing needs of employers and their employees. You can see the results in our growth as an HR leader and the positive returns we deliver to our shareholders.

Paychex, Inc. (Nasdaq:PAYX) is a leading provider of integrated human capital management solutions for payroll, benefits, human resources, and insurance services.

-Industry expertise since 1971
~740,000 business clients in the U.S. and Europe
-Pays 1 in 12 U.S. private sector employees
-A top HR outsourcer — serving 2.2M worksite employees through our HR outsourcing solutions

Information regarding licensing can be found on the NMLS consumer access website, www.nmlsconsumeraccess.org. The Commissioner of Financial Regulation for the State of Maryland will accept all questions or complaints from Maryland residents regarding Paychex, Inc. (1029977) at:

500 North Calvert Street, Suite 402
Baltimore, Maryland 21202
888-784-0136`}
    />
  )
}