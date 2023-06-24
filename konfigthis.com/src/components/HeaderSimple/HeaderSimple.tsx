import {
  createStyles,
  Header,
  Container,
  rem,
  Burger,
  Button,
  Group,
} from "@mantine/core";
import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import logo from "./logo.png";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderSimple() {
  const { classes } = useStyles();

  return (
    <Header height={60}>
      <Container size="lg" className={classes.header}>
        <Image height={40} src={logo} alt="Konfig Logo" />
        <Group spacing="xs">
          <Button
            target="_blank"
            component="a"
            variant="subtle"
            color="dark"
            href="/blog"
            size="xs"
          >
            Blog
          </Button>
          <Button
            target="_blank"
            component="a"
            variant="subtle"
            color="dark"
            href="/docs"
            size="xs"
          >
            Documentation
          </Button>
        </Group>
      </Container>
    </Header>
  );
}
