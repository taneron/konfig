import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('empty-property-name', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      hello: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
            tags: ['Example'],
            description: '',
            responses: {},
          },
        },
      },
    },
    errors: [],
  },
  {
    name: 'invalid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            tags: ['Example'],
            description: '',
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      '': {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
            responses: {
              '401': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        '': {
                          type: 'string',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    errors: [
      {
        message: 'Empty property names cause generated SDKs to fail',
        path: [
          'paths',
          '/',
          'get',
          'requestBody',
          'content',
          'application/json',
          'schema',
        ],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Empty property names cause generated SDKs to fail',
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '401',
          'content',
          'application/json',
          'schema',
        ],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
