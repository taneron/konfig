import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('boolean-query-parameter', [
  {
    name: 'valid case',
    document: {
      swagger: '2.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [
              {
                name: 'stringParameter',
                in: 'query',
                schema: {
                  type: 'string',
                },
              },
            ],
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
      swagger: '2.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [
              {
                name: 'booleanParameter',
                in: 'query',
                schema: {
                  type: 'boolean',
                },
              },
            ],
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          'There is no standard method of serializing boolean values in query parameters according to RFC 6570 (https://www.rfc-editor.org/rfc/rfc6570). Konfig serializes boolean values as the lowercase string values "true" and "false". Note that this might not necessarily be compatible with your server implementation.',
        path: ['paths', '/', 'get', 'parameters', '0'],
        severity: DiagnosticSeverity.Information,
      },
    ],
  },
  {
    name: 'invalid case - in schemas',
    document: {
      swagger: '2.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            parameters: [
              {
                $ref: '#/components/parameters/booleanParameter',
              },
            ],
            responses: {},
          },
        },
      },
      components: {
        parameters: {
          booleanParameter: {
            name: 'booleanParameter',
            in: 'query',
            schema: {
              type: 'boolean',
            },
          },
        },
      },
    },
    errors: [
      {
        message:
          'There is no standard method of serializing boolean values in query parameters according to RFC 6570 (https://www.rfc-editor.org/rfc/rfc6570). Konfig serializes boolean values as the lowercase string values "true" and "false". Note that this might not necessarily be compatible with your server implementation.',
        path: ['paths', '/', 'get', 'parameters', '0'],
        severity: DiagnosticSeverity.Information,
      },
    ],
  },
])
