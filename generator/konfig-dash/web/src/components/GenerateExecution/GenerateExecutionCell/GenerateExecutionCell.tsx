import type { FindGenerateExecutionById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GenerateExecution from 'src/components/GenerateExecution/GenerateExecution'

export const QUERY = gql`
  query FindGenerateExecutionById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>GenerateExecution not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  generateExecution,
}: CellSuccessProps<FindGenerateExecutionById>) => {
  return <GenerateExecution generateExecution={generateExecution} />
}
