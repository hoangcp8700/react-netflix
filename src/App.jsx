import React from 'react'
import { Home, Login, SignUp, Browse, Watch, NoMatch } from 'pages'
import { PublicRoute, PrivateRoute, NoMatchRoute } from 'helpers/routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as ROUTES from 'constants/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute exact path={ROUTES.HOME}>
            <Home />
          </PublicRoute>
          <PublicRoute path={ROUTES.LOGIN}>
            <Login />
          </PublicRoute>
          <PublicRoute path={ROUTES.SIGN_UP}>
            <SignUp />
          </PublicRoute>
          <PrivateRoute path={ROUTES.BROWSE}>
            <Browse />
          </PrivateRoute>
          <PrivateRoute exact path={`${ROUTES.WATCH}/:id`}>
            <Watch />
          </PrivateRoute>
          <NoMatchRoute path="*">
            <NoMatch />
          </NoMatchRoute>
        </Switch>
      </div>
    </Router>
  )
}

export default App
