import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type { DeleteSpaceMutationVariables, FindSpaceById } from 'types/graphql'

const DELETE_SPACE_MUTATION = gql`
  mutation DeleteSpaceMutation($id: String!) {
    deleteSpace(id: $id) {
      id
    }
  }
`

interface Props {
  space: NonNullable<FindSpaceById['space']>
}

const Space = ({ space }: Props) => {
  const [deleteSpace] = useMutation(DELETE_SPACE_MUTATION, {
    onCompleted: () => {
      toast.success('Space deleted')
      navigate(routes.spaces())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteSpaceMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete space ' + id + '?')) {
      deleteSpace({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Space {space.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{space.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{space.name}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{timeTag(space.created)}</td>
            </tr>
            <tr>
              <th>Updated</th>
              <td>{timeTag(space.updated)}</td>
            </tr>
            <tr>
              <th>Organization id</th>
              <td>{space.organizationId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSpace({ id: space.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(space.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Space
