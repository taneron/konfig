import { z } from '../zod'

export const operationIdRegex = /^[a-zA-Z0-9]+\_[a-zA-Z0-9]+$/g

/**
 * Set of runtypes for persisting proress
 */
export const operationIdSchema = z
  .string()
  .regex(
    operationIdRegex,
    `OperationID should be prefixed with Tag + "_" (https://konfigthis.com/docs/tutorials/naming-operation-ids)`
  )
  .brand<'OperationId'>()
