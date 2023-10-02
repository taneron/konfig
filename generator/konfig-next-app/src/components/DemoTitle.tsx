import {
  Anchor,
  SpacingValue,
  SystemProp,
  Title,
  TitleOrder,
  rem,
} from '@mantine/core'
import { observer } from 'mobx-react'
import { useContext, useEffect, useRef, useState } from 'react'
import { Components } from 'react-markdown/lib/ast-to-react'
import { DemoStateContext } from './DemoMarkdown'
import { toText } from 'hast-util-to-text'
import Slugger from 'github-slugger'
import { TitleSize } from '@mantine/core/lib/Title/Title'

export const TITLE_OFFSET_PX = 100

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

  useEffect(() => {
    if (demoState === null) return
    if (ref.current === null) return
    demoState.headerIdToHtmlElement[slug] = ref.current
  }, [slug, demoState])

  return (
    <Title
      sx={{ ':target': { scrollMarginTop: rem(TITLE_OFFSET_PX) } }}
      ref={ref}
      id={slug}
      order={level as TitleOrder}
      mt={mt(level as TitleOrder)}
      size={size(level as TitleOrder)}
    >
      <Anchor href={`#${slug}`} unstyled>
        {children}
      </Anchor>
    </Title>
  )
}

function size(level: TitleOrder): TitleSize {
  if (level === 1) return 'h1'
  if (level === 2) return 'h4'
  if (level === 3) return 'h5'
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
