import { defaultOr200RangeStatusCodeRegex } from './default-or-200-range-status-code-regex'

export function isMissing2xxResponse({
  responseCodes,
}: {
  responseCodes: string[]
}) {
  return (
    responseCodes.find((code) =>
      defaultOr200RangeStatusCodeRegex.test(code)
    ) === undefined
  )
}
