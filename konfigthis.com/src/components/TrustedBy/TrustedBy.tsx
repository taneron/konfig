import { Center, Container, Group, Stack, Title, rem } from "@mantine/core";
import Image from "next/image";

export const TrustedBy = () => {
  return (
    <Container size="lg">
      <Center>
        <Stack>
          <Title
            sx={{ textAlign: "center", letterSpacing: rem(5) }}
            color="#666"
            order={6}
            mb={rem(5)}
          >
            TRUSTED BY
          </Title>
          <Group position="center">
            <Image
              src="/snaptrade.png"
              width={250}
              height={45}
              alt="SnapTrade"
            />
            <Image
              src="/humanloop.png"
              width={218}
              height={45}
              alt="Humanloop"
            />
            <Image src="/splitit.png" width={135} height={45} alt="Splitit" />
            <Image src="/dojah.png" width={144} height={90} alt="Dojah" />
            <Image src="/decentro.png" width={204} height={25} alt="Decentro" />
          </Group>
        </Stack>
      </Center>
    </Container>
  );
};
