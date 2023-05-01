import EditSpaceCell from 'src/components/Space/EditSpaceCell'

type SpacePageProps = {
  id: number
}

const EditSpacePage = ({ id }: SpacePageProps) => {
  return <EditSpaceCell id={id} />
}

export default EditSpacePage
