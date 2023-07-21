export function removeTrailingSlash(url: string) {
  // Use a regular expression to remove the trailing slash from the URL
  return url.replace(/\/$/, '')
}
