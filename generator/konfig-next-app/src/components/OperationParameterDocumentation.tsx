import {
  Box,
  Flex,
  rem,
  useMantineTheme,
  Text,
  Code,
  Alert,
} from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons-react'
import ReactMarkdown from 'react-markdown'

export type OperationParameterDocumentationProps = {
  name: string
  description: string | undefined
  schema: string
  deprecated: boolean | undefined
  required?: boolean
}

export function OperationParameterDocumentation({
  name,
  description,
  schema,
  required,
  deprecated,
}: OperationParameterDocumentationProps) {
  const theme = useMantineTheme()
  return (
    <Box key={name}>
      <Flex align="center" wrap="wrap">
        {name !== '' && (
          <Code
            mr={rem(5)}
            style={{
              color: theme.colorScheme === 'dark' ? 'white' : 'black',
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[9]
                  : theme.colors.gray[0],
              borderRadius: theme.radius.md,
              border: `1px solid ${
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[8]
                  : theme.colors.gray[4]
              }`,
            }}
          >
            {name}
          </Code>
        )}
        <Code
          style={{
            color: theme.colors.gray[6],
          }}
          bg="unset"
          fz={12}
          ml={name === '' ? rem(-5) : undefined}
          mr={rem(5)}
        >
          {schema}
        </Code>
        {required && (
          <Code style={{ color: 'red' }} bg="unset" fz={12}>
            {'required'}
          </Code>
        )}
      </Flex>
      {deprecated && (
        <Alert
          icon={<IconAlertCircle size="0.8rem" />}
          title="Deprecated"
          color="red"
          classNames={{
            root: 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-2 rounded-sm mt-2',
            title: 'text-xs font-semibold text-red-700 dark:text-red-300 mb-0',
            message: 'text-xs text-red-600 dark:text-red-400 mt-0',
            icon: 'text-red-500 dark:text-red-400',
          }}
        >
          Refrain from usage of this field
        </Alert>
      )}
      {description && (
        <ReactMarkdown className="mt-[0.625rem] prose dark:prose-invert text-sm dark:text-mantine-gray-500 text-mantine-gray-700">
          {description}
        </ReactMarkdown>
      )}
    </Box>
  )
}
