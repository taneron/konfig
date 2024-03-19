import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function CrowdSecTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="crowd-sec-typescript-sdk"
      metaDescription={`CrowdSec is a dual security engine designed to protect Internet-exposed workloads, whatever their type, task, or OS. It detects IP having bad behaviors in the logs and remedies the threat they pose in the most adapted way, using your existing network components. On top of that, when an IP is flagged, it's shared with CrowdSec network and, as long as enough trusted peers keep reporting it, the IP is maintained in our global real-time blocklist. That way everyone in the network is further protected by this network effect.`}
      company="CrowdSec"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/logo.png"
      companyKebabCase="crowd-sec"
      clientNameCamelCase="crowdSec"
      homepage="www.crowdsec.net/"
      lastUpdated={new Date("2024-03-18T18:55:40.703Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/favicon.png"
      // Missing contactUrl
      contactEmail="contact@crowdsec.net"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/imagePreview.jpg"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["security","network_security","cybersecurity"]}
      methods={[
  {
    "url": "/decisions/stream",
    "method": "getDecisionsStream",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bouncers",
    "typeScriptTag": "bouncers",
    "description": "getDecisionsStream",
    "parameters": [
      {
        "name": "startup",
        "schema": "boolean",
        "required": false,
        "description": "If true, means that the bouncers is starting and a full list must be provided"
      },
      {
        "name": "scopes",
        "schema": "string",
        "required": false,
        "description": "Comma separated scopes of decisions to fetch"
      },
      {
        "name": "origins",
        "schema": "string",
        "required": false,
        "description": "Comma separated name of origins. If provided, then only the decisions originating from provided origins would be returned."
      },
      {
        "name": "scenariosContaining",
        "schema": "string",
        "required": false,
        "description": "Comma separated words. If provided, only the decisions created by scenarios containing any of the provided word would be returned."
      },
      {
        "name": "scenariosNotContaining",
        "schema": "string",
        "required": false,
        "description": "Comma separated words. If provided, only the decisions created by scenarios, not containing any of the provided word would be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/decisions/stream",
    "method": "getDecisionsStream",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "bouncers",
    "typeScriptTag": "bouncers",
    "description": "GetDecisionsStream",
    "parameters": [
      {
        "name": "startup",
        "schema": "boolean",
        "required": false,
        "description": "If true, means that the bouncer is starting and a full list must be provided"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "400 response"
      }
    ]
  },
  {
    "url": "/decisions",
    "method": "removeDecisions",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "deleteDecisions",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "scope to which the decision applies (ie. IP/Range/Username/Session/...)"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "the value to match for in the specified scope"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "type of decision"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "IP to search for (shorthand for scope=ip&value=)"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "range to search for (shorthand for scope=range&value=)"
      },
      {
        "name": "scenario",
        "schema": "string",
        "required": false,
        "description": "scenario to search"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/decisions",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "bouncers",
    "typeScriptTag": "bouncers",
    "description": "getDecisions",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "scope to which the decision applies (ie. IP/Range/Username/Session/...)"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "the value to match for in the specified scope"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "type of decision"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "IP to search for (shorthand for scope=ip&value=)"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "range to search for (shorthand for scope=range&value=)"
      },
      {
        "name": "contains",
        "schema": "boolean",
        "required": false,
        "description": "indicate if you're looking for a decision that contains the value, or that is contained within the value"
      },
      {
        "name": "origins",
        "schema": "string",
        "required": false,
        "description": "Comma separated name of origins. If provided, then only the decisions originating from provided origins would be returned."
      },
      {
        "name": "scenariosContaining",
        "schema": "string",
        "required": false,
        "description": "Comma separated words. If provided, only the decisions created by scenarios containing any of the provided word would be returned."
      },
      {
        "name": "scenariosNotContaining",
        "schema": "string",
        "required": false,
        "description": "Comma separated words. If provided, only the decisions created by scenarios, not containing any of the provided word would be returned."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/decisions",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "bouncers",
    "typeScriptTag": "bouncers",
    "description": "GetDecisions",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "scope to which the decision applies (ie. IP/Range/Username/Session/...)"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "the value to match for in the specified scope"
      },
      {
        "name": "type",
        "schema": "string",
        "required": false,
        "description": "type of decision"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "IP to search for (shorthand for scope=ip&value=)"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "range to search for (shorthand for scope=range&value=)"
      },
      {
        "name": "contains",
        "schema": "boolean",
        "required": false,
        "description": "indicate if you're looking for a decision that contains the value, or that is contained within the value"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "400 response"
      }
    ]
  },
  {
    "url": "/decisions/{decision_id}",
    "method": "removeDecisionById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "DeleteDecision",
    "parameters": [
      {
        "name": "decisionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DECISION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/watchers",
    "method": "registerWatcher",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "RegisterWatcher",
    "parameters": [
      {
        "name": "machine_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MACHINE_ID"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Watcher Created"
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/watchers/login",
    "method": "authenticateSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "AuthenticateWatcher",
    "parameters": [
      {
        "name": "machine_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MACHINE_ID"
      },
      {
        "name": "password",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PASSWORD"
      },
      {
        "name": "scenarios",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "the response of a successful authentication"
      },
      {
        "statusCode": "403",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "removeAlerts",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "deleteAlerts",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "delete alerts for this scope"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "delete alerts for this value (used with scope)"
      },
      {
        "name": "scenario",
        "schema": "string",
        "required": false,
        "description": "delete alerts for this scenario"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "delete Alerts with IP (shorthand for scope=ip&value=)"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "delete alerts concerned by range (shorthand for scope=range&value=)"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "delete alerts added after YYYY-mm-DD-HH:MM:SS"
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "delete alerts added before YYYY-mm-DD-HH:MM:SS"
      },
      {
        "name": "hasActiveDecision",
        "schema": "boolean",
        "required": false,
        "description": "delete only alerts with decisions not expired yet"
      },
      {
        "name": "alertSource",
        "schema": "string",
        "required": false,
        "description": "delete only alerts with matching source (ie. cscli/crowdsec)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "listAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "searchAlerts",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "show alerts for this scope"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "show alerts for this value (used with scope)"
      },
      {
        "name": "scenario",
        "schema": "string",
        "required": false,
        "description": "show alerts for this scenario"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "IP to search for (shorthand for scope=ip&value=)"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "range to search for (shorthand for scope=range&value=)"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "search alerts newer than delay (format must be compatible with time.ParseDuration)"
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "search alerts older than delay (format must be compatible with time.ParseDuration)"
      },
      {
        "name": "simulated",
        "schema": "boolean",
        "required": false,
        "description": "if set to true, decisions in simulation mode will be returned as well"
      },
      {
        "name": "hasActiveDecision",
        "schema": "boolean",
        "required": false,
        "description": "only return alerts with decisions not expired yet"
      },
      {
        "name": "decisionType",
        "schema": "string",
        "required": false,
        "description": "restrict results to alerts with decisions matching given type"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "number of alerts to return"
      },
      {
        "name": "origin",
        "schema": "string",
        "required": false,
        "description": "restrict results to this origin (ie. lists,CAPI,cscli)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "searchAlerts",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "searchAlerts",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "required": false,
        "description": "show alerts for this scope"
      },
      {
        "name": "value",
        "schema": "string",
        "required": false,
        "description": "show alerts for this value (used with scope)"
      },
      {
        "name": "scenario",
        "schema": "string",
        "required": false,
        "description": "show alerts for this scenario"
      },
      {
        "name": "ip",
        "schema": "string",
        "required": false,
        "description": "IP to search for (shorthand for scope=ip&value=)"
      },
      {
        "name": "range",
        "schema": "string",
        "required": false,
        "description": "range to search for (shorthand for scope=range&value=)"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "search alerts newer than delay (format must be compatible with time.ParseDuration)"
      },
      {
        "name": "until",
        "schema": "string",
        "required": false,
        "description": "search alerts older than delay (format must be compatible with time.ParseDuration)"
      },
      {
        "name": "simulated",
        "schema": "boolean",
        "required": false,
        "description": "if set to true, decisions in simulation mode will be returned as well"
      },
      {
        "name": "hasActiveDecision",
        "schema": "boolean",
        "required": false,
        "description": "only return alerts with decisions not expired yet"
      },
      {
        "name": "decisionType",
        "schema": "string",
        "required": false,
        "description": "restrict results to alerts with decisions matching given type"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "number of alerts to return"
      },
      {
        "name": "origin",
        "schema": "string",
        "required": false,
        "description": "restrict results to this origin (ie. lists,CAPI,cscli)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "400 response"
      }
    ]
  },
  {
    "url": "/alerts",
    "method": "createAlerts",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "pushAlerts",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/alerts/{alert_id}",
    "method": "deleteAlertById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "DeleteAlert",
    "parameters": [
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALERT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/alerts/{alert_id}",
    "method": "getAlertById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "GetAlertByID",
    "parameters": [
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALERT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "error response return by the API"
      }
    ]
  },
  {
    "url": "/alerts/{alert_id}",
    "method": "getAlertById",
    "httpMethod": HttpMethodsEnum.HEAD,
    "tag": "watchers",
    "typeScriptTag": "watchers",
    "description": "GetAlertByID",
    "parameters": [
      {
        "name": "alertId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ALERT_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "successful operation"
      },
      {
        "statusCode": "400",
        "description": "400 response"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Swagger CrowdSec"
      apiBaseUrl="https://127.0.0.1/v1"
      apiVersion="1.0.0"
      endpoints={7}
      sdkMethods={15}
      schemas={19}
      parameters={69}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowdsec/openapi.yaml"
      developerDocumentation="crowdsecurity.github.io/api_doc/"
    />
  );
}
  