import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Podium",
    "numberOfMethods": 78,
    "categories": [
      "messaging",
      "reviews",
      "customer_communication",
      "reviews_recommendations",
      "online_reviews",
      "reputation_management",
      "review_analytics",
      "customer_reviews",
      "customer_interactions",
      "customer_engagement",
      "collect_payments",
      "text_marketing",
      "sms_marketing"
    ],
    "index": "podium/typescript",
    "language": "TypeScript",
    "link": "/sdk/podium/typescript/",
    "developerDocumentation": "docs.podium.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/podium/openapi.yaml"
  },
  {
    "name": "Podium",
    "numberOfMethods": 78,
    "categories": [
      "messaging",
      "reviews",
      "customer_communication",
      "reviews_recommendations",
      "online_reviews",
      "reputation_management",
      "review_analytics",
      "customer_reviews",
      "customer_interactions",
      "customer_engagement",
      "collect_payments",
      "text_marketing",
      "sms_marketing"
    ],
    "index": "podium/python",
    "language": "Python",
    "link": "/sdk/podium/python/",
    "developerDocumentation": "docs.podium.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/podium/openapi.yaml"
  },
  {
    "name": "Podium",
    "numberOfMethods": 78,
    "categories": [
      "messaging",
      "reviews",
      "customer_communication",
      "reviews_recommendations",
      "online_reviews",
      "reputation_management",
      "review_analytics",
      "customer_reviews",
      "customer_interactions",
      "customer_engagement",
      "collect_payments",
      "text_marketing",
      "sms_marketing"
    ],
    "index": "podium/java",
    "language": "Java",
    "link": "/sdk/podium/java/",
    "developerDocumentation": "docs.podium.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/podium/openapi.yaml"
  }
];

export default function Podium() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Podium"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/podium/favicon.png"
      sdks={sdks}
      homepage="podium.com"
      companyKebabCase="podium"
      categories={allCategories}
      metaDescription={`A few years back, Eric (Co-Founder and CEO) got a frustrated call from his dad. His dad's tire shop had plenty of happy customers, but only a handful of angry ones were leaving reviews. So we built a product that made getting more reviews as easy as sending a text.

Launching in 2014, we set out to solve the same problem for local businesses everywhere, but we realized that messaging with customers wasn't just the better way to get reviews—it's the better way to do business. We've since built a multi-product platform that's modernizing the way local business gets done. 

We are here to provide local businesses with everything they need to win. Get more reviews, collect payments, send text marketing campaigns, and centralize your communications—all from one easy-to-use platform.

#Podium #PodiumLove #LocalBusiness #TheFutureIsLocal`}
    />
  )
}