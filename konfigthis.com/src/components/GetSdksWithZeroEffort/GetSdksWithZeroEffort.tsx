import { useMdMediaQuery } from "@/utils/use-md-media-query";
import {
  Text,
  Button,
  Col,
  Container,
  Grid,
  Title,
  Group,
  Box,
  ThemeIcon,
  rem,
  Stack,
  Paper,
  Anchor,
} from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { IconRefresh } from "@tabler/icons-react";

import Image from "next-image-export-optimizer";
import { useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Edge,
  FitViewOptions,
  Node,
  Position,
  ReactFlowInstance,
} from "reactflow";
import oas from "../../../public/oas.png";
import postman from "../../../public/postman.webp";
import typescript from "../../../public/typescript.png";
import python from "../../../public/python.png";
import go from "../../../public/go.png";
import java from "../../../public/java.png";
import csharp from "../../../public/csharp.png";
import ruby from "../../../public/ruby.png";
import swift from "../../../public/swift.png";
import php from "../../../public/php.png";
import favicon from "../../../public/favicon.png";
import "reactflow/dist/style.css";

const desktopNodes: Node[] = [
  {
    id: "oas",
    position: { x: 0, y: -50 },
    data: {
      label: (
        <>
          <Image src={oas} width={40} height={40} alt="OpenAPI Specification" />
          <Text c="dimmed">OpenAPI Specification</Text>
        </>
      ),
    },
    sourcePosition: Position.Right,
    type: "input",
  },
  {
    id: "postman",
    position: { x: 0, y: 50 },
    data: {
      label: (
        <>
          <Image src={postman} width={35} height={35} alt="Postman" />
          <Text c="dimmed">Postman</Text>
        </>
      ),
    },
    sourcePosition: Position.Right,
    type: "input",
  },
  {
    id: "konfig",
    position: { x: 190, y: 0 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    data: {
      label: (
        <>
          <Image src={favicon} width={40} height={40} alt="Konfig" />
          <Text c="dimmed">Konfig</Text>
        </>
      ),
    },
  },
  {
    id: "sdks",
    position: { x: 375, y: -8.5 },
    targetPosition: Position.Left,
    sourcePosition: Position.Right,
    type: "output",
    data: {
      label: (
        <>
          <Group position="center" spacing="xs">
            <Image src={typescript} width={20} height={20} alt="TypeScript" />
            <Image src={python} width={18} height={20} alt="Python" />
            <Image src={go} width={25} height={25} alt="Go" />
            <Image src={java} width={11} height={20} alt="Java" />
            <Image src={csharp} width={18} height={20} alt="C#" />
            <Image src={ruby} width={17} height={17} alt="Ruby" />
            <Image src={swift} width={17} height={17} alt="Swift" />
            <Image src={php} width={34} height={18} alt="PHP" />
          </Group>
          <Text mt={rem(2)} c="dimmed">
            SDKs
          </Text>
        </>
      ),
    },
  },
];

const mobileNodes: Node[] = [
  {
    id: "oas",
    position: { x: -100, y: 0 },
    data: {
      label: (
        <>
          <Image src={oas} width={40} height={40} alt="OpenAPI Specification" />
          <Text c="dimmed">OpenAPI Specification</Text>
        </>
      ),
    },
    sourcePosition: Position.Bottom,
    type: "input",
  },
  {
    id: "postman",
    position: { x: 100, y: 0 },
    data: {
      label: (
        <>
          <Image src={postman} width={35} height={35} alt="Postman" />
          <Text c="dimmed">Postman</Text>
        </>
      ),
    },
    sourcePosition: Position.Bottom,
    type: "input",
  },
  {
    id: "konfig",
    position: { x: 0, y: 150 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    data: {
      label: (
        <>
          <Image src={favicon} width={40} height={40} alt="Konfig" />
          <Text c="dimmed">Konfig</Text>
        </>
      ),
    },
  },
  {
    id: "sdks",
    position: { x: 0, y: 300 },
    targetPosition: Position.Top,
    sourcePosition: Position.Bottom,
    type: "output",
    data: {
      label: (
        <>
          <Group position="center" spacing="xs">
            <Image src={typescript} width={20} height={20} alt="TypeScript" />
            <Image src={python} width={18} height={20} alt="Python" />
            <Image src={go} width={25} height={25} alt="Go" />
            <Image src={java} width={11} height={20} alt="Java" />
            <Image src={csharp} width={18} height={20} alt="C#" />
            <Image src={ruby} width={17} height={17} alt="Ruby" />
            <Image src={swift} width={17} height={17} alt="Swift" />
            <Image src={php} width={34} height={18} alt="PHP" />
          </Group>
          <Text mt={rem(2)} c="dimmed">
            SDKs
          </Text>
        </>
      ),
    },
  },
];
const edges: Edge[] = [
  { id: "oas-konfig", source: "oas", target: "konfig", animated: true },
  { id: "postman-konfig", source: "postman", target: "konfig", animated: true },
  { id: "konfig-sdks", source: "konfig", target: "sdks", animated: true },
];

export function GetSdksWithZeroEffort() {
  const matches = useMdMediaQuery();
  const [nodes, setNodes] = useState(matches ? desktopNodes : mobileNodes);

  const fitViewOptions: FitViewOptions | undefined = useMemo(
    () => (matches ? undefined : { padding: 0.2 }),
    [matches]
  );

  useEffect(() => {
    setNodes(matches ? desktopNodes : mobileNodes);
  }, [matches]);

  const [inst, setInst] = useState<ReactFlowInstance | null>(null);
  const { width, height } = useViewportSize();
  const [{ x, y }] = useWindowScroll();
  useEffect(() => {
    inst?.fitView(fitViewOptions);
  }, [width, height, x, y, fitViewOptions, inst]);
  return (
    <Container my={rem(150)} size="lg">
      <Grid>
        <Col span={12} md={5}>
          <Title mb={rem(10)} order={2}>
            Get SDKs with zero effort
          </Title>
          <Stack>
            <Box c="dimmed">
              <Group>
                <Image
                  src={oas}
                  width={40}
                  height={40}
                  alt="OpenAPI Specification"
                />
                <Image src={postman} width={35} height={35} alt="Postman" />
              </Group>
              <Text fz="lg" mt="sm" fw={500}>
                OpenAPI Specification and Postman Support
              </Text>
              <Text c="dimmed" fz="sm">
                Easily import an{" "}
                <Anchor
                  target="_blank"
                  href="https://konfigthis.com/docs/getting-started/openapi-specification"
                >
                  OpenAPI Specification
                </Anchor>{" "}
                or{" "}
                <Anchor
                  target="_blank"
                  href="https://konfigthis.com/docs/getting-started/postman-collections"
                >
                  Postman Collection
                </Anchor>{" "}
                and Konfig automatically generates and publishes SDKs with no
                further work from you
              </Text>
            </Box>
            <Box c="dimmed">
              <ThemeIcon
                size={35}
                radius="md"
                variant="gradient"
                gradient={{ deg: 133, from: "dark", to: "gray" }}
              >
                <IconRefresh size={rem(22)} stroke={1.5} />
              </ThemeIcon>
              <Text fz="lg" mt="sm" fw={500}>
                Automated
              </Text>
              <Text c="dimmed" fz="sm">
                Any time you publish a change to your spec, we{" "}
                <Anchor
                  target="_blank"
                  href="https://konfigthis.com/docs/tutorials/automate-sdk-updates"
                >
                  automatically update and republish all of your SDKs
                </Anchor>
              </Text>
            </Box>
          </Stack>

          <Button
            component="a"
            target="_blank"
            href="https://calendly.com/dylan-konfig/meet"
            color="dark"
            size="lg"
            radius="md"
            mt="xl"
          >
            See how
          </Button>
        </Col>
        <Col span={12} md={7}>
          <Paper
            radius="md"
            withBorder
            shadow="lg"
            h={{ base: rem(500), md: "100%" }}
          >
            <ReactFlow
              fitView
              fitViewOptions={fitViewOptions}
              onInit={setInst}
              preventScrolling={false}
              elementsSelectable={false}
              zoomOnScroll={false}
              zoomOnDoubleClick={false}
              nodesConnectable={false}
              draggable={false}
              nodesDraggable={false}
              panOnDrag={false}
              zoomOnPinch={false}
              proOptions={{ hideAttribution: true }}
              nodes={nodes}
              edges={edges}
            ></ReactFlow>
          </Paper>
        </Col>
      </Grid>
    </Container>
  );
}
