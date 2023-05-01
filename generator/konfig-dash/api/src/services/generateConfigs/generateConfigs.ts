import type {
  QueryResolvers,
  MutationResolvers,
  GenerateConfigRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const generateConfigs: QueryResolvers['generateConfigs'] = () => {
  return db.generateConfig.findMany()
}

export const generateConfig: QueryResolvers['generateConfig'] = ({ id }) => {
  return db.generateConfig.findUnique({
    where: { id },
  })
}

export const createGenerateConfig: MutationResolvers['createGenerateConfig'] =
  ({ input }) => {
    return db.generateConfig.create({
      data: input,
    })
  }

export const updateGenerateConfig: MutationResolvers['updateGenerateConfig'] =
  ({ id, input }) => {
    return db.generateConfig.update({
      data: input,
      where: { id },
    })
  }

export const deleteGenerateConfig: MutationResolvers['deleteGenerateConfig'] =
  ({ id }) => {
    return db.generateConfig.delete({
      where: { id },
    })
  }

export const GenerateConfig: GenerateConfigRelationResolvers = {
  executions: (_obj, { root }) => {
    return db.generateConfig
      .findUnique({ where: { id: root?.id } })
      .executions()
  },
  space: (_obj, { root }) => {
    return db.generateConfig.findUnique({ where: { id: root?.id } }).space()
  },
  user: (_obj, { root }) => {
    return db.generateConfig.findUnique({ where: { id: root?.id } }).user()
  },
}
