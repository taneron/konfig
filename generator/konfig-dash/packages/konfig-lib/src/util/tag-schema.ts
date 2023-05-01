import { OpenAPIV3 } from 'openapi-types'
import { z } from '../zod'

export type TagObject = OpenAPIV3.TagObject

export const tagSchema = z
  .string()
  .refine(
    (tag) => !tag.includes('>'),
    `Detected use of ">" character in tag. This could be from exporting your collection from Postman. Tags should try to follow a flat organizational structure for discoverable SDK methods.`
  )
  .refine(
    (tag) => tag !== 'default',
    `"default" is too generic for a tag name. Tags should be entities like "Pet" or concepts like "Authentication"`
  )
  .brand('Tag')
