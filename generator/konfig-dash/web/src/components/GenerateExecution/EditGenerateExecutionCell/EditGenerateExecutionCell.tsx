import type {
  EditGenerateExecutionById,
  UpdateGenerateExecutionInput,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import GenerateExecutionForm from 'src/components/GenerateExecution/GenerateExecutionForm'

export const QUERY = gql`
  query EditGenerateExecutionById($id: String!) {
    generateExecution: generateExecution(id: $id) {
      id
      created
      updated
      s3Key
      spaceId
      userId
    }
  }
`
const UPDATE_GENERATE_EXECUTION_MUTATION = gql`
  mutation UpdateGenerateExecutionMutation(
    $id: String!
    $input: UpdateGenerateExecutionInput!
  ) {
    updateGenerateExecution(id: $id, input: $input) {
      id
      created
      updated
      s3Key
      spaceId
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  generateExecution,
}: CellSuccessProps<EditGenerateExecutionById>) => {
  const [updateGenerateExecution, { loading, error }] = useMutation(
    UPDATE_GENERATE_EXECUTION_MUTATION,
    {
      onCompleted: () => {
        toast.success('GenerateExecution updated')
        navigate(routes.generateExecutions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateGenerateExecutionInput,
    id: EditGenerateExecutionById['generateExecution']['id']
  ) => {
    updateGenerateExecution({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit GenerateExecution {generateExecution?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <GenerateExecutionForm
          generateExecution={generateExecution}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
