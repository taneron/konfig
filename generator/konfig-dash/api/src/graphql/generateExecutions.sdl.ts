export const schema = gql`
  type GenerateExecution {
    id: String!
    created: DateTime!
    updated: DateTime!
    s3Key: String!
    space: Space!
    spaceId: String!
    user: User!
    userId: String!
  }

  type Query {
    generateExecutions: [GenerateExecution!]!
      @requireAuth(roles: ["SuperAdmin"])
    generateExecution(id: String!): GenerateExecution
      @requireAuth(roles: ["SuperAdmin"])
  }

  input CreateGenerateExecutionInput {
    created: DateTime!
    updated: DateTime!
    s3Key: String!
    spaceId: String!
    userId: String!
  }

  input UpdateGenerateExecutionInput {
    created: DateTime
    updated: DateTime
    s3Key: String
    spaceId: String
    userId: String
  }

  type Mutation {
    createGenerateExecution(
      input: CreateGenerateExecutionInput!
    ): GenerateExecution! @requireAuth(roles: ["SuperAdmin"])
    updateGenerateExecution(
      id: String!
      input: UpdateGenerateExecutionInput!
    ): GenerateExecution! @requireAuth(roles: ["SuperAdmin"])
    deleteGenerateExecution(id: String!): GenerateExecution!
      @requireAuth(roles: ["SuperAdmin"])
  }
`
