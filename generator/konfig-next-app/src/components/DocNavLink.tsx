import { useBasePath } from '@/utils/use-base-path'
import { Dispatch, SetStateAction } from 'react'
import { NavbarLink } from './NavbarLink'

export function DocNavLink({
  id,
  label,
  docId,
  setOpened,
  omitOwnerAndRepo,
}: {
  id: string
  label: string
  docId: string
  setOpened: Dispatch<SetStateAction<boolean>>
  omitOwnerAndRepo: boolean
}) {
  const basePath = useBasePath({ omitOwnerAndRepo })
  const active = id === docId
  return (
    <NavbarLink
      active={active}
      onClick={() => setOpened(false)}
      key={id}
      href={`${basePath}/docs/${id}`}
      label={label}
    />
  )
}
