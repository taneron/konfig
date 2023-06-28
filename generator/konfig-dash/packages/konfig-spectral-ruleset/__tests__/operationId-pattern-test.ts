import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('operationId-pattern', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            operationId: 'Pet_create',
            responses: {},
          },
        },
      },
    },
    errors: [],
  },
  {
    name: 'invalid case - no prefix',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            operationId: 'createPet',
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          'Does not match regex: "/^[a-zA-Z0-9]+\\_[a-zA-Z0-9]+$/g". Prefix operation IDs with "Tag_" (https://konfigthis.com/docs/tutorials/naming-operation-ids)',
        path: ['paths', '/', 'get', 'operationId'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case - two underscores',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      paths: {
        '/': {
          get: {
            operationId: 'Tag_create_pet',
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message:
          'Does not match regex: "/^[a-zA-Z0-9]+\\_[a-zA-Z0-9]+$/g". Prefix operation IDs with "Tag_" (https://konfigthis.com/docs/tutorials/naming-operation-ids)',
        path: ['paths', '/', 'get', 'operationId'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
