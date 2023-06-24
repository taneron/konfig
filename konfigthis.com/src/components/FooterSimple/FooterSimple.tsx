import { createStyles, Text, Container, rem, Anchor } from "@mantine/core";
import Image from "next/image";
import logo from "./logo.png";
import { useSubtleLinkStyles } from "@/utils/use-subtle-link-styles";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      gap: rem(10),
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSimple() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container size="lg" className={classes.inner}>
        <Image height={25} src={logo} alt="Konfig Logo" />
        <Text color="gray" size="xs">
          Copyright © Konfig Inc.
        </Text>
      </Container>
    </div>
  );
}
