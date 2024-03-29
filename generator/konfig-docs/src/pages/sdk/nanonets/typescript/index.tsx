import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function NanonetsTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="nanonets-typescript-sdk"
      metaDescription={`Nanonets enables self-service artificial intelligence by simplifying adoption. Easily build machine learning models with minimal training data or knowledge of machine learning.

At Nanonets, we serve up the most accurate models. Always.`}
      company="Nanonets"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/logo.png"
      companyKebabCase="nanonets"
      clientNameCamelCase="nanonets"
      homepage="nanonets.com/"
      lastUpdated={new Date("2024-03-29T23:26:19.590Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/favicon.png"
      contactUrl="https://nanonets.com"
      contactEmail="support@nanonets.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["artificial_intelligence","machine_learning","software_development","enterprise_software"]}
      methods={[
  {
    "url": "/ImageCategorization/Model",
    "method": "createNewModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Classification Model",
    "typeScriptTag": "imageClassificationModel",
    "description": "Create New Model",
    "parameters": [
      {
        "name": "categories",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORIES"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Zero or One category in request. Add two or more categories in parameters"
      }
    ]
  },
  {
    "url": "/Inferences/Model/{model_id}/ImageLevelInferences/{id}",
    "method": "predictionFileByPageId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Get Prediction File By Page ID",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "The ID of the page that was received from the async prediction endpoint",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if you have entered correct model id with valid API key"
      }
    ]
  },
  {
    "url": "/Inferences/Model/{model_id}/ImageLevelInferences?start_day_interval={start_day}&current_batch_day={end_day}",
    "method": "allPredictionFiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Get All Prediction Files",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "startDayInterval",
        "schema": "integer",
        "required": true,
        "description": "The number of days since 1st Jan 1970 GMT which represents the start of the period",
        "example": 0
      },
      {
        "name": "currentBatchDay",
        "schema": "integer",
        "required": true,
        "description": "The number of days since 1st Jan 1970 GMT which represents the end of the period",
        "example": 0
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if you have entered correct model id with valid API key"
      }
    ]
  },
  {
    "url": "/Inferences/Model/{model_id}/InferenceRequestFiles/GetPredictions/{request_file_id}",
    "method": "getFilePredictionByFileId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Get Prediction File By File ID",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "requestFileId",
        "schema": "string",
        "required": true,
        "description": "The ID of the file that was received from the async prediction endpoint",
        "example": "REQUEST_FILE_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if you have entered correct model id with valid API key"
      }
    ]
  },
  {
    "url": "/OCR/FullText",
    "method": "fileContent",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Get Full Text",
    "typeScriptTag": "getFullText",
    "description": "Get Full Text",
    "parameters": [
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "urls",
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
        "description": "File missing. Check if you have included a file in the request\n\nOR\n\nIncorrect image. Check if file you included is a valid PNG or JPEG or PDF"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}",
    "method": "getModelById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "OCR Model",
    "typeScriptTag": "ocrModel",
    "description": "Get Model by Id",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if you have entered correct model id with valid API key"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/LabelFile/?async=true",
    "method": "imageFileAsyncPrediction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Async Prediction for image file",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "async",
        "schema": "string",
        "required": true,
        "description": "This parameter specifies whether you'd like to upload the file for processing and then query the results with a unique id at a later point in time",
        "example": "ASYNC"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "base64_data",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "request_metadata",
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
        "description": "File missing. Check if you have included a file in the request\n\nOR\n\nIncorrect image. Check if file you included is a valid PNG or JPEG"
      },
      {
        "statusCode": "402",
        "description": "Exhausted Free API Calls. You have exhausted your free API calls please change your plan <a href=\"https://app.nanonets.com/user/apps\">here</a>"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/LabelUrls/?async=true",
    "method": "imageUrlAsync",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Async Prediction for image url",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "async",
        "schema": "boolean",
        "required": true,
        "description": "This parameter specifies whether you'd like to upload the file for processing and then query the results with a unique id at a later point in time",
        "example": true
      },
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URLS"
      },
      {
        "name": "base64_data",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "request_metadata",
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
        "statusCode": "202",
        "description": "Request partially successful. One or more urls might not be correct or got no response"
      },
      {
        "statusCode": "400",
        "description": "Urls missing. Check if you have an included array of image urls"
      },
      {
        "statusCode": "402",
        "description": "Exhausted Free API Calls  You have exhausted your free API calls please change your plan <a href=\"https://app.nanonets.com/user/apps\">here</a>"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/ImageCategorization/LabelFile",
    "method": "filePrediction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Classification Model Predict",
    "typeScriptTag": "imageClassificationModelPredict",
    "description": "Prediction for image File",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "File missing. Check if you have included a file in the request\n\nOR\n\nIncorrect image. Check if file you included is a valid PNG or JPEG"
      },
      {
        "statusCode": "402",
        "description": "Exhausted Free API Calls. You have exhausted your free API calls please change your plan <a href=\"https://app.nanonets.com/user/apps\">here</a>"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/ImageCategorization/LabelUrls",
    "method": "imageUrlPrediction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Classification Model Predict",
    "typeScriptTag": "imageClassificationModelPredict",
    "description": "Prediction for image URLs",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URLS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "Request partially successful. One or more urls might not be correct or got no response"
      },
      {
        "statusCode": "400",
        "description": "Urls missing. Check if you have an included array of image urls"
      },
      {
        "statusCode": "402",
        "description": "Exhausted Free API Calls  You have exhausted your free API calls please change your plan <a href=\"https://app.nanonets.com/user/apps\">here</a>"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/ImageCategorization/Models",
    "method": "getAllModels",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Image Classification Model",
    "typeScriptTag": "imageClassificationModel",
    "description": "Get All Models",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/ImageCategorization/Train",
    "method": "newModelTraining",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Classification Model Train",
    "typeScriptTag": "imageClassificationModelTrain",
    "description": "Train Model",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Model not ready for training. Check if the images for the model are uploaded"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/ImageCategorization/UploadFile",
    "method": "trainingImagesFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Classification Model Upload",
    "typeScriptTag": "imageClassificationModelUpload",
    "description": "Upload training images by File",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Category not valid for model. Check if this model has the category used in the request\n\nOR\n\nFile missing. Check if you have included the file in the request\n\nOR\n\nIncorrect image. Check if file you included is valid PNG or JPEG file"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/ImageCategorization/UploadUrls",
    "method": "byUrls",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Image Classification Model Upload",
    "typeScriptTag": "imageClassificationModelUpload",
    "description": "Upload training images by Url",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODELID"
      },
      {
        "name": "category",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CATEGORY"
      },
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URLS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "Request partially successful. One or more urls might not be correct or got no response"
      },
      {
        "statusCode": "400",
        "description": "Category not valid for model. Check if this model has the category used in the request\n\nOR\n\nUrls missing  Check if you have included an array of image urls"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/OCR/Model",
    "method": "createNewModel",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Model",
    "typeScriptTag": "ocrModel",
    "description": "Create New Model",
    "parameters": [
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "{{category1}}",
          "{{category2}}"
        ]
      },
      {
        "name": "model_type",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "ocr"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Zero or One category in request. Add two or more categories in parameters"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/LabelFile",
    "method": "imageFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Prediction for image file",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "l",
        "schema": "string",
        "required": true,
        "description": "language hints eg: en, vi (not specifying generally gives best results)",
        "example": "L"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      },
      {
        "name": "base64_data",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "request_metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pages_to_process",
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
        "description": "File missing. Check if you have included a file in the request\n\nOR\n\nIncorrect image. Check if file you included is a valid PNG or JPEG"
      },
      {
        "statusCode": "402",
        "description": "Exhausted Free API Calls. You have exhausted your free API calls please change your plan <a href=\"https://app.nanonets.com/user/apps\">here</a>"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/LabelUrls",
    "method": "imageUrlsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Predict",
    "typeScriptTag": "ocrPredict",
    "description": "Prediction for image url",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "l",
        "schema": "string",
        "required": true,
        "description": "language hints eg: en, vi (not specifying generally gives best results)",
        "example": "L"
      },
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "URLS"
      },
      {
        "name": "base64_data",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "request_metadata",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "pages_to_process",
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
        "statusCode": "202",
        "description": "Request partially successful. One or more urls might not be correct or got no response"
      },
      {
        "statusCode": "400",
        "description": "Urls missing. Check if you have an included array of image urls"
      },
      {
        "statusCode": "402",
        "description": "Exhausted Free API Calls  You have exhausted your free API calls please change your plan <a href=\"https://app.nanonets.com/user/apps\">here</a>"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/Train",
    "method": "model",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Train",
    "typeScriptTag": "ocrTrain",
    "description": "Train Model",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Model not ready for training. Check if the images for the model are uploaded"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/UploadFile",
    "method": "trainingImagesFile",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Upload",
    "typeScriptTag": "ocrUpload",
    "description": "Upload training images by File",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "data",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATA"
      },
      {
        "name": "file",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FILE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": "Category not valid for model. Check if this model has the category used in the request\n\nOR\n\nFile missing. Check if you have included the file in the request\n\nOR\n\nIncorrect image. Check if file you included is valid PNG or JPEG file"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  },
  {
    "url": "/OCR/Model/{model_id}/UploadUrls",
    "method": "trainingImagesByUrl",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "OCR Upload",
    "typeScriptTag": "ocrUpload",
    "description": "Upload training images by Url",
    "parameters": [
      {
        "name": "modelId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MODEL_ID"
      },
      {
        "name": "data",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          {
            "filename": "https://nanonets.s3-us-west-2.amazonaws.com/test-images/test1.jpg",
            "object": [
              {
                "bndbox": {
                  "xmax": 100,
                  "xmin": 1,
                  "ymax": 100,
                  "ymin": 1
                },
                "name": "{{category1}}"
              }
            ]
          }
        ]
      },
      {
        "name": "urls",
        "schema": "array",
        "required": true,
        "description": "",
        "example": [
          "https://nanonets.s3-us-west-2.amazonaws.com/test-images/test1.jpg"
        ]
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "202",
        "description": "Request partially successful. One or more urls might not be correct or got no response"
      },
      {
        "statusCode": "400",
        "description": "Category not valid for model. Check if this model has the category used in the request\n\nOR\n\nUrls missing. Check if you have included an array of image urls"
      },
      {
        "statusCode": "404",
        "description": "Model does not exists. Check if the model id exists"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="NanoNets"
      apiBaseUrl="https://app.nanonets.com/api/v2"
      apiVersion="2.0.0"
      endpoints={21}
      sdkMethods={21}
      schemas={37}
      parameters={56}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nanonets/openapi.yaml"
      developerDocumentation="nanonets.com/documentation/"
    />
  );
}
  