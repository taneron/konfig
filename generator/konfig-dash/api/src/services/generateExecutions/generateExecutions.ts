import type {
  QueryResolvers,
  MutationResolvers,
  GenerateExecutionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const generateExecutions: QueryResolvers['generateExecutions'] = () => {
  return db.generateExecution.findMany()
}

export const generateExecution: QueryResolvers['generateExecution'] = ({
  id,
}) => {
  return db.generateExecution.findUnique({
    where: { id },
  })
}

export const createGenerateExecution: MutationResolvers['createGenerateExecution'] =
  ({ input }) => {
    return db.generateExecution.create({
      data: input,
    })
  }

export const updateGenerateExecution: MutationResolvers['updateGenerateExecution'] =
  ({ id, input }) => {
    return db.generateExecution.update({
      data: input,
      where: { id },
    })
  }

export const deleteGenerateExecution: MutationResolvers['deleteGenerateExecution'] =
  ({ id }) => {
    return db.generateExecution.delete({
      where: { id },
    })
  }

export const GenerateExecution: GenerateExecutionRelationResolvers = {
  space: (_obj, { root }) => {
    return db.generateExecution.findUnique({ where: { id: root?.id } }).space()
  },
  user: (_obj, { root }) => {
    return db.generateExecution.findUnique({ where: { id: root?.id } }).user()
  },
}
