import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeleteGenerateExecutionMutationVariables,
  FindGenerateExecutionById,
} from 'types/graphql'

const DELETE_GENERATE_EXECUTION_MUTATION = gql`
  mutation DeleteGenerateExecutionMutation($id: String!) {
    deleteGenerateExecution(id: $id) {
      id
    }
  }
`

interface Props {
  generateExecution: NonNullable<FindGenerateExecutionById['generateExecution']>
}

const GenerateExecution = ({ generateExecution }: Props) => {
  const [deleteGenerateExecution] = useMutation(
    DELETE_GENERATE_EXECUTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('GenerateExecution deleted')
        navigate(routes.generateExecutions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (
    id: DeleteGenerateExecutionMutationVariables['id']
  ) => {
    if (
      confirm('Are you sure you want to delete generateExecution ' + id + '?')
    ) {
      deleteGenerateExecution({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            GenerateExecution {generateExecution.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{generateExecution.id}</td>
            </tr>
            <tr>
              <th>Created</th>
              <td>{timeTag(generateExecution.created)}</td>
            </tr>
            <tr>
              <th>Updated</th>
              <td>{timeTag(generateExecution.updated)}</td>
            </tr>
            <tr>
              <th>S3 key</th>
              <td>{generateExecution.s3Key}</td>
            </tr>
            <tr>
              <th>Space id</th>
              <td>{generateExecution.spaceId}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{generateExecution.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGenerateExecution({ id: generateExecution.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(generateExecution.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default GenerateExecution
