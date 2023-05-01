import type { FindGenerateConfigById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GenerateConfig from 'src/components/GenerateConfig/GenerateConfig'

export const QUERY = gql`
  query FindGenerateConfigById($id: String!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>GenerateConfig not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ generateConfig }: CellSuccessProps<FindGenerateConfigById>) => {
  return <GenerateConfig generateConfig={generateConfig} />
}
