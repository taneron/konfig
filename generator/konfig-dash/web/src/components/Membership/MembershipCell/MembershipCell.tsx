import type { FindMembershipById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Membership from 'src/components/Membership/Membership'

export const QUERY = gql`
  query FindMembershipById($id: String!) {
    membership: membership(id: $id) {
      id
      role
      created
      updated
      organizationId
      userId
      invitedName
      invitedEmail
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Membership not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  membership,
}: CellSuccessProps<FindMembershipById>) => {
  return <Membership membership={membership} />
}
