import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Membership/MembershipsCell'
import { formatEnum, timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteMembershipMutationVariables,
  FindMemberships,
} from 'types/graphql'

const DELETE_MEMBERSHIP_MUTATION = gql`
  mutation DeleteMembershipMutation($id: String!) {
    deleteMembership(id: $id) {
      id
    }
  }
`

const MembershipsList = ({ memberships }: FindMemberships) => {
  const [deleteMembership] = useMutation(DELETE_MEMBERSHIP_MUTATION, {
    onCompleted: () => {
      toast.success('Membership deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteMembershipMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete membership ' + id + '?')) {
      deleteMembership({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Role</th>
            <th>Created</th>
            <th>Updated</th>
            <th>Organization id</th>
            <th>User id</th>
            <th>Invited name</th>
            <th>Invited email</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {memberships.map((membership) => (
            <tr key={membership.id}>
              <td>{truncate(membership.id)}</td>
              <td>{formatEnum(membership.role)}</td>
              <td>{timeTag(membership.created)}</td>
              <td>{timeTag(membership.updated)}</td>
              <td>{truncate(membership.organizationId)}</td>
              <td>{truncate(membership.userId)}</td>
              <td>{truncate(membership.invitedName)}</td>
              <td>{truncate(membership.invitedEmail)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.membership({ id: membership.id })}
                    title={'Show membership ' + membership.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMembership({ id: membership.id })}
                    title={'Edit membership ' + membership.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete membership ' + membership.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(membership.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MembershipsList
