import { Container, SegmentedControl } from "@mantine/core";
import { observer } from "mobx-react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

/**
 * This is here to force this page to be SSR only so Next.js doesn't try to make
 * network requests at build time
 */
export const getServerSideProps: GetServerSideProps<{}> =
  async ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return { props: {} };
  };

const MarkdownSandboxPage = observer(() => {
  return (
    <>
      <Head>
        <title>Demo Sandbox | Konfig</title>
      </Head>
      <Container pt="xl" size="lg"></Container>
    </>
  );
});

export default MarkdownSandboxPage;
