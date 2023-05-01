export const schema = gql`
  type Organization {
    id: String!
    name: String!
    created: DateTime!
    updated: DateTime!
    membership: [Membership]!
    Space: [Space]!
    User: [User]!
  }

  type Query {
    organizations: [Organization!]! @requireAuth(roles: ["SuperAdmin"])
    organization(id: String!): Organization @requireAuth(roles: ["SuperAdmin"])
  }

  input CreateOrganizationInput {
    name: String!
    created: DateTime!
    updated: DateTime!
  }

  input UpdateOrganizationInput {
    name: String
    created: DateTime
    updated: DateTime
  }

  type Mutation {
    createOrganization(input: CreateOrganizationInput!): Organization!
      @requireAuth(roles: ["SuperAdmin"])
    updateOrganization(
      id: String!
      input: UpdateOrganizationInput!
    ): Organization! @requireAuth(roles: ["SuperAdmin"])
    deleteOrganization(id: String!): Organization!
      @requireAuth(roles: ["SuperAdmin"])
  }
`
