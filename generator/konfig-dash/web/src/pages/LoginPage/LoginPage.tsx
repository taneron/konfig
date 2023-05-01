import { MetaTags } from '@redwoodjs/web'
import SignupForm from 'src/components/SignupForm/SignupForm'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" />
      <SignupForm login={true} />
    </>
  )
}

export default LoginPage
