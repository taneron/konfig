import React from 'react'
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
  MediaQuery,
} from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { InferredCurrentUser } from '../../../../.redwood/types/includes/all-currentUser'

function NavbarUser() {
  const theme = useMantineTheme()
  const { currentUser } = useAuth()

  return (
    <Box
      sx={{
        paddingBottom: theme.spacing.sm,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: 'block',
          width: '100%',
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <Group spacing="xs">
          <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
            <Avatar radius="xl" />
          </MediaQuery>
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {(currentUser as InferredCurrentUser)?.email}
            </Text>
            <Text color="dimmed" size="xs">
              {(currentUser as InferredCurrentUser)?.currentOrganization.name} |{' '}
              {(currentUser as InferredCurrentUser)?.currentSpace.name}
            </Text>
          </Box>
        </Group>
      </UnstyledButton>
    </Box>
  )
}

export default NavbarUser
