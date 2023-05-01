import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('duplicate-schema-name-oas3', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            description: '',
            responses: {},
          },
        },
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
            },
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
            description: '',
            responses: {},
          },
        },
      },
      components: {
        schemas: {
          User: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
            },
          },
          user: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    errors: [
      {
        message: 'Duplicate case-insensitive schema name "user"',
        path: ['components', 'schemas', 'User'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Duplicate case-insensitive schema name "User"',
        path: ['components', 'schemas', 'user'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
