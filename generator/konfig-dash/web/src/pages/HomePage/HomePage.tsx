import {
  Button,
  Center,
  Group,
  Paper,
  SegmentedControl,
  Stack,
  Text,
} from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import { Prism } from '@mantine/prism'
import { IconExternalLink, IconLogout } from '@tabler/icons'
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { InferredCurrentUser } from '../../../../.redwood/types/includes/all-currentUser'

const npm = `npm install -g konfig-cli`
const yarn = `yarn global add konfig-cli`

const HomePage = () => {
  const [packageManager, setPackageManager] = useState('yarn')
  const { logOut, currentUser } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Center w="100vw" h="95vh">
        <Paper withBorder w="350px" shadow="sm" radius="md" p="xl">
          <Stack>
            <SegmentedControl
              size="xs"
              value={packageManager}
              data={[
                { label: 'yarn', value: 'yarn' },
                { label: 'npm', value: 'npm' },
              ]}
              onChange={(value) => {
                setPackageManager(value)
              }}
            />
            <Prism
              onClick={(e) => e.preventDefault()}
              colorScheme="dark"
              language="bash"
            >
              {packageManager === 'yarn' ? yarn : npm}
            </Prism>
            <Button
              component="a"
              href="https://docs.konfigthis.com"
              leftIcon={<IconExternalLink size="0.9rem" />}
              color="dark"
            >
              Documentation
            </Button>

            <Group position="apart">
              <Text size="xs" color="gray">
                {(currentUser as InferredCurrentUser)?.email}
              </Text>
              <Button
                compact
                radius="xs"
                size="xs"
                onClick={() => {
                  logOut()
                }}
              >
                Log out
              </Button>
            </Group>
          </Stack>
        </Paper>
      </Center>
      {/* <Dashboard /> */}
    </>
  )
}

export default HomePage
