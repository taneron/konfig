import {
  Anchor,
  SpacingValue,
  SystemProp,
  Title,
  TitleOrder,
  createStyles,
  rem,
  useMantineTheme,
} from '@mantine/core'
import { observer } from 'mobx-react'
import { useContext, useEffect, useRef, useState } from 'react'
import { Components } from 'react-markdown/lib/ast-to-react'
import { DemoStateContext } from './DemoMarkdown'
import { toText } from 'hast-util-to-text'
import Slugger from 'github-slugger'
import { TitleSize } from '@mantine/core/lib/Title/Title'
import { linkColor } from '@/utils/link-color'
import { useClipboard } from '@mantine/hooks'
import { notifications } from '@mantine/notifications'
import { LinkIcon } from './LinkIcon'

export const TITLE_OFFSET_PX = 100

const useStyles = createStyles((theme) => ({
  anchor: {
    ':hover::after': {
      opacity: 1,
      transform: 'none',
      visibility: 'visible',
      '--visibility-delay': '0s',
    },
    '::after': {
      content: '""',
      display: 'inline-block',
      width: '0.8em',
      height: '0.8em',
      maxWidth: '20px',
      maxHeight: '20px',
      verticalAlign: 'middle',
      marginLeft: '8px',
      transition:
        'opacity 0.2s, transform 0.2s, visibility 0s var(--visibility-delay,0.2s)',
      opacity: '0',
      visibility: 'hidden',
      transform: 'translateX(-50%)',
      backgroundSize: 'cover',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M9.306 10.206a.745.745 0 0 1 .066.977l-.066.076-2.458 2.458a3.228 3.228 0 0 1-4.691-4.431l.126-.133L4.74 6.694a.745.745 0 0 1 1.12.978l-.067.076-2.458 2.458a1.738 1.738 0 0 0 2.353 2.555l.105-.097 2.458-2.458a.745.745 0 0 1 1.054 0ZM9.83 6.17c.29.291.29.763 0 1.054l-2.48 2.48a.745.745 0 1 1-1.054-1.053l2.48-2.48a.745.745 0 0 1 1.054 0Zm3.888-3.887a3.228 3.228 0 0 1 .126 4.431l-.126.133-2.459 2.459a.745.745 0 0 1-1.12-.978l.067-.076 2.458-2.458a1.738 1.738 0 0 0-2.353-2.555l-.105.097-2.458 2.458a.745.745 0 0 1-1.12-.977l.066-.076 2.459-2.458a3.228 3.228 0 0 1 4.565 0Z' fill='%238A8F98'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h16v16H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")`,
    },
  },
}))

const _DemoTitle: Components['h1'] = ({
  children,
  node,
  siblingCount,
  level,
}) => {
  const demoState = useContext(DemoStateContext)
  const title = toText(node)
  const [slug] = useState(
    generateHeaderTitle({
      demoId: demoState?.id,
      title,
      slugger: demoState?.slugger,
    })
  )
  const ref = useRef<HTMLHeadingElement | null>(null)
  const theme = useMantineTheme()
  const { classes } = useStyles()

  useEffect(() => {
    if (demoState === null) return
    if (ref.current === null) return
    demoState.headerIdToHtmlElement[slug] = ref.current
  }, [slug, demoState])

  const clipboard = useClipboard()

  // get current url and subpath without slug
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  return (
    <Title
      sx={{ ':target': { scrollMarginTop: rem(TITLE_OFFSET_PX + 16) } }}
      ref={ref}
      id={slug}
      order={level as TitleOrder}
      mt={mt(level as TitleOrder)}
      size={size(level as TitleOrder)}
      color={linkColor({ theme })}
      className={classes.anchor}
      onClick={() => {
        clipboard.copy(`${currentUrl}`)
        notifications.show({
          id: 'url-copied-to-your-clipboard',
          radius: 'md',
          withBorder: true,
          styles: {
            body: {
              fontWeight: 500,
            },
            icon: {
              backgroundColor: 'transparent',
            },
          },
          message: 'URL copied to your clipboard',
          icon: <LinkIcon />,
        })
      }}
    >
      <Anchor href={`#${slug}`} unstyled>
        {children}
      </Anchor>
    </Title>
  )
}

function size(level: TitleOrder): TitleSize {
  if (level === 1) return 'h1'
  if (level === 2) return 'h3'
  if (level === 3) return 'h4'
  if (level === 4) return 'h5'
  if (level === 5) return 'h6'
  return 'h6'
}

function mt(level: TitleOrder): SystemProp<SpacingValue> {
  if (level === 1) return 80
  if (level === 2) return 72
  if (level === 3) return 48
  if (level === 4) return 48
  if (level === 5) return 48
  return 48
}

export function generateHeaderTitle({
  demoId,
  title,
  slugger,
}: {
  demoId?: string
  title: string
  slugger?: Slugger
}) {
  const id = `${demoId}:${slugger?.slug(title)}`
  return id
}

export const DemoTitle = observer(_DemoTitle)
