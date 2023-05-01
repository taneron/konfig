import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('components-schemas-defined-oas3', [
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
    name: 'invalid case - empty',
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
        schemas: {},
      },
    },
    errors: [
      {
        message:
          'APIs should define schemas for developer friendly SDK generation.',
        path: ['components', 'schemas'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case - undefined',
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
    },
    errors: [
      {
        message:
          'APIs should define schemas for developer friendly SDK generation.',
        path: [],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case - undefined schemas',
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
      components: {},
    },
    errors: [
      {
        message:
          'APIs should define schemas for developer friendly SDK generation.',
        path: ['components'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
