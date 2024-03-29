import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NfeIoTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="nfe-io-typescript-sdk"
      metaDescription={`Tempo é dinheiro, certo? A gente sabe, assim como sabemos que a emissão de notas fiscais pode demorar bastante. Por isso criamos uma API para facilitar sua vida. Uma vez que você integre seu meio de pagamento com a NFE, sua empresa não gastará mais nenhum minuto com a emissão de notas.`}
      company="NFE.io"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/logo.png"
      companyKebabCase="nfe-io"
      clientNameCamelCase="nfeIo"
      homepage="nfe.io/"
      lastUpdated={new Date("2024-03-29T00:06:31.576Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["finance","payments","finance_technology"]}
      methods={[
  {
    "url": "/v2/productinvoices/{accessKey}",
    "method": "consultaByAccessKeyGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductInvoicesV2",
    "typeScriptTag": "productInvoicesV2",
    "description": "Consulta de Nota Fiscal Eletrônica na SEFAZ por Chave de Acesso",
    "parameters": [
      {
        "name": "accessKey",
        "schema": "string",
        "required": true,
        "description": "Chave de Acesso",
        "example": "ACCESSKEY"
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
        "description": "Não autorizado, verificar o cabeçalho do HTTP Authorization"
      },
      {
        "statusCode": "403",
        "description": "Accesso proibido"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/productinvoices/{accessKey}.pdf",
    "method": "consultaPdfByAccessKey",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductInvoicesV2",
    "typeScriptTag": "productInvoicesV2",
    "description": "Consulta de Nota Fiscal Eletrônica na SEFAZ por Chave de Acesso gerando pdf",
    "parameters": [
      {
        "name": "accessKey",
        "schema": "string",
        "required": true,
        "description": "Chave de Acesso",
        "example": "ACCESSKEY"
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
        "description": "Não autorizado, verificar o cabeçalho do HTTP Authorization"
      },
      {
        "statusCode": "403",
        "description": "Accesso proibido"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/productinvoices/{accessKey}.xml",
    "method": "consultarNotaFiscalEletronicaPorChave",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductInvoicesV2",
    "typeScriptTag": "productInvoicesV2",
    "description": "Consulta de Nota Fiscal Eletrônica na SEFAZ por Chave de Acesso",
    "parameters": [
      {
        "name": "accessKey",
        "schema": "string",
        "required": true,
        "description": "Chave de Acesso",
        "example": "ACCESSKEY"
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
        "description": "Não autorizado, verificar o cabeçalho do HTTP Authorization"
      },
      {
        "statusCode": "403",
        "description": "Accesso proibido"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v2/productinvoices/events/{accessKey}",
    "method": "consultarEventos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ProductInvoicesV2",
    "typeScriptTag": "productInvoicesV2",
    "description": "Consulta de Eventos da Nota Fiscal Eletrônica na SEFAZ por Chave de Acesso",
    "parameters": [
      {
        "name": "accessKey",
        "schema": "string",
        "required": true,
        "description": "Chave de Acesso",
        "example": "ACCESSKEY"
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
        "description": "Não autorizado, verificar o cabeçalho do HTTP Authorization"
      },
      {
        "statusCode": "403",
        "description": "Accesso proibido"
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Consulta de Notas Fiscais"
      apiBaseUrl="nfe.api.nfe.io"
      apiVersion="v2"
      endpoints={4}
      sdkMethods={4}
      schemas={17}
      parameters={4}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nfe-io/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nfe-io/openapi.yaml"
      developerDocumentation="nfe.io/docs/desenvolvedores/rest-api/consulta-de-nota-fiscal-v2/"
    />
  );
}
  