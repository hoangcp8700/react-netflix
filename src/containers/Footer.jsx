import React from 'react'
import { Footer } from 'components'
import FooterData from 'app/data/footer'
import _ from 'lodash'

const FooterContainer = () => {
  const generateKey = pre => {
    return `${pre}_${new Date().getTime()}`
  }

  return (
    <Footer>
      <Footer.Box>
        <Footer.Title>Questions? Contact us.</Footer.Title>
        <Footer.Break />
        <Footer.Row>
          {_.chunk(FooterData, 4).map((items, index) => (
            <Footer.Column key={generateKey(index)}>
              {items.map(item => (
                <Footer.Link href="#" key={item.name}>
                  {item.name}
                </Footer.Link>
              ))}
            </Footer.Column>
          ))}
        </Footer.Row>
        <Footer.Break />
        <Footer.Text>Netflix VietNam</Footer.Text>
      </Footer.Box>
    </Footer>
  )
}

export default FooterContainer
