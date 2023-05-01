import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/GenerateConfig/GenerateConfigsCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type { DeleteGenerateConfigMutationVariables, FindGenerateConfigs } from 'types/graphql'

const DELETE_GENERATE_CONFIG_MUTATION = gql`
  mutation DeleteGenerateConfigMutation($id: String!) {
    deleteGenerateConfig(id: $id) {
      id
    }
  }
`

const GenerateConfigsList = ({ generateConfigs }: FindGenerateConfigs) => {
  const [deleteGenerateConfig] = useMutation(DELETE_GENERATE_CONFIG_MUTATION, {
    onCompleted: () => {
      toast.success('GenerateConfig deleted')
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

  const onDeleteClick = (id: DeleteGenerateConfigMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete generateConfig ' + id + '?')) {
      deleteGenerateConfig({ variables: { id } })
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
            <th>Konfigyaml</th>
            <th>Space id</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {generateConfigs.map((generateConfig) => (
            <tr key={generateConfig.id}>
              <td>{truncate(generateConfig.id)}</td>
              <td>{timeTag(generateConfig.created)}</td>
              <td>{timeTag(generateConfig.updated)}</td>
              <td>{truncate(generateConfig.konfigyaml)}</td>
              <td>{truncate(generateConfig.spaceId)}</td>
              <td>{truncate(generateConfig.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.generateConfig({ id: generateConfig.id })}
                    title={'Show generateConfig ' + generateConfig.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editGenerateConfig({ id: generateConfig.id })}
                    title={'Edit generateConfig ' + generateConfig.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete generateConfig ' + generateConfig.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(generateConfig.id)}
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

export default GenerateConfigsList
