import { SystemProp } from '@mantine/core'
import { CSSProperties } from 'react'

export const proseContainerWidthStyles: {
  w: SystemProp<CSSProperties['width']>
  maw: SystemProp<CSSProperties['maxWidth']>
} = {
  w: '100%',
  maw: '700px',
}
