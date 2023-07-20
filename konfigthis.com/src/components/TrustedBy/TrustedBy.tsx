import { Center, Container, Group, Stack, Title, rem } from "@mantine/core";
import Image from "next-image-export-optimizer";
import snaptrade from "../../../public/snaptrade.png";
import humanloop from "../../../public/humanloop.png";
import splitit from "../../../public/splitit.png";
import dojah from "../../../public/dojah.png";
import decentro from "../../../public/decentro.png";

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
            <Image src={snaptrade} width={250} height={45} alt="SnapTrade" />
            <Image src={humanloop} width={218} height={45} alt="Humanloop" />
            <Image src={splitit} width={135} height={45} alt="Splitit" />
            <Image src={dojah} width={144} height={90} alt="Dojah" />
            <Image src={decentro} width={204} height={25} alt="Decentro" />
          </Group>
        </Stack>
      </Center>
    </Container>
  );
};
