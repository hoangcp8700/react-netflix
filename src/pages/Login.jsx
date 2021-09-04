import React from 'react'
import HeaderContainer from 'containers/Header'
import FooterContainer from 'containers/Footer'
import LoginContainer from 'containers/Login'

const Login = () => {
  return (
    <>
      <HeaderContainer>
        <LoginContainer />
        <FooterContainer bg />
      </HeaderContainer>
    </>
  )
}

export default Login
