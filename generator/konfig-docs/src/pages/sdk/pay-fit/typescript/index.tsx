import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function PayFitTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="pay-fit-typescript-sdk"
      metaDescription={`PayFit simplifies payroll management and HR processes for SMBs.

We have built a fast, intuitive and automated SaaS solution to help business owners and HR professionals save time and money allowing them to refocus and what really matters: their employees.

We have set ourselves a mission to support the digital transformation of HR management through our ever growing range of product features and services. 

We have a strong presence in France since 2015 and have been quickly growing in Spain and the UK. More than 6500 companies such as Biocoop, Heetch or Gymlib to name a few already trust us. Over 700 PayFiters have already joined the adventure and we have raised 254M€ to keep growing.`}
      company="PayFit"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/logo.png"
      companyKebabCase="pay-fit"
      clientNameCamelCase="payFit"
      homepage="payfit.com"
      lastUpdated={new Date("2024-03-27T04:44:08.195Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","payroll_management_system","payroll"]}
      methods={[
  {
    "url": "/companies/{companyId}",
    "method": "company",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get Company",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/accounting",
    "method": "companyAccounting",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get accounting data",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The month to fetch the data for. This must be in the format YYYYMM, January being the month \"01\".",
        "example": 202212
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/accounting-v2",
    "method": "companyAccountingV2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get accounting v2 data for a company in JSON format",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The month to fetch the data for. This must be in the format YYYYMM, January being the month \"01\".",
        "example": 202212
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/payroll-status",
    "method": "companyPayrollStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get Payroll Status",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The month to fetch the data for. This must be in the format YYYYMM, January being the month \"01\".",
        "example": 202212
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/health-insurance-contracts",
    "method": "healthInsuranceContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "List all Health Insurance contracts",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/provident-fund-contracts",
    "method": "providentFundContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "List all Provident Fund contracts",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
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
      }
    ]
  },
  {
    "url": "/companies-fr/{companyId}",
    "method": "getBasicInfoFr",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Company",
    "typeScriptTag": "company",
    "description": "Get Company (FR)",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts",
    "method": "contracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "List all Contracts",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The encoded pagination token"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "required": false,
        "description": "Allows to define the maximum number of items to fetch at once. (Max: 50, Default: 10)",
        "default": "10"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts/time",
    "method": "listWorkedTimeByPayPeriod",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "List all Worked Time by contract",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The encoded pagination token"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "required": false,
        "description": "Allows to define the maximum number of items to fetch at once. (Max: 50, Default: 10)",
        "default": "10"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The month to fetch the data for. This must be in the format YYYYMM, January being the month \"01\".",
        "example": 202212
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts/{contractId}",
    "method": "contract",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Get a contract",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "The id of the contract",
        "example": "CONTRACTID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts-fr",
    "method": "listFrenchContracts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "List all Contracts (FR)",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The encoded pagination token"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "required": false,
        "description": "Allows to define the maximum number of items to fetch at once. (Max: 50, Default: 10)",
        "default": "10"
      },
      {
        "name": "fields",
        "schema": "array",
        "required": false,
        "description": "Deprecated. The groups of fields to include in the response, in addition to the default fields. | Possible values are \"securite-sociale\" (it will require the `collaborators:social-security:read` oauth scope)"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts-fr/{contractId}",
    "method": "getFrenchInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Get a contract (FR)",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "The id of the contract",
        "example": "CONTRACTID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts-fr/{contractId}/health-insurance",
    "method": "updateHealthInsuranceAffiliation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Update a Health Insurance of an employee's contract",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "The id of the contract",
        "example": "CONTRACTID"
      },
      {
        "name": "healthInsuranceContractIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/contracts-fr/{contractId}/provident-fund",
    "method": "updateProvidentFundAffiliation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Contract",
    "typeScriptTag": "contract",
    "description": "Update a Provident Fund of an employee's contract",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "The id of the contract",
        "example": "CONTRACTID"
      },
      {
        "name": "providentFundContractIds",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "204",
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/collaborators",
    "method": "collaborators",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborator",
    "typeScriptTag": "collaborator",
    "description": "List all Collaborators",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The encoded pagination token"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "required": false,
        "description": "Allows to define the maximum number of items to fetch at once. (Max: 50, Default: 10)",
        "default": "10"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/collaborators/meal-vouchers",
    "method": "listMealVouchers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborator",
    "typeScriptTag": "collaborator",
    "description": "List all Collaborators Meal Vouchers",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "The month to fetch the data for. This must be in the format YYYYMM, January being the month \"01\".",
        "example": 202212
      },
      {
        "name": "nextPageToken",
        "schema": "string",
        "required": false,
        "description": "The encoded pagination token"
      },
      {
        "name": "maxResults",
        "schema": "string",
        "required": false,
        "description": "Allows to define the maximum number of items to fetch at once. (Max: 50, Default: 10)",
        "default": "10"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/collaborators/{collaboratorId}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborator",
    "typeScriptTag": "collaborator",
    "description": "Get a collaborator",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "collaboratorId",
        "schema": "string",
        "required": true,
        "description": "The id of collaborator to fetch",
        "example": "COLLABORATORID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/collaborators/{collaboratorId}/contracts/{contractId}/payslips/{payslipId}",
    "method": "viewPayslip",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborator",
    "typeScriptTag": "collaborator",
    "description": "Get a collaborator's payslip",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "collaboratorId",
        "schema": "string",
        "required": true,
        "description": "The id of collaborator to fetch",
        "example": "COLLABORATORID"
      },
      {
        "name": "contractId",
        "schema": "string",
        "required": true,
        "description": "The id of the contract",
        "example": "CONTRACTID"
      },
      {
        "name": "payslipId",
        "schema": "string",
        "required": true,
        "description": "The id of the payslip",
        "example": "PAYSLIPID"
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
      }
    ]
  },
  {
    "url": "/companies/{companyId}/collaborators/{collaboratorId}/payslips",
    "method": "listPayslips",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collaborator",
    "typeScriptTag": "collaborator",
    "description": "List all collaborator's payslips",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "The id of the company",
        "example": "COMPANYID"
      },
      {
        "name": "collaboratorId",
        "schema": "string",
        "required": true,
        "description": "The id of collaborator to fetch payslips",
        "example": "COLLABORATORID"
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
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Partner API"
      apiBaseUrl="https://partner-api.payfit.com"
      apiVersion="1.0.0"
      endpoints={19}
      sdkMethods={19}
      schemas={111}
      parameters={46}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfit/openapi.yaml"
      developerDocumentation="developers.payfit.io/reference"
    />
  );
}
  