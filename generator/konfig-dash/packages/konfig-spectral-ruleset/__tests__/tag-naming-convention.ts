import { DiagnosticSeverity } from '@stoplight/types'
import testRule from './__helpers__/helper'

testRule('tag-naming-convention', [
  {
    name: 'valid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      tags: [{ name: 'Cat' }, { name: 'Dog' }],
      paths: {},
    },
    errors: [],
  },
  {
    name: 'invalid case',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      tags: [{ name: 'Pet > Cat' }, { name: 'Pet > Dog' }],
      paths: {},
    },
    errors: [
      {
        message:
          'Detected use of ">" character in tag. This could be from exporting your collection from Postman. Tags should try to follow a flat organizational structure for discoverable SDK methods.',
        path: ['tags', '0', 'name'],
        severity: DiagnosticSeverity.Warning,
      },
      {
        message:
          'Detected use of ">" character in tag. This could be from exporting your collection from Postman. Tags should try to follow a flat organizational structure for discoverable SDK methods.',
        path: ['tags', '1', 'name'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
  {
    name: 'invalid case - default',
    document: {
      openapi: '3.0.0',
      info: { title: 'Example API', version: '1.0.0' },
      tags: [{ name: 'default' }],
      paths: {},
    },
    errors: [
      {
        message: `"default" is too generic for a tag name. Tags should be entities like "Pet" or concepts like "Authentication"`,
        path: ['tags', '0', 'name'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
])
