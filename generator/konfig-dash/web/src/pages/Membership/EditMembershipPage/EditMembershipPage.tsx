import EditMembershipCell from 'src/components/Membership/EditMembershipCell'

type MembershipPageProps = {
  id: number
}

const EditMembershipPage = ({ id }: MembershipPageProps) => {
  return <EditMembershipCell id={id} />
}

export default EditMembershipPage
