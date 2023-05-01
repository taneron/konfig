import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { formatEnum, timeTag } from 'src/lib/formatters'

import type {
  DeleteMembershipMutationVariables,
  FindMembershipById,
} from 'types/graphql'

const DELETE_MEMBERSHIP_MUTATION = gql`
  mutation DeleteMembershipMutation($id: String!) {
    deleteMembership(id: $id) {
      id
    }
  }
`

interface Props {
  membership: NonNullable<FindMembershipById['membership']>
}

const Membership = ({ membership }: Props) => {
  const [deleteMembership] = useMutation(DELETE_MEMBERSHIP_MUTATION, {
    onCompleted: () => {
      toast.success('Membership deleted')
      navigate(routes.memberships())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteMembershipMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete membership ' + id + '?')) {
      deleteMembership({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Membership {membership.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{membership.id}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{formatEnum(membership.role)}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{timeTag(membership.created)}</td>
            </tr>
            <tr>
              <th>Updated</th>
              <td>{timeTag(membership.updated)}</td>
            </tr>
            <tr>
              <th>Organization id</th>
              <td>{membership.organizationId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{membership.userId}</td>
            </tr>
            <tr>
              <th>Invited name</th>
              <td>{membership.invitedName}</td>
            </tr>
            <tr>
              <th>Invited email</th>
              <td>{membership.invitedEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editMembership({ id: membership.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(membership.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Membership
