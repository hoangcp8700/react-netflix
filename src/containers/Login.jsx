import React from 'react'
import { useForm } from 'react-hook-form'
import { FormAuth } from 'components'
import FacebookIcon from '@material-ui/icons/Facebook'
import { useHistory } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import Spinner from 'components/Spinner'
import { useAuth } from 'hooks/useAuth'

const LoginContainer = () => {
  const [isOpenMore, setIsOpenMore] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const history = useHistory()
  const { saveUser, logIn } = useAuth()
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()
  const onSubmit = async data => {
    setIsLoading(true)
    try {
      const res = await logIn(data.email, data.password)
      const { user } = await res
      console.log('login', res)
      saveUser(user.uid, user.displayName, user.email, user.photoURL)
      setIsLoading(false)
      history.push(ROUTES.BROWSE)
    } catch (error) {
      setError('alert', { type: 'manual', message: error.message })
      console.log('error', error)
    }
  }
  return (
    <>
      <FormAuth>
        <FormAuth.Box>
          <FormAuth.Title>Login</FormAuth.Title>
          <FormAuth.Error active={!!errors?.alert?.message}>
            <FormAuth.Span>{errors?.alert?.message}</FormAuth.Span>
          </FormAuth.Error>
          <FormAuth.Form onSubmit={handleSubmit(onSubmit)}>
            <FormAuth.Controller
              control={control}
              name="email"
              defaultValue=""
              rules={{
                required: 'Email is required!',
              }}
              render={({ field }) => (
                <FormAuth.Input
                  {...field}
                  errors={errors.email && errors.email}
                  autoFocus
                  label="Email Address"
                />
              )}
            />
            <FormAuth.Controller
              control={control}
              name="password"
              defaultValue=""
              rules={{ required: 'Password is required!' }}
              render={({ field }) => (
                <FormAuth.Input
                  {...field}
                  errors={errors.password && errors.password}
                  type="password"
                  label="Password"
                />
              )}
            />
            <FormAuth.Submit fullWidth type="submit">
              Login
            </FormAuth.Submit>
            <FormAuth.Row between>
              <FormAuth.Controller
                control={control}
                name="rememberMe"
                defaultValue={false}
                render={({ field }) => (
                  <FormAuth.RememberMe
                    {...field}
                    color="primary"
                    label="Remember me"
                  />
                )}
              />
              <FormAuth.Redirect to="#">Need help?</FormAuth.Redirect>
            </FormAuth.Row>
            <FormAuth.Break />
            <FormAuth.Row>
              <FormAuth.ButtonLink
                to="#"
                startIcon={
                  <FacebookIcon style={{ color: '#3b5998', fontSize: 24 }} />
                }
                disableRipple
              >
                Login With Facebook
              </FormAuth.ButtonLink>
            </FormAuth.Row>
            <FormAuth.Row>
              <FormAuth.Text title="true">New to Netflix?</FormAuth.Text>{' '}
              {'\u00A0'}
              <FormAuth.Redirect to={ROUTES.SIGN_UP} decoration="underline">
                Sign up now{' '}
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
    </>
  )
}

export default LoginContainer
