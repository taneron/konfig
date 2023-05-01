import type { FindGenerateExecutions } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import GenerateExecutions from 'src/components/GenerateExecution/GenerateExecutions'

export const QUERY = gql`
  query FindGenerateExecutions {
    generateExecutions {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No generateExecutions yet. '}
      <Link
        to={routes.newGenerateExecution()}
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

export const Success = ({ generateExecutions }: CellSuccessProps<FindGenerateExecutions>) => {
  return <GenerateExecutions generateExecutions={generateExecutions} />
}
