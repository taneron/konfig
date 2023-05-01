
import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag,  } from 'src/lib/formatters'

import type { DeleteGenerateConfigMutationVariables, FindGenerateConfigById } from 'types/graphql'

const DELETE_GENERATE_CONFIG_MUTATION = gql`
  mutation DeleteGenerateConfigMutation($id: String!) {
    deleteGenerateConfig(id: $id) {
      id
    }
  }
`

interface Props {
  generateConfig: NonNullable<FindGenerateConfigById['generateConfig']>
}

const GenerateConfig = ({ generateConfig }: Props) => {
  const [deleteGenerateConfig] = useMutation(DELETE_GENERATE_CONFIG_MUTATION, {
    onCompleted: () => {
      toast.success('GenerateConfig deleted')
      navigate(routes.generateConfigs())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteGenerateConfigMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete generateConfig ' + id + '?')) {
      deleteGenerateConfig({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            GenerateConfig {generateConfig.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{generateConfig.id}</td>
            </tr><tr>
              <th>Created</th>
              <td>{timeTag(generateConfig.created)}</td>
            </tr><tr>
              <th>Updated</th>
              <td>{timeTag(generateConfig.updated)}</td>
            </tr><tr>
              <th>Konfigyaml</th>
              <td>{generateConfig.konfigyaml}</td>
            </tr><tr>
              <th>Space id</th>
              <td>{generateConfig.spaceId}</td>
            </tr><tr>
              <th>User id</th>
              <td>{generateConfig.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editGenerateConfig({ id: generateConfig.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(generateConfig.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default GenerateConfig
