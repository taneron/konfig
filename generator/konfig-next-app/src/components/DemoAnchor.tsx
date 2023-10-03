import { observer } from 'mobx-react'
import { Components } from 'react-markdown'
import { Text, rem, createStyles } from '@mantine/core'
import Link from 'next/link'
import { IconCode, IconTerminal } from '@tabler/icons-react'
import { DemoInlineLinkButton } from './DemoInlineLinkButton'
import { linkColor } from '@/utils/link-color'

const useStyles = createStyles((theme) => ({
  link: {
    color: linkColor({ theme }),
    fontWeight: 600,
    textDecoration: 'none',
    borderBottom: `1px solid ${theme.colors.brand[6]}`,
    wordWrap: 'break-word',
    ':hover': {
      borderBottomWidth: '2px',
    },
  },
}))

const _DemoAnchor: Components['a'] = ({
  node,
  className,
  children,
  siblingCount,
  href,
  ...props
}) => {
  const { classes } = useStyles()
  /**
   * This happens when we have a link that uses Konfig's custom syntax but is
   * not valid Konfig syntax. I forget exactly what case this happens in though
   * at the moment.
   */
  if (href === 'javascript:void(0)')
    return (
      <Text span color="red" td="line-through">
        {children}
      </Text>
    )

  if (href?.includes('/demo/')) {
    return (
      <DemoInlineLinkButton
        label={children}
        leftIcon={<IconTerminal size={rem(12)} />}
        href={href ?? '#'}
        {...props}
      />
    )
  }

  if (href?.includes('/reference/')) {
    return (
      <DemoInlineLinkButton
        label={children}
        leftIcon={<IconCode size={rem(12)} />}
        href={href ?? '#'}
        {...props}
      />
    )
  }
  return (
    <Link href={href ?? '#'} className={classes.link} {...props}>
      {children}
    </Link>
  )
}

export const DemoAnchor = observer(_DemoAnchor)
