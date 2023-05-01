import type { FindMemberships } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Memberships from 'src/components/Membership/Memberships'

export const QUERY = gql`
  query FindMemberships {
    memberships {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No memberships yet. '}
      <Link
        to={routes.newMembership()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ memberships }: CellSuccessProps<FindMemberships>) => {
  return <Memberships memberships={memberships} />
}
