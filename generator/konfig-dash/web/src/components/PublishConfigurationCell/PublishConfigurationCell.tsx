import type {
  PublishConfigurationQuery,
  PublishConfigurationQueryVariables,
} from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import PublishConfiguration from '../PublishConfiguration/PublishConfiguration'

export const QUERY = gql`
  query PublishConfigurationQuery($configId: String!) {
    generateConfig: generateConfig(id: $configId) {
      konfigyaml
      openApiSpecification
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<PublishConfigurationQuery>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  generateConfig,
}: CellSuccessProps<
  PublishConfigurationQuery,
  PublishConfigurationQueryVariables
>) => {
  return (
    <PublishConfiguration
      spec={generateConfig.openApiSpecification}
      konfig={generateConfig.konfigyaml}
    />
  )
}
