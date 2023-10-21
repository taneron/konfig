import {
  Group,
  Button,
  Burger,
  MediaQuery,
  clsx,
  NavLink,
  Transition,
  MantineTransition,
} from "@mantine/core";
import logo from "../../../public/portal-logo-light.png";
import Image from "@/components/Image";
import { IconCalendarEvent, IconExternalLink } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import { scrollIntoView } from "@/utils/scroll-into-view";

const scaleY: MantineTransition = {
  in: {
    // remove y translation
    transform: "translateY(0)",
    opacity: 1,
    filter: "blur(0)",
  },
  out: {
    // add small Y translation
    transform: "translateY(16px)",
    opacity: 0,
    filter: "blur(12px)",
  },
  transitionProperty: "transform, opacity, filter",
};

export function HeaderSimple() {
  const [opened, handlers] = useDisclosure(false);

  const close = () => {
    handlers.close();
    document.body && document.body.classList.remove("overflow-hidden");
  };

  const open = () => {
    handlers.open();
    document.body && document.body.classList.add("overflow-hidden");
  };

  return (
    <div className="h-16 fixed w-full bg-white/95 backdrop-blur-md  z-50">
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Transition
          mounted={opened}
          transition={scaleY}
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <div
              style={styles}
              className={
                "bg-white absolute top-full w-full h-[calc(100vh-theme(spacing.16))]"
              }
            >
              <div className="ml-3 my-2 text-sm text-gray-500 font-semibold">
                Products
              </div>
              <NavLink
                className="pl-5 text-gray-600 border-t border-solid border-gray-100"
                label="SDKs"
                onClick={() => {
                  close();
                  scrollIntoView("sdks");
                }}
              />
              <NavLink
                className="pl-5 text-gray-600 border-t border-solid border-gray-100"
                label="Docs"
                onClick={() => {
                  close();
                  scrollIntoView("docs");
                }}
              />
              <NavLink
                className="pl-5 text-gray-600 border-t border-solid border-gray-100"
                label="Demos & Tutorials"
                onClick={() => {
                  close();
                  scrollIntoView("demos");
                }}
              />
              <NavLink
                className="text-gray-600 border-t border-solid border-gray-100"
                label="Documentation"
                target="_blank"
                href="/docs"
                rightSection={<IconExternalLink stroke={1.5} />}
                component="a"
              />
              <NavLink
                className="text-gray-600 border-t border-solid border-gray-100"
                label="Blog"
                rightSection={<IconExternalLink stroke={1.5} />}
                target="_blank"
                href="/blog"
                component="a"
              />
              <NavLink
                className="font-bold border-t border-solid border-gray-100"
                label="Book a Demo"
                component="a"
                href="/schedule-demo"
                target="_blank"
                rightSection={<IconCalendarEvent />}
              />
            </div>
          )}
        </Transition>
      </MediaQuery>
      <div className="flex justify-between items-center h-full px-4 mx-auto max-w-5xl">
        <Image height={40} src={logo} placeholder="empty" alt="Konfig Logo" />
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            onClick={() => {
              if (opened) {
                close();
              } else {
                open();
              }
            }}
            opened={opened}
          />
        </MediaQuery>

        {/* <Menu.Dropdown>
          <a target="_blank" href="https://konfigthis.com/schedule-demo">
            <Menu.Item className="font-bold" icon={<IconCalendar size={16} />}>
              Book a Demo
            </Menu.Item>
          </a>
          <a target="_blank" href="/docs">
            <Menu.Item className="text-gray-700">Documentation</Menu.Item>
          </a>
          <a target="_blank" href="/blog">
            <Menu.Item className=" text-gray-700">Blog</Menu.Item>
          </a>
        </Menu.Dropdown> */}
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <div>
            <Group className="flex" spacing="md">
              <a
                className="text-gray-600 hover:text-black"
                target="_blank"
                href="/blog"
              >
                Blog
              </a>
              <a
                className="text-gray-600 hover:text-black"
                target="_blank"
                href="/docs"
              >
                Documentation
              </a>
              <Button
                color="dark"
                component="a"
                radius="lg"
                target="_blank"
                href="https://konfigthis.com/schedule-demo"
                leftIcon={<IconCalendarEvent size="0.9rem" />}
              >
                Book a demo
              </Button>
            </Group>
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}
