import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('structured-request-body', [
  {
    name: 'valid case - string w/ no example',
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
                    type: 'string',
                  },
                },
              },
            },
            responses: {},
          },
        },
      },
    },
    errors: [],
  },
  {
    name: 'valid case - object request body',
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
                    example: {
                      hello: 'world',
                    },
                  },
                },
              },
            },
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
                    type: 'string',
                    example: '{"hello":"world"}',
                  },
                },
              },
            },
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message: `Detected JSON example '{"hello":"world"}'. Request body schemas should be structured to generate helpful method parameters and classes.`,
        path: [
          'paths',
          '/',
          'get',
          'requestBody',
          'content',
          'application/json',
          'schema',
        ],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
