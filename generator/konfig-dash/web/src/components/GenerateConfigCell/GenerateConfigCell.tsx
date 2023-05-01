import type { FindGenerateConfigQuery, FindGenerateConfigQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindGenerateConfigQuery($id: String!) {
    generateConfig: generateConfig(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindGenerateConfigQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  generateConfig,
}: CellSuccessProps<FindGenerateConfigQuery, FindGenerateConfigQueryVariables>) => {
  return <div>{JSON.stringify(generateConfig)}</div>
}
