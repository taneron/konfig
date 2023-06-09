import { Container, NavLink, Stack, Paper } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Demo Portal | Konfig</title>
      </Head>
      <Container mt="xl">
        <Paper withBorder shadow="lg" p="lg">
          <Stack>
            <NavLink
              onClick={() =>
                router.push('/snaptrade/snaptrade-demos/getting-started')
              }
              label="SnapTrade"
              description="https://snaptrade.com/"
            />
            <NavLink
              onClick={() => router.push('/sandbox')}
              label="Sandbox"
              description="Create your demo"
            />
          </Stack>
        </Paper>
      </Container>
    </>
  )
}
