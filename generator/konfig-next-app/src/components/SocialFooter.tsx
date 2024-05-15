import { Box, Divider, rem } from '@mantine/core'
import { KonfigYamlType } from 'konfig-lib'
import { DemoSocials } from './DemoSocials'

export function SocialFooter({ konfigYaml }: { konfigYaml: KonfigYamlType }) {
  if (konfigYaml.portal?.socials === undefined) return null
  return (
    <Box>
      <Divider className="mt-24" />
      <div className="my-10">
        <DemoSocials socials={konfigYaml.portal.socials} />
      </div>
    </Box>
  )
}
