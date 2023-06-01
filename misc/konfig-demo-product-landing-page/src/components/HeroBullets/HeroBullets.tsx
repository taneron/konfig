import {
  createStyles,
  Image,
  Container,
  Title,
  Anchor,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./image.svg";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
      alignItems: "center",
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

  image: {
    flex: 1,
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
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Build <span className={classes.highlight}>Bespoke</span> <br />{" "}
              Demos for your API
            </Title>
            <Text color="dimmed" mt="md">
              Konfig makes it easy for you to impress buyers with your API.
              Easily build interactive code-based demos that are runnable in the
              browser and stop using developer tools to demo your API.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>No Developer Required</b> – No developer is required to
                operate the demo. Easily demonstrate custom flows by clicking
                buttons.
              </List.Item>
              <List.Item>
                <b>Self-service</b> – Allow your customers to self-service your
                API with their own inputs. Developers can also copy-paste the
                source code to integrate the demo in their own application.
              </List.Item>
              <List.Item>
                <b>Professional</b> – Stop using Postman or Readme to demo your
                API. Impress your customers with a sleek and convincing demo.
              </List.Item>
            </List>

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
          <Image
            width={400}
            src={image.src}
            className={classes.image}
            alt="Hero Image"
          />
        </div>
      </Container>
    </div>
  );
}
