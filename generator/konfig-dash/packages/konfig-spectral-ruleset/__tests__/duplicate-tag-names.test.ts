import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('duplicate-tag-names', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      tags: [{ name: 'Pet' }],
      paths: {
        '/': {
          get: {
            tags: ['Pet'],
            description: '',
            responses: {},
          },
          post: {
            tags: ['Pet'],
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
      tags: [{ name: 'Pet' }, { name: 'pet' }],
      paths: {
        '/': {
          get: {
            tags: ['Pet'],
            description: '',
            responses: {},
          },
          post: {
            tags: ['pet'],
            description: '',
            responses: {},
          },
        },
      },
    },
    errors: [
      {
        message: 'Duplicate case-insensitive tag name "pet"',
        path: ['tags', '0', 'name'],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message: 'Duplicate case-insensitive tag name "Pet"',
        path: ['tags', '1', 'name'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
