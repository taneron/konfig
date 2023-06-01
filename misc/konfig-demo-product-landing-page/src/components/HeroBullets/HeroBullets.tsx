import {
  createStyles,
  Container,
  Mark,
  Stack,
  Button,
  Title,
  Group,
  Text,
  rem,
  AspectRatio,
} from "@mantine/core";
import { FeaturesAsymmetrical } from "../FeaturesAsymmetrical/FeaturesAsymmetrical";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    alignItems: "center",
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      gap: rem(50),
    },
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontSize: rem(37),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  video: {
    width: "600px",
    [theme.fn.smallerThan("sm")]: {
      width: "450px",
    },
  },

  highlight: {
    position: "relative",
    whiteSpace: "nowrap",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  return (
    <div>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Build <span className={classes.highlight}>Bespoke</span> <br />{" "}
              Demos for your API
            </Title>
            <Text color="dimmed" mt="md">
              Konfig makes it easy for you to impress buyers with your API.
              Easily build interactive notebook-style demos that are runnable in
              the browser and{" "}
              <Mark color="red">
                stop using developer tools to demo your API.
              </Mark>
            </Text>

            <Group mt={30}>
              <Button
                target="_blank"
                component="a"
                href="https://calendly.com/dylan-konfig/meet"
                size="md"
                className={classes.control}
              >
                Schedule a Demo
              </Button>
            </Group>
          </div>
          <Stack align="center" spacing="xs">
            <AspectRatio className={classes.video} ratio={3022 / 1664}>
              <iframe
                src="https://www.youtube.com/embed/JewOol5njqk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </AspectRatio>
            <Text color="gray" size="xs">
              Run through a Demo Built on Konfig in 37 seconds
            </Text>
          </Stack>
        </div>
        <FeaturesAsymmetrical />
      </Container>
    </div>
  );
}
