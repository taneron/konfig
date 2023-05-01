import type { FindGenerateConfigs } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GenerateConfigs from 'src/components/GenerateConfig/GenerateConfigs'

export const QUERY = gql`
  query FindGenerateConfigs {
    generateConfigs {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No generateConfigs yet. '}
      <Link
        to={routes.newGenerateConfig()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ generateConfigs }: CellSuccessProps<FindGenerateConfigs>) => {
  return <GenerateConfigs generateConfigs={generateConfigs} />
}
