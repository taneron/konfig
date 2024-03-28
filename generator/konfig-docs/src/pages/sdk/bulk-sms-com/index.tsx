import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BulkSMS.com",
    "numberOfMethods": 15,
    "categories": [
      "messaging",
      "sms",
      "communications",
      "sms_api",
      "sms_messaging",
      "personalised_sms_messaging",
      "scheduled_sms_messaging",
      "sms_software"
    ],
    "index": "bulk-sms-com/typescript",
    "language": "TypeScript",
    "link": "/sdk/bulk-sms-com/typescript/",
    "developerDocumentation": "www.bulksms.com/developer/json/v1/#",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bulksms-com/openapi.yaml"
  },
  {
    "name": "BulkSMS.com",
    "numberOfMethods": 15,
    "categories": [
      "messaging",
      "sms",
      "communications",
      "sms_api",
      "sms_messaging",
      "personalised_sms_messaging",
      "scheduled_sms_messaging",
      "sms_software"
    ],
    "index": "bulk-sms-com/python",
    "language": "Python",
    "link": "/sdk/bulk-sms-com/python/",
    "developerDocumentation": "www.bulksms.com/developer/json/v1/#",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bulksms-com/openapi.yaml"
  },
  {
    "name": "BulkSMS.com",
    "numberOfMethods": 15,
    "categories": [
      "messaging",
      "sms",
      "communications",
      "sms_api",
      "sms_messaging",
      "personalised_sms_messaging",
      "scheduled_sms_messaging",
      "sms_software"
    ],
    "index": "bulk-sms-com/java",
    "language": "Java",
    "link": "/sdk/bulk-sms-com/java/",
    "developerDocumentation": "www.bulksms.com/developer/json/v1/#",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bulksms-com/openapi.yaml"
  }
];

export default function BulkSmsCom() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BulkSMS.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bulksms-com/favicon.png"
      sdks={sdks}
      homepage="www.bulksms.com/"
      companyKebabCase="bulk-sms-com"
      categories={allCategories}
      metaDescription={`BulkSMS.com is a leading SMS messaging service provider offering two-way SMS communications. The BulkSMS gateway reaches across borders and connects to over 800 mobile network operators worldwide.`}
    />
  )
}