export const schema = gql`
  type User {
    id: String!
    created: DateTime!
    updated: DateTime!
    email: String!
    currentSpace: Space!
    currentSpaceId: String!
    currentOrganization: Organization!
    currentOrganizationId: String!
    roles: GlobalRole!
    memberships: [Membership]!
    GenerateExecution: [GenerateExecution]!
  }

  enum GlobalRole {
    SuperAdmin
    User
  }

  type Query {
    users: [User!]! @requireAuth(roles: ["SuperAdmin"])
    user(id: String!): User @requireAuth(roles: ["SuperAdmin"])
  }

  input CreateUserInput {
    created: DateTime!
    updated: DateTime!
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    currentSpaceId: String!
    currentOrganizationId: String!
    roles: GlobalRole!
  }

  input UpdateUserInput {
    created: DateTime
    updated: DateTime
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
    currentSpaceId: String
    currentOrganizationId: String
    roles: GlobalRole
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
      @requireAuth(roles: ["SuperAdmin"])
    updateUser(id: String!, input: UpdateUserInput!): User!
      @requireAuth(roles: ["SuperAdmin"])
    deleteUser(id: String!): User! @requireAuth(roles: ["SuperAdmin"])
  }
`
