import { useBasePath } from '@/utils/use-base-path'
import { NavLink, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

export function DocNavLink({
  id,
  label,
  docId,
  setOpened,
  omitOwnerAndRepo,
}: {
  id: string
  label: string
  docId: string
  setOpened: Dispatch<SetStateAction<boolean>>
  omitOwnerAndRepo: boolean
}) {
  const { colorScheme } = useMantineColorScheme()
  const basePath = useBasePath({ omitOwnerAndRepo })
  const theme = useMantineTheme()
  console.log(theme.fontSizes)
  const active = id === docId
  return (
    <NavLink<typeof Link>
      active={active}
      px="md"
      onClick={() => setOpened(false)}
      key={id}
      py={8}
      fw={active ? 'bold' : undefined}
      styles={{
        root: {
          borderRadius: theme.radius.sm,
        },
        label: {
          fontSize: theme.fontSizes.sm,
          color: active
            ? theme.colorScheme === 'dark'
              ? theme.colors.brand[3]
              : theme.colors.brand[8]
            : undefined,
        },
      }}
      component={Link}
      href={`${basePath}/docs/${id}`}
      label={label}
    />
  )
}
