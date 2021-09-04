import React from 'react'
import { Watch, VolumePlayer } from 'components'
import {
  Close,
  Pause,
  PlayArrow,
  Replay,
  Fullscreen,
  Speed,
  NavigateBefore,
} from '@material-ui/icons'

const WatchControl = props => {
  const {
    handlePlay,
    handleFullScreen,
    handleMuted,
    handleChangeVolume,
    handleFastForward,
    handleRewind,
    muted,
    volume,
    playing,
    showTool,
  } = props

  return (
    <>
      <Watch.Header>
        <Watch.HeaderContainer display={!showTool ? 'true' : 'false'}>
          <Watch.Group>
            <Watch.Tool icon={<NavigateBefore />} />
          </Watch.Group>
          <Watch.Group>
            <Watch.Title>No way home</Watch.Title>
            <Watch.SubTitle>S1:E1 Pilot part 1 & 2</Watch.SubTitle>
          </Watch.Group>
          <Watch.Group>
            <Watch.Tool icon={<Close />} />
          </Watch.Group>
        </Watch.HeaderContainer>
      </Watch.Header>
      <Watch.Footer>
        <Watch.FooterContainer>
          <Watch.Row
            margin="0 0 .5rem"
            direction="true"
            justify="space-between"
          >
            <Watch.Text>00:00</Watch.Text>
            <Watch.Slider type="range" />
            <Watch.Text>1:20:00</Watch.Text>
          </Watch.Row>
          <Watch.Row justify="space-between" direction="true">
            <Watch.Group display="flex">
              <Watch.Tool
                icon={playing ? <Pause /> : <PlayArrow />}
                onClick={handlePlay}
              />
              <Watch.Tool icon={<Replay />} value="10" onClick={handleRewind} />
              <Watch.Tool
                icon={<Replay />}
                value="10"
                reverse="true"
                onClick={handleFastForward}
              />
              <VolumePlayer
                handleChangeVolume={handleChangeVolume}
                handleMuted={handleMuted}
                volume={volume}
                muted={muted}
              />

              <Watch.Group display="flex" ellipsis="true">
                <Watch.Title>No way home</Watch.Title>
                <Watch.SubTitle>S1:E1 Pilot part 1 & 2</Watch.SubTitle>
              </Watch.Group>
            </Watch.Group>
            <Watch.Group display="flex">
              <Watch.Tool icon={<Speed />} />
              <Watch.Tool icon={<Fullscreen />} onClick={handleFullScreen} />
            </Watch.Group>
          </Watch.Row>
        </Watch.FooterContainer>
      </Watch.Footer>
    </>
  )
}

export default WatchControl
