import { Button, Center, Container } from "@mantine/core";
import { observer } from "mobx-react";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { makeAutoObservable } from "mobx";
import {
  DemoInput,
  generateDemosFromFilenameAndContent,
} from "@/utils/generate-demos-from-file-name-and-content";
import { Organization, Portal } from "@/utils/demos";
import { DemoPortal, PortalState } from "@/components/DemoPortal";
import { useEffect, useState } from "react";

/**
 * This is here to force this page to be SSR only so Next.js doesn't try to make
 * network requests at build time
 */
export const getServerSideProps: GetServerSideProps<{}> =
  async ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return { props: {} };
  };

let directoryHandle;

async function open() {
  try {
    directoryHandle = await (window as any).showDirectoryPicker();
    const files: DemoInput[] = [];

    for await (const entry of directoryHandle.values()) {
      if (entry.kind !== "file") {
        continue;
      }
      const file = await entry.getFile();
      files.push({ fileName: file.name, content: await file.text() });
    }
    return files.filter(({ fileName }) => fileName.endsWith(".md"));
  } catch (error) {}
}

class SandboxState {
  files: DemoInput[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setFiles(files: DemoInput[]) {
    this.files = files;
  }

  get demos() {
    return generateDemosFromFilenameAndContent({ demos: this.files });
  }

  get organization(): Organization {
    return {
      id: "sandbox",
      organizationName: "Sandbox",
      portals: [this.portal],
    };
  }

  get portal(): Portal {
    return {
      id: "demo",
      portalName: "Sandbox Demo",
      demos: this.demos,
    };
  }
}

const MarkdownSandboxPage = observer(() => {
  const [portalState, setPortalState] = useState<PortalState>();
  const [state] = useState(new SandboxState());
  useEffect(() => {
    if (state.demos.length === 0) return;
    setPortalState(
      new PortalState({
        ...state.portal,
        organizationId: state.organization.id,
        demoId: state.demos[0].id,
      })
    );
  }, [state.demos, state.organization, state.portal]);
  return (
    <>
      <Head>
        <title>Demo Sandbox | Konfig</title>
      </Head>
      {!portalState && (
        <Center pt="xl">
          <Button
            onClick={async () => {
              const files = await open();
              if (files === undefined) return;
              state.setFiles(files);
            }}
          >
            {`Specify directory with "demo.yaml"`}
          </Button>
        </Center>
      )}
      {portalState && <DemoPortal sandbox state={portalState} />}
    </>
  );
});

export default MarkdownSandboxPage;
