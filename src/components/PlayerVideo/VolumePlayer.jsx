import React from 'react'
import { VolumeOff, VolumeUp } from '@material-ui/icons'
import { Tool } from 'components/Watch/styles/Watch'
import { Grow, Paper, Popper } from '@material-ui/core'
import { Container, SliderVolume } from './styles/VolumePlayer'

// styles components
const Volume = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
Volume.Tool = ({ icon, ...props }) => {
  return <Tool {...props}>{icon}</Tool>
}
Volume.Effect = ({ children, ...props }) => {
  return <Popper {...props}>{children}</Popper>
}
Volume.SliderVolume = ({ children, ...props }) => {
  return <SliderVolume {...props}>{children}</SliderVolume>
}

const VolumePlayer = props => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { handleMuted, muted, volume, handleChangeVolume } = props

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }
  const open = Boolean(anchorEl)
  const id = open ? 'volume-popper' : undefined
  console.log('volume', volume)
  return (
    <Volume>
      <Volume.Tool
        icon={muted ? <VolumeOff /> : <VolumeUp />}
        onClick={handleMuted}
        onMouseEnter={handleClick}
        aria-describedby={id}
      />
      <Volume.Effect id={id} open={open} anchorEl={anchorEl}>
        <Paper>
          <Volume.SliderVolume
            value={volume * 100}
            onChange={handleChangeVolume}
            orientation="vertical"
            onMouseLeave={handleClick}
            aria-labelledby="volume-slider"
            valueLabelDisplay="auto"
            step={10}
          />
        </Paper>
      </Volume.Effect>
    </Volume>
  )
}

export default VolumePlayer
