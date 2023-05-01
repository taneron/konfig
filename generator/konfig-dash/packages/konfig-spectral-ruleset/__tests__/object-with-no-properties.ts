// import { DiagnosticSeverity } from '@stoplight/types'
import { DiagnosticSeverity } from '@stoplight/types'
import { OBJECT_WITH_NO_PROPERTIES_RULE_NAME } from 'konfig-lib'
import { OpenAPIV3 } from 'openapi-types'
import testRule from './__helpers__/helper'

testRule('object-with-no-properties', [
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
                'application/xml': {
                  schema: {
                    type: 'object',
                    additionalProperties: {
                      type: 'string',
                    },
                  },
                },
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
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
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
    errors: [],
  },
  {
    name: 'invalid case - ignored',
    document: {
      openapi: '3.0.0',
      info: {
        title: 'Example API',
        version: '1.0.0',
        'x-konfig-ignore': { [OBJECT_WITH_NO_PROPERTIES_RULE_NAME]: true },
      },
      paths: {
        '/': {
          get: {
            tags: ['Example'],
            description: '',
            requestBody: {
              content: { 'application/json': { schema: { type: 'object' } } },
            },
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                    },
                  },
                },
              },
            },
          },
        },
      },
    } as OpenAPIV3.Document,
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
              content: { 'application/json': { schema: { type: 'object' } } },
            },
            responses: {
              '200': {
                description: 'OK',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
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
        code: 'object-with-no-properties',
        message: 'Schema type of "object" has no properties',
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
      {
        code: 'object-with-no-properties',
        message: 'Schema type of "object" has no properties',
        path: [
          'paths',
          '/',
          'get',
          'responses',
          '200',
          'content',
          'application/json',
          'schema',
        ],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
