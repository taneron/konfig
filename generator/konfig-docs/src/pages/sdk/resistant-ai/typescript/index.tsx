import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function ResistantAiTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="resistant-ai-typescript-sdk"
      metaDescription={`Resistant AI protects lenders and other fintechs from document fraud. 

If you are part of a fraud, risk, operations, or compliance team in the fintech/finance industry, you can now improve your risk and fraud controls, by detecting fraudulent documents automatically, and without replacing your existing systems.

Detect and prevent document fraud in: 
• KYB / Merchant Onboarding
• KYC / Customer Onboarding
• Digital Lending / Mortgage Underwriting
• Tenant Screening
• And more.

Some stats: 
• 500+ detectors
• Less than 30 sec to get results
• 90% of manual reviews eliminated
• 80% of documents approved instantly
• 99% accuracy in document verdicts
• 50M+ documents analyzed

100+ patents. 100+ customers, including Payoneer, Habito, Planet42, and ComplyAdvantage. Digital Crime Fighter of the Year. Twice Winner of ACAMS'PwC Hackathon. Backed by GV, Index Ventures, Credo Ventures, Seedcamp, and more.`}
      company="Resistant AI"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/logo.png"
      companyKebabCase="resistant-ai"
      clientNameCamelCase="resistantAi"
      homepage="resistant.ai/"
      lastUpdated={new Date("2024-03-27T22:44:50.741Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["ai","fintech","document_management","fraud_prevention","transaction_fraud","cybercrime","financial_fraud","financial_crime","document_forgery"]}
      methods={[
  {
    "url": "/v2/submission",
    "method": "analyzeDocument",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Create a submission",
    "parameters": [
      {
        "name": "query_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pipeline_configuration",
        "schema": "string",
        "description": ""
      },
      {
        "name": "enable_decision",
        "schema": "boolean",
        "description": "",
        "default": false
      },
      {
        "name": "enable_submission_characteristics",
        "schema": "boolean",
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/characteristics",
    "method": "attachCharacteristics",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Add submission characteristics",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      },
      {
        "name": "document_characteristics",
        "schema": "object",
        "description": ""
      },
      {
        "name": "device_characteristics",
        "schema": "object",
        "description": ""
      },
      {
        "name": "identity_characteristics",
        "schema": "object",
        "description": ""
      },
      {
        "name": "transaction_characteristics",
        "schema": "object",
        "description": ""
      },
      {
        "name": "submission_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "customer_tenant_id",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Submission characteristics were submitted successfully"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/fraud",
    "method": "getResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Fraud",
    "typeScriptTag": "fraud",
    "description": "Fetch fraud result",
    "parameters": [
      {
        "name": "withMetadata",
        "schema": "boolean",
        "required": false,
        "description": "Enables indicator medatadata in the response object",
        "default": false
      },
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/content",
    "method": "getContentResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Fetch content result",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/quality",
    "method": "resultFetch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Quality",
    "typeScriptTag": "quality",
    "description": "Fetch quality result",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/decision",
    "method": "getResult",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Decision",
    "typeScriptTag": "decision",
    "description": "Fetch Adaptive Decision result",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      },
      {
        "name": "embed",
        "schema": "string",
        "required": false,
        "description": "Coma-separated list of `decision_inputs` that should include the full data in its `data` attribute, e.g. `?embed=fraud`.",
        "example": "fraud"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "302",
        "description": "Response too large. The full response can be downloaded from the URL returned in the `Location` header."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/classification",
    "method": "getClassificationPreview",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Fetch document classification [preview]",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/report",
    "method": "getFraudAnalysis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Report",
    "typeScriptTag": "report",
    "description": "Fetch report [preview]",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}",
    "method": "remove",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Delete submission",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "Submission deleted."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/feedback",
    "method": "getFeedback",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Get analysis feedback",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/submission/{submission_id}/feedback",
    "method": "addFeedback",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Submission",
    "typeScriptTag": "submission",
    "description": "Add analysis feedback",
    "parameters": [
      {
        "name": "submissionId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SUBMISSION_ID"
      },
      {
        "name": "analysis_feedback",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ANALYSIS_FEEDBACK"
      },
      {
        "name": "comment",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "415",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Resistant Documents API"
      apiBaseUrl="https://api.documents.resistant.ai"
      apiVersion="2.0.0b"
      endpoints={10}
      sdkMethods={11}
      schemas={78}
      parameters={24}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resistant-ai/openapi.yaml"
      developerDocumentation="documents.resistant.ai/docs/v2.html"
    />
  );
}
  