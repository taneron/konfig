import {
  Text,
  Breadcrumbs as MantineBreadcrumbs,
  useMantineTheme,
} from '@mantine/core'
import { BreadcrumbHighlighted } from './BreadcrumbHighlighted'

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: string[] }) {
  const theme = useMantineTheme()
  const everyBreadcrumbButLastOne = breadcrumbs.slice(0, breadcrumbs.length - 1)
  return (
    <MantineBreadcrumbs>
      {everyBreadcrumbButLastOne.map((breadcrumb, index) =>
        index === everyBreadcrumbButLastOne.length - 1 ? (
          <BreadcrumbHighlighted key={index}>
            {breadcrumb}
          </BreadcrumbHighlighted>
        ) : (
          <Text key={index}>{breadcrumb}</Text>
        )
      )}
    </MantineBreadcrumbs>
  )
}
