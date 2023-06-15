import { Button, Container } from "@mantine/core";
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

async function open() {
  const directoryHandle = await (window as any).showDirectoryPicker();
  for await (const entry of directoryHandle.values()) {
    console.log(entry.kind, entry.name);
  }
}

const MarkdownSandboxPage = observer(() => {
  return (
    <>
      <Head>
        <title>Demo Sandbox | Konfig</title>
      </Head>
      <Container pt="xl" size="lg">
        <Button onClick={async () => await open()}>
          {`Specify directory with "demo.yaml"`}
        </Button>
      </Container>
    </>
  );
});

export default MarkdownSandboxPage;
