import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import * as ROUTES from 'constants/routes'
import { useAuth } from 'hooks/useAuth'
import Spinner from 'components/Spinner'

export const PrivateRoute = ({ children, ...props }) => {
  const { user, isLoading } = useAuth()
  return !isLoading ? (
    user?.id ? (
      <Route {...props}>{children}</Route>
    ) : (
      <Redirect
        to={{
          pathname: ROUTES.LOGIN,
          state: { from: props.location },
        }}
      />
    )
  ) : (
    <Spinner />
  )
}

export const PublicRoute = ({ children, ...props }) => {
  const { user, isLoading } = useAuth()
  return !isLoading ? (
    !user?.id ? (
      <Route {...props}>{children}</Route>
    ) : (
      <Redirect
        to={{
          pathname: ROUTES.BROWSE,
          state: { from: props.location },
        }}
      />
    )
  ) : (
    <Spinner />
  )
}
export const NoMatchRoute = ({ children, ...props }) => {
  const { isLoading } = useAuth()
  return !isLoading ? <Route {...props}>{children}</Route> : <Spinner />
}
