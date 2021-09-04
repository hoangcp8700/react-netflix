import React from 'react'
import 'components/NoMatch/style.css'
import { Link, useHistory } from 'react-router-dom'
import * as ROUTES from 'constants/routes'

const NoMatch = () => {
  const history = useHistory()
  return (
    <div className="NoMatch__Container">
      <div className="noise" />
      <div className="overlay" />
      <div className="terminal">
        <h1>
          Error <span className="errorCode">404</span>
        </h1>
        <p className="output">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <p className="output">
          Please try to <Link to={ROUTES.HOME}>return to the homepage</Link>.
        </p>
        <p className="output">Good luck.</p>
      </div>
    </div>
  )
}

export default NoMatch
