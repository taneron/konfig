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
} from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";

import Image from "next/image";
import ReactFlow, { Edge, Node, Position } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "oas",
    position: { x: 0, y: -50 },
    data: {
      label: (
        <>
          <Image
            src="/oas.png"
            width={40}
            height={40}
            alt="OpenAPI Specification"
          />
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
          <Image src="/postman.webp" width={35} height={35} alt="Postman" />
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
          <Image src="/favicon.png" width={40} height={40} alt="Konfig" />
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
            <Image
              src="/typescript.png"
              width={20}
              height={20}
              alt="TypeScript"
            />
            <Image src="/python.png" width={18} height={20} alt="Python" />
            <Image src="/go.png" width={25} height={25} alt="Go" />
            <Image src="/java.png" width={11} height={20} alt="Java" />
            <Image src="/csharp.png" width={18} height={20} alt="C#" />
            <Image src="/ruby.png" width={17} height={17} alt="Ruby" />
            <Image src="/swift.png" width={17} height={17} alt="Swift" />
            <Image src="/php.png" width={34} height={18} alt="PHP" />
          </Group>
          <Text mt={rem(2)} c="dimmed">
            SDKs
          </Text>
        </>
      ),
    },
  },
  // {
  //   id: "python",
  //   position: {
  //     x: 500,
  //     y: -300,
  //   },
  //   data: {
  //     label: (
  //       <Image src="/python.png" width={34.5} height={37.5} alt="Python" />
  //     ),
  //   },
  // },
  // {
  //   id: "go",
  //   position: {
  //     x: 500,
  //     y: -200,
  //   },
  //   data: { label: <Image src="/go.png" width={50} height={50} alt="Go" /> },
  // },
  // {
  //   id: "java",
  //   position: {
  //     x: 500,
  //     y: -100,
  //   },
  //   data: {
  //     label: <Image src="/java.png" width={27.5} height={50} alt="Java" />,
  //   },
  // },
  // {
  //   id: "csharp",
  //   position: {
  //     x: 500,
  //     y: 0,
  //   },
  //   data: {
  //     label: <Image src="/csharp.png" width={33} height={37.5} alt="C#" />,
  //   },
  // },
  // {
  //   id: "ruby",
  //   position: {
  //     x: 500,
  //     y: 100,
  //   },
  //   data: {
  //     label: <Image src="/ruby.png" width={37.5} height={37.5} alt="Ruby" />,
  //   },
  // },
  // {
  //   id: "swift",
  //   position: {
  //     x: 500,
  //     y: 200,
  //   },
  //   data: {
  //     label: <Image src="/swift.png" width={37.5} height={37.5} alt="Swift" />,
  //   },
  // },
  // {
  //   id: "php",
  //   position: {
  //     x: 500,
  //     y: 300,
  //   },
  //   data: { label: <Image src="/php.png" width={56} height={30} alt="PHP" /> },
  // },
];
const initialEdges: Edge[] = [
  { id: "oas-konfig", source: "oas", target: "konfig", animated: true },
  { id: "postman-konfig", source: "postman", target: "konfig", animated: true },
  { id: "konfig-sdks", source: "konfig", target: "sdks", animated: true },
];

export function GetSdksWithZeroEffort() {
  // const [nodes] = useState(initialNodes);
  // const [edges] = useState(initialEdges);
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
                  src="/oas.png"
                  width={40}
                  height={40}
                  alt="OpenAPI Specification"
                />
                <Image
                  src="/postman.webp"
                  width={35}
                  height={35}
                  alt="Postman"
                />
              </Group>
              <Text fz="lg" mt="sm" fw={500}>
                OpenAPI Specification and Postman Support
              </Text>
              <Text c="dimmed" fz="sm">
                Easily import an OpenAPI Specification or Postman Collection and
                Konfig automatically generates and publishes SDKs with no
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
                Any time you publish a change to your spec, we automatically
                update and republish all of your SDKs
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
            h={{ base: rem(300), sm: "100%" }}
          >
            <ReactFlow
              fitView
              preventScrolling={false}
              elementsSelectable={false}
              zoomOnScroll={false}
              nodesConnectable={false}
              draggable={false}
              nodesDraggable={false}
              panOnDrag={false}
              zoomOnPinch={false}
              proOptions={{ hideAttribution: true }}
              nodes={initialNodes}
              edges={initialEdges}
            ></ReactFlow>
          </Paper>
        </Col>
      </Grid>
    </Container>
  );
}
