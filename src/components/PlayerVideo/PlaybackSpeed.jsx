import React from 'react'
import { Speed } from '@material-ui/icons'
import { Tool } from 'components/Watch/styles/Watch'
import { Paper, Popper } from '@material-ui/core'
import { Container, List } from './styles/PlaybackSpeed'
// styles components
const PlaybackSpeed = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
PlaybackSpeed.Tool = ({ icon, ...props }) => {
  return <Tool {...props}>{icon}</Tool>
}
PlaybackSpeed.Effect = ({ children, ...props }) => {
  return <Popper {...props}>{children}</Popper>
}
PlaybackSpeed.List = ({ children, ...props }) => {
  return <List {...props}>{children}</List>
}
const PlaybackSpeedPlayer = props => {
  const { handPlayBackSpeed, playbackSpeed } = props
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'playback-speed-popper' : undefined

  return (
    <PlaybackSpeed>
      <PlaybackSpeed.Tool
        icon={<Speed />}
        onClick={handPlayBackSpeed}
        aria-describedby={id}
      />
      <PlaybackSpeed.Effect id={id} open={open} anchorEl={anchorEl}>
        <Paper>sdasdas</Paper>
      </PlaybackSpeed.Effect>
    </PlaybackSpeed>
  )
}

export default PlaybackSpeedPlayer
