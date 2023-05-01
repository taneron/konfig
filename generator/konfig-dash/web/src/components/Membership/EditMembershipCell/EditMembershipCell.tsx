import type { EditMembershipById, UpdateMembershipInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MembershipForm from 'src/components/Membership/MembershipForm'

export const QUERY = gql`
  query EditMembershipById($id: String!) {
    membership: membership(id: $id) {
      id
      role
      created
      updated
      organizationId
      userId
      invitedName
      invitedEmail
    }
  }
`
const UPDATE_MEMBERSHIP_MUTATION = gql`
  mutation UpdateMembershipMutation(
    $id: String!
    $input: UpdateMembershipInput!
  ) {
    updateMembership(id: $id, input: $input) {
      id
      role
      created
      updated
      organizationId
      userId
      invitedName
      invitedEmail
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  membership,
}: CellSuccessProps<EditMembershipById>) => {
  const [updateMembership, { loading, error }] = useMutation(
    UPDATE_MEMBERSHIP_MUTATION,
    {
      onCompleted: () => {
        toast.success('Membership updated')
        navigate(routes.memberships())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateMembershipInput,
    id: EditMembershipById['membership']['id']
  ) => {
    updateMembership({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Membership {membership?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MembershipForm
          membership={membership}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
