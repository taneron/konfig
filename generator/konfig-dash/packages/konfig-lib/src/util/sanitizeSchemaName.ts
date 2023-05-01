export function sanitizeSchemaName({ name }: { name: string }) {
  return name
    .replaceAll('/', '-')
    .replaceAll('}', '')
    .replaceAll('{', '')
    .trim()
}
