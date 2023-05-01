import { DiagnosticSeverity } from '@stoplight/types'
import { POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME } from 'konfig-lib/dist/util/get-ignore'
import testRule from './__helpers__/helper'

testRule(POTENTIAL_INCORRECT_DATA_TYPE_RULE_NAME, [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            description: '',
            parameters: [
              {
                name: 'example',
                in: 'header',
                schema: { $ref: '#/components/schemas/object' },
              },
            ],
            responses: {},
          },
        },
      },
      components: {
        schemas: {
          object: {
            type: 'object',
            properties: {
              stringField: {
                type: 'string',
                example: 'hello world',
              },
              stringFieldDate: {
                type: 'string',
                example: '2022-07-19T15:53:47.915000-04:00',
              },
              stringFieldEncryptedData: {
                type: 'string',
                example: '9Xy05vqZOfp0OpW5fLAaDw==',
              },
              numberField: {
                type: 'number',
                example: 1.0,
              },
              integerField: {
                type: 'integer',
                example: 1,
              },
              booleanField: {
                type: 'boolean',
                example: false,
              },
              arrayField: {
                type: 'array',
                items: {
                  type: 'string',
                  example: 'hello world',
                },
              },
            },
            example: {
              stringField: 'hello world',
              numberField: 1.0,
              integerField: 1,
              booleanField: false,
              arrayField: ['hello world'],
            },
          },
        },
      },
    },
    errors: [],
  },
  {
    name: 'invalid case - could be',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          description: 'root path',
          get: {
            description: '',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/requestObject',
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/responseObject',
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          responseObject: {
            type: 'object',
            properties: {
              couldBeNumberField: {
                type: 'string',
                example: '1.0',
              },
              couldBeIntegerField: {
                type: 'string',
                example: '1',
              },
              couldBeIntegerFieldNegative: {
                type: 'string',
                example: '-1',
              },
              couldBeIntegerFieldPositive: {
                type: 'string',
                example: '+1',
              },
            },
          },
          requestObject: {
            type: 'object',
            properties: {
              couldBeNumberItemType: {
                type: 'array',
                items: {
                  type: 'string',
                  example: '1.0',
                },
              },
              couldBeBooleanTrue: {
                type: 'string',
                example: 'true',
              },
              couldBeBooleanFalse: {
                type: 'string',
                example: 'false',
              },
            },
          },
        },
      },
    },
    errors: [
      {
        message: `Could be boolean type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'requestBody',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeBooleanFalse',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `Could be boolean type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'requestBody',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeBooleanTrue',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `Could be number type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'requestBody',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeNumberItemType',
          'items',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `Could be integer type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeIntegerField',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `Could be integer type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeIntegerFieldNegative',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `Could be integer type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeIntegerFieldPositive',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: `Could be number type based on example. Ensure your types are correct.`,
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
          'properties',
          'couldBeNumberField',
        ],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
  {
    name: 'invalid case - ignored',
    document: {
      openapi: '3.0.0',
      info: {
        title: 'Example API',
        version: '1.0.0',
        'x-konfig-ignore': { 'potential-incorrect-type': true },
      },
      paths: {
        '/': {
          description: 'root path',
          get: {
            description: '',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    $ref: '#/components/schemas/requestObject',
                  },
                },
              },
            },
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      $ref: '#/components/schemas/responseObject',
                    },
                  },
                },
              },
            },
          },
        },
      },
      components: {
        schemas: {
          responseObject: {
            type: 'object',
            properties: {
              couldBeNumberField: {
                type: 'string',
                example: '1.0',
              },
              couldBeIntegerField: {
                type: 'string',
                example: '1',
              },
              couldBeIntegerFieldNegative: {
                type: 'string',
                example: '-1',
              },
              couldBeIntegerFieldPositive: {
                type: 'string',
                example: '+1',
              },
            },
          },
          requestObject: {
            type: 'object',
            properties: {
              couldBeNumberItemType: {
                type: 'array',
                items: {
                  type: 'string',
                  example: '1.0',
                },
              },
              couldBeBooleanTrue: {
                type: 'string',
                example: 'true',
              },
              couldBeBooleanFalse: {
                type: 'string',
                example: 'false',
              },
            },
          },
        },
      },
    } as any,
    errors: [],
  },
])
