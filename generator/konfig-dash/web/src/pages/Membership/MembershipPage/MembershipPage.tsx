import MembershipCell from 'src/components/Membership/MembershipCell'

type MembershipPageProps = {
  id: number
}

const MembershipPage = ({ id }: MembershipPageProps) => {
  return <MembershipCell id={id} />
}

export default MembershipPage
