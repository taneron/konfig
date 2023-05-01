import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GenerateConfigForm from 'src/components/GenerateConfig/GenerateConfigForm'

import type { CreateGenerateConfigInput } from 'types/graphql'

const CREATE_GENERATE_CONFIG_MUTATION = gql`
  mutation CreateGenerateConfigMutation($input: CreateGenerateConfigInput!) {
    createGenerateConfig(input: $input) {
      id
    }
  }
`

const NewGenerateConfig = () => {
  const [createGenerateConfig, { loading, error }] = useMutation(
    CREATE_GENERATE_CONFIG_MUTATION,
    {
      onCompleted: () => {
        toast.success('GenerateConfig created')
        navigate(routes.generateConfigs())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateGenerateConfigInput) => {
    createGenerateConfig({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New GenerateConfig</h2>
      </header>
      <div className="rw-segment-main">
        <GenerateConfigForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGenerateConfig
