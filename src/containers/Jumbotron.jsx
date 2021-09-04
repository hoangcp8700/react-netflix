import React from 'react'
import jumboData from 'app/data/jumbo'
import { Jumbotron } from 'components'

const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map(item => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Box>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Box>
          <Jumbotron.Box image>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Box>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  )
}

export default JumbotronContainer
