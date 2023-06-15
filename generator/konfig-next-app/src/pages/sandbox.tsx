import { Button, Container } from "@mantine/core";
import { observer } from "mobx-react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import { watch } from "fs";

/**
 * This is here to force this page to be SSR only so Next.js doesn't try to make
 * network requests at build time
 */
export const getServerSideProps: GetServerSideProps<{}> =
  async ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return { props: {} };
  };

async function watchDirectoryChanges() {
  try {
    const directoryHandle = await (window as any).showDirectoryPicker();

    const watcher = directoryHandle.watch();

    watcher.addEventListener("change", (event: any) => {
      for (const change of event.changes) {
        if (change.kind === "added") {
          console.log(`File added: ${change.file.name}`);
        } else if (change.kind === "removed") {
          console.log(`File removed: ${change.file.name}`);
        } else if (change.kind === "updated") {
          console.log(`File updated: ${change.file.name}`);
        }
      }
    });

    watcher.addEventListener("error", (error: any) => {
      console.error(`Watcher error: ${error}`);
    });
  } catch (error) {
    console.error(error);
  }
}

const MarkdownSandboxPage = observer(() => {
  return (
    <>
      <Head>
        <title>Demo Sandbox | Konfig</title>
      </Head>
      <Container pt="xl" size="lg">
        <Button onClick={async () => await watchDirectoryChanges()}>
          Specify demo.yaml
        </Button>
      </Container>
    </>
  );
});

export default MarkdownSandboxPage;
