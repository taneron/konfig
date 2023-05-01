export const schema = gql`
  type GenerateConfig {
    id: String!
    created: DateTime!
    updated: DateTime!
    konfigyaml: String!
    openApiSpecification: String!
    executions: [GenerateExecution]!
    space: Space!
    spaceId: String!
    user: User!
    userId: String!
  }

  type Query {
    generateConfigs: [GenerateConfig!]! @requireAuth
    generateConfig(id: String!): GenerateConfig @requireAuth
  }

  input CreateGenerateConfigInput {
    created: DateTime!
    updated: DateTime!
    konfigyaml: String!
    spaceId: String!
    userId: String!
  }

  input UpdateGenerateConfigInput {
    created: DateTime
    updated: DateTime
    konfigyaml: String
    spaceId: String
    userId: String
  }

  type Mutation {
    createGenerateConfig(input: CreateGenerateConfigInput!): GenerateConfig!
      @requireAuth(roles: ["SuperAdmin"])
    updateGenerateConfig(
      id: String!
      input: UpdateGenerateConfigInput!
    ): GenerateConfig! @requireAuth(roles: ["SuperAdmin"])
    deleteGenerateConfig(id: String!): GenerateConfig!
      @requireAuth(roles: ["SuperAdmin"])
  }
`
