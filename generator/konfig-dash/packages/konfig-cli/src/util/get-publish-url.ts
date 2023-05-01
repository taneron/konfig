export const getPublishUrl = ({dev, configId}: {dev: boolean, configId: string}): string => {
  return `${dev ? 'http://localhost:8910/publish' : 'https://dash.konfigthis.com/publish'}?configId=${configId}`
}
