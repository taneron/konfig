export const schema = gql`
  type Membership {
    id: String!
    role: MembershipRole!
    created: DateTime!
    updated: DateTime!
    organization: Organization!
    organizationId: String!
    user: User
    userId: String
    invitedName: String
    invitedEmail: String
  }

  enum MembershipRole {
    Owner
    Admin
    User
  }

  type Query {
    memberships: [Membership!]! @requireAuth(roles: ["SuperAdmin"])
    membership(id: String!): Membership @requireAuth(roles: ["SuperAdmin"])
  }

  input CreateMembershipInput {
    role: MembershipRole!
    created: DateTime!
    updated: DateTime!
    organizationId: String!
    userId: String
    invitedName: String
    invitedEmail: String
  }

  input UpdateMembershipInput {
    role: MembershipRole
    created: DateTime
    updated: DateTime
    organizationId: String
    userId: String
    invitedName: String
    invitedEmail: String
  }

  type Mutation {
    createMembership(input: CreateMembershipInput!): Membership!
      @requireAuth(roles: ["SuperAdmin"])
    updateMembership(id: String!, input: UpdateMembershipInput!): Membership!
      @requireAuth(roles: ["SuperAdmin"])
    deleteMembership(id: String!): Membership!
      @requireAuth(roles: ["SuperAdmin"])
  }
`
