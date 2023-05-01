import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GenerateExecutionForm from 'src/components/GenerateExecution/GenerateExecutionForm'

import type { CreateGenerateExecutionInput } from 'types/graphql'

const CREATE_GENERATE_EXECUTION_MUTATION = gql`
  mutation CreateGenerateExecutionMutation($input: CreateGenerateExecutionInput!) {
    createGenerateExecution(input: $input) {
      id
    }
  }
`

const NewGenerateExecution = () => {
  const [createGenerateExecution, { loading, error }] = useMutation(
    CREATE_GENERATE_EXECUTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('GenerateExecution created')
        navigate(routes.generateExecutions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateGenerateExecutionInput) => {
    createGenerateExecution({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New GenerateExecution</h2>
      </header>
      <div className="rw-segment-main">
        <GenerateExecutionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewGenerateExecution
