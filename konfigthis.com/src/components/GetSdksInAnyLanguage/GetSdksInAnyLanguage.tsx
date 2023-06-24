import {
  Text,
  Button,
  Col,
  Container,
  Grid,
  SimpleGrid,
  Title,
  Group,
  rem,
} from "@mantine/core";
import Image from "next/image";

export function GetSdksInAnyLanguage() {
  return (
    <Container my={rem(150)} size="xl">
      <Grid>
        <Col order={1} orderMd={2} span={12} md={5}>
          <Title mb={rem(10)} order={2}>
            Get SDKs in any language
          </Title>
          <Text c="dimmed" fz="sm">
            Konfig supports all major languages so your customers can easily
            integrate with your API no matter the stack they use
          </Text>

          <Button
            component="a"
            target="_blank"
            href="https://calendly.com/dylan-konfig/meet"
            color="dark"
            size="lg"
            radius="md"
            mt="xl"
          >
            Learn more
          </Button>
        </Col>
        <Col order={2} orderMd={1} span={12} md={7}>
          <Group position="center" spacing="xl" mx={rem(50)}>
            <Image
              src="/typescript.png"
              width={75}
              height={75}
              alt="TypeScript"
            />
            <Image src="/python.png" width={69} height={75} alt="Python" />
            <Image src="/go.png" width={100} height={100} alt="Go" />
            <Image src="/java.png" width={54} height={100} alt="Java" />
            <Image src="/csharp.png" width={66} height={75} alt="C#" />
            <Image src="/ruby.png" width={75} height={75} alt="Ruby" />
            <Image src="/swift.png" width={75} height={75} alt="Swift" />
            <Image src="/php.png" width={112} height={60} alt="PHP" />
          </Group>
        </Col>
      </Grid>
    </Container>
  );
}
