import { useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { useForm } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Image,
  Center,
  Container,
  FocusTrap,
  Flex,
} from '@mantine/core'

type Inputs = {
  username: string
  password: string
}

function SignupForm({ login }: { login?: boolean }) {
  const { isAuthenticated, signUp, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data: Record<string, string>) => {
    const response = login
      ? await logIn({ ...data })
      : await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      if (login) {
        toast.success('Welcome back!')
      } else {
        toast.success('Welcome!')
      }
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Container size={420} my={40}>
        <Center>
          <Image width={40} src="/favicon.png" />
          <Title ml="xs" order={2}>
            Konfig
          </Title>
        </Center>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          {login ? "Don't have an account?" : 'Already have an account?'}{' '}
          <Link
            to={login ? routes.signup() : routes.login()}
            onClick={(event) => event.preventDefault()}
          >
            {login ? 'Sign up' : 'Log in'}
          </Link>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <FocusTrap>
            <TextInput
              {...register('username', {
                required: { value: true, message: 'Email is required' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              error={errors.username?.message}
              label="Email"
              placeholder="hello@gmail.com"
              required
              size="md"
            />
            <PasswordInput
              {...register('password', {
                required: { value: true, message: 'Password is required' },
              })}
              error={errors.password?.message}
              label="Password"
              autoComplete="current-password"
              placeholder="Your password"
              mt="md"
              size="md"
              required
            />
            {login && (
              <Flex mt="lg" justify="flex-end">
                <Link to={routes.forgotPassword()}>Forgot password?</Link>
              </Flex>
            )}
            <Button type="submit" fullWidth mt="xl" size="md">
              {login ? 'Sign in' : 'Sign up'}
            </Button>
          </FocusTrap>
        </Paper>
      </Container>
    </form>
  )
}
export default SignupForm
