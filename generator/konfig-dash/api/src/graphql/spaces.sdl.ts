export const schema = gql`
  type Space {
    id: String!
    name: String!
    created: DateTime!
    updated: DateTime!
    organization: Organization!
    organizationId: String!
    User: [User]!
    GenerateExecution: [GenerateExecution]!
  }

  type Query {
    spaces: [Space!]! @requireAuth(roles: ["SuperAdmin"])
    space(id: String!): Space @requireAuth(roles: ["SuperAdmin"])
  }

  input CreateSpaceInput {
    name: String!
    created: DateTime!
    updated: DateTime!
    organizationId: String!
  }

  input UpdateSpaceInput {
    name: String
    created: DateTime
    updated: DateTime
    organizationId: String
  }

  type Mutation {
    createSpace(input: CreateSpaceInput!): Space!
      @requireAuth(roles: ["SuperAdmin"])
    updateSpace(id: String!, input: UpdateSpaceInput!): Space!
      @requireAuth(roles: ["SuperAdmin"])
    deleteSpace(id: String!): Space! @requireAuth(roles: ["SuperAdmin"])
  }
`
