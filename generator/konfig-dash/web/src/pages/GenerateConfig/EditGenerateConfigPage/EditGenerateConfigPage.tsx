import EditGenerateConfigCell from 'src/components/GenerateConfig/EditGenerateConfigCell'

type GenerateConfigPageProps = {
  id: string
}

const EditGenerateConfigPage = ({ id }: GenerateConfigPageProps) => {
  return <EditGenerateConfigCell id={id} />
}

export default EditGenerateConfigPage
