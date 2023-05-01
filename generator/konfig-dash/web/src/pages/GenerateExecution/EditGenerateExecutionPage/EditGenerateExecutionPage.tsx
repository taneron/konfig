import EditGenerateExecutionCell from 'src/components/GenerateExecution/EditGenerateExecutionCell'

type GenerateExecutionPageProps = {
  id: number
}

const EditGenerateExecutionPage = ({ id }: GenerateExecutionPageProps) => {
  return <EditGenerateExecutionCell id={id} />
}

export default EditGenerateExecutionPage
