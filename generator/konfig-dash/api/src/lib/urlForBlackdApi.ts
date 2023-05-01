export const urlForBlackdApi = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:9090'
    : `http://${process.env.BLACKD_API_HOST_PORT}`
}
