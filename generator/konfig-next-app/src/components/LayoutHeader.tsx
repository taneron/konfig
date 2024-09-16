import {
  Box,
  Burger,
  Button,
  Group,
  MantineNumberSize,
  MediaQuery,
  Title,
  clsx,
  createStyles,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { ColorSchemeToggle } from './ColorSchemeToggle'
import { observer } from 'mobx-react'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { useBaseUrl } from '@/utils/use-base-url'
import Link from 'next/link'
import type { GenerateLogoLinkResponse } from '@/utils/generate-logo-link'
import { useHeaderColor } from '@/utils/use-header-color'
import { MarkdownPageProps } from '@/utils/generate-props-for-markdown-page'
import { Search } from './Search'
import { KonfigYamlCommonType } from 'konfig-lib'

const useLogoStyles = createStyles(() => ({
  logo: {
    position: 'relative !important' as any,
  },
}))

export const LayoutHeader = observer(
  ({
    title,
    opened,
    setOpened,
    breakpoint,
    allMarkdown,
    logo,
    cta,
  }: {
    title: string
    opened: boolean
    setOpened: Dispatch<SetStateAction<boolean>>
    breakpoint: MantineNumberSize
    logo: GenerateLogoLinkResponse
    allMarkdown: MarkdownPageProps['allMarkdown']
    cta: NonNullable<KonfigYamlCommonType['portal']>['cta'] | null
  }) => {
    const theme = useMantineTheme()
    const baseUrl = useBaseUrl()
    const hasLightAndDarkLogo = typeof logo !== 'string'
    const color = useHeaderColor({ hasLightAndDarkLogo })
    const { classes } = useLogoStyles()
    return (
      <Box
        h="55%"
        px="md"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          // borderBottom: `1px solid ${
          //   theme.colorScheme === 'dark'
          //     ? theme.colors.brand[8]
          //     : theme.colors.brand[6]
          // }`,
        }}
      >
        <Group h="100%" spacing="xs" noWrap>
          <MediaQuery largerThan={breakpoint} styles={{ display: 'none' }}>
            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              size="sm"
              color={color}
            />
          </MediaQuery>
          {logo !== null ? (
            <div
              style={{
                display: 'flex',
                position: 'relative',
              }}
              className="h-1/3"
            >
              <Link style={{ position: 'relative' }} href={baseUrl}>
                <img
                  className={clsx(classes.logo, 'h-full')}
                  alt="logo"
                  src={
                    typeof logo === 'string'
                      ? logo
                      : theme.colorScheme === 'dark'
                      ? logo.dark
                      : logo.light
                  }
                />
              </Link>
            </div>
          ) : (
            <Title order={4}>{title}</Title>
          )}
        </Group>
        <Group className="flex-none">
          {cta ? (
            <>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Button
                  variant={
                    !hasLightAndDarkLogo
                      ? 'filled'
                      : theme.colorScheme === 'dark'
                      ? 'light'
                      : 'filled'
                  }
                  component="a"
                  size="xs"
                  className="max-[400px]:hidden"
                  target="_blank"
                  color={
                    !hasLightAndDarkLogo
                      ? 'dark'
                      : theme.colorScheme === 'dark'
                      ? 'brand'
                      : 'dark'
                  }
                  href={cta.url}
                >
                  {cta.label}
                </Button>
              </MediaQuery>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Button
                  variant={
                    !hasLightAndDarkLogo
                      ? 'filled'
                      : theme.colorScheme === 'dark'
                      ? 'light'
                      : 'filled'
                  }
                  component="a"
                  target="_blank"
                  color={
                    !hasLightAndDarkLogo
                      ? 'dark'
                      : theme.colorScheme === 'dark'
                      ? 'brand'
                      : 'dark'
                  }
                  href={cta.url}
                >
                  {cta.label}
                </Button>
              </MediaQuery>
            </>
          ) : null}
          <div className="sm:hidden">
            <Search />
          </div>
          <ColorSchemeToggle hasLightAndDarkLogo={typeof logo !== 'string'} />
        </Group>
      </Box>
    )
  }
)
