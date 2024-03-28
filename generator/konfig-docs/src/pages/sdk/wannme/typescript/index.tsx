import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function WannmeTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="wannme-typescript-sdk"
      metaDescription={`Wannme es una plataforma de pagos que gestiona todo el proceso del cobro, desde la pasarela de pago hasta las comunicaciones de tu tienda física u online. ¿Cómo lo hacemos? Mediante una única solución, una sola API. 
¿Qué te ofrecemos? Una solución personalizada para ti y tu negocio, con múltiples funcionalidades que puedes combinar libremente, fácil de integrar, usar y sin sobrecostes. Todo y más a golpe de clic. 
Queremos ser tu partner tecnológico y acompañarte en todo el proceso de cobro a tus clientes. Con la misma tecnología y procesos que usan los grandes, pero adaptada a lo que necesites (tarjeta de crédito, Bizum, efectivo, Split Payments, pagos PSD2… etc.) para que tú te centres en vender y tus clientes en comprar.
Do you want me?`}
      company="WANNME"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/logo.png"
      companyKebabCase="wannme"
      clientNameCamelCase="wannme"
      homepage="www.wannme.com/en/"
      lastUpdated={new Date("2024-03-28T22:33:29.913Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/favicon.png"
      contactUrl="https://api.wannme.com"
      contactEmail="contacto@wannme.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","fintech","online_payments","financial_technology","payment_services"]}
      methods={[
  {
    "url": "/wannmepay/debt-case/{idDebtcase}",
    "method": "getByIdDebtcaseChecksumSha512",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Get Debt case by idDebtcase (WANNME id)",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "debtCase",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}",
    "method": "getPostChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Get Debt case by idDebtcase with Post (WANNME id)",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}",
    "method": "updateByIdChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Update existing Debt case by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amountTotalDebt",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountPrincipalDebt",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountPending",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountRealDiscount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountMaximumDiscount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountMinimumPartialPayment",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountExternalPayment",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "mainCustomer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Multi-criteria search of Debt cases",
    "parameters": [
      {
        "name": "searchDebtCase",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Multi-criteria search of Debt cases",
    "parameters": [
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/action/cancel",
    "method": "cancelByIdDebtcaseChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Cancel Debt case by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/payment",
    "method": "createPaymentChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Create new payment for a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "sendPaymentAuto",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "requestCustomerDocumentInPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "requestInvoicesInPayment",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentPartnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentPartnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentCustomField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentCustomField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentCustomField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentCustomField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentCustomField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "debtPaymentCustomField6",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/payment/list",
    "method": "getPaymentList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of payments of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/payment/list",
    "method": "listPaymentsByIdDebtCase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of payments of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/customer",
    "method": "createCustomerChecksumSha512Document",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Create new customer for a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "documentType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/customer/{idCustomer}",
    "method": "deleteCustomerByIdCase",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Delete existing customer by idCustomer, of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDCUSTOMER"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/customer/{idCustomer}",
    "method": "updateCustomerByIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Update existing customer by idCustomer, of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDCUSTOMER"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "documentType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "document",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENT"
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastName2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/customer/list",
    "method": "listCustomerByIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of customers of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/customer/list",
    "method": "listCustomerByIdDebtCaseChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of customers of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/invoice",
    "method": "createNewInvoiceChecksum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Create new invoice for a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "concept",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/invoice/{idInvoice}",
    "method": "deleteInvoiceById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Delete existing invoice by idInvoice, of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "idInvoice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDINVOICE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/invoice/{idInvoice}",
    "method": "updateInvoiceByIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Update existing invoice by idInvoice, of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "idInvoice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDINVOICE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "concept",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/invoice/list",
    "method": "listInvoicesByIdDebtcase",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of invoices of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "integration",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/invoice/list",
    "method": "listInvoicesByIdDebtcase",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of invoices of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/recurrent-payment",
    "method": "createRecurrentPaymentChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Create new recurrent payment for a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "idCustomer",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationUrl",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentPartnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentPartnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentCustomField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentCustomField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentCustomField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentCustomField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentCustomField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "recurrentPaymentCustomField6",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/recurrent-payment/list",
    "method": "getListRecurrentPayments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of recurrent payments of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "integration",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case/{idDebtcase}/recurrent-payment/list",
    "method": "getListRecurrentPayments",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "List of recurrent payments of a Debt case specified by idDebtcase.",
    "parameters": [
      {
        "name": "idDebtcase",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDDEBTCASE"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant/{partnerId}",
    "method": "getByPartnerId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Get merchant by partnerId (WANNME id)",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant/{partnerId}",
    "method": "getByPartnerIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Get merchant by partnerId (WANNME id)",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant/{partnerId}",
    "method": "updateByPartnerIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Update an existing merchant by partnerId (WANNME id)",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "merchantType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sectorId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "commercialName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shortActivityDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activityEffectiveYears",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "individual",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "economicInformation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contactPerson",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Multi-criteria search of merchants.",
    "parameters": [
      {
        "name": "searchPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Multi-criteria search of merchants.",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "document",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant/{partnerId}/action/sandbox-end-process-activate-merchant",
    "method": "activateMerchantByPartnerId",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Only available in sandbox environments. Manual adjustment of merchant as activated by partnerId (WANNME id).",
    "parameters": [
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment",
    "method": "createChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Create new Merge payment.",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "slices",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}",
    "method": "getByIdMergePaymentWithPostSha512Checksum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Get Merge payment by idMergePayment with Post (WANNME id).",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}",
    "method": "updateByIdChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Update existing Merge payment by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "slices",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Multi-criteria search of Merge payments.",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/action/cancel",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Cancel Merge payment by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/action/initialize",
    "method": "initializePaymentSha512Checksum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Initialize a Merge payment by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/payment/list",
    "method": "getPaymentListByIdMerge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "List of payments of a Merge payment specified by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice",
    "method": "createSliceSha512Checksum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Create a slice for a Merge payment specified by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "splitPayments",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/{idSlice}",
    "method": "deleteSliceById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Delete existing slice by idSlice, of a Merge payment",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "idSlice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSLICE"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/{idSlice}",
    "method": "updateSliceById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Update existing slice by idSlice, of a Merge payment",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "idSlice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSLICE"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TYPE"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "splitPayments",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/list",
    "method": "listSlicesByIdMergePayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "List of slices of a Merge payment specified by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/{idSlice}/split",
    "method": "createSplitPaymentDefinition",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Create a split-payment definitiopn for the specified slice of a Merge payment specified by idMergePayment.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "idSlice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSLICE"
      },
      {
        "name": "isDebug",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "version",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "VERSION"
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "splitPartnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPLITPARTNERID"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "splitPaymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPLITPAYMENTTYPE"
      },
      {
        "name": "amount",
        "schema": "number",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/{idSlice}/split/{idSplit}",
    "method": "deleteSplitOfSliceById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Delete existing split of slice of a Merge payment by idSplit",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "idSlice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSLICE"
      },
      {
        "name": "idSplit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSPLIT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/{idSlice}/split/{idSplit}",
    "method": "updateExistingSplitOfSlice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "Update existing split of slice of a Merge payment by idMergePayment and idSplit",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "idSlice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSLICE"
      },
      {
        "name": "idSplit",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSPLIT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "splitPartnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPLITPARTNERID"
      },
      {
        "name": "reference",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "splitPaymentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "SPLITPAYMENTTYPE"
      },
      {
        "name": "amount",
        "schema": "number",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merge-payment/{idMergePayment}/slice/{idSlice}/split/list",
    "method": "listSliceSplit",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERGE PAYMENTS",
    "typeScriptTag": "wannmePayMergePayments",
    "description": "List of splits of a slice of a Merge payment specified by idMergePayment and idSlice.",
    "parameters": [
      {
        "name": "idMergePayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDMERGEPAYMENT"
      },
      {
        "name": "idSlice",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSLICE"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}",
    "method": "getByIdPaymentChecksumSha512",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Get payment by idPayment (WANNME id)",
    "parameters": [
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}",
    "method": "getByIdPaymentChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Get payment by idPayment with Post (WANNME id)",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}",
    "method": "updatePaymentByIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Update existing payment by idPayment. If there are splits, paymentAmount is the sum of the splits amount.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "returnOKURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "returnKOURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethods",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "splitPayments",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Multi-criteria search of payments.",
    "parameters": [
      {
        "name": "searchPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Multi-criteria search of payments.",
    "parameters": [
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "operationDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "operationDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/cancel",
    "method": "cancelById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Cancel payment by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/reset",
    "method": "resetPaymentByIdChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Reset payment from Error to Accessed, by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/share",
    "method": "sharePaymentUsingChannels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Share payment using the predefined channels: email, sms, etc.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "sendSMS",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sendEmail",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sendCertifiedSMS",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "smsTemplateId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "emailTemplateId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/send-receipt",
    "method": "sendReceiptChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Send the receipt of a payment (https://rest-demo.wannme.com/integration/v2/swagger-ui/index.html, by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/total-refund",
    "method": "refundTotalAmountById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Refund of the total amount of a payment, by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/partial-refund",
    "method": "partialRefundActionChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Refund of a part of a payment, by idPayment. If there are splits, refundAmount is the sum of the splits amount.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "splitRefunds",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/import-sepa-mandate",
    "method": "importSepaMandateChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Import SEPA (Single uro Payment Area) mandate into a payment by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "mandateSignedDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mandateReference",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MANDATEREFERENCE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/import-redsys-token",
    "method": "importRedsysToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Import Redsys token into a payment by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      },
      {
        "name": "cofId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "COFID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/init-bizum-rtp",
    "method": "payUsingBizumRtp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Pay payment using Bizum RTP",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/pay-by-call",
    "method": "payByCallChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Pay payment using PayByCall (use transferPayment true if you want a transfer call, default value false). The language that will be used in the IVR will be selected in the Content-Language header if it is present. For further information please see WANNME developer docs.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "contentLanguage",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "transferPayment",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/action/sandbox-settle-payment",
    "method": "settleByIdPaymentChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Only available in sandbox environments. Settle payment by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/refund/list",
    "method": "getRefundListByIdPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "List of refunds of a payment, by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "payment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment/{idPayment}/refund/list",
    "method": "listRefundByIdPaymentChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "List of refunds of a payment, by idPayment.",
    "parameters": [
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}",
    "method": "getByIdRecurrentPaymentChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Get Recurrent payment by idRecurrentPayment (WANNME id).",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "recurrentPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}",
    "method": "getPostChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Get Recurrent payment by idRecurrentPayment with Post (WANNME id).",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}",
    "method": "updateByRecurrentIdChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Update existing Recurrent payment by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentPlan",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "config",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Multi-criteria search of Recurrent payments.",
    "parameters": [
      {
        "name": "searchRecurrentPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/search",
    "method": "multiCriteriaSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Multi-criteria search of Recurrent payments.",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "statusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "subStatusCode",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateFrom",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lastModifiedDateTo",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pagination",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/action/cancel",
    "method": "cancelByIdRecurrentPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Cancel Recurrent payment by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/action/initialize",
    "method": "initializeChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Initialize a Recurrent payment by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "sendPaymentAuto",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sendPaymentToAllEmails",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "sendPaymentToAllPhones",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/action/manual-payment",
    "method": "triggerManualPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Manual payment for a Recurrent payment by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentPartnerReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentPartnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentCustomField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentCustomField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentCustomField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentCustomField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentCustomField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentCustomField6",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/action/pause",
    "method": "pauseByIdRecurrentPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Pause Recurrent payment by idRecurrentPayment",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/action/resume",
    "method": "resumeByIdRecurrentPaymentChecksum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Resume a paused Recurrent payment by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/payment/{idPayment}/action/retry",
    "method": "retryPaymentChecksumSha512",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Retry a payment with errors (not first payment)",
    "parameters": [
      {
        "name": "recurrentPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/payment/{idPayment}/action/retry",
    "method": "retryPaymentChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Retry a payment with errors (not first payment)",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "idPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/payment/list",
    "method": "listPaymentsByIdRecurrentPayment",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "List of payments of a Recurrent payment specified by idRecurrentPayment.",
    "parameters": [
      {
        "name": "recurrentPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/payment/list",
    "method": "listPaymentsByIdRecurrentPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "List of payments of a Recurrent payment specified by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/schedule",
    "method": "createScheduleChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Create schedule for a Recurrent payment specified by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/schedule/{idSchedule}",
    "method": "deleteScheduleByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Delete existing schedule by idSchedule, of a Recurrent payment",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "idSchedule",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSCHEDULE"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/schedule/{idSchedule}",
    "method": "updateScheduleByIdRecurrentPayment",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Update existing schedule by idSchedule, of a Recurrent payment",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "idSchedule",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDSCHEDULE"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "scheduleDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/schedule/list",
    "method": "getScheduleListById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "List of schedules of a Recurrent payment specified by idRecurrentPayment.",
    "parameters": [
      {
        "name": "recurrentPayment",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment/{idRecurrentPayment}/schedule/list",
    "method": "listSchedulesByIdRecurrentPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "List of schedules of a Recurrent payment specified by idRecurrentPayment.",
    "parameters": [
      {
        "name": "idRecurrentPayment",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "IDRECURRENTPAYMENT"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/checkout-branding-translation-types",
    "method": "getViaTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Via Types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/checkout-branding-translation-types",
    "method": "getViaTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Via Types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/countries",
    "method": "getCountryMasterData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Countries",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/countries",
    "method": "getCountryMasterData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Countries",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/debt-case-judicial-state-types",
    "method": "getJudicialStateTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Debt case judicial state types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/debt-case-judicial-state-types",
    "method": "getJudicialStateTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Debt case judicial state types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/debt-case-management-types",
    "method": "getDebtCaseManagementTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Debt case management type",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/debt-case-management-types",
    "method": "getDebtCaseManagement",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Debt case management type",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/debt-case-states",
    "method": "getDebtCaseStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Debt case states",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/debt-case-states",
    "method": "getDebtCaseStates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Debt case states",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/document/{documentId}",
    "method": "deleteByDocumentIdChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "WANNME PAY DOCUMENTS",
    "typeScriptTag": "wannmePayDocuments",
    "description": "Delete document by documentId",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/document/{documentId}",
    "method": "getByDocumentIdChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY DOCUMENTS",
    "typeScriptTag": "wannmePayDocuments",
    "description": "Get document by documentId",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/document/{documentId}",
    "method": "getByDocumentIdChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DOCUMENTS",
    "typeScriptTag": "wannmePayDocuments",
    "description": "Get document by documentId",
    "parameters": [
      {
        "name": "documentId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTID"
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/document-file-types",
    "method": "getDocumentFileTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Document Type of Documents",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/document-file-types",
    "method": "getDocumentFileTypeMasterData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Document Type of Documents",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/document-types",
    "method": "getDocumentTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Document types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/document-types",
    "method": "getDocumentTypesChecksumSha512",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Document types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/gender-types",
    "method": "getGenderTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Gender types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/gender-types",
    "method": "getGenderTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Gender types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/languages",
    "method": "getLanguagesMasterData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Languages",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/languages",
    "method": "getLanguagesMasterData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Languages",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merchant-payment-method-states",
    "method": "getMerchantPaymentMethodStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Merchant payment method states ",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merchant-payment-method-states",
    "method": "getMerchantPaymentMethodStates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Merchant payment method states ",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merchant-types",
    "method": "getMerchantTypesMasterData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Merchant types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merchant-types",
    "method": "getMerchantTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Merchant types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merge-payment-slice-states",
    "method": "mergePaymentSliceStates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of states of the slices of a merge payments",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merge-payment-slice-types",
    "method": "mergePaymentSliceTypesPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of states of the slices of a merge payments",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merge-payment-states",
    "method": "mergePaymentStatesPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of states of a merge payments",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/merge-payment-sub-states",
    "method": "getSubStatesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of substates of a merge payments",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/payment-states",
    "method": "getPaymentStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Payment states",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/payment-states",
    "method": "getPaymentStates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Payment states",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/provinces",
    "method": "getProvincesMasterDataChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Provinces",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/provinces",
    "method": "getProvincesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Provinces",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/recurrent-states",
    "method": "getRecurrentStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Recurrent states",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/recurrent-states",
    "method": "getRecurrentStates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Recurrent states",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/recurrent-interval-types",
    "method": "getRecurrentIntervalTypes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Recurrent interval types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/recurrent-interval-types",
    "method": "getRecurrentIntervalTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Recurrent interval types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/refund-states",
    "method": "getRefundStates",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of states of a refund of a payments",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/refund-states",
    "method": "getRefundStates",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of states of a refund of a payments",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/refund-types",
    "method": "getRefundTypeMasterData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of refund type of a payments",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/refund-types",
    "method": "getRefundType",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of refund type of a payments",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/sectors",
    "method": "getSectorsChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Sectors",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/sectors",
    "method": "getSectorsChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Sectors",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/sign-types",
    "method": "getSignTypesMasterData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of sign types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/sign-types",
    "method": "getSignTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of sign types",
    "parameters": [
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/payment-split-payment-types",
    "method": "getSplitPaymentTypes",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Split-Payment types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/via-types",
    "method": "getViaTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Via Types",
    "parameters": [
      {
        "name": "integrationVo",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/masterdata/via-types",
    "method": "getViaTypesChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MASTER DATA",
    "typeScriptTag": "wannmePayMasterData",
    "description": "Get master data of Via Types",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/document/upload-document",
    "method": "uploadBase64DocumentChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DOCUMENTS",
    "typeScriptTag": "wannmePayDocuments",
    "description": "Upload a BASE64 document",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DOCUMENTTYPE"
      },
      {
        "name": "content",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENT"
      },
      {
        "name": "fileName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILENAME"
      },
      {
        "name": "contentType",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTENTTYPE"
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/debt-case",
    "method": "createChecksum",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY DEBT CASES",
    "typeScriptTag": "wannmePayDebtCases",
    "description": "Create new Debt case.",
    "parameters": [
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amountTotalDebt",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountPrincipalDebt",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountPending",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountRealDiscount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountMaximumDiscount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountMinimumPartialPayment",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "amountExternalPayment",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "mainCustomer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "creditor",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/merchant",
    "method": "createNewMerchant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY MERCHANTS",
    "typeScriptTag": "wannmePayMerchants",
    "description": "Create a new merchant. Returns the partnerId for the new merchant. Valid credentials to create new merchants in Wannme is required",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "merchantType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantReference1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "sectorId",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "commercialName",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "shortActivityDescription",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "activityEffectiveYears",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "company",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "individual",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "billingAddress",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "economicInformation",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "contactPerson",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/payment",
    "method": "createNewPayment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY PAYMENTS",
    "typeScriptTag": "wannmePayPayments",
    "description": "Create new payment. If there are splits, paymentAmount is the sum of the splits amount.",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "returnOKURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "returnKOURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "expirationDate",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethods",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "signType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "extra",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "splitPayments",
        "schema": "array",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/wannmepay/recurrent-payment",
    "method": "createRecurrentPaymentChecksumSha512Partner",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "WANNME PAY RECURRENT PAYMENTS",
    "typeScriptTag": "wannmePayRecurrentPayments",
    "description": "Create new Recurrent payment.",
    "parameters": [
      {
        "name": "wannmeIsDebug",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "wannmeIntegrationVersion",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "partnerId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERID"
      },
      {
        "name": "checksum",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CHECKSUM"
      },
      {
        "name": "partnerReference1",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PARTNERREFERENCE1"
      },
      {
        "name": "partnerReference2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField1",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField4",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField5",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customField6",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "mobilePhone3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email3",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "usersGroup",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "notificationURL",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "documentId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "signType",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "customer",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentPlan",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "subscription",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "config",
        "schema": "object",
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
        "statusCode": "409",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="WANNME API REST"
      apiBaseUrl="https://rest-demo.wannme.com/integration/v2"
      apiVersion="2.7.8"
      endpoints={85}
      sdkMethods={133}
      schemas={157}
      parameters={986}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wannme/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wannme/openapi.yaml"
      developerDocumentation="rest-demo.wannme.com/integration/v2/swagger-ui/index.html"
    />
  );
}
  