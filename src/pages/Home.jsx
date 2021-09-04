import React from 'react'
import JumbotronContainer from 'containers/Jumbotron'
import FooterContainer from 'containers/Footer'
import AccordionContainer from 'containers/Accordion'
import HeaderContainer from 'containers/Header'
import { FormAlone, Feature, Navbar } from 'components'
import * as DATA from 'constants/index'

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <Navbar>
          <Feature>
            <Feature.Title>{DATA.FEATURE_TITLE}</Feature.Title>
            <Feature.SubTitle>{DATA.FEATURE_SUB_TITLE}</Feature.SubTitle>
          </Feature>
          <FormAlone />
        </Navbar>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  )
}

export default Home
