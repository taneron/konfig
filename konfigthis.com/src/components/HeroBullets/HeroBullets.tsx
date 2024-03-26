import {
  createStyles,
  Container,
  Button,
  Title,
  Text,
  rem,
  AspectRatio,
  Box,
  clsx,
} from "@mantine/core";
import { useOs } from "@mantine/hooks";
import {
  IconArrowBadgeRightFilled,
  IconArrowBigRightFilled,
  IconArrowRight,
  IconCalendarEvent,
  IconChevronRight,
  IconExternalLink,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: rem(100),
    paddingBottom: rem(40),

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(80),
      paddingBottom: rem(60),
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  dots: {
    position: "absolute",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  dotsLeft: {
    left: 0,
    top: 0,
  },

  title: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 50,
    letterSpacing: -1,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    marginBottom: theme.spacing.xl,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    maxWidth: "41rem",
    marginLeft: "auto",
    marginRight: "auto",

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(42),
      textAlign: "left",
    },
  },

  highlight: {},

  description: {
    textAlign: "center",
    fontSize: rem(20),
    marginBottom: 40,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "38rem",

    [theme.fn.smallerThan("xs")]: {
      textAlign: "left",
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      gap: 0,
      flexDirection: "column",
    },
  },

  control: {
    marginLeft: theme.spacing.md,

    [theme.fn.smallerThan("xs")]: {
      height: rem(42),
      fontSize: theme.fontSizes.md,
      marginTop: theme.spacing.md,
      marginLeft: 0,
    },
  },
}));

export function HeroBullets() {
  const { classes } = useStyles();
  const os = useOs();
  const isDesktop = os === "linux" || os === "windows" || os === "macos";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Change the visibility after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="pt-16">
      <Container className={classes.wrapper} size={1400}>
        <div className="text-center">
          <div className="relative inline-flex group text-center mb-10">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/sdk"
              title="Get quote now"
              className="relative inline-flex ring-1 ring-blue-400 group-hover:ring-blue-600 items-center justify-center px-4 py-2 text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-all duration-200 bg-white rounded-full"
              role="button"
            >
              <span>Writing API integrations?</span>
              <IconChevronRight className="h-4 ml-0 group-hover:ml-1 transition-all" />
            </a>
          </div>
        </div>
        <div className={classes.inner}>
          <Title className={classes.title}>
            <Text
              variant="gradient"
              gradient={{ from: "#223349", to: "#0351b3" }}
              component="span"
              className={classes.highlight}
              inherit
            >
              Effortlessly Generate{" "}
            </Text>
            SDKs, Docs, Demos & Tutorials for your REST API
          </Title>

          <Container p={0} size={700}>
            <Text size="lg" color="dimmed" className={classes.description}>
              With Konfig, onboarding external developers has never been easier.
              Easily publish SDKs, Docs, Demos & Tutorials in all major
              languages so your customers can quickly integrate your API.
            </Text>
          </Container>

          <div
            className={clsx(classes.controls, "transition-all duration-700", {
              "opacity-0 translate-y-40": !isVisible,
              "opacity-1": isVisible,
            })}
          >
            <div className="relative group">
              <div
                className={clsx(
                  classes.control,
                  "absolute w-full -inset-0.5 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"
                )}
              ></div>
              <Button
                size="lg"
                fullWidth
                target="_blank"
                component="a"
                variant="default"
                radius="xl"
                href="https://konfigthis.com/schedule-demo"
                leftIcon={<IconCalendarEvent />}
                className={clsx(
                  classes.control,
                  "relative leading-none divide-x"
                )}
              >
                Book a demo
              </Button>
            </div>
            {isDesktop ? (
              <Button
                component="a"
                href="https://konfigthis.com/interactive-tutorial"
                target="_blank"
                leftIcon={<IconExternalLink />}
                size="lg"
                color="gray"
                variant="default"
                radius="xl"
                className={clsx(
                  classes.control,
                  "relative leading-none divide-x"
                )}
              >
                Try Now
              </Button>
            ) : (
              <Button.Group>
                <Button
                  fullWidth
                  radius="xl"
                  component="a"
                  href="https://konfigthis.com/docs/getting-started/openapi-specification"
                  target="_blank"
                  className={classes.control}
                  leftIcon={<IconExternalLink />}
                  size="lg"
                  variant="default"
                  color="gray"
                >
                  OpenAPI
                </Button>
                <Button
                  fullWidth
                  radius="xl"
                  component="a"
                  href="https://konfigthis.com/docs/getting-started/postman-collections"
                  target="_blank"
                  className={classes.control}
                  leftIcon={<IconExternalLink />}
                  size="lg"
                  variant="default"
                  color="gray"
                >
                  Postman
                </Button>
              </Button.Group>
            )}
          </div>
        </div>
        <Box
          className={clsx("my-8", "transition-all duration-700", {
            "opacity-0 translate-y-40": !isVisible,
            "opacity-1": isVisible,
          })}
        >
          <AspectRatio
            className="rounded-xl overflow-hidden shadow-lg"
            mx="auto"
            maw={600}
            ratio={16 / 9}
          >
            <iframe
              src="https://www.youtube.com/embed/_rbFV2RmAc4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Container>
    </div>
  );
}
