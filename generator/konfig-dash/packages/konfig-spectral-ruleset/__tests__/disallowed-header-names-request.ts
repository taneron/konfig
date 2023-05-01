// import { DiagnosticSeverity } from '@stoplight/types'
import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('disallowed-header-names-request', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            responses: {
              default: {
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
    name: 'invalid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [
              {
                name: 'Content-Type',
                in: 'header',
                schema: { type: 'string' },
              },
              {
                name: 'Content-Type',
                in: 'query',
                schema: { type: 'string' },
              },
              {
                name: '-Content-Type',
                in: 'header',
                schema: { type: 'string' },
              },
              {
                name: 'Content-Type-',
                in: 'header',
                schema: { type: 'string' },
              },
              {
                name: '-Content-Type-',
                in: 'header',
                schema: { type: 'string' },
              },
            ],
            responses: {
              '200': {
                description: 'OK',
                headers: {
                  'Content-Type': {
                    schema: {
                      type: 'string',
                    },
                  },
                  '-Content-Type': {
                    schema: {
                      type: 'string',
                    },
                  },
                  'Content-Type-': {
                    schema: {
                      type: 'string',
                    },
                  },
                  '-Content-Type-': {
                    schema: {
                      type: 'string',
                    },
                  },
                },
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
    errors: [
      {
        message: `Konfig's Python SDK does not allow 'Accept', 'Content-Type', or 'Authorization' to be specified as a header in the request`,
        path: ['paths', '/', 'get', 'parameters', '0'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
