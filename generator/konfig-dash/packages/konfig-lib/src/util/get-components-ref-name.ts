export function getComponentRefName({
  ref,
}: {
  ref: string
}): string | undefined {
  if (!ref.includes('components/')) return
  return ref.split('/')[3] as string
}
