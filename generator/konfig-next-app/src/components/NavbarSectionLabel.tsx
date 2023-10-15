import { linkColor } from '@/utils/link-color'
import { Group, Text, useMantineTheme } from '@mantine/core'
import { TablerIconsProps } from '@tabler/icons-react'
import { PropsWithChildren } from 'react'
export function NavbarSectionLabel({
  children,
  Logo,
}: PropsWithChildren<{ Logo?: (props: TablerIconsProps) => JSX.Element }>) {
  const theme = useMantineTheme()
  return (
    <Text
      px="sm"
      weight="bold"
      mb="xs"
      fz="0.7rem"
      style={{ textTransform: 'uppercase' }}
      color={linkColor({ theme })}
    >
      {Logo !== undefined ? (
        <Group spacing={5}>
          <Logo size="0.8rem" />
          {children}
        </Group>
      ) : (
        children
      )}
    </Text>
  )
}
