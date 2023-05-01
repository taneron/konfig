import { OpenAPIV3_XDocument } from 'konfig-lib'
import { hasSchemaWithPossibleIncorrectDataType } from '../../src/util/has-schema-with-possible-incorrect-data-type'

describe('has-schema-with-possible-incorrect-data-type', () => {
  it('decentro example', () => {
    expect(
      hasSchemaWithPossibleIncorrectDataType({ spec: exampleSpec() })
    ).toStrictEqual({ type: 'string', example: '1.0' })
  })
})

function exampleSpec(): OpenAPIV3_XDocument {
  const spec = {
    openapi: '3.0.0',
    info: {
      title: 'decentro-in-kyc',
      version: '1.0.0',
      description: 'KYC & Onboarding',
      'x-konfig-ignore': {
        'object-with-no-properties': true,
      },
    },
    servers: [
      {
        url: 'https://in.staging.decentro.tech',
      },
    ],
    paths: {
      '/v2/kyc/identities/mask_aadhaar_uid': {
        post: {
          tags: ['KYC'],
          summary: 'Aadhaar Masking',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/MaskAadhaarRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/MaskAadhaarResponse',
                  },
                },
              },
              description: 'OK',
            },
          },
          operationId: 'KYC_maskAadhaarUid',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/v2/kyc/forensics/image_quality': {
        post: {
          tags: ['KYC'],
          summary: 'Image Quality Check',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/CheckImageQualityRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              description: 'OK',
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
                'Content-Length': {
                  schema: {
                    type: 'integer',
                    example: 484,
                  },
                },
                Connection: {
                  schema: {
                    type: 'string',
                    example: 'keep-alive',
                  },
                },
                Date: {
                  schema: {
                    type: 'string',
                    example: 'Wed, 18 Jan 2023 13:49:46 GMT',
                  },
                },
                'X-DECENTRO-URN': {
                  schema: {
                    type: 'string',
                    example: '1EE7989D0ADA448883C011F1C3E724FC',
                  },
                },
                'Expect-CT': {
                  schema: {
                    type: 'string',
                    example:
                      'max-age=86400, enforce, report-uri="https://in.staging.decentro.tech"',
                  },
                },
                'X-Permitted-Cross-Domain-Policies': {
                  schema: {
                    type: 'string',
                    example: 'none',
                  },
                },
                'X-Frame-Options': {
                  schema: {
                    type: 'string',
                    example: 'SAMEORIGIN',
                  },
                },
                'X-XSS-Protection': {
                  schema: {
                    type: 'string',
                    example: '1; mode=block',
                  },
                },
                'X-Content-Type-Options': {
                  schema: {
                    type: 'string',
                    example: 'nosniff',
                  },
                },
                'Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'X-Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'Strict-Transport-Security': {
                  schema: {
                    type: 'string',
                    example: 'max-age=31556926; includeSubDomains',
                  },
                },
                'Referrer-Policy': {
                  schema: {
                    type: 'string',
                    example: 'strict-origin-when-cross-origin',
                  },
                },
                vary: {
                  schema: {
                    type: 'string',
                    example: 'Origin',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/CheckImageQualityResponse',
                  },
                },
              },
            },
          },
          operationId: 'KYC_checkImageQuality',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/v2/kyc/forensics/face_match': {
        post: {
          tags: ['KYC'],
          summary: 'Face Match',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/MatchFaceRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '500': {
              description: 'Internal Server Error',
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
                'Content-Length': {
                  schema: {
                    type: 'integer',
                    example: 170,
                  },
                },
                Connection: {
                  schema: {
                    type: 'string',
                    example: 'keep-alive',
                  },
                },
                Date: {
                  schema: {
                    type: 'string',
                    example: 'Thu, 19 Jan 2023 11:53:32 GMT',
                  },
                },
                'X-DECENTRO-URN': {
                  schema: {
                    type: 'string',
                    example: '83D7150A53324ECD9A437F7D04950C1E',
                  },
                },
                'Expect-CT': {
                  schema: {
                    type: 'string',
                    example:
                      'max-age=86400, enforce, report-uri="https://in.staging.decentro.tech"',
                  },
                },
                'X-Permitted-Cross-Domain-Policies': {
                  schema: {
                    type: 'string',
                    example: 'none',
                  },
                },
                'X-Frame-Options': {
                  schema: {
                    type: 'string',
                    example: 'SAMEORIGIN',
                  },
                },
                'X-XSS-Protection': {
                  schema: {
                    type: 'string',
                    example: '1; mode=block',
                  },
                },
                'X-Content-Type-Options': {
                  schema: {
                    type: 'string',
                    example: 'nosniff',
                  },
                },
                'Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'X-Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'Strict-Transport-Security': {
                  schema: {
                    type: 'string',
                    example: 'max-age=31556926; includeSubDomains',
                  },
                },
                'Referrer-Policy': {
                  schema: {
                    type: 'string',
                    example: 'strict-origin-when-cross-origin',
                  },
                },
                vary: {
                  schema: {
                    type: 'string',
                    example: 'Origin',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/MatchFaceResponse',
                  },
                },
              },
            },
          },
          operationId: 'KYC_matchFace',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/v2/kyc/document_classification': {
        post: {
          tags: ['KYC'],
          summary: 'ID Classification',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/ClassifyIdRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              description: 'OK',
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
                'Content-Length': {
                  schema: {
                    type: 'integer',
                    example: 259,
                  },
                },
                Connection: {
                  schema: {
                    type: 'string',
                    example: 'keep-alive',
                  },
                },
                Date: {
                  schema: {
                    type: 'string',
                    example: 'Thu, 19 Jan 2023 11:56:05 GMT',
                  },
                },
                'X-DECENTRO-URN': {
                  schema: {
                    type: 'string',
                    example: '3B245AEBB2204FCDB4E08052613C5F6B',
                  },
                },
                'Expect-CT': {
                  schema: {
                    type: 'string',
                    example:
                      'max-age=86400, enforce, report-uri="https://in.staging.decentro.tech"',
                  },
                },
                'X-Permitted-Cross-Domain-Policies': {
                  schema: {
                    type: 'string',
                    example: 'none',
                  },
                },
                'X-Frame-Options': {
                  schema: {
                    type: 'string',
                    example: 'SAMEORIGIN',
                  },
                },
                'X-XSS-Protection': {
                  schema: {
                    type: 'string',
                    example: '1; mode=block',
                  },
                },
                'X-Content-Type-Options': {
                  schema: {
                    type: 'string',
                    example: 'nosniff',
                  },
                },
                'Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'X-Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'Strict-Transport-Security': {
                  schema: {
                    type: 'string',
                    example: 'max-age=31556926; includeSubDomains',
                  },
                },
                'Referrer-Policy': {
                  schema: {
                    type: 'string',
                    example: 'strict-origin-when-cross-origin',
                  },
                },
                vary: {
                  schema: {
                    type: 'string',
                    example: 'Origin',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ClassifyDocumentResponse',
                  },
                },
              },
            },
          },
          operationId: 'KYC_classifyDocument',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/v2/kyc/forensics/photocopy_check': {
        post: {
          tags: ['KYC'],
          summary: 'Photocopy Check',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/CheckPhotocopyRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              description: 'OK',
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
                'Content-Length': {
                  schema: {
                    type: 'integer',
                    example: 202,
                  },
                },
                Connection: {
                  schema: {
                    type: 'string',
                    example: 'keep-alive',
                  },
                },
                Date: {
                  schema: {
                    type: 'string',
                    example: 'Thu, 19 Jan 2023 11:59:34 GMT',
                  },
                },
                'X-DECENTRO-URN': {
                  schema: {
                    type: 'string',
                    example: '6BFA24C4382E42EFB22AD1DC5FD3A246',
                  },
                },
                'Expect-CT': {
                  schema: {
                    type: 'string',
                    example:
                      'max-age=86400, enforce, report-uri="https://in.staging.decentro.tech"',
                  },
                },
                'X-Permitted-Cross-Domain-Policies': {
                  schema: {
                    type: 'string',
                    example: 'none',
                  },
                },
                'X-Frame-Options': {
                  schema: {
                    type: 'string',
                    example: 'SAMEORIGIN',
                  },
                },
                'X-XSS-Protection': {
                  schema: {
                    type: 'string',
                    example: '1; mode=block',
                  },
                },
                'X-Content-Type-Options': {
                  schema: {
                    type: 'string',
                    example: 'nosniff',
                  },
                },
                'Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'X-Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'Strict-Transport-Security': {
                  schema: {
                    type: 'string',
                    example: 'max-age=31556926; includeSubDomains',
                  },
                },
                'Referrer-Policy': {
                  schema: {
                    type: 'string',
                    example: 'strict-origin-when-cross-origin',
                  },
                },
                vary: {
                  schema: {
                    type: 'string',
                    example: 'Origin',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/CheckPhotocopyResponse',
                  },
                },
              },
            },
          },
          operationId: 'KYC_checkPhotocopy',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/kyc/scan_extract/ocr': {
        post: {
          tags: ['KYC'],
          summary: 'Scan & Extract',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/ExtractTextRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              description: 'OK',
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
                'Content-Length': {
                  schema: {
                    type: 'integer',
                    example: 436,
                  },
                },
                Connection: {
                  schema: {
                    type: 'string',
                    example: 'keep-alive',
                  },
                },
                Date: {
                  schema: {
                    type: 'string',
                    example: 'Thu, 19 Jan 2023 12:05:05 GMT',
                  },
                },
                'X-DECENTRO-URN': {
                  schema: {
                    type: 'string',
                    example: '17B597566AC7464284A30A997E095A1F',
                  },
                },
                'Expect-CT': {
                  schema: {
                    type: 'string',
                    example:
                      'max-age=86400, enforce, report-uri="https://in.staging.decentro.tech"',
                  },
                },
                'X-Permitted-Cross-Domain-Policies': {
                  schema: {
                    type: 'string',
                    example: 'none',
                  },
                },
                'X-Frame-Options': {
                  schema: {
                    type: 'string',
                    example: 'SAMEORIGIN',
                  },
                },
                'X-XSS-Protection': {
                  schema: {
                    type: 'string',
                    example: '1; mode=block',
                  },
                },
                'X-Content-Type-Options': {
                  schema: {
                    type: 'string',
                    example: 'nosniff',
                  },
                },
                'Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'X-Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'Strict-Transport-Security': {
                  schema: {
                    type: 'string',
                    example: 'max-age=31556926; includeSubDomains',
                  },
                },
                'Referrer-Policy': {
                  schema: {
                    type: 'string',
                    example: 'strict-origin-when-cross-origin',
                  },
                },
                vary: {
                  schema: {
                    type: 'string',
                    example: 'Origin',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ExtractTextResponse',
                  },
                  examples: {
                    'example-0': {
                      summary: 'PAN OCR',
                      value: {
                        ocrStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message: 'Scan completed successfully.',
                        ocrResult: {
                          cardNo: 'BNZPM2501F',
                          dateInfo: '16-07-1986',
                          dateType: 'DOB',
                          fatherName: 'DURAISAMY',
                          name: 'D MANIKANDAN',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-19 17:35:03.970138 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-19 17:35:05.743580 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-1': {
                      summary: 'Aadhaar OCR',
                      value: {
                        ocrStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message: 'Scan completed successfully.',
                        ocrResult: {
                          cardNo: '000000006975',
                          dateInfo: '01-01-1998',
                          dateType: 'DOB',
                          name: 'Dilip Singh Chauhan',
                          gender: 'MALE',
                          vid: '',
                          fatherName: '',
                          address:
                            'S / O : Vijay Singh Chouhan , HOUSE  NO TOS , ASHIRWAD BHAWAN , GALI NO . 1. SARPANCH BARA , MANDAWALI , Mandawali Fazalpur , Eect Delhi , Delhi 110002',
                          sonOf: '',
                          husbandOf: '',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-19 17:36:15.995376 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-19 17:36:18.352717 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                  },
                },
              },
            },
          },
          operationId: 'KYC_extractText',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/kyc/public_registry/validate': {
        post: {
          tags: ['KYC'],
          summary: 'Validate',
          requestBody: {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/ValidateRequest',
                },
                examples: {
                  'example-0': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'PAN',
                      id_number: 'BNZPM2501F',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-1': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'PAN-Detailed',
                      id_number: 'XXXXXXXXXX',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-2': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'Passport',
                      id_number: '7202043f2502232',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                      dob: 'YYYY-MM-DD',
                      name: 'John Doe',
                    },
                  },
                  'example-3': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'Driving_License',
                      id_number: 'DL-0420110149646',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                      dob: '1976-02-09',
                    },
                  },
                  'example-4': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'VOTERID',
                      id_number: 'XYN0037192',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-5': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'RC',
                      id_number: 'PB05AC9325',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-6': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'RC-Detailed',
                      id_number: 'PB05AC9325',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-7': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'GSTIN',
                      id_number: '27AAACW8099E1ZX',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-8': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'GSTIN-Detailed',
                      id_number: '27AAACW8099E1ZX',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-9': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'CIN',
                      id_number: 'U67190TN2014PTC096978',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-10': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'DIN',
                      id_number: '00403714',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-11': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'LLPIN',
                      id_number: 'XXXXXXXXXX',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-12': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'FLLPIN',
                      id_number: 'XXXXXXXXXX',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                  'example-13': {
                    value: {
                      reference_id: 'ABCDEF12345',
                      document_type: 'FCRN',
                      id_number: 'XXXXXXXXXX',
                      consent: 'Y',
                      consent_purpose: 'For bank account purpose only',
                    },
                  },
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              description: 'OK',
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
                'Content-Length': {
                  schema: {
                    type: 'integer',
                    example: 401,
                  },
                },
                Connection: {
                  schema: {
                    type: 'string',
                    example: 'keep-alive',
                  },
                },
                Date: {
                  schema: {
                    type: 'string',
                    example: 'Thu, 19 Jan 2023 12:25:01 GMT',
                  },
                },
                Server: {
                  schema: {
                    type: 'string',
                    example: 'gunicorn',
                  },
                },
                'X-DECENTRO-URN': {
                  schema: {
                    type: 'string',
                    example: '80B9573DE534465DADD69ADD40256373',
                  },
                },
                'Expect-CT': {
                  schema: {
                    type: 'string',
                    example:
                      'max-age=86400, enforce, report-uri="https://in.staging.decentro.tech"',
                  },
                },
                'X-Permitted-Cross-Domain-Policies': {
                  schema: {
                    type: 'string',
                    example: 'none',
                  },
                },
                'X-Frame-Options': {
                  schema: {
                    type: 'string',
                    example: 'SAMEORIGIN',
                  },
                },
                'X-XSS-Protection': {
                  schema: {
                    type: 'string',
                    example: '1; mode=block',
                  },
                },
                'X-Content-Type-Options': {
                  schema: {
                    type: 'string',
                    example: 'nosniff',
                  },
                },
                'Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'X-Content-Security-Policy': {
                  schema: {
                    type: 'string',
                    example: 'frame-src self',
                  },
                },
                'Strict-Transport-Security': {
                  schema: {
                    type: 'string',
                    example: 'max-age=31556926; includeSubDomains',
                  },
                },
                'Referrer-Policy': {
                  schema: {
                    type: 'string',
                    example: 'strict-origin-when-cross-origin',
                  },
                },
                vary: {
                  schema: {
                    type: 'string',
                    example: 'Origin',
                  },
                },
                'X-RateLimit-Limit-Second': {
                  schema: {
                    type: 'integer',
                    example: 1000,
                  },
                },
                'X-RateLimit-Limit-Minute': {
                  schema: {
                    type: 'integer',
                    example: 10000,
                  },
                },
                'X-RateLimit-Limit-Hour': {
                  schema: {
                    type: 'integer',
                    example: 100000,
                  },
                },
                'RateLimit-Remaining': {
                  schema: {
                    type: 'integer',
                    example: 999,
                  },
                },
                'X-RateLimit-Remaining-Hour': {
                  schema: {
                    type: 'integer',
                    example: 99959,
                  },
                },
                'RateLimit-Reset': {
                  schema: {
                    type: 'integer',
                    example: 1,
                  },
                },
                'X-RateLimit-Remaining-Minute': {
                  schema: {
                    type: 'integer',
                    example: 9999,
                  },
                },
                'X-RateLimit-Remaining-Second': {
                  schema: {
                    type: 'integer',
                    example: 999,
                  },
                },
                'RateLimit-Limit': {
                  schema: {
                    type: 'integer',
                    example: 1000,
                  },
                },
                'Kong-Request-ID': {
                  schema: {
                    type: 'string',
                    example: '427d73c5-4105-4dfc-9eb9-bcac93eecc33',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/ValidateResponse',
                  },
                  examples: {
                    'example-0': {
                      summary: 'Success: PAN',
                      value: {
                        kycStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message: 'PAN details retrived successfully.',
                        kycResult: {
                          idNumber: 'BNZPM2501F',
                          idStatus: 'VALID',
                          name: 'DURAISAMY MANIKANDAN',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-19 17:55:01.270716 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-19 17:55:01.492703 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-1': {
                      summary: 'Success: PAN Detailed',
                      value: {
                        kycStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message: 'KYC Details for PAN retrieved successfully',
                        kycResult: {
                          idNumber: 'XXXXXXXXXX',
                          idStatus: 'VALID',
                          panStatus: 'VALID',
                          lastName: 'Marley',
                          firstName: 'Bob',
                          fullName: 'Bob Marley',
                          idHolderTitle: 'Shri',
                          idLastUpdated: 'DD/MM/YYYY',
                          aadhaarSeedingStatus: 'Y',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 11:20:13.664909 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 11:20:13.859307 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-2': {
                      summary: 'Success: Passport',
                      value: {
                        kycStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message: 'KYC Details for PAN retrieved successfully',
                        kycResult: {
                          idNumber: 'XXXXXXXXXX',
                          idStatus: 'VALID',
                          panStatus: 'VALID',
                          lastName: 'Bob',
                          firstName: 'Marley',
                          fullName: 'Bob Marley',
                          idHolderTitle: 'Shri',
                          idLastUpdated: 'DD/MM/YYYY',
                          aadhaarSeedingStatus: 'Y',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 11:20:13.664909 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 11:20:13.859307 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-3': {
                      summary: 'Success: Driving License',
                      value: {
                        kycStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message:
                          'KYC Details for Driving License retrieved successfully.',
                        kycResult: {
                          addresses: [
                            {
                              addressLine:
                                'HNO-178 A2/B MIG FLATS PASCHIM VIHAR',
                              completeAddress:
                                'HNO-178 A2/B MIG FLATS                           PASCHIM VIHAR,DELHI                              110063',
                              country: 'INDIA',
                              district: 'DELHI',
                              pin: '110063',
                              state: 'DL',
                              type: 'permanent',
                            },
                            {
                              addressLine:
                                'HNO-178 A2/B MIG FLATS PASCHIM VIHAR',
                              completeAddress:
                                'HNO-178 A2/B MIG FLATS                           PASCHIM VIHAR,DELHI                              110063',
                              country: 'INDIA',
                              district: 'DELHI',
                              pin: '110063',
                              state: 'DL',
                              type: 'temporary',
                            },
                          ],
                          allClassOfVehicle: [
                            {
                              cov: 'ADPVEH',
                              expiryDate: 'NA',
                              issueDate: '01/03/2011',
                              covCategory: 'NT',
                            },
                          ],
                          drivingLicenseNumber: 'DL-0420110149646',
                          dateOfBirth: '09/02/1976',
                          endorseDate: '01/03/2011',
                          endorseNumber: '',
                          name: 'ANURAG BREJA',
                          fatherOrHusbandName: 'BODH RAJ BREJA',
                          status: '',
                          validFrom: '01/03/2011',
                          validTo: '08/02/2026',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:25:45.356396 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:25:45.601003 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-4': {
                      summary: 'Success: Voter ID',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message:
                          'KYC Details for Voter ID retrieved successfully.',
                        kycResult: {
                          epicNo: 'XYN0037192',
                          name: 'PURNIMA SUBBA',
                          nameInVernacular: ' ',
                          gender: 'F',
                          age: 27,
                          relativeName: 'SUBASH CHANDRA SUBBA',
                          relativeNameInVernacular: ' ',
                          relativeRelationType: 'F',
                          houseNumber: '',
                          partOrLocationInConstituency: 'CHOTA SINGTAM',
                          partNumberOrLocationNumberInConstituency: '9',
                          parliamentaryConstituency: 'Sikkim',
                          assemblyConstituency: 'NAMCHEYBUNG',
                          sectionOfConstituencyPart: '2',
                          cardSerialNumberInPollingList: '786',
                          lastUpdateDate: 'Fri Jan 13 12:57:37 IST 2023',
                          status: 'N',
                          pollingBoothDetails: {
                            latLong: '0.0,0.0',
                            name: 'AHOPHUL KISSAN JR. HIGH SCHOOL ROOM NO.II',
                            nameVernacular: '',
                            number: '9',
                          },
                          address: {
                            districtCode: '5',
                            districtName: 'PAKYONG DISTRICT',
                            districtNameVernacular: '',
                            state: 'Sikkim',
                            stateCode: 'S21',
                          },
                          emailId: '',
                          mobileNumber: '',
                          dateOfBirth: '',
                          district: '',
                          state: '',
                          stateCode: '',
                          pollingBoothCoordinates: '',
                          pollingBoothAddress: '',
                          pollingBoothNumber: '',
                          id: '',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:29:24.238818 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:29:30.317830 IST (GMT +0530)',
                        decentroTxnId: '59F864A69B6E4DE0BCD4DD927A5D6160',
                      },
                    },
                    'example-5': {
                      summary: 'Success: RC',
                      value: {
                        kycStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message: 'KYC Details for RC retrieved successfully.',
                        kycResult: {
                          blacklistStatus: 'NA',
                          status: 'ACTIVE',
                          registrationDate: '28-Sep-2015',
                          registrationLocation: 'FARIDKOT RTA, Punjab',
                          class: 'M-Cycle/Scooter(2WN)',
                          maker:
                            'ROYAL-ENFIELD (UNIT OF EICHER LTD) STANDARD 350CC',
                          ownerName: 'MALKIT SINGH',
                          chassisNumber: 'FHXXXXX',
                          registrationNumber: 'PB05AC9325',
                          engineNumber: 'FHXXXXX',
                          fuelType: 'PETROL',
                          fitUpto: '27-Sep-2030',
                          insuranceUpto: '27-Jan-2023',
                          taxUpto: 'NA',
                          insuranceDetails: '',
                          insuranceValidity: '',
                          permitType: '',
                          permitValidUpto: '',
                          pollutionControlValidity: '',
                          pollutionNorms: '',
                          licenseAddress: '',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:34:22.007560 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:34:26.523539 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-6': {
                      summary: 'Success: RC Detailed',
                      value: {
                        kycStatus: 'SUCCESS',
                        status: 'SUCCESS',
                        message:
                          'Advanced KYC Details for RC retrieved successfully.',
                        kycResult: {
                          blacklistStatus: '',
                          status: 'ACTIVE',
                          registrationDate: '28/09/2015',
                          registrationAddress:
                            'H.NO.260,CHAHAL,DISTT FARIDKOT,FARIDKOT,PUNJAB,151203',
                          registrationNumber: 'PB05AC9325',
                          ownerName: 'MALKIT SINGH',
                          ownerFatherName: 'GURNAM SINGH',
                          ownerPresentAddress:
                            'H.NO.260,CHAHAL,DISTT FARIDKOT,FARIDKOT,PUNJAB,151203',
                          chassisNumber: 'FH883986',
                          bodyType: 'SOLO',
                          category: '2WN',
                          color: 'BLACK',
                          engineCubicCapacity: '350',
                          numberCylinders: '1',
                          unladenWeight: '180',
                          grossWeight: '183',
                          wheelbase: '350',
                          engineNumber: 'FH883986',
                          manufacturedMonthYear: '09/2015',
                          makerDescription:
                            'ROYAL-ENFIELD (UNIT OF EICHER LTD)',
                          maker: 'ROYAL-ENFIELD (UNIT OF EICHER LTD)',
                          fuelType: 'PETROL',
                          nocDetails: '',
                          normsDescription: 'Not Available',
                          financier: '',
                          fitUpto: 'NA',
                          insuranceUpto: '27/01/2023',
                          insuranceDetails: '',
                          permitIssueDate: 'NA',
                          permitNumber: '',
                          permitType: '',
                          permitValidFrom: 'NA',
                          permitValidUpto: 'NA',
                          seatingCapacity: '2',
                          sleepingCapacity: '',
                          standingCapacity: '',
                          statusAsOn: '31/01/2023',
                          taxUpto: '27/09/2030',
                          class: 'M-Cycle/Scooter',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:35:05.828834 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:35:09.685254 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-7': {
                      summary: 'Success: GSTIN',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message:
                          'KYC Details for GSTIN retrieved successfully.',
                        kycResult: {
                          primaryBusinessContact: {
                            email: '',
                            address:
                              'D/324, 3rd, Neelkanth Business Park, Next to Vidyavihar Railway Station, Vidyavihar West, Mumbai Suburban, Maharashtra, 400086',
                            mobileNumber: '',
                            natureOfBusinessAtAddress: 'Service Provision',
                            lastUpdatedDate: '',
                          },
                          stateJurisdiction:
                            'State - Maharashtra,Zone - MUMBAI_NORTH_WEST,Division - GHATKOPAR,Charge - GHATKOPAR-WEST_502 (Jurisdictional Office)',
                          stateJurisdictionCode: 'NA',
                          taxpayerType: 'Regular',
                          registrationDate: '01/07/2017',
                          constitutionOfBusiness: 'Private Limited Company',
                          gstnStatus: 'Active',
                          tradeName: 'FRAPPE TECHNOLOGIES PVT LTD',
                          gstin: '27AAACW8099E1ZX',
                          additionalPlacesOfBusinessInState: [],
                          legalName: 'FRAPPE TECHNOLOGIES PRIVATE LIMITED',
                          natureOfBusiness: ['Service Provision'],
                          centralJurisdiction:
                            'Commissionerate - MUMBAI-EAST,Division - DIVISION IX,Range - RANGE-II',
                          centralJurisdictionCode: 'NA',
                          pan: 'AAACW8099E',
                          authorizedSignatories: '',
                          complianceRating: '',
                          cxdt: '',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:36:35.914229 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:36:36.695936 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-8': {
                      summary: 'Success: GSTIN Detailed',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message:
                          'Advanced KYC Details for GSTIN retrieved successfully.',
                        kycResult: {
                          additionalPlacesOfBusinessInState: [],
                          businessDetails: [
                            {
                              hsn: '00440452',
                              serviceDetail:
                                'INFORMATION TECHNOLOGY SOFTWARE SERVICE',
                            },
                          ],
                          primaryBusinessContact: {
                            email: 'XX.XXXX@XX.XX',
                            address:
                              'D/324, 3rd, Neelkanth Business Park, Next to Vidyavihar Railway Station, Vidyavihar West, Mumbai Suburban, Maharashtra, 400086',
                            mobileNumber: 9999999999,
                            natureOfBusinessAtAddress: 'Service Provision',
                            lastUpdatedDate: 'NA',
                          },
                          stateJurisdiction:
                            'State - Maharashtra,Zone - MUMBAI_NORTH_WEST,Division - GHATKOPAR,Charge - GHATKOPAR-WEST_502 (Jurisdictional Office)',
                          taxpayerType: 'Regular',
                          registrationDate: '01/07/2017',
                          constitutionOfBusiness: 'Private Limited Company',
                          gstnStatus: 'Active',
                          tradeName: 'FRAPPE TECHNOLOGIES PVT LTD',
                          gstin: '27AAACW8099E1ZX',
                          legalName: 'FRAPPE TECHNOLOGIES PRIVATE LIMITED',
                          natureOfBusiness: ['Service Provision'],
                          centralJurisdiction:
                            'Commissionerate - MUMBAI-EAST,Division - DIVISION IX,Range - RANGE-II',
                          annualAggregateTurnover: 'Slab: Rs. 5 Cr. to 25 Cr.',
                          mandatoryEInvoicing: 'No',
                          grossTotalIncome: 'Up to Rs. 2.5 lakhs',
                          grossTotalIncomeFinancialYear: '2019-2020',
                          isFieldVisitConducted: 'No',
                          pan: 'AAACW8099E',
                          filingStatus: [
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'December',
                              filingMethod: 'ONLINE',
                              filingDate: '10/01/2023',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'November',
                              filingMethod: 'ONLINE',
                              filingDate: '10/12/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'October',
                              filingMethod: 'ONLINE',
                              filingDate: '11/11/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'September',
                              filingMethod: 'ONLINE',
                              filingDate: '10/10/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'August',
                              filingMethod: 'ONLINE',
                              filingDate: '10/09/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'July',
                              filingMethod: 'ONLINE',
                              filingDate: '11/08/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'June',
                              filingMethod: 'ONLINE',
                              filingDate: '11/07/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'May',
                              filingMethod: 'ONLINE',
                              filingDate: '11/06/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'April',
                              filingMethod: 'ONLINE',
                              filingDate: '11/05/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2021-2022',
                              filingForMonth: 'March',
                              filingMethod: 'ONLINE',
                              filingDate: '11/04/2022',
                              filingGstType: 'GSTR1',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'December',
                              filingMethod: 'ONLINE',
                              filingDate: '19/01/2023',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'November',
                              filingMethod: 'ONLINE',
                              filingDate: '19/12/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'October',
                              filingMethod: 'ONLINE',
                              filingDate: '18/11/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'September',
                              filingMethod: 'ONLINE',
                              filingDate: '20/10/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'August',
                              filingMethod: 'ONLINE',
                              filingDate: '17/09/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'July',
                              filingMethod: 'ONLINE',
                              filingDate: '19/08/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'June',
                              filingMethod: 'ONLINE',
                              filingDate: '20/07/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'May',
                              filingMethod: 'ONLINE',
                              filingDate: '20/06/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2022-2023',
                              filingForMonth: 'April',
                              filingMethod: 'ONLINE',
                              filingDate: '23/05/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2021-2022',
                              filingForMonth: 'March',
                              filingMethod: 'ONLINE',
                              filingDate: '20/04/2022',
                              filingGstType: 'GSTR3B',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2021-2022',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '26/12/2022',
                              filingGstType: 'GSTR9',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2020-2021',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '28/12/2021',
                              filingGstType: 'GSTR9',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2019-2020',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '25/02/2021',
                              filingGstType: 'GSTR9',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2018-2019',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '26/09/2020',
                              filingGstType: 'GSTR9',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2017-2018',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '09/12/2019',
                              filingGstType: 'GSTR9',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2021-2022',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '26/12/2022',
                              filingGstType: 'GSTR9C',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2020-2021',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '25/01/2022',
                              filingGstType: 'GSTR9C',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2019-2020',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '28/02/2021',
                              filingGstType: 'GSTR9C',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                            {
                              filingYear: '2017-2018',
                              filingForMonth: 'Annual',
                              filingMethod: 'ONLINE',
                              filingDate: '14/01/2020',
                              filingGstType: 'GSTR9C',
                              filingAnnualReturn: 'NA',
                              filingStatus: 'Filed',
                            },
                          ],
                          directors: '',
                          stateJurisdictionCode: '',
                          centralJurisdictionCode: '',
                          cxdt: '',
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:37:18.392044 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:37:19.229815 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-9': {
                      summary: 'Success: CIN',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message: 'KYC Details for CIN retrieved successfully.',
                        kycResult: {
                          companyMasterData: {
                            companyCategory: 'Company limited by Shares',
                            emailId: 'lionel@verveindia.com',
                            classOfCompany: 'Private',
                            numberOfMembersApplicableInCaseOfCompanyWithoutShareCapital:
                              '0',
                            addressOtherThanRegisteredOfficeWhereAllOrAnyBooksOfAccountAndPapersAreMaintained:
                              'NA',
                            dateOfLastAgm: '30/09/2022',
                            registeredAddress:
                              'NO.6, DHANAMMAL STREET SPURTANK ROAD, CHETPET CHENNAI Chennai TN 600031 IN',
                            activeCompliance: 'ACTIVE compliant',
                            registrationNumber: '096978',
                            paidUpCapitalInInr: '100000',
                            whetherListedOrNot: 'Unlisted',
                            suspendedAtStockExchange: 'NA',
                            companySubcategory: 'Non-govt company',
                            authorisedCapitalInInr: '100000',
                            companyStatusForEFiling: 'Active',
                            rocCode: 'RoC-Chennai',
                            dateOfBalanceSheet: '31/03/2022',
                            dateOfIncorporation: '18/08/2014',
                            'cin ': 'U67190TN2014PTC096978',
                            companyName: 'INDIAFILINGS PRIVATE LIMITED',
                          },
                          charges: [],
                          directors: [
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: '01901677',
                              beginDate: '18/02/2017',
                              name: 'SHUBA CHARLES',
                            },
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: '03268546',
                              beginDate: '18/08/2014',
                              name: 'LIONEL JESHURAN CHARLES',
                            },
                          ],
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:38:57.897219 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:39:02.307432 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-10': {
                      summary: 'Success: DIN',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message: 'KYC Details for DIN retrieved successfully.',
                        kycResult: {
                          llpData: [],
                          companyData: [],
                          directorData: {
                            din: '00403714',
                            name: 'NITIN JAIRAM GADKARI',
                          },
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2023-01-31 12:40:44.740902 IST (GMT +0530)',
                        responseTimestamp:
                          '2023-01-31 12:40:49.198339 IST (GMT +0530)',
                        decentroTxnId: 'DXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-11': {
                      summary: 'Success: LLPIN',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message:
                          'KYC Details for LLPIN retrieved successfully.',
                        kycResult: {
                          charges: [],
                          directors: [
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: 'XXXXXXXX',
                              beginDate: 'dd/mm/yyyy',
                              name: 'JOHN SMITH',
                            },
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: 'XXXXXXXX',
                              beginDate: 'dd/mm/yyyy',
                              name: 'TOM SMITH',
                            },
                          ],
                          llpMasterData: {
                            emailId: 'tomsmith@gmail.com',
                            registeredAddress:
                              'H NO 23, SECTOR-18, Bengaluru Urban, Bengaluru, KA 530017 IN',
                            dateOfLastFinancialYearEndDateForWhichAnnualReturnFiled:
                              'dd/mm/yyyy',
                            dateOfLastFinancialYearEndDateForWhichStatementOfAccountsAndSolvencyFiled:
                              'dd/mm/yyyy',
                            mainDivisionOfBusinessActivityToBeCarriedOutInIndia:
                              '15',
                            previousFircompanyDetailifApplicable:
                              'JOHN FOODS PVT LTD',
                            rocCode: 'RoC-Bengaluru',
                            numberOfDesignatedPartners: '2',
                            dateOfIncorporation: 'dd/mm/yyyy',
                            llpName: 'SMITH FOODS LLP',
                            totalObligationOfContribution: '1234000',
                            'llpin ': 'XXX-XXXX',
                            llpStatus: 'Active',
                            descriptionOfMainDivision:
                              'Manufacture of food products and beverages',
                            numberOfPartners: '0',
                          },
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2021-06-14 11:36:49.552121 IST (GMT +0530)',
                        responseTimestamp:
                          '2021-06-14 11:37:00.540250 IST (GMT +0530)',
                        decentroTxnId: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-12': {
                      summary: 'Success: FLLPIN',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message:
                          'KYC Details for FLLPIN retrieved successfully.',
                        kycResult: {
                          charges: [],
                          directors: [
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: 'XXXXXXXX',
                              beginDate: 'dd/mm/yyyy',
                              name: 'JOHN SMITH',
                            },
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: 'XXXXXXXX',
                              beginDate: 'dd/mm/yyyy',
                              name: 'TOM SMITH',
                            },
                          ],
                          llpMasterData: {
                            emailId: 'tomsmith@gmail.com',
                            registeredAddress:
                              'H NO 23, SECTOR-18, Bengaluru Urban, Bengaluru, KA 530017 IN',
                            dateOfLastFinancialYearEndDateForWhichAnnualReturnFiled:
                              'dd/mm/yyyy',
                            dateOfLastFinancialYearEndDateForWhichStatementOfAccountsAndSolvencyFiled:
                              'dd/mm/yyyy',
                            mainDivisionOfBusinessActivityToBeCarriedOutInIndia:
                              '15',
                            previousFircompanyDetailifApplicable:
                              'JOHN FOODS PVT LTD',
                            rocCode: 'RoC-Bengaluru',
                            numberOfDesignatedPartners: '2',
                            dateOfIncorporation: 'dd/mm/yyyy',
                            llpName: 'SMITH FOODS LLP',
                            totalObligationOfContribution: '1234000',
                            'llpin ': 'XXX-XXXX',
                            llpStatus: 'Active',
                            descriptionOfMainDivision:
                              'Manufacture of food products and beverages',
                            numberOfPartners: '0',
                          },
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2021-06-14 11:50:27.477743 IST (GMT +0530)',
                        responseTimestamp:
                          '2021-06-14 11:50:28.128292 IST (GMT +0530)',
                        decentroTxnId: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                    'example-13': {
                      summary: 'Success: FCRN',
                      value: {
                        status: 'SUCCESS',
                        kycStatus: 'SUCCESS',
                        message: 'KYC Details for FCRN retrieved successfully.',
                        kycResult: {
                          foreignCompanyMasterData: {
                            emailId: 'tomsmith@gmail.com',
                            foreignCompanyWithShareCapital: 'NA',
                            registeredAddress:
                              'H NO 23, SECTOR-18, Bengaluru Urban, Bengaluru, KA 530017 IN',
                            typeOfOffice: 'Project Office',
                            dateOfIncorporation: 'dd/mm/yyyy',
                            countryOfIncorporation: 'Russian Federation',
                            companyName: 'SMITH OILS & CO',
                            companyStatus: 'Not Available for e-filing',
                            details: 'NA',
                            'fcrn ': 'XXXX',
                            descriptionOfMainDivision:
                              'Extraction of crude petroleum and natural gas, service activities incidental to oil and gas extraction excluding surveying',
                            mainDivisionOfBusinessActivityToBeCarriedOutInIndia:
                              '11',
                          },
                          charges: [],
                          directors: [
                            {
                              endDate: 'NA',
                              surrenderedDin: 'NA',
                              dinOrPan: 'XXXXXXXXXX',
                              beginDate: 'dd/mm/yyyy',
                              name: 'JOHN SMITH',
                            },
                          ],
                        },
                        responseCode: 'S00000',
                        requestTimestamp:
                          '2021-06-14 12:05:30.086543 IST (GMT +0530)',
                        responseTimestamp:
                          '2021-06-14 12:05:35.949536 IST (GMT +0530)',
                        decentroTxnId: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                      },
                    },
                  },
                },
              },
            },
          },
          operationId: 'KYC_validate',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
      '/v2/kyc/forensics/video_liveness': {
        post: {
          tags: ['KYC'],
          summary: 'Liveness Check',
          requestBody: {
            content: {
              'multipart/form-data': {
                schema: {
                  $ref: '#/components/schemas/CheckVideoLivenessRequest',
                },
              },
            },
          },
          parameters: [],
          responses: {
            '200': {
              headers: {
                'Content-Type': {
                  schema: {
                    type: 'string',
                    example: 'application/json',
                  },
                },
              },
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/CheckVideoLivenessResponse',
                  },
                },
              },
              description: 'OK',
            },
          },
          operationId: 'KYC_checkVideoLiveness',
          security: [
            {
              client_id: [],
              client_secret: [],
              module_secret: [],
            },
          ],
        },
      },
    },
    tags: [
      {
        name: 'KYC',
      },
    ],
    components: {
      securitySchemes: {
        client_id: {
          type: 'apiKey',
          name: 'client_id',
          in: 'header',
        },
        client_secret: {
          type: 'apiKey',
          name: 'client_secret',
          in: 'header',
        },
        module_secret: {
          type: 'apiKey',
          name: 'module_secret',
          in: 'header',
        },
      },
      schemas: {
        MaskAadhaarRequest: {
          type: 'object',
          required: ['reference_id', 'consent', 'consent_purpose'],
          properties: {
            reference_id: {
              type: 'string',
              description: '',
            },
            consent: {
              type: 'string',
              description: '',
              example: 'yes',
            },
            consent_purpose: {
              type: 'string',
              description: '',
            },
            image: {
              type: 'string',
              format: 'binary',
            },
            image_url: {
              type: 'string',
            },
          },
        },
        CheckImageQualityRequest: {
          type: 'object',
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            consent: {
              type: 'boolean',
              example: true,
            },
            consent_purpose: {
              type: 'string',
              example: 'for bank account purpose only',
            },
            image: {
              type: 'string',
              format: 'binary',
            },
            quality_parameter: {
              type: 'string',
              example: 'all',
            },
            image_url: {
              type: 'string',
            },
          },
        },
        MatchFaceRequest: {
          type: 'object',
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            consent: {
              type: 'string',
              example: 'Y',
            },
            consent_purpose: {
              type: 'string',
              example: 'for bank account purpose only',
            },
            image1: {
              type: 'string',
              format: 'binary',
            },
            image2: {
              type: 'string',
              format: 'binary',
            },
            threshold: {
              type: 'integer',
              example: 70,
            },
            image1_url: {
              type: 'string',
              example:
                'https://pbs.twimg.com/media/FRW-XT2acAEBYQX?format=jpg&name=small',
            },
            image2_url: {
              type: 'string',
              example:
                'https://pbs.twimg.com/media/FJKOfloaQAADOE9?format=jpg&name=large',
            },
          },
        },
        ClassifyIdRequest: {
          type: 'object',
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            document_type: {
              type: 'string',
              example: 'pan',
            },
            consent: {
              type: 'boolean',
              example: true,
            },
            consent_purpose: {
              type: 'string',
              example: 'for bank account purpose only',
            },
            document: {
              type: 'string',
              format: 'binary',
            },
            document_url: {
              type: 'string',
            },
          },
        },
        CheckPhotocopyRequest: {
          type: 'object',
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            consent: {
              type: 'boolean',
              example: true,
            },
            consent_purpose: {
              type: 'string',
              example: 'for bank account purpos',
            },
            image: {
              type: 'string',
              format: 'binary',
            },
            image_url: {
              type: 'string',
            },
          },
        },
        ExtractTextRequest: {
          type: 'object',
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            document_type: {
              type: 'string',
              example: 'aadhaar',
            },
            consent: {
              type: 'string',
              example: 'Y',
            },
            consent_purpose: {
              type: 'string',
              example: 'for bank account purpose only',
            },
            kyc_validate: {
              type: 'integer',
              example: 0,
            },
            document: {
              type: 'string',
              format: 'binary',
            },
            document_url: {
              type: 'string',
              example: 'https://dummyurl.com/images/pan/pan-card.jpg',
            },
            document_back: {
              type: 'string',
              format: 'binary',
            },
            document_back_url: {
              type: 'string',
              example: 'https://dummyurl.com/images/pan/pan-card.jpg',
            },
          },
        },
        ValidateRequest: {
          type: 'object',
          example: {
            reference_id: 'ABCDEF12345',
            document_type: 'PAN',
            id_number: 'BNZPM2501F',
            dob: '1997-04-21',
            consent: 'Y',
            consent_purpose: 'For bank account purpose only',
          },
          required: [
            'reference_id',
            'document_type',
            'id_number',
            'consent',
            'consent_purpose',
          ],
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            document_type: {
              type: 'string',
              example: 'PAN',
            },
            id_number: {
              type: 'string',
              example: 'BNZPM2501F',
            },
            dob: {
              type: 'string',
              example: '1997-04-21',
            },
            consent: {
              type: 'string',
              example: 'Y',
            },
            consent_purpose: {
              type: 'string',
              example: 'For bank account purpose only',
            },
            name: {
              type: 'string',
              example: 'John Doe',
            },
          },
        },
        CheckVideoLivenessRequest: {
          type: 'object',
          properties: {
            reference_id: {
              type: 'string',
              example: 'ABCDEF12345',
            },
            consent: {
              type: 'string',
              example: 'Y',
            },
            consent_purpose: {
              type: 'string',
              example: 'for bank account purpose only',
            },
            video: {
              type: 'string',
              format: 'binary',
            },
            video_url: {
              type: 'string',
              example:
                'https://drive.google.com/uc?export=download&id=1zNqbsna2z6gdzKLE_uSdR4ETa63Z8K9I',
            },
          },
        },
        MaskAadhaarResponse: {
          type: 'object',
          properties: {
            decentroTxnId: {
              type: 'string',
              example: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            message: {
              type: 'string',
              example: 'Successfully completed Aadhaar UID Masking',
            },
            data: {
              type: 'object',
              properties: {
                isMasked: {
                  type: 'boolean',
                  example: true,
                },
                maskedImages: {
                  type: 'array',
                  items: {
                    type: 'string',
                    example: '<Base64 Image>',
                  },
                },
              },
            },
          },
          example: {
            decentroTxnId: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            status: 'SUCCESS',
            responseCode: 'S00000',
            message: 'Successfully completed Aadhaar UID Masking',
            data: {
              isMasked: true,
              maskedImages: ['<Base64 Image>'],
            },
          },
        },
        CheckImageQualityResponse: {
          type: 'object',
          properties: {
            decentroTxnId: {
              type: 'string',
              example: 'DXXXXXXXXXXXXXXXXXXX',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            message: {
              type: 'string',
              example: 'Image Quality check performed successfully',
            },
            data: {
              type: 'object',
              properties: {
                imageQuality: {
                  type: 'object',
                  properties: {
                    qualityScores: {
                      type: 'object',
                      properties: {
                        textQuality: {
                          type: 'object',
                          properties: {
                            valid: {
                              type: 'string',
                              example: 'yes',
                            },
                            score: {
                              type: 'number',
                              example: 100,
                            },
                          },
                        },
                        sharpness: {
                          type: 'object',
                          properties: {
                            valid: {
                              type: 'string',
                              example: 'yes',
                            },
                            score: {
                              type: 'number',
                              example: 100,
                            },
                          },
                        },
                        brightness: {
                          type: 'object',
                          properties: {
                            valid: {
                              type: 'string',
                              example: 'yes',
                            },
                            score: {
                              type: 'number',
                              example: 100,
                            },
                          },
                        },
                        compressionQuality: {
                          type: 'object',
                          properties: {
                            valid: {
                              type: 'string',
                              example: 'yes',
                            },
                            score: {
                              type: 'number',
                              example: 79,
                            },
                          },
                        },
                      },
                    },
                    extractionQuality: {
                      type: 'string',
                      example: 'high',
                    },
                    score: {
                      type: 'number',
                      example: 79,
                    },
                    summary: {
                      type: 'string',
                      example: 'accept',
                    },
                    msg: {
                      type: 'string',
                      example: 'done',
                    },
                  },
                },
              },
            },
          },
          example: {
            decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
            status: 'SUCCESS',
            responseCode: 'S00000',
            message: 'Image Quality check performed successfully',
            data: {
              imageQuality: {
                qualityScores: {
                  textQuality: {
                    valid: 'yes',
                    score: 100,
                  },
                  sharpness: {
                    valid: 'yes',
                    score: 100,
                  },
                  brightness: {
                    valid: 'yes',
                    score: 100,
                  },
                  compressionQuality: {
                    valid: 'yes',
                    score: 79,
                  },
                },
                extractionQuality: 'high',
                score: 79,
                summary: 'accept',
                msg: 'done',
              },
            },
          },
        },
        MatchFaceResponse: {
          type: 'object',
          properties: {
            decentroTxnId: {
              type: 'string',
              example: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            message: {
              type: 'string',
              example: 'Face scan completed successfully.',
            },
            data: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 'SUCCESS',
                },
                match: {
                  type: 'string',
                  example: '98.00%',
                },
              },
            },
          },
          example: {
            decentroTxnId: 'DECXXXXXXXXXXXXXXXXXXXXXXXXXXX',
            status: 'SUCCESS',
            responseCode: 'S00000',
            message: 'Face scan completed successfully.',
            data: {
              status: 'SUCCESS',
              match: '98.00%',
            },
          },
        },
        ClassifyDocumentResponse: {
          type: 'object',
          properties: {
            decentroTxnId: {
              type: 'string',
              example: 'DXXXXXXXXXXXXXXXXXXX',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            message: {
              type: 'string',
              example: 'The document type matches with the document uploaded.',
            },
            data: {
              type: 'object',
              properties: {
                documentClassificationStatus: {
                  type: 'string',
                  example: 'SUCCESS',
                },
                idTypeClassified: {
                  type: 'string',
                  example: 'individualPan',
                },
              },
            },
          },
          example: {
            decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
            status: 'SUCCESS',
            responseCode: 'S00000',
            message: 'The document type matches with the document uploaded.',
            data: {
              documentClassificationStatus: 'SUCCESS',
              idTypeClassified: 'individualPan',
            },
          },
        },
        CheckPhotocopyResponse: {
          type: 'object',
          properties: {
            decentroTxnId: {
              type: 'string',
              example: 'DXXXXXXXXXXXXXXXXXXX',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            message: {
              type: 'string',
              example: 'Photocopy check performed successfully',
            },
            data: {
              type: 'object',
              properties: {
                score: {
                  type: 'string',
                  example: '1.0',
                },
                isPhotocopy: {
                  type: 'string',
                  example: 'Yes',
                },
              },
            },
          },
          example: {
            decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
            status: 'SUCCESS',
            responseCode: 'S00000',
            message: 'Photocopy check performed successfully',
            data: {
              score: '1.0',
              isPhotocopy: 'Yes',
            },
          },
        },
        ExtractTextResponse: {
          type: 'object',
          properties: {
            ocrStatus: {
              type: 'string',
              example: 'SUCCESS',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            message: {
              type: 'string',
              example: 'Scan completed successfully.',
            },
            ocrResult: {
              type: 'object',
              properties: {
                cardNo: {
                  type: 'string',
                  example: 'BNZPM2501F',
                },
                dateInfo: {
                  type: 'string',
                  example: '16-07-1986',
                },
                dateType: {
                  type: 'string',
                  example: 'DOB',
                },
                fatherName: {
                  type: 'string',
                  example: 'DURAISAMY',
                },
                name: {
                  type: 'string',
                  example: 'D MANIKANDAN',
                },
                gender: {
                  type: 'string',
                  example: 'MALE',
                },
                vid: {
                  type: 'string',
                  example: '',
                },
                address: {
                  type: 'string',
                  example:
                    'S / O : Vijay Singh Chouhan , HOUSE  NO TOS , ASHIRWAD BHAWAN , GALI NO . 1. SARPANCH BARA , MANDAWALI , Mandawali Fazalpur , Eect Delhi , Delhi 110002',
                },
                sonOf: {
                  type: 'string',
                  example: '',
                },
                husbandOf: {
                  type: 'string',
                  example: '',
                },
              },
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            requestTimestamp: {
              type: 'string',
              example: '2023-01-19 17:35:03.970138 IST (GMT +0530)',
            },
            responseTimestamp: {
              type: 'string',
              example: '2023-01-19 17:35:05.743580 IST (GMT +0530)',
            },
            decentroTxnId: {
              type: 'string',
              example: 'DXXXXXXXXXXXXXXXXXXX',
            },
          },
          example: {
            ocrStatus: 'SUCCESS',
            status: 'SUCCESS',
            message: 'Scan completed successfully.',
            ocrResult: {
              cardNo: 'BNZPM2501F',
              dateInfo: '16-07-1986',
              dateType: 'DOB',
              fatherName: 'DURAISAMY',
              name: 'D MANIKANDAN',
            },
            responseCode: 'S00000',
            requestTimestamp: '2023-01-19 17:35:03.970138 IST (GMT +0530)',
            responseTimestamp: '2023-01-19 17:35:05.743580 IST (GMT +0530)',
            decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
          },
        },
        ValidateResponse: {
          type: 'object',
          properties: {
            kycStatus: {
              type: 'string',
              example: 'SUCCESS',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            message: {
              type: 'string',
              example: 'PAN details retrived successfully.',
            },
            kycResult: {
              type: 'object',
              properties: {
                idNumber: {
                  type: 'string',
                  example: 'BNZPM2501F',
                },
                idStatus: {
                  type: 'string',
                  example: 'VALID',
                },
                name: {
                  type: 'string',
                  example: 'DURAISAMY MANIKANDAN',
                },
                panStatus: {
                  type: 'string',
                  example: 'VALID',
                },
                lastName: {
                  type: 'string',
                  example: 'Marley',
                },
                firstName: {
                  type: 'string',
                  example: 'Bob',
                },
                fullName: {
                  type: 'string',
                  example: 'Bob Marley',
                },
                idHolderTitle: {
                  type: 'string',
                  example: 'Shri',
                },
                idLastUpdated: {
                  type: 'string',
                  example: 'DD/MM/YYYY',
                },
                aadhaarSeedingStatus: {
                  type: 'string',
                  example: 'Y',
                },
                addresses: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      addressLine: {
                        type: 'string',
                        example: 'HNO-178 A2/B MIG FLATS PASCHIM VIHAR',
                      },
                      completeAddress: {
                        type: 'string',
                        example:
                          'HNO-178 A2/B MIG FLATS                           PASCHIM VIHAR,DELHI                              110063',
                      },
                      country: {
                        type: 'string',
                        example: 'INDIA',
                      },
                      district: {
                        type: 'string',
                        example: 'DELHI',
                      },
                      pin: {
                        type: 'string',
                        example: '110063',
                      },
                      state: {
                        type: 'string',
                        example: 'DL',
                      },
                      type: {
                        type: 'string',
                        example: 'permanent',
                      },
                    },
                  },
                },
                allClassOfVehicle: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      cov: {
                        type: 'string',
                        example: 'ADPVEH',
                      },
                      expiryDate: {
                        type: 'string',
                        example: 'NA',
                      },
                      issueDate: {
                        type: 'string',
                        example: '01/03/2011',
                      },
                      covCategory: {
                        type: 'string',
                        example: 'NT',
                      },
                    },
                  },
                },
                drivingLicenseNumber: {
                  type: 'string',
                  example: 'DL-0420110149646',
                },
                dateOfBirth: {
                  type: 'string',
                  example: '09/02/1976',
                },
                endorseDate: {
                  type: 'string',
                  example: '01/03/2011',
                },
                endorseNumber: {
                  type: 'string',
                  example: '',
                },
                fatherOrHusbandName: {
                  type: 'string',
                  example: 'BODH RAJ BREJA',
                },
                status: {
                  type: 'string',
                  example: '',
                },
                validFrom: {
                  type: 'string',
                  example: '01/03/2011',
                },
                validTo: {
                  type: 'string',
                  example: '08/02/2026',
                },
                epicNo: {
                  type: 'string',
                  example: 'XYN0037192',
                },
                nameInVernacular: {
                  type: 'string',
                  example: ' ',
                },
                gender: {
                  type: 'string',
                  example: 'F',
                },
                age: {
                  type: 'number',
                  example: 27,
                },
                relativeName: {
                  type: 'string',
                  example: 'SUBASH CHANDRA SUBBA',
                },
                relativeNameInVernacular: {
                  type: 'string',
                  example: ' ',
                },
                relativeRelationType: {
                  type: 'string',
                  example: 'F',
                },
                houseNumber: {
                  type: 'string',
                  example: '',
                },
                partOrLocationInConstituency: {
                  type: 'string',
                  example: 'CHOTA SINGTAM',
                },
                partNumberOrLocationNumberInConstituency: {
                  type: 'string',
                  example: '9',
                },
                parliamentaryConstituency: {
                  type: 'string',
                  example: 'Sikkim',
                },
                assemblyConstituency: {
                  type: 'string',
                  example: 'NAMCHEYBUNG',
                },
                sectionOfConstituencyPart: {
                  type: 'string',
                  example: '2',
                },
                cardSerialNumberInPollingList: {
                  type: 'string',
                  example: '786',
                },
                lastUpdateDate: {
                  type: 'string',
                  example: 'Fri Jan 13 12:57:37 IST 2023',
                },
                pollingBoothDetails: {
                  type: 'object',
                  properties: {
                    latLong: {
                      type: 'string',
                      example: '0.0,0.0',
                    },
                    name: {
                      type: 'string',
                      example: 'AHOPHUL KISSAN JR. HIGH SCHOOL ROOM NO.II',
                    },
                    nameVernacular: {
                      type: 'string',
                      example: '',
                    },
                    number: {
                      type: 'string',
                      example: '9',
                    },
                  },
                },
                address: {
                  type: 'object',
                  properties: {
                    districtCode: {
                      type: 'string',
                      example: '5',
                    },
                    districtName: {
                      type: 'string',
                      example: 'PAKYONG DISTRICT',
                    },
                    districtNameVernacular: {
                      type: 'string',
                      example: '',
                    },
                    state: {
                      type: 'string',
                      example: 'Sikkim',
                    },
                    stateCode: {
                      type: 'string',
                      example: 'S21',
                    },
                  },
                },
                emailId: {
                  type: 'string',
                  example: '',
                },
                mobileNumber: {
                  type: 'string',
                  example: '',
                },
                district: {
                  type: 'string',
                  example: '',
                },
                state: {
                  type: 'string',
                  example: '',
                },
                stateCode: {
                  type: 'string',
                  example: '',
                },
                pollingBoothCoordinates: {
                  type: 'string',
                  example: '',
                },
                pollingBoothAddress: {
                  type: 'string',
                  example: '',
                },
                pollingBoothNumber: {
                  type: 'string',
                  example: '',
                },
                id: {
                  type: 'string',
                  example: '',
                },
                blacklistStatus: {
                  type: 'string',
                  example: 'NA',
                },
                registrationDate: {
                  type: 'string',
                  example: '28-Sep-2015',
                },
                registrationLocation: {
                  type: 'string',
                  example: 'FARIDKOT RTA, Punjab',
                },
                class: {
                  type: 'string',
                  example: 'M-Cycle/Scooter(2WN)',
                },
                maker: {
                  type: 'string',
                  example: 'ROYAL-ENFIELD (UNIT OF EICHER LTD) STANDARD 350CC',
                },
                ownerName: {
                  type: 'string',
                  example: 'MALKIT SINGH',
                },
                chassisNumber: {
                  type: 'string',
                  example: 'FHXXXXX',
                },
                registrationNumber: {
                  type: 'string',
                  example: 'PB05AC9325',
                },
                engineNumber: {
                  type: 'string',
                  example: 'FHXXXXX',
                },
                fuelType: {
                  type: 'string',
                  example: 'PETROL',
                },
                fitUpto: {
                  type: 'string',
                  example: '27-Sep-2030',
                },
                insuranceUpto: {
                  type: 'string',
                  example: '27-Jan-2023',
                },
                taxUpto: {
                  type: 'string',
                  example: 'NA',
                },
                insuranceDetails: {
                  type: 'string',
                  example: '',
                },
                insuranceValidity: {
                  type: 'string',
                  example: '',
                },
                permitType: {
                  type: 'string',
                  example: '',
                },
                permitValidUpto: {
                  type: 'string',
                  example: '',
                },
                pollutionControlValidity: {
                  type: 'string',
                  example: '',
                },
                pollutionNorms: {
                  type: 'string',
                  example: '',
                },
                licenseAddress: {
                  type: 'string',
                  example: '',
                },
                registrationAddress: {
                  type: 'string',
                  example:
                    'H.NO.260,CHAHAL,DISTT FARIDKOT,FARIDKOT,PUNJAB,151203',
                },
                ownerFatherName: {
                  type: 'string',
                  example: 'GURNAM SINGH',
                },
                ownerPresentAddress: {
                  type: 'string',
                  example:
                    'H.NO.260,CHAHAL,DISTT FARIDKOT,FARIDKOT,PUNJAB,151203',
                },
                bodyType: {
                  type: 'string',
                  example: 'SOLO',
                },
                category: {
                  type: 'string',
                  example: '2WN',
                },
                color: {
                  type: 'string',
                  example: 'BLACK',
                },
                engineCubicCapacity: {
                  type: 'string',
                  example: '350',
                },
                numberCylinders: {
                  type: 'string',
                  example: '1',
                },
                unladenWeight: {
                  type: 'string',
                  example: '180',
                },
                grossWeight: {
                  type: 'string',
                  example: '183',
                },
                wheelbase: {
                  type: 'string',
                  example: '350',
                },
                manufacturedMonthYear: {
                  type: 'string',
                  example: '09/2015',
                },
                makerDescription: {
                  type: 'string',
                  example: 'ROYAL-ENFIELD (UNIT OF EICHER LTD)',
                },
                nocDetails: {
                  type: 'string',
                  example: '',
                },
                normsDescription: {
                  type: 'string',
                  example: 'Not Available',
                },
                financier: {
                  type: 'string',
                  example: '',
                },
                permitIssueDate: {
                  type: 'string',
                  example: 'NA',
                },
                permitNumber: {
                  type: 'string',
                  example: '',
                },
                permitValidFrom: {
                  type: 'string',
                  example: 'NA',
                },
                seatingCapacity: {
                  type: 'string',
                  example: '2',
                },
                sleepingCapacity: {
                  type: 'string',
                  example: '',
                },
                standingCapacity: {
                  type: 'string',
                  example: '',
                },
                statusAsOn: {
                  type: 'string',
                  example: '31/01/2023',
                },
                primaryBusinessContact: {
                  type: 'object',
                  properties: {
                    email: {
                      type: 'string',
                      example: '',
                    },
                    address: {
                      type: 'string',
                      example:
                        'D/324, 3rd, Neelkanth Business Park, Next to Vidyavihar Railway Station, Vidyavihar West, Mumbai Suburban, Maharashtra, 400086',
                    },
                    mobileNumber: {
                      oneOf: [
                        {
                          type: 'string',
                          example: '',
                        },
                        {
                          type: 'number',
                          example: 9999999999,
                        },
                      ],
                      example: 9999999999,
                    },
                    natureOfBusinessAtAddress: {
                      type: 'string',
                      example: 'Service Provision',
                    },
                    lastUpdatedDate: {
                      type: 'string',
                      example: '',
                    },
                  },
                },
                stateJurisdiction: {
                  type: 'string',
                  example:
                    'State - Maharashtra,Zone - MUMBAI_NORTH_WEST,Division - GHATKOPAR,Charge - GHATKOPAR-WEST_502 (Jurisdictional Office)',
                },
                stateJurisdictionCode: {
                  type: 'string',
                  example: 'NA',
                },
                taxpayerType: {
                  type: 'string',
                  example: 'Regular',
                },
                constitutionOfBusiness: {
                  type: 'string',
                  example: 'Private Limited Company',
                },
                gstnStatus: {
                  type: 'string',
                  example: 'Active',
                },
                tradeName: {
                  type: 'string',
                  example: 'FRAPPE TECHNOLOGIES PVT LTD',
                },
                gstin: {
                  type: 'string',
                  example: '27AAACW8099E1ZX',
                },
                additionalPlacesOfBusinessInState: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                legalName: {
                  type: 'string',
                  example: 'FRAPPE TECHNOLOGIES PRIVATE LIMITED',
                },
                natureOfBusiness: {
                  type: 'array',
                  items: {
                    type: 'string',
                    example: 'Service Provision',
                  },
                },
                centralJurisdiction: {
                  type: 'string',
                  example:
                    'Commissionerate - MUMBAI-EAST,Division - DIVISION IX,Range - RANGE-II',
                },
                centralJurisdictionCode: {
                  type: 'string',
                  example: 'NA',
                },
                pan: {
                  type: 'string',
                  example: 'AAACW8099E',
                },
                authorizedSignatories: {
                  type: 'string',
                  example: '',
                },
                complianceRating: {
                  type: 'string',
                  example: '',
                },
                cxdt: {
                  type: 'string',
                  example: '',
                },
                businessDetails: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      hsn: {
                        type: 'string',
                        example: '00440452',
                      },
                      serviceDetail: {
                        type: 'string',
                        example: 'INFORMATION TECHNOLOGY SOFTWARE SERVICE',
                      },
                    },
                  },
                },
                annualAggregateTurnover: {
                  type: 'string',
                  example: 'Slab: Rs. 5 Cr. to 25 Cr.',
                },
                mandatoryEInvoicing: {
                  type: 'string',
                  example: 'No',
                },
                grossTotalIncome: {
                  type: 'string',
                  example: 'Up to Rs. 2.5 lakhs',
                },
                grossTotalIncomeFinancialYear: {
                  type: 'string',
                  example: '2019-2020',
                },
                isFieldVisitConducted: {
                  type: 'string',
                  example: 'No',
                },
                filingStatus: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      filingYear: {
                        type: 'string',
                        example: '2022-2023',
                      },
                      filingForMonth: {
                        type: 'string',
                        example: 'December',
                      },
                      filingMethod: {
                        type: 'string',
                        example: 'ONLINE',
                      },
                      filingDate: {
                        type: 'string',
                        example: '10/01/2023',
                      },
                      filingGstType: {
                        type: 'string',
                        example: 'GSTR1',
                      },
                      filingAnnualReturn: {
                        type: 'string',
                        example: 'NA',
                      },
                      filingStatus: {
                        type: 'string',
                        example: 'Filed',
                      },
                    },
                  },
                },
                directors: {
                  oneOf: [
                    {
                      type: 'string',
                      example: '',
                    },
                    {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          endDate: {
                            type: 'string',
                            example: 'NA',
                          },
                          surrenderedDin: {
                            type: 'string',
                            example: 'NA',
                          },
                          dinOrPan: {
                            type: 'string',
                            example: '01901677',
                          },
                          beginDate: {
                            type: 'string',
                            example: '18/02/2017',
                          },
                          name: {
                            type: 'string',
                            example: 'SHUBA CHARLES',
                          },
                        },
                      },
                    },
                  ],
                },
                companyMasterData: {
                  type: 'object',
                  properties: {
                    companyCategory: {
                      type: 'string',
                      example: 'Company limited by Shares',
                    },
                    emailId: {
                      type: 'string',
                      example: 'lionel@verveindia.com',
                    },
                    classOfCompany: {
                      type: 'string',
                      example: 'Private',
                    },
                    numberOfMembersApplicableInCaseOfCompanyWithoutShareCapital:
                      {
                        type: 'string',
                        example: '0',
                      },
                    addressOtherThanRegisteredOfficeWhereAllOrAnyBooksOfAccountAndPapersAreMaintained:
                      {
                        type: 'string',
                        example: 'NA',
                      },
                    dateOfLastAgm: {
                      type: 'string',
                      example: '30/09/2022',
                    },
                    registeredAddress: {
                      type: 'string',
                      example:
                        'NO.6, DHANAMMAL STREET SPURTANK ROAD, CHETPET CHENNAI Chennai TN 600031 IN',
                    },
                    activeCompliance: {
                      type: 'string',
                      example: 'ACTIVE compliant',
                    },
                    registrationNumber: {
                      type: 'string',
                      example: '096978',
                    },
                    paidUpCapitalInInr: {
                      type: 'string',
                      example: '100000',
                    },
                    whetherListedOrNot: {
                      type: 'string',
                      example: 'Unlisted',
                    },
                    suspendedAtStockExchange: {
                      type: 'string',
                      example: 'NA',
                    },
                    companySubcategory: {
                      type: 'string',
                      example: 'Non-govt company',
                    },
                    authorisedCapitalInInr: {
                      type: 'string',
                      example: '100000',
                    },
                    companyStatusForEFiling: {
                      type: 'string',
                      example: 'Active',
                    },
                    rocCode: {
                      type: 'string',
                      example: 'RoC-Chennai',
                    },
                    dateOfBalanceSheet: {
                      type: 'string',
                      example: '31/03/2022',
                    },
                    dateOfIncorporation: {
                      type: 'string',
                      example: '18/08/2014',
                    },
                    'cin ': {
                      type: 'string',
                      example: 'U67190TN2014PTC096978',
                    },
                    companyName: {
                      type: 'string',
                      example: 'INDIAFILINGS PRIVATE LIMITED',
                    },
                  },
                },
                charges: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                llpData: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                companyData: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                directorData: {
                  type: 'object',
                  properties: {
                    din: {
                      type: 'string',
                      example: '00403714',
                    },
                    name: {
                      type: 'string',
                      example: 'NITIN JAIRAM GADKARI',
                    },
                  },
                },
                llpMasterData: {
                  type: 'object',
                  properties: {
                    emailId: {
                      type: 'string',
                      example: 'tomsmith@gmail.com',
                    },
                    registeredAddress: {
                      type: 'string',
                      example:
                        'H NO 23, SECTOR-18, Bengaluru Urban, Bengaluru, KA 530017 IN',
                    },
                    dateOfLastFinancialYearEndDateForWhichAnnualReturnFiled: {
                      type: 'string',
                      example: 'dd/mm/yyyy',
                    },
                    dateOfLastFinancialYearEndDateForWhichStatementOfAccountsAndSolvencyFiled:
                      {
                        type: 'string',
                        example: 'dd/mm/yyyy',
                      },
                    mainDivisionOfBusinessActivityToBeCarriedOutInIndia: {
                      type: 'string',
                      example: '15',
                    },
                    previousFircompanyDetailifApplicable: {
                      type: 'string',
                      example: 'JOHN FOODS PVT LTD',
                    },
                    rocCode: {
                      type: 'string',
                      example: 'RoC-Bengaluru',
                    },
                    numberOfDesignatedPartners: {
                      type: 'string',
                      example: '2',
                    },
                    dateOfIncorporation: {
                      type: 'string',
                      example: 'dd/mm/yyyy',
                    },
                    llpName: {
                      type: 'string',
                      example: 'SMITH FOODS LLP',
                    },
                    totalObligationOfContribution: {
                      type: 'string',
                      example: '1234000',
                    },
                    'llpin ': {
                      type: 'string',
                      example: 'XXX-XXXX',
                    },
                    llpStatus: {
                      type: 'string',
                      example: 'Active',
                    },
                    descriptionOfMainDivision: {
                      type: 'string',
                      example: 'Manufacture of food products and beverages',
                    },
                    numberOfPartners: {
                      type: 'string',
                      example: '0',
                    },
                  },
                },
                foreignCompanyMasterData: {
                  type: 'object',
                  properties: {
                    emailId: {
                      type: 'string',
                      example: 'tomsmith@gmail.com',
                    },
                    foreignCompanyWithShareCapital: {
                      type: 'string',
                      example: 'NA',
                    },
                    registeredAddress: {
                      type: 'string',
                      example:
                        'H NO 23, SECTOR-18, Bengaluru Urban, Bengaluru, KA 530017 IN',
                    },
                    typeOfOffice: {
                      type: 'string',
                      example: 'Project Office',
                    },
                    dateOfIncorporation: {
                      type: 'string',
                      example: 'dd/mm/yyyy',
                    },
                    countryOfIncorporation: {
                      type: 'string',
                      example: 'Russian Federation',
                    },
                    companyName: {
                      type: 'string',
                      example: 'SMITH OILS & CO',
                    },
                    companyStatus: {
                      type: 'string',
                      example: 'Not Available for e-filing',
                    },
                    details: {
                      type: 'string',
                      example: 'NA',
                    },
                    'fcrn ': {
                      type: 'string',
                      example: 'XXXX',
                    },
                    descriptionOfMainDivision: {
                      type: 'string',
                      example:
                        'Extraction of crude petroleum and natural gas, service activities incidental to oil and gas extraction excluding surveying',
                    },
                    mainDivisionOfBusinessActivityToBeCarriedOutInIndia: {
                      type: 'string',
                      example: '11',
                    },
                  },
                },
              },
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            requestTimestamp: {
              type: 'string',
              example: '2023-01-19 17:55:01.270716 IST (GMT +0530)',
            },
            responseTimestamp: {
              type: 'string',
              example: '2023-01-19 17:55:01.492703 IST (GMT +0530)',
            },
            decentroTxnId: {
              type: 'string',
              example: 'DXXXXXXXXXXXXXXXXXXX',
            },
          },
          example: {
            kycStatus: 'SUCCESS',
            status: 'SUCCESS',
            message: 'PAN details retrived successfully.',
            kycResult: {
              idNumber: 'BNZPM2501F',
              idStatus: 'VALID',
              name: 'DURAISAMY MANIKANDAN',
            },
            responseCode: 'S00000',
            requestTimestamp: '2023-01-19 17:55:01.270716 IST (GMT +0530)',
            responseTimestamp: '2023-01-19 17:55:01.492703 IST (GMT +0530)',
            decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
          },
        },
        CheckVideoLivenessResponse: {
          type: 'object',
          properties: {
            decentroTxnId: {
              type: 'string',
              example: 'DXXXXXXXXXXXXXXXXXXX',
            },
            status: {
              type: 'string',
              example: 'SUCCESS',
            },
            responseCode: {
              type: 'string',
              example: 'S00000',
            },
            message: {
              type: 'string',
              example: 'Liveliness check performed successfully',
            },
            data: {
              type: 'object',
              properties: {
                status: {
                  type: 'string',
                  example: 'SUCCESS',
                },
                confidence: {
                  type: 'string',
                  example: '1.0',
                },
              },
            },
          },
          example: {
            decentroTxnId: 'DXXXXXXXXXXXXXXXXXXX',
            status: 'SUCCESS',
            responseCode: 'S00000',
            message: 'Liveliness check performed successfully',
            data: {
              status: 'SUCCESS',
              confidence: '1.0',
            },
          },
        },
      },
    },
  }
  return spec as OpenAPIV3_XDocument
}
