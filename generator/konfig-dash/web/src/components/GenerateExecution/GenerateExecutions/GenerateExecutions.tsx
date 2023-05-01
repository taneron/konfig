import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/GenerateExecution/GenerateExecutionsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeleteGenerateExecutionMutationVariables,
  FindGenerateExecutions,
} from 'types/graphql'

const DELETE_GENERATE_EXECUTION_MUTATION = gql`
  mutation DeleteGenerateExecutionMutation($id: String!) {
    deleteGenerateExecution(id: $id) {
      id
    }
  }
`

const GenerateExecutionsList = ({
  generateExecutions,
}: FindGenerateExecutions) => {
  const [deleteGenerateExecution] = useMutation(
    DELETE_GENERATE_EXECUTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('GenerateExecution deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created</th>
            <th>Updated</th>
            <th>S3 key</th>
            <th>Space id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {generateExecutions.map((generateExecution) => (
            <tr key={generateExecution.id}>
              <td>{truncate(generateExecution.id)}</td>
              <td>{timeTag(generateExecution.created)}</td>
              <td>{timeTag(generateExecution.updated)}</td>
              <td>{truncate(generateExecution.s3Key)}</td>
              <td>{truncate(generateExecution.spaceId)}</td>
              <td>{truncate(generateExecution.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.generateExecution({ id: generateExecution.id })}
                    title={
                      'Show generateExecution ' +
                      generateExecution.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGenerateExecution({
                      id: generateExecution.id,
                    })}
                    title={'Edit generateExecution ' + generateExecution.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete generateExecution ' + generateExecution.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(generateExecution.id)}
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

export default GenerateExecutionsList
