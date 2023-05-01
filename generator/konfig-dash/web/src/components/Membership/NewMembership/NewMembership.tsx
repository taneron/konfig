import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MembershipForm from 'src/components/Membership/MembershipForm'

import type { CreateMembershipInput } from 'types/graphql'

const CREATE_MEMBERSHIP_MUTATION = gql`
  mutation CreateMembershipMutation($input: CreateMembershipInput!) {
    createMembership(input: $input) {
      id
    }
  }
`

const NewMembership = () => {
  const [createMembership, { loading, error }] = useMutation(
    CREATE_MEMBERSHIP_MUTATION,
    {
      onCompleted: () => {
        toast.success('Membership created')
        navigate(routes.memberships())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreateMembershipInput) => {
    createMembership({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Membership</h2>
      </header>
      <div className="rw-segment-main">
        <MembershipForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMembership
