import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('duplicate-schema-name-oas2', [
  {
    name: 'valid case',
    document: {
      swagger: '2.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {},
      definitions: {
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
    errors: [],
  },
  {
    name: 'invalid case',
    document: {
      swagger: '2.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {},
      definitions: {
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
    errors: [
      {
        message: 'Duplicate case-insensitive schema name "user"',
        path: ['definitions', 'User'],
        severity: DiagnosticSeverity.Error,
      },
      {
        message: 'Duplicate case-insensitive schema name "User"',
        path: ['definitions', 'user'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
