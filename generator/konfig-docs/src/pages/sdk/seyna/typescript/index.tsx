import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SeynaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="seyna-typescript-sdk"
      metaDescription={`Seyna est la plateforme pour les courtiers en assurance. En combinant produits d'assurance sur mesure et technologie, la plateforme Seyna permet aux courtiers de focaliser sur l'essentiel : leurs clients. Les courtiers opérant sur Seyna peuvent se concentrer sur l'expérience client en automatisant les tâches administratives et de conformité ainsi qu'en créant des expériences assurantielles sur-mesure. Infrastructure ouverte, les courtiers peuvent adapter Seyna à leurs besoins, brancher leur ecosystème de prestataires et piloter toute leur activité via une seule interface.

Aujourd'hui, plus de 90 courtiers d'assurance et retailers font déjà appel à Seyna pour protéger plus de 1 million de clients. Mais l'histoire ne s'arrête pas là. Seyna nourrit des ambitions mondiales et entend changer la façon dont l'ensemble du secteur protège les clients.`}
      company="Seyna"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/logo.png"
      companyKebabCase="seyna"
      clientNameCamelCase="seyna"
      homepage="seyna.eu"
      lastUpdated={new Date("2024-03-29T17:59:37.016Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/imagePreview.webp"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["insurance"]}
      methods={[
  {
    "url": "/aml/alerts/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Get an alert by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/alerts/{id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "Update an alert's status.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "status",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "STATUS"
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
    "url": "/aml/alerts/{id}/timeline",
    "method": "listTimelineItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Alerts",
    "typeScriptTag": "alerts",
    "description": "List an alert's timeline items.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/datasets",
    "method": "listAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get all available datasets.",
    "parameters": [
      {
        "name": "productId",
        "schema": "string",
        "required": false,
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
    "url": "/aml/datasets/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get a dataset by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/entities/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entities",
    "typeScriptTag": "entities",
    "description": "Get an entity by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/entities/{id}/dataset",
    "method": "getDataset",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Entities",
    "typeScriptTag": "entities",
    "description": "Get an entity's dataset.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/products/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/products/{id}",
    "method": "editConfig",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Edit a product's config.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "referents",
        "schema": "array",
        "description": ""
      },
      {
        "name": "risk",
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
    "url": "/aml/products/{id}/datasets",
    "method": "getByProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Datasets",
    "typeScriptTag": "datasets",
    "description": "Get a product's datasets.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/products/{id}/alerts",
    "method": "getAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Products",
    "typeScriptTag": "products",
    "description": "Get a product's alerts.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/records",
    "method": "getPaginatedRecords",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Get paginated records of a product.",
    "parameters": [
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "first",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "last",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "order",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "productId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PRODUCTID"
      },
      {
        "name": "type",
        "schema": "undefined",
        "required": false,
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
    "url": "/aml/records",
    "method": "createRecord",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Create a record.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/aml/records/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Get a record by ID.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/records/{id}",
    "method": "updateData",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Update a record's data : end date, external Link or external Ref.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
      },
      {
        "name": "endDate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalLink",
        "schema": "string",
        "description": ""
      },
      {
        "name": "externalRef",
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
    "url": "/aml/records/{id}/product",
    "method": "getProduct",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Get a record's product.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/aml/records/{id}/alerts",
    "method": "getAlerts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Get a record's alerts.",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ID"
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
    "url": "/batch/aml/records",
    "method": "createBatch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Records",
    "typeScriptTag": "records",
    "description": "Create several records in batch.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "202",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="documentation seyna"
      apiBaseUrl="https://gw.seyna.eu/2024-02"
      apiVersion="2024-02"
      endpoints={14}
      sdkMethods={18}
      schemas={28}
      parameters={28}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seyna/openapi.yaml"
      developerDocumentation="developers.seyna.eu"
    />
  );
}
  