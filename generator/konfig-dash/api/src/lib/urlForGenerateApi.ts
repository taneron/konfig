export const urlForGenerateApi = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/generate'
    : `http://${process.env.GENERATOR_API_HOST_PORT}/generate`
}
