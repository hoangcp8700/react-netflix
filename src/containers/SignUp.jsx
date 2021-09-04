import React from 'react'
import { useForm } from 'react-hook-form'
import { FormAuth } from 'components'
import { useHistory } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import Spinner from 'components/Spinner'
import Alert from 'components/AlertMessage'
import { useAuth } from 'hooks/useAuth'

const SignUpContainer = () => {
  const [isOpenMore, setIsOpenMore] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState('')
  const { signUp } = useAuth()
  const history = useHistory()
  const passwordRef = React.useRef()
  const {
    control,
    handleSubmit,
    setError,
    // reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    setIsLoading(true)
    try {
      const res = await signUp(data.email, data.password)
      const { user } = await res
      user.updateProfile({
        displayName: data.fullName,
        photoURL: `/images/users/${Math.floor(Math.random() * 5) + 1}.png`,
      })
      setIsLoading(false)
      setAlertMessage('Register successfully!')
      // reset({
      //   fullName: '',
      //   email: '',
      //   password: '',
      //   password_confirm: '',
      // })
      setTimeout(() => {
        history.push(ROUTES.BROWSE)
      }, 1000)
    } catch (error) {
      console.log('err', error)
      setIsLoading(false)
      setError('alert', { type: 'manual', message: error.message })
    }
  }
  return (
    <>
      <FormAuth>
        <FormAuth.Box>
          <FormAuth.Title>Sign up</FormAuth.Title>
          <FormAuth.Error active={!!errors?.alert?.message}>
            <FormAuth.Span>{errors?.alert?.message}</FormAuth.Span>
          </FormAuth.Error>
          <FormAuth.Form onSubmit={handleSubmit(onSubmit)}>
            <FormAuth.Controller
              control={control}
              name="fullName"
              defaultValue=""
              rules={{
                required: 'Name is required!',
              }}
              render={({ field }) => (
                <FormAuth.Input
                  {...field}
                  inputProps={{
                    autoComplete: 'none',
                  }}
                  errors={errors?.fullName}
                  autoFocus
                  label="Full name"
                />
              )}
            />
            <FormAuth.Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
                required: 'Email is required!',
              }}
              render={({ field }) => (
                <FormAuth.Input
                  {...field}
                  inputProps={{
                    autoComplete: 'none',
                  }}
                  errors={errors.email && errors.email}
                  label="Email Address"
                />
              )}
            />
            <FormAuth.Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{
                required: 'Password is required!',
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              }}
              render={({ field }) => (
                <FormAuth.Input
                  {...field}
                  errors={errors.password && errors.password}
                  type="password"
                  label="Password"
                  ref={passwordRef}
                />
              )}
            />
            <FormAuth.Controller
              control={control}
              name="password_confirm"
              defaultValue=""
              rules={{
                validate: value =>
                  value === passwordRef.current.value ||
                  'The passwords do not match',
              }}
              render={({ field }) => (
                <FormAuth.Input
                  {...field}
                  errors={errors.password_confirm && errors.password_confirm}
                  type="password"
                  label="Password Confirm"
                />
              )}
            />
            <FormAuth.Submit fullWidth type="submit">
              Sign up
            </FormAuth.Submit>
            <FormAuth.Break />
            <FormAuth.Row>
              <FormAuth.Text title="true">Already an account?</FormAuth.Text>
              {'\u00A0'}
              <FormAuth.Redirect to={ROUTES.LOGIN} decoration="underline">
                Login now{' '}
              </FormAuth.Redirect>
            </FormAuth.Row>
            <FormAuth.Row direction="column">
              <FormAuth.Text>
                This page is protected by Google reCAPTCHA to ensure you are not
                a bot.
                <FormAuth.Span
                  mx="0.5rem"
                  onClick={() => setIsOpenMore(!isOpenMore)}
                >
                  Learn more.
                </FormAuth.Span>{' '}
              </FormAuth.Text>
              <FormAuth.Transition in={isOpenMore}>
                <FormAuth.Text mt="1rem">
                  The information collected by Google reCAPTCHA is subject to
                  the Google
                  <FormAuth.Span color="rgba(0, 128, 255">
                    Privacy Policy
                  </FormAuth.Span>{' '}
                  and{' '}
                  <FormAuth.Span color="rgba(0, 128, 255">
                    Terms of Service
                  </FormAuth.Span>
                  , and is used for providing, maintaining, and improving the
                  reCAPTCHA service and for general security purposes (it is not
                  used for personalized advertising by Google)
                </FormAuth.Text>
              </FormAuth.Transition>
            </FormAuth.Row>
          </FormAuth.Form>
        </FormAuth.Box>
      </FormAuth>
      {isLoading && <Spinner />}
      <Alert message={alertMessage} />
    </>
  )
}

export default SignUpContainer
