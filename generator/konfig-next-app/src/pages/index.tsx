import { Container, NavLink, Stack, Paper } from '@mantine/core'
import Head from 'next/head'
import { useRouter } from 'next/navigation'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return { props: {} }
}

export default function Home({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
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
              component="a"
              href="http://snaptrade.localhost:3000"
              label="SnapTrade"
              description="https://snaptrade.com"
            />
            <NavLink
              component="a"
              href="http://splitit.localhost:3000"
              label="Splitit"
              description="https://splitit.com"
            />
            <NavLink
              component="a"
              href="http://leap.localhost:3000"
              label="Leap"
              description="https://tryleap.ai"
            />
            <NavLink
              component="a"
              href="http://acme.localhost:3000"
              label="Acme"
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
