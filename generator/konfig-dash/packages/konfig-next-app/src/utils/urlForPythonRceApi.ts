export const urlForPythonRceApi = () => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000'
    : `http://${process.env.PYTHON_RCE_API_HOST_PORT}`
}
