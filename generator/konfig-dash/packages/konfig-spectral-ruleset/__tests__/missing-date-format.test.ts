import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('missing-date-format', [
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
                    type: 'string',
                    format: 'date',
                    // write a string that fits the following regex: "^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})(\\+|-)(\\d{2}):(\\d{2})$"
                    example: '2022-04-12',
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
            requestBody: {
              content: {
                'application/json': {
                  schema: {
                    type: 'string',
                    // write a string that fits the following regex: "^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})(\\+|-)(\\d{2}):(\\d{2})$"
                    example: '2022-04-12',
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
        message:
          'Schema type of "string" has no format "date" but has example "2022-04-12"',
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
