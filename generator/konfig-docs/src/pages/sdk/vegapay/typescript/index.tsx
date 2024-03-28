import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function VegapayTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="vegapay-typescript-sdk"
      metaDescription={`Vegapay is creating the credit card stack for regulated entities across globe`}
      company="Vegapay"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/logo.webp"
      companyKebabCase="vegapay"
      clientNameCamelCase="vegapay"
      homepage="www.vegapay.tech/"
      lastUpdated={new Date("2024-03-28T19:32:46.507Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["fintech","banking","payments","financial_services","global_banking"]}
      methods={[
  {
    "url": "/program",
    "method": "createProgram",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Program Management",
    "typeScriptTag": "programManagement",
    "description": "Create Program",
    "parameters": [
      {
        "name": "jwtToken",
        "schema": "string",
        "description": "",
        "example": "allow"
      },
      {
        "name": "agreement",
        "schema": "string",
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "b11f9424-7d12-4592-bf77-7b64a163e64e"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "contact@gmail.com"
      },
      {
        "name": "mobile",
        "schema": "string",
        "description": "",
        "example": "7282696272"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "CreditCardProgram"
      },
      {
        "name": "tnc",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/program/{programId}",
    "method": "getProgram",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Program Management",
    "typeScriptTag": "programManagement",
    "description": "Get Program",
    "parameters": [
      {
        "name": "jwtToken",
        "schema": "string",
        "description": "",
        "example": "allow"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/program/list",
    "method": "getPrograms",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Program Management",
    "typeScriptTag": "programManagement",
    "description": "List Programs",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "description": "",
        "example": "10"
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "6c26d34b-fe1a-446f-9668-6b7cb5515ef1"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer",
    "method": "createCustomerPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Create Customer",
    "parameters": [
      {
        "name": "jwtToken",
        "schema": "string",
        "description": "",
        "example": "allow"
      },
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Mr"
      },
      {
        "name": "branchId",
        "schema": "string",
        "description": "",
        "example": "9e346848-888e-4d24-8a8a-1c70abeb3f2f"
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "6c26d34b-fe1a-446f-9668-6b7cb5515ef1"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": "",
        "example": "+91"
      },
      {
        "name": "currentAddress",
        "schema": "object",
        "description": ""
      },
      {
        "name": "customerType",
        "schema": "string",
        "description": "",
        "example": "INDIVIDUAL"
      },
      {
        "name": "dob",
        "schema": "string",
        "description": "",
        "example": "1997-05-01"
      },
      {
        "name": "emailId",
        "schema": "string",
        "description": "",
        "example": "{{$randomExampleEmail}}"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "{{$randomFirstName}}"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "M"
      },
      {
        "name": "identity",
        "schema": "array",
        "description": "",
        "example": [
          {
            "idNumber": "AAPPU{{random4DigitNumber}}L",
            "idType": "PAN",
            "idVerified": "true"
          },
          {
            "idNumber": "SWFUF2463{{random4DigitNumber}}L",
            "idType": "PASSPORT",
            "idVerified": "true"
          }
        ]
      },
      {
        "name": "isCurrentAddressPermanent",
        "schema": "boolean",
        "description": "",
        "example": true
      },
      {
        "name": "kycStatus",
        "schema": "string",
        "description": "",
        "example": "VERIFIED"
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "{{$randomLastName}}"
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "mobileNumber",
        "schema": "string",
        "description": "",
        "example": "9111994598"
      },
      {
        "name": "nationality",
        "schema": "string",
        "description": "",
        "example": "Indian"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "ACTIVE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/status",
    "method": "updateCustomerStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Update Status",
    "parameters": [
      {
        "name": "jwtToken",
        "schema": "string",
        "description": "",
        "example": "allow"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "90fcc52f-8167-4887-9f4a-22e27e57c4f0"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "INACTIVE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/list/{programId}",
    "method": "listByClientId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List by clientId",
    "parameters": [
      {
        "name": "page",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "description": "optional",
        "example": "10"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/list/withAccount",
    "method": "listWithAccountInfoForProgramId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "List with accountInfo for programId",
    "parameters": [
      {
        "name": "programId",
        "schema": "string",
        "description": "",
        "example": "a4187c32-2774-4b38-b616-2221c9cb7641"
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "3fbca97f-a4c3-4a0a-8d4f-a29ade5fd01c"
      },
      {
        "name": "page",
        "schema": "string",
        "description": "",
        "example": "1"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "description": "",
        "example": "10"
      },
      {
        "name": "allAccounts",
        "schema": "string",
        "description": "",
        "example": "false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/audit",
    "method": "getCustomerAudit",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get Customer Audit",
    "parameters": [
      {
        "name": "programId",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "003a1dbd-562d-4de6-8e6f-d875c042edd5"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "eaa4fd2e-d036-452e-8904-a710c3e1f107"
      },
      {
        "name": "eventName",
        "schema": "string",
        "description": "",
        "example": "PER_TRANSACTION_LIMIT_CHANGE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/customer/{customerId}",
    "method": "getCustomer",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User",
    "typeScriptTag": "user",
    "description": "Get Customer",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/los/v2/application/create",
    "method": "createApplicationPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Application Managment",
    "typeScriptTag": "applicationManagment",
    "description": "Create Application",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/los/v2/flow/nextStep/get",
    "method": "getNextStep",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application Managment",
    "typeScriptTag": "applicationManagment",
    "description": "Get Next Step",
    "parameters": [
      {
        "name": "applicationId",
        "schema": "string",
        "description": "",
        "example": "a4e65cae-bdd4-4d54-9e6b-0905bff5bc10"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "FAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/los/v2/application/18848a09-74d3-4326-8ce0-84452887f656",
    "method": "getApplication",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Application Managment",
    "typeScriptTag": "applicationManagment",
    "description": "Get Application",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account/limitoffer",
    "method": "offerCreation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Managment",
    "typeScriptTag": "accountManagment",
    "description": "Create Limit Offer",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "6c923cc1-a948-4602-b266-a4e4d3bf7288"
      },
      {
        "name": "limitType",
        "schema": "string",
        "description": "",
        "example": "ACCOUNT_LIMIT"
      },
      {
        "name": "newLimit",
        "schema": "number",
        "description": "",
        "example": 15000
      },
      {
        "name": "offerActivationTime",
        "schema": "string",
        "description": "",
        "example": "2022-11-04"
      },
      {
        "name": "offerExpiryTime",
        "schema": "string",
        "description": "",
        "example": "2026-10-01"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account/limitoffer/updateStatus",
    "method": "updateLimitOfferStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Account Managment",
    "typeScriptTag": "accountManagment",
    "description": "Update Limit Offer Status",
    "parameters": [
      {
        "name": "limitOfferId",
        "schema": "string",
        "description": "",
        "example": "6c923cc1-a948-4602-b266-a4e4d3bf7288"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "ACCEPTED, REJECTED",
        "example": "ACCEPTED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account",
    "method": "createCreditAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Managment",
    "typeScriptTag": "accountManagment",
    "description": "Create Credit Account",
    "parameters": [
      {
        "name": "accountLimit",
        "schema": "number",
        "description": "",
        "example": 10000
      },
      {
        "name": "activationDate",
        "schema": "string",
        "description": "",
        "example": "2022-07-21"
      },
      {
        "name": "agreement",
        "schema": "string",
        "description": "",
        "example": "xyz"
      },
      {
        "name": "availableLimit",
        "schema": "number",
        "description": "",
        "example": 10000
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "INR"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "7df5b5df-bfe3-4ac1-9976-fb0ae25329fc"
      },
      {
        "name": "kycStatus",
        "schema": "string",
        "description": "",
        "example": "VERIFIED"
      },
      {
        "name": "lenderId",
        "schema": "string",
        "description": "",
        "example": "6a087119-bad0-417b-8511-9658bd4d8945"
      },
      {
        "name": "perTransactionLimit",
        "schema": "number",
        "description": "",
        "example": 1000
      },
      {
        "name": "programId",
        "schema": "string",
        "description": "",
        "example": "6bbe5970-0b78-4072-b1f1-854a13a0a0df"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "INACTIVE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/forex/account",
    "method": "createForexAccount",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Account Managment",
    "typeScriptTag": "accountManagment",
    "description": "Create Forex Account",
    "parameters": [
      {
        "name": "accountLimit",
        "schema": "number",
        "description": "",
        "example": 10000
      },
      {
        "name": "branchId",
        "schema": "string",
        "description": "",
        "example": "4c8dd74e-7277-4fe5-b08b-901a26902be4"
      },
      {
        "name": "corporateCustomerId",
        "schema": "string",
        "description": "",
        "example": "3ed803a4-0177-46b2-a082-96d57afc5ece"
      },
      {
        "name": "customerId",
        "schema": "string",
        "description": "",
        "example": "06fe4e8f-4817-40bf-92b0-90ba5b720546"
      },
      {
        "name": "programId",
        "schema": "string",
        "description": "",
        "example": "55b642d9-c44a-4b9f-ac8e-9e3bb7f17bdd"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/account/closure",
    "method": "requestClosure",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Support",
    "typeScriptTag": "support",
    "description": "Account Closure request",
    "parameters": [
      {
        "name": "cookie",
        "schema": "string",
        "description": "",
        "example": "token="
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "013bc1f1-0e31-4def-a29a-4dec177cd729"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "example": "InActive"
      },
      {
        "name": "remarks",
        "schema": "string",
        "description": "",
        "example": "InActive"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "MANUAL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/card/updateCardStatus",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Card Issuance",
    "typeScriptTag": "cardIssuance",
    "description": "Update Card Status",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "description": "",
        "example": "f5be4bd7-997e-454e-875c-d2f87950eae5"
      },
      {
        "name": "cardStatus",
        "schema": "string",
        "description": "",
        "example": "PERM_BLOCKED"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/card/updateCustomerPreference",
    "method": "updateCustomerPreference",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card Issuance",
    "typeScriptTag": "cardIssuance",
    "description": "Update Customer Preference",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "description": "",
        "example": "0e99ca41-b172-4241-adfc-f69bc86fb25e"
      },
      {
        "name": "customerPreferenceStatus",
        "schema": "string",
        "description": "",
        "example": "ENABLED"
      },
      {
        "name": "limit",
        "schema": "number",
        "description": "",
        "example": 100
      },
      {
        "name": "locationType",
        "schema": "string",
        "description": "",
        "example": "INTERNATIONAL"
      },
      {
        "name": "type",
        "schema": "string",
        "description": "",
        "example": "ECOM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/card/addCard",
    "method": "createCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card Issuance",
    "typeScriptTag": "cardIssuance",
    "description": "Add Card",
    "parameters": [
      {
        "name": "title",
        "schema": "string",
        "description": "",
        "example": "Mr"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "a66794d7-6dc5-4593-8257-a120501af1j3"
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      },
      {
        "name": "binId",
        "schema": "number",
        "description": "",
        "example": 1000000084
      },
      {
        "name": "cardName",
        "schema": "string",
        "description": "",
        "example": "My Vacation Card"
      },
      {
        "name": "cardType",
        "schema": "string",
        "description": "",
        "example": "PHYSICAL_PERSONALISED"
      },
      {
        "name": "countryCode",
        "schema": "string",
        "description": "",
        "example": "+91"
      },
      {
        "name": "dob",
        "schema": "string",
        "description": "",
        "example": "1997-05-01"
      },
      {
        "name": "domesticCurrency",
        "schema": "string",
        "description": "",
        "example": "USD"
      },
      {
        "name": "emailId",
        "schema": "string",
        "description": "",
        "example": "shivansh.dubey@vegapay.tech"
      },
      {
        "name": "entityId",
        "schema": "string",
        "description": "",
        "example": "3fbca97f-a4c3-4a0a-8d4f-a29ade5fd01c"
      },
      {
        "name": "entityLevel",
        "schema": "string",
        "description": "",
        "example": "CLIENT"
      },
      {
        "name": "firstName",
        "schema": "string",
        "description": "",
        "example": "Shivansh"
      },
      {
        "name": "gender",
        "schema": "string",
        "description": "",
        "example": "M"
      },
      {
        "name": "identity",
        "schema": "object",
        "description": ""
      },
      {
        "name": "lastName",
        "schema": "string",
        "description": "",
        "example": "Singh"
      },
      {
        "name": "middleName",
        "schema": "string",
        "description": "",
        "example": "Kumar"
      },
      {
        "name": "mobileNumber",
        "schema": "string",
        "description": "",
        "example": "9110964483"
      },
      {
        "name": "nameOnCard",
        "schema": "string",
        "description": "",
        "example": "Shivansh Dubey"
      },
      {
        "name": "otp",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "programId",
        "schema": "string",
        "description": "",
        "example": "2eb8c5b1-b7f5-4802-8551-336cad5a6abf"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/card/replaceCard",
    "method": "replaceCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card Issuance",
    "typeScriptTag": "cardIssuance",
    "description": "Replace Card",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/card/addSupplementCard",
    "method": "addSupplementCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Card Issuance",
    "typeScriptTag": "cardIssuance",
    "description": "Add Supplement Card",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/card/getCard",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Card Issuance",
    "typeScriptTag": "cardIssuance",
    "description": "Get Card by Id",
    "parameters": [
      {
        "name": "cardId",
        "schema": "string",
        "description": "",
        "example": "e6d8e876-7261-4fe3-b173-378efbff761b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction/payment/rewards",
    "method": "submitPaymentRewards",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Payment By Rewards",
    "parameters": [
      {
        "name": "authorizationToken",
        "schema": "string",
        "description": "",
        "example": "{{authToken}}"
      },
      {
        "name": "xApiKey",
        "schema": "string",
        "description": "",
        "example": "{{salil-api-key}}"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "REWARDS PAYMENT"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "07885e38-c809-4a34-b17d-b37f8155bceb"
      },
      {
        "name": "rewardPoints",
        "schema": "number",
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction/payment",
    "method": "createPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create Payment",
    "parameters": [
      {
        "name": "authorizationToken",
        "schema": "string",
        "description": "",
        "example": "{{authToken}}"
      },
      {
        "name": "xApiKey",
        "schema": "string",
        "description": "",
        "example": "{{salil-api-key}}"
      },
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "PAYMENT"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "{{latestAccountId}}"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 100
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "INR"
      },
      {
        "name": "paymentMode",
        "schema": "string",
        "description": "",
        "example": "ONLINE"
      },
      {
        "name": "transactionCode",
        "schema": "string",
        "description": "",
        "example": "REPAYMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction",
    "method": "createTransaction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "Create Txn",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": "",
        "example": "Pismo Txn Test from Postman"
      },
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "523477dc-60af-4bf9-90d2-054c1b374ebc"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": "",
        "example": 500
      },
      {
        "name": "cardId",
        "schema": "string",
        "description": "",
        "example": "bddba430-3f8a-47b4-8edc-bbfa307b8e9c"
      },
      {
        "name": "cardProcessor",
        "schema": "string",
        "description": "",
        "example": "PISMO"
      },
      {
        "name": "currency",
        "schema": "string",
        "description": "",
        "example": "INR"
      },
      {
        "name": "lat",
        "schema": "number",
        "description": "",
        "example": 10
      },
      {
        "name": "lng",
        "schema": "number",
        "description": "",
        "example": 12
      },
      {
        "name": "mcc",
        "schema": "number",
        "description": "",
        "example": 3501
      },
      {
        "name": "merchantLocation",
        "schema": "string",
        "description": "",
        "example": "India"
      },
      {
        "name": "merchantName",
        "schema": "string",
        "description": "",
        "example": "Postman"
      },
      {
        "name": "mid",
        "schema": "string",
        "description": "",
        "example": "345"
      },
      {
        "name": "providerAttributesJson",
        "schema": "string",
        "description": "",
        "example": "{}"
      },
      {
        "name": "transactionCategory",
        "schema": "string",
        "description": "",
        "example": "CARD"
      },
      {
        "name": "transactionCode",
        "schema": "string",
        "description": "",
        "example": "CARD_ECOM"
      },
      {
        "name": "transactionIndicator",
        "schema": "string",
        "description": "",
        "example": "DEBIT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/transaction/list",
    "method": "listForAccount",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Transactions",
    "typeScriptTag": "transactions",
    "description": "List transactions for account",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "Mandatory",
        "example": "523477dc-60af-4bf9-90d2-054c1b374ebc"
      },
      {
        "name": "page",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "description": "",
        "example": "10"
      },
      {
        "name": "category",
        "schema": "string",
        "description": "",
        "example": "REPAYMENT"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "FAILED"
      },
      {
        "name": "startTime",
        "schema": "string",
        "description": "\"yyyy-MM-dd HH:mm:ss.SSS\"",
        "example": ""
      },
      {
        "name": "endTime",
        "schema": "string",
        "description": "\"yyyy-MM-dd HH:mm:ss.SSS\"",
        "example": ""
      },
      {
        "name": "statementDate",
        "schema": "string",
        "description": "\"yyyy-MM-dd HH:mm:ss\"",
        "example": "2023-10-10"
      },
      {
        "name": "includeMetaData",
        "schema": "string",
        "description": "",
        "example": "true"
      },
      {
        "name": "parentTransactionId",
        "schema": "string",
        "description": "",
        "example": "99583d3f-a9ff-4f6c-8ce0-c4eb57850c4d"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/dispute",
    "method": "transactionDispute",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Support",
    "typeScriptTag": "support",
    "description": "Dispute Txn",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "79a0f535-9e4b-4681-9c33-d528b4f59bb6"
      },
      {
        "name": "reason",
        "schema": "string",
        "description": "",
        "example": "Credit not Processed"
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": "",
        "example": "e8c0d5b2-7c9b-48f0-bf0c-761413a22a2e"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/list/account/{accountId}",
    "method": "accountLoansList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "List loans for account",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/convert/bill",
    "method": "convertBillToEmi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "Bill to EMI",
    "parameters": [
      {
        "name": "billId",
        "schema": "string",
        "description": "",
        "example": "b22557e3-1856-4144-94de-34f0c6e03900"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/preview/transaction",
    "method": "convertTxnToEmi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "Txn to EMI",
    "parameters": [
      {
        "name": "transactionId",
        "schema": "string",
        "description": "",
        "example": "421a1867-0e0d-410f-8d6d-77da7355383b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/preview/bill",
    "method": "previewBillToEmi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "Bill To EMI preview",
    "parameters": [
      {
        "name": "billId",
        "schema": "string",
        "description": "",
        "example": "b5b3925d-503c-4990-a6fd-687ee69e3fac"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/convert/transaction",
    "method": "previewTransactionToEmi",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "Txn to EMI preview",
    "parameters": [
      {
        "name": "tenure",
        "schema": "number",
        "description": "",
        "example": 5
      },
      {
        "name": "transactionId",
        "schema": "string",
        "description": "",
        "example": "4fe6e5b4-a050-4750-88c1-92ed3d392c7b"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/preclosure/{installmentLoanId}/{quotationDate}",
    "method": "forecloseQuotation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "Foreclose Loan Quotation",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/installment/preclosure/{installmentLoanId}/{quotationDate}",
    "method": "forecloseLoan",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Installment",
    "typeScriptTag": "installment",
    "description": "Foreclose Loan",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rewards/balance/{accountId}",
    "method": "getBalance",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "Rewards Balance",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rewards/list",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Rewards",
    "typeScriptTag": "rewards",
    "description": "List Rewards",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "053e08b7-34c5-4c42-8297-2ad8c299609d"
      },
      {
        "name": "page",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "pageSize",
        "schema": "string",
        "description": "",
        "example": "10"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/collection/getAgents",
    "method": "getAgents",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "List Agents",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/collection/getProgramDelinquencies/{programId}",
    "method": "listProgramDelinquencies",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "List Program Delinquencies",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/delinquency/history/{accountId}",
    "method": "accountDelinquencyHistoryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Collections",
    "typeScriptTag": "collections",
    "description": "Account Delinquency History",
    "parameters": [
      {
        "name": "accountId",
        "schema": "string",
        "description": "",
        "example": "945943b4-a16d-4bb5-9a97-188edd68712f"
      },
      {
        "name": "billAmount",
        "schema": "number",
        "description": "",
        "example": 12500
      },
      {
        "name": "billDate",
        "schema": "string",
        "description": "",
        "example": "2022-10-04T23:59:59.999+00:00"
      },
      {
        "name": "billDueDate",
        "schema": "string",
        "description": "",
        "example": "2022-10-14T23:59:59.999+00:00"
      },
      {
        "name": "billEndDate",
        "schema": "string",
        "description": "",
        "example": "2022-10-04T23:59:59.999+00:00"
      },
      {
        "name": "billMetaData",
        "schema": "string",
        "description": "",
        "example": "{mad=425.0, fee=0.0}"
      },
      {
        "name": "billPaidDate",
        "schema": "undefined",
        "description": "",
        "example": null
      },
      {
        "name": "billPdfLink",
        "schema": "string",
        "description": "",
        "example": "https://bill-invoice-pdfs.s3.ap-south-1.amazonaws.com/invoice_bill_id_0f37f1dc-c05c-47a6-8a0e-7584c5f1fb48.pdf"
      },
      {
        "name": "billStartDate",
        "schema": "string",
        "description": "",
        "example": "2022-09-05T00:00:00.000+00:00"
      },
      {
        "name": "createdAt",
        "schema": "string",
        "description": "",
        "example": "2022-10-05T12:23:39.885+00:00"
      },
      {
        "name": "creditAmount",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "creditTxnCount",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "debitAmount",
        "schema": "number",
        "description": "",
        "example": 12500
      },
      {
        "name": "debitTxnCount",
        "schema": "number",
        "description": "",
        "example": 5
      },
      {
        "name": "dueAmount",
        "schema": "number",
        "description": "",
        "example": 12500
      },
      {
        "name": "dueCash",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "dueCharge",
        "schema": "number",
        "description": "",
        "example": 20000
      },
      {
        "name": "dueInterest",
        "schema": "number",
        "description": "",
        "example": 1000
      },
      {
        "name": "dueRetail",
        "schema": "number",
        "description": "",
        "example": 100000
      },
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "0f37f1dc-c05c-47a6-8a0e-7584c5f1fb48"
      },
      {
        "name": "installmentCount",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "installmentInterest",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "installmentLoanId",
        "schema": "undefined",
        "description": "",
        "example": null
      },
      {
        "name": "installmentPrincipal",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "paidAmount",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "paidCharge",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "previousBillId",
        "schema": "undefined",
        "description": "",
        "example": null
      },
      {
        "name": "previousPendingBillAmount",
        "schema": "number",
        "description": "",
        "example": 0
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "UNPAID"
      },
      {
        "name": "updatedAt",
        "schema": "string",
        "description": "",
        "example": "2022-10-05T12:23:41.579+00:00"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/addUser",
    "method": "createUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "Add User",
    "parameters": [
      {
        "name": "address",
        "schema": "string",
        "description": "",
        "example": "ABC DCF hjaj ahsj"
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "d0b02ff1-14a4-4c43-9287-92718f5e8ed3"
      },
      {
        "name": "email",
        "schema": "string",
        "description": "",
        "example": "diham36672@larland.com"
      },
      {
        "name": "idNumber",
        "schema": "string",
        "description": "",
        "example": "AXGDH8920P"
      },
      {
        "name": "idType",
        "schema": "string",
        "description": "",
        "example": "PAN"
      },
      {
        "name": "mobileNumber",
        "schema": "string",
        "description": "",
        "example": "9898989811"
      },
      {
        "name": "name",
        "schema": "string",
        "description": "",
        "example": "Test User"
      },
      {
        "name": "officialEmailId",
        "schema": "string",
        "description": "",
        "example": "test1121@vegapay.tech"
      },
      {
        "name": "platformId",
        "schema": "string",
        "description": "",
        "example": "71ae69b8-595e-405f-bc5f-57623cf39808"
      },
      {
        "name": "platformName",
        "schema": "string",
        "description": "",
        "example": "FOREX_CORPORATE"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "ACTIVE"
      },
      {
        "name": "team",
        "schema": "string",
        "description": "",
        "example": "OPERATIONS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/listUsers",
    "method": "getUserList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "List Users",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/addRole",
    "method": "createRole",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "Add Role",
    "parameters": [
      {
        "name": "accessFeatures",
        "schema": "array",
        "description": "",
        "example": [
          {
            "entityRoles": [
              {
                "entityId": "2b1c044c-5c0d-493d-bb55-c8ba5081496a",
                "roles": [
                  "EDIT"
                ]
              }
            ],
            "feature": "FOREX_CORPORATE_CARD_ANALYTICS"
          },
          {
            "entityRoles": [
              {
                "entityId": "2b1c044c-5c0d-493d-bb55-c8ba5081496a",
                "roles": [
                  "EDIT"
                ]
              }
            ],
            "feature": "FOREX_CORPORATE_CARD_TRANSACTION"
          },
          {
            "entityRoles": [
              {
                "entityId": "2b1c044c-5c0d-493d-bb55-c8ba5081496a",
                "roles": [
                  "EDIT"
                ]
              }
            ],
            "feature": "FOREX_CORPORATE_INVOICES"
          },
          {
            "entityRoles": [
              {
                "entityId": "2b1c044c-5c0d-493d-bb55-c8ba5081496a",
                "roles": [
                  "EDIT"
                ]
              }
            ],
            "feature": "FOREX_CORPORATE_CARD_SALE"
          },
          {
            "entityRoles": [
              {
                "entityId": "2b1c044c-5c0d-493d-bb55-c8ba5081496a",
                "roles": [
                  "EDIT"
                ]
              }
            ],
            "feature": "FOREX_CORPORATE_APPLICATION_MANAGEMENT"
          }
        ]
      },
      {
        "name": "clientId",
        "schema": "string",
        "description": "",
        "example": "3fbca97f-a4c3-4a0a-8d4f-a29ade5fd01c"
      },
      {
        "name": "createdBy",
        "schema": "string",
        "description": "",
        "example": "test"
      },
      {
        "name": "roleName",
        "schema": "string",
        "description": "",
        "example": "FOREX_CORPORATE"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "ACTIVE"
      },
      {
        "name": "teamName",
        "schema": "string",
        "description": "",
        "example": "Supports"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/listRolesForClient/{clientId}",
    "method": "listRolesForClient",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "List Roles",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/user/status",
    "method": "updateUserStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "Update User Status",
    "parameters": [
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "ACTIVE"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "da28968b-c52a-4e02-80b8-2760e5e25ba5"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/addRoleForUser",
    "method": "assignRoleToUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "Add Role for User",
    "parameters": [
      {
        "name": "checkerMakerFlag",
        "schema": "boolean",
        "description": "",
        "example": false
      },
      {
        "name": "roleId",
        "schema": "string",
        "description": "",
        "example": "0783a033-fd97-413e-afff-4ebe167895a6"
      },
      {
        "name": "roleName",
        "schema": "string",
        "description": "",
        "example": "CIMS_ADMIN_HQ"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "ACTIVE"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "5b1c7259-35ad-4272-8722-b21d4ae0e652"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/roleManagement/updateRoleForUser",
    "method": "assignRoleToUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "User Access Management",
    "typeScriptTag": "userAccessManagement",
    "description": "Update Role for User",
    "parameters": [
      {
        "name": "roleId",
        "schema": "string",
        "description": "",
        "example": "00a43429-5d27-42aa-9789-4bf3fe9b3184"
      },
      {
        "name": "roleName",
        "schema": "string",
        "description": "",
        "example": "support_and_collection_4"
      },
      {
        "name": "status",
        "schema": "string",
        "description": "",
        "example": "INACTIVE"
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "",
        "example": "867c5cf1-8544-460f-9b35-9b946621aa44"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhook",
    "method": "subscribeEvent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhook",
    "typeScriptTag": "webhook",
    "description": "Subscribe",
    "parameters": [
      {
        "name": "event",
        "schema": "string",
        "description": "",
        "example": "CUSTOMER_AUDIT"
      },
      {
        "name": "programId",
        "schema": "string",
        "description": "",
        "example": "864ea6df-fcb1-4238-8659-d833e7748986"
      },
      {
        "name": "secret",
        "schema": "string",
        "description": "",
        "example": "abcabascsessesds"
      },
      {
        "name": "url",
        "schema": "string",
        "description": "",
        "example": "https://www.google.com"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="SBM - CMS"
      apiBaseUrl="{{program_service}}"
      apiVersion="1.0.0"
      endpoints={47}
      sdkMethods={57}
      schemas={29}
      parameters={216}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vegapay/openapi.yaml"
      developerDocumentation="www.vegapay.tech/docs/index.html"
    />
  );
}
  