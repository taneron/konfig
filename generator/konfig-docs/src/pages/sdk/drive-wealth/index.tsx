import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "DriveWealth",
    "numberOfMethods": 111,
    "categories": [
      "financial_services",
      "wealth_management",
      "fintech",
      "financial_technology",
      "finance"
    ],
    "index": "drive-wealth/typescript",
    "language": "TypeScript",
    "link": "/sdk/drive-wealth/typescript/",
    "developerDocumentation": "developer.drivewealth.com/apis/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/drivewealth/openapi.yaml"
  },
  {
    "name": "DriveWealth",
    "numberOfMethods": 111,
    "categories": [
      "financial_services",
      "wealth_management",
      "fintech",
      "financial_technology",
      "finance"
    ],
    "index": "drive-wealth/python",
    "language": "Python",
    "link": "/sdk/drive-wealth/python/",
    "developerDocumentation": "developer.drivewealth.com/apis/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/drivewealth/openapi.yaml"
  },
  {
    "name": "DriveWealth",
    "numberOfMethods": 111,
    "categories": [
      "financial_services",
      "wealth_management",
      "fintech",
      "financial_technology",
      "finance"
    ],
    "index": "drive-wealth/java",
    "language": "Java",
    "link": "/sdk/drive-wealth/java/",
    "developerDocumentation": "developer.drivewealth.com/apis/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/drivewealth/openapi.yaml"
  }
];

export default function DriveWealth() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="DriveWealth"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/drivewealth/favicon.png"
      sdks={sdks}
      homepage="www.drivewealth.com/"
      companyKebabCase="drive-wealth"
      categories={allCategories}
      metaDescription={`DriveWealth is the pioneer of fractional equities trading and embedded investing. We are a visionary technology company that empowers more than 100 partners around the world to engage their customers by placing the markets in the palm of their hand. We believe the future is fractional, transactional and mobile. Every mobile device should be a gateway to accessing investing and savings products, services, advice, and assistance for global citizens of all ages, wealth stages, and levels of financial expertise. DriveWealth's unparalleled consultative support and cloud-based, industrial strength technology platform allow partners to seamlessly offer branded investing experiences to drive customer acquisition, loyalty, retention, and revenue growth. DriveWealth's commitment to continuous evolution and innovation makes it the partner of choice for powering the future of investing. For more information, please visit drivewealth.com or connect with us on Twitter @DriveWealth.‍`}
    />
  )
}