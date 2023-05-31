import { Code } from '@mantine/core'
import Convert from 'ansi-to-html'

const convert = new Convert({ newline: true })

const AnsiEscapeSequence = ({ text }: { text: string }) => {
  return (
    <Code color="gray" block>
      <div dangerouslySetInnerHTML={{ __html: convert.toHtml(text) }} />
    </Code>
  )
}

export default AnsiEscapeSequence
