import { CliUx } from '@oclif/core'
import { OpenAPIV3_XDocument, recurseObject } from 'konfig-lib'

export function fixInvalidExamples({
  spec,
}: {
  spec: OpenAPIV3_XDocument
}): number {
  let numberOfExamplesFixed = 0
  recurseObject(spec, ({ value }) => {
    numberOfExamplesFixed += fixParameterExampleInteger(value)
    numberOfExamplesFixed += fixParameterExampleNumber(value)
    numberOfExamplesFixed += fixSchemaExampleInteger(value)
    numberOfExamplesFixed += fixSchemaExampleNumber(value)
    numberOfExamplesFixed += fixSchemaExampleBoolean(value)
  })
  return numberOfExamplesFixed
}

function fixParameterExampleNumber(value: any): number {
  if (typeof value !== 'object') return 0
  if (value === null) return 0
  if (!('example' in value)) return 0
  if (!('schema' in value)) return 0
  if (value.schema.type !== 'number') return 0
  if (typeof value.example === 'number') return 0
  value.example = parseFloat(value.example)
  return 1
}

function fixParameterExampleInteger(value: any): number {
  if (typeof value !== 'object') return 0
  if (value === null) return 0
  if (!('example' in value)) return 0
  if (!('schema' in value)) return 0
  if (value.schema.type !== 'integer') return 0
  if (typeof value.example === 'number') return 0
  value.example = parseInt(value.example)
  return 1
}

function fixSchemaExampleNumber(value: any): number {
  if (typeof value !== 'object') return 0
  if (value === null) return 0
  if (!('type' in value)) return 0
  if (!('example' in value)) return 0
  if (value.type !== 'number') return 0
  if (typeof value.example === 'number') return 0
  value.example = parseFloat(value.example)
  return 1
}

function fixSchemaExampleInteger(value: any): number {
  if (typeof value !== 'object') return 0
  if (value === null) return 0
  if (!('type' in value)) return 0
  if (!('example' in value)) return 0
  if (value.type !== 'integer') return 0
  if (typeof value.example === 'number') return 0
  value.example = parseInt(value.example)
  return 1
}

function fixSchemaExampleBoolean(value: any): number {
  if (typeof value !== 'object') return 0
  if (value === null) return 0
  if (!('type' in value)) return 0
  if (!('example' in value)) return 0
  if (value.type !== 'boolean') return 0
  if (typeof value.example === 'boolean') return 0
  if (value.example === 'true') {
    value.example = true
    return 1
  }
  if (value.example === 'false') {
    value.example = false
    return 1
  }
  if (value.example === '') {
    value.example = false
    return 1
  }
  if (value.example === '0') {
    value.example = false
    return 1
  }
  if (value.example === 0) {
    value.example = false
    return 1
  }
  throw Error(`Could not parse value "${value.example}" for type of boolean`)
}
