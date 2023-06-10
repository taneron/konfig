import { Container, NavLink, Stack, Paper } from "@mantine/core";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{}> = async () => {
  return { props: {} };
};

export default function Home({}: InferGetServerSidePropsType<
  typeof getServerSideProps
>) {
  const router = useRouter();
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
                router.push("/snaptrade/snaptrade-demos/getting-started")
              }
              label="SnapTrade"
              description="https://snaptrade.com/"
            />
            <NavLink
              onClick={() => router.push("/humanloop/demos/getting-started")}
              label="Humanloop"
              description="https://humanloop.com/"
            />
            <NavLink
              onClick={() => router.push("/sandbox")}
              label="Sandbox"
              description="Create your demo"
            />
          </Stack>
        </Paper>
      </Container>
    </>
  );
}
