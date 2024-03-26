import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SuprSend",
    "numberOfMethods": 26,
    "categories": [
      "communication",
      "notifications",
      "android_push",
      "ios_push",
      "email",
      "sms",
      "whatsapp",
      "slack",
      "microsoft_teams",
      "telegram",
      "web_push",
      "notification_infrastructure"
    ],
    "index": "supr-send/typescript",
    "language": "TypeScript",
    "link": "/sdk/supr-send/typescript/",
    "developerDocumentation": "docs.suprsend.com/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/suprsend/openapi.yaml"
  },
  {
    "name": "SuprSend",
    "numberOfMethods": 26,
    "categories": [
      "communication",
      "notifications",
      "android_push",
      "ios_push",
      "email",
      "sms",
      "whatsapp",
      "slack",
      "microsoft_teams",
      "telegram",
      "web_push",
      "notification_infrastructure"
    ],
    "index": "supr-send/python",
    "language": "Python",
    "link": "/sdk/supr-send/python/",
    "developerDocumentation": "docs.suprsend.com/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/suprsend/openapi.yaml"
  },
  {
    "name": "SuprSend",
    "numberOfMethods": 26,
    "categories": [
      "communication",
      "notifications",
      "android_push",
      "ios_push",
      "email",
      "sms",
      "whatsapp",
      "slack",
      "microsoft_teams",
      "telegram",
      "web_push",
      "notification_infrastructure"
    ],
    "index": "supr-send/java",
    "language": "Java",
    "link": "/sdk/supr-send/java/",
    "developerDocumentation": "docs.suprsend.com/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/suprsend/openapi.yaml"
  }
];

export default function SuprSend() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SuprSend"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/suprsend/favicon.png"
      sdks={sdks}
      homepage="suprsend.com"
      companyKebabCase="supr-send"
      categories={allCategories}
      metaDescription={`SuprSend is a central communication stack for easily creating, managing and delivering notifications to your end users on multiple channels. Our single notification API has all the features set, which enables you to send notifications in a reliable and scalable manner and take care of end user experience, thereby eliminating the need to develop any notification service in-house for transactional/engagement notifications.`}
    />
  )
}