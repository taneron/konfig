import { createStyles } from '@mantine/core'

export const useNavbarStyles = createStyles((theme) => ({
  navbar: {
    background:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    borderRight: 'none',
  },
}))
