import GenerateExecutionCell from 'src/components/GenerateExecution/GenerateExecutionCell'

type GenerateExecutionPageProps = {
  id: number
}

const GenerateExecutionPage = ({ id }: GenerateExecutionPageProps) => {
  return <GenerateExecutionCell id={id} />
}

export default GenerateExecutionPage
