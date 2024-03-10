import axios from "axios";
/*
import requests

url = "https://api.apollo.io/v1/organizations/enrich"

querystring = {
    "api_key": "YOUR API KEY HERE",
    "domain": "apollo.io"
}

headers = {
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json'
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
*/

/*
Sample Response:

{
    "organization": {
        "id": "5e66b6XXXXXXXXXXXXXXXXXX",
        "name": "Apollo.io",
        "website_url": "http://www.apollo.io",
        "blog_url": null,
        "angellist_url": null,
        "linkedin_url": "http://www.linkedin.com/company/apolloio",
        "twitter_url": "https://twitter.com/MeetApollo/",
        "facebook_url": "https://www.facebook.com/MeetApollo/",
        "primary_phone": {
            "number": "202374XXXX",
            "source": "Account"
        },
        "languages": [],
        "alexa_ranking": 522,
        "phone": "202374XXXX",
        "linkedin_uid": "185115XX",
        "founded_year": 2015,
        "publicly_traded_symbol": null,
        "publicly_traded_exchange": null,
        "logo_url": "https://apollo-server.com/uploads/pictures/61824XXXXXXXXXXXXXXXXXXX/picture",
        "crunchbase_url": null,
        "primary_domain": "apollo.io",
        "persona_counts": {},
        "industry": "computer software",
        "keywords": [
            "sales engagement",
            "lead generation",
            "predictive analytics",
            "lead scoring",
            "sales strategy",
            "conversation intelligence",
            "sales enablement",
            "lead routing",
            "sales development",
            "email engagement",
            "revenue intelligence",
            "sales operations",
            "demand generation"
        ],
        "estimated_num_employees": 170,
        "snippets_loaded": true,
        "industry_tag_id": "5567cdXXXXXXXXXXXXXXXXXX",
        "retail_location_count": 0,
        "raw_address": "535 Mission St, Suite 1100, San Francisco, California 94105, US",
        "street_address": "535 Mission St",
        "city": "San Francisco",
        "state": "California",
        "postal_code": "94105",
        "country": "United States",
        "owned_by_organization_id": null,
        "suborganizations": [],
        "num_suborganizations": 0,
        "seo_description": "Apollo is a data-first engagement platform that embeds intelligence within your workflows to help you execute, analyze, and improve on your growth strategy.",
        "short_description": "Apollo is the unified engagement acceleration platform that gives reps the ability to dramatically increase their number of quality conversations and opportunities. Reps are empowered do more than just conduct outreach, they learn who to target, how to reach out, and what to say at speed and scale. We help drive growth and success by providing the means for teams to discover and utilize their organization’s unique best practices. \n\nBy working in a unified platform, reps and managers alike save hours of time each day, strategy changes are instantly scaled across the whole team, and managers can finally dig into data at each step of their pipeline to continually find new ways to improve. \n\nTeams get access to our database of 200+ million contacts with a built-in fully customizable Scoring Engine, full sales engagement stack, our native Account Playbook builder, and the industry’s only custom deep analytics suite. Managers create and enforce order and process with the industry’s most advanced Rules Engine.\n\nApollo is the foundation for your entire end-to-end sales strategy.\n\nJoin teams like Autodesk, Copper (ProsperWorks), and Snowflake to experience the future of sales today. Ready to join our crew? Email sales@apollo.io. ",
        "annual_revenue_printed": "10M",
        "annual_revenue": 10000000,
        "total_funding": 9200000,
        "total_funding_printed": "9.2M",
        "latest_funding_round_date": "2018-06-26T00:00:00.000+00:00",
        "latest_funding_stage": "Series A",
        "funding_events": [
            {
                "id": "5ffe93XXXXXXXXXXXXXXXXXX",
                "date": "2018-06-26T00:00:00.000+00:00",
                "news_url": "https://techcrunch.com/2018/06/26/yc-grad-zenprospect-rebrands-as-apollo-lands-7-m-series-a/",
                "type": "Series A",
                "investors": "Nexus Venture Partners",
                "amount": "7M",
                "currency": "$"
            },
            {
                "id": "5ffe93XXXXXXXXXXXXXXXXXX",
                "date": "2016-10-01T00:00:00.000+00:00",
                "news_url": null,
                "type": "Other",
                "investors": "Y Combinator, SV Angel, Social Capital, Nexus Venture Partners",
                "amount": "2.2M",
                "currency": "$"
            }
        ],
        "technology_names": [
            "Cloudflare DNS",
            "Mailchimp Mandrill",
            "Gmail",
            "Marketo",
            "Google Apps",
            "Microsoft Office 365",
            "CloudFlare Hosting",
            "Route 53",
            "Zendesk",
            "Google Cloud Hosting",
            "Stripe",
            "Lever",
            "Segment.io",
            "Amplitude",
            "Hubspot",
            "Nginx",
            "CrazyEgg",
            "Squarespace ECommerce",
            "Linkedin Marketing Solutions",
            "Yandex Metrica",
            "Mobile Friendly",
            "Typekit",
            "Google Tag Manager"
        ],
        "current_technologies": [
            {
                "uid": "cloudflare_dns",
                "name": "Cloudflare DNS",
                "category": "Domain Name Services"
            },
            {
                "uid": "mailchimp_mandrill",
                "name": "Mailchimp Mandrill",
                "category": "Email Delivery"
            },
            {
                "uid": "gmail",
                "name": "Gmail",
                "category": "Email Providers"
            },
            {
                "uid": "marketo",
                "name": "Marketo",
                "category": "Marketing Automation"
            }
        ],
        "account_id": "614264XXXXXXXXXXXXXXXXXX",
        "account": {
            "id": "614264XXXXXXXXXXXXXXXXXX",
            "domain": "apollo.io",
            "name": "Apollo",
            "team_id": "5c1004XXXXXXXXXXXXXXXXXX",
            "organization_id": "5e66b6XXXXXXXXXXXXXXXXXX",
            "account_stage_id": "5c1004XXXXXXXXXXXXXXXXXX",
            "source": "salesforce",
            "original_source": "salesforce",
            "owner_id": "5c1004XXXXXXXXXXXXXXXXXX",
            "created_at": "2021-09-15T21:24:18.374Z",
            "phone": "(123) 456-XXXX",
            "phone_status": "no_status",
            "test_predictive_score": null,
            "hubspot_id": null,
            "salesforce_id": "0015g0XXXXXXXXXXXX",
            "crm_owner_id": "0055g0XXXXXXXXXXXX",
            "parent_account_id": null,
            "sanitized_phone": "+112345XXXXX",
            "account_playbook_statuses": [],
            "existence_level": "full",
            "label_ids": [],
            "typed_custom_fields": {},
            "modality": "account",
            "persona_counts": {}
        },
        "departmental_head_count": {
            "engineering": 45,
            "accounting": 4,
            "product_management": 5,
            "support": 31,
            "arts_and_design": 10,
            "sales": 37,
            "education": 6,
            "consulting": 10,
            "human_resources": 10,
            "business_development": 22,
            "operations": 10,
            "finance": 8,
            "entrepreneurship": 4,
            "marketing": 7,
            "information_technology": 5,
            "administrative": 3,
            "legal": 0,
            "media_and_commmunication": 0,
            "data_science": 0
        }
    }
}
*/

type Response = {
  organization?: {
    id: string;
    name: string;
    website_url: string;
    blog_url: string | null;
    angellist_url: string | null;
    linkedin_url: string;
    twitter_url: string;
    facebook_url: string;
    primary_phone: {
      number: string;
      source: string;
    };
    languages: string[];
    alexa_ranking: number;
    phone: string;
    linkedin_uid: string;
    founded_year: number;
    publicly_traded_symbol: string | null;
    publicly_traded_exchange: string | null;
    logo_url: string;
    crunchbase_url: string | null;
    primary_domain: string;
    persona_counts: Record<string, unknown>;
    industry: string;
    keywords: string[];
    estimated_num_employees: number;
    snippets_loaded: boolean;
    industry_tag_id: string;
    retail_location_count: number;
    raw_address: string;
    street_address: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    owned_by_organization_id: string | null;
    suborganizations: Record<string, unknown>[];
    num_suborganizations: number;
    seo_description: string;
    short_description: string;
    annual_revenue_printed: string;
    annual_revenue: number;
    total_funding: number;
    total_funding_printed: string;
    latest_funding_round_date: string;
    latest_funding_stage: string;
    funding_events: {
      id: string;
      date: string;
      news_url: string | null;
      type: string;
      investors: string;
      amount: string;
      currency: string;
    }[];
    technology_names: string[];
    current_technologies: {
      uid: string;
      name: string;
      category: string;
    }[];
    account_id: string;
    account: {
      id: string;
      domain: string;
      name: string;
      team_id: string;
      organization_id: string;
      account_stage_id: string;
      source: string;
      original_source: string;
      owner_id: string;
      created_at: string;
      phone: string;
      phone_status: string;
      test_predictive_score: string | null;
      hubspot_id: string | null;
      salesforce_id: string;
      crm_owner_id: string;
      parent_account_id: string | null;
      sanitized_phone: string;
      account_playbook_statuses: string[];
      existence_level: string;
      label_ids: string[];
      typed_custom_fields: Record<string, unknown>;
      modality: string;
      persona_counts: Record<string, unknown>;
    };
    departmental_head_count: Record<string, number>;
  };
};

async function getCompanyEnrichmentData(company: string): Promise<Response> {
  if (process.env.APOLLO_API_KEY === undefined) {
    throw new Error("APOLLO_API_KEY is not set");
  }
  const response = await axios.get<Response>(
    "https://api.apollo.io/v1/organizations/enrich",
    {
      params: {
        api_key: process.env.APOLLO_API_KEY,
        domain: company,
      },
    }
  );
  return response.data;
}

export async function getKeywordsFromApolloIo(
  company: string
): Promise<string[] | undefined> {
  const response = await getCompanyEnrichmentData(company);
  return response.organization?.keywords;
}

export async function getCompanyDescriptionFromApolloIo(
  company: string
): Promise<string | undefined> {
  const response = await getCompanyEnrichmentData(company);
  return response.organization?.short_description;
}
