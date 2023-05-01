import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('missing-date-time-format', [
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
                    format: 'date-time',
                    // write a string that fits the following regex: "^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2})(\\+|-)(\\d{2}):(\\d{2})$"
                    example: '2022-04-12T12:00:00+00:00',
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
                    example: '2022-04-12T12:00:00+00:00',
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
          'Schema type of "string" has no format "date-time" but has example "2022-04-12T12:00:00+00:00"',
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
