import GenerateConfigCell from 'src/components/GenerateConfig/GenerateConfigCell'

type GenerateConfigPageProps = {
  id: string
}

const GenerateConfigPage = ({ id }: GenerateConfigPageProps) => {
  return <GenerateConfigCell id={id} />
}

export default GenerateConfigPage
