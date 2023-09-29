import {
  Dispatch,
  SetStateAction,
  use,
  useEffect,
  useRef,
  useState,
} from 'react'
import type { HttpMethods } from 'konfig-lib'
import {
  Group,
  Box,
  Collapse,
  UnstyledButton,
  createStyles,
  rem,
  NavLink,
} from '@mantine/core'
import {
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'
import Link from 'next/link'
import { HttpMethodBadge } from './HttpMethodBadge'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  linkWrapper: {
    paddingLeft: rem(20),
  },

  link: {
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },

  chevron: {
    transition: 'transform 200ms ease',
  },
}))

export interface LinksGroupProps {
  label: string
  initiallyOpened?: boolean
  links?: {
    label: string
    link: string
    httpMethod: HttpMethods
    active?: boolean
    metadata?: {
      operationId?: string
    }
  }[]
}

export interface NavbarDataItem {
  label: LinksGroupProps['label']
  initiallyOpened?: LinksGroupProps['initiallyOpened']
  links: NonNullable<LinksGroupProps['links']>
}

export function LinksGroup({
  label,
  initiallyOpened,
  links,
  setOpened: setNavbarOpen,
}: LinksGroupProps & {
  setOpened: Dispatch<SetStateAction<boolean>>
}) {
  const { classes, theme } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  const ref = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    })
  }, [])
  const items = (hasLinks ? links : []).map((link, i) => {
    return (
      <Box className={classes.linkWrapper} key={`${link.label}:${i}`}>
        <NavLink<typeof Link>
          onClick={() => setNavbarOpen(false)}
          py={6}
          styles={{
            root: {
              borderRadius: theme.radius.sm,
            },
            label: {
              color: link.active
                ? theme.colorScheme === 'dark'
                  ? theme.colors.brand[3]
                  : theme.colors.brand[8]
                : undefined,
              fontSize: theme.fontSizes.sm,
            },
          }}
          ref={ref}
          component={Link}
          className={classes.link}
          href={link.link}
          label={link.label}
          active={link.active}
          fw={link.active ? 'bold' : undefined}
          rightSection={
            <HttpMethodBadge size="xs" httpMethod={link.httpMethod} />
          }
        />
      </Box>
    )
  })

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
        py={8}
      >
        <Group position="apart" spacing={0}>
          <Box>{label}</Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size="1rem"
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}
