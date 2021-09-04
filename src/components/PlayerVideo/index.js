import React from 'react'
import ReactPlayer from 'react-player'
import './styles/player-react.css'
import { Container } from './styles/PlayerVideo'

const Player = React.forwardRef(({ children, ...props }, ref) => {
  console.log('player', ref)
  return (
    <Container {...props} ref={ref}>
      {children}
    </Container>
  )
})

Player.Source = React.forwardRef((restProps, ref) => {
  return <ReactPlayer {...restProps} ref={ref} />
})

export default Player
