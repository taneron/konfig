/**
 * Parses a date string in the format YYYY-MM-DD.
 * If the date string is invalid, returns null.
 * @param str input date string (can be invalid)
 */
export function parseDateString(str: string): Date | null {
  const date = new Date(str)
  if (date.toString() === 'Invalid Date') return null
  // Get the timezone offset in minutes
  const timezoneOffsetMinutes = date.getTimezoneOffset()
  // Adjust the date by the timezone offset
  const adjustedDate = new Date(date.getTime() + timezoneOffsetMinutes * 60000)
  return adjustedDate.toString() === 'Invalid Date' ? null : adjustedDate
}
