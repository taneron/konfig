import type { EditGenerateConfigById, UpdateGenerateConfigInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GenerateConfigForm from 'src/components/GenerateConfig/GenerateConfigForm'

export const QUERY = gql`
  query EditGenerateConfigById($id: String!) {
    generateConfig: generateConfig(id: $id) {
      id
      created
      updated
      konfigyaml
      spaceId
      userId
    }
  }
`
const UPDATE_GENERATE_CONFIG_MUTATION = gql`
  mutation UpdateGenerateConfigMutation($id: String!, $input: UpdateGenerateConfigInput!) {
    updateGenerateConfig(id: $id, input: $input) {
      id
      created
      updated
      konfigyaml
      spaceId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ generateConfig }: CellSuccessProps<EditGenerateConfigById>) => {
  const [updateGenerateConfig, { loading, error }] = useMutation(
    UPDATE_GENERATE_CONFIG_MUTATION,
    {
      onCompleted: () => {
        toast.success('GenerateConfig updated')
        navigate(routes.generateConfigs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateGenerateConfigInput,
    id: EditGenerateConfigById['generateConfig']['id']
  ) => {
    updateGenerateConfig({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit GenerateConfig {generateConfig?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <GenerateConfigForm generateConfig={generateConfig} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
