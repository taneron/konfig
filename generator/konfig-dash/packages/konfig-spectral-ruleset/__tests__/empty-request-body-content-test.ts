import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('empty-request-body-content', [
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
            requestBody: { content: {} },
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Empty request body content is not allowed for SDK generation',
        path: ['paths', '/', 'get', 'requestBody', 'content'],
        severity: DiagnosticSeverity.Error,
      },
    ],
  },
])
