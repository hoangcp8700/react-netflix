import React from 'react'
import { Player, Watch, WatchControl } from 'components'
import { usePlayer } from 'hooks/usePlayer'

const WatchPage = () => {
  const playerRef = React.useRef(null)
  const playerContainerRef = React.useRef(null)

  const {
    handleOpenSource,
    handlePlay,
    handleReady,
    handleFullScreen,
    handleMuted,
    handleRewind,
    handleFastForward,
    handleChangeVolume,
    volume,
    muted,
    playing,
    showTool,
  } = usePlayer(playerRef, playerContainerRef)
  return (
    <Watch>
      <Watch.Body>
        <Player ref={playerContainerRef}>
          <Player.Source
            ref={playerRef}
            url="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            width="100%"
            height="100%"
            // muted={muted}
            playing={playing}
            volume={volume}
            onClickPreview={handleOpenSource}
            onReady={() => handleReady(true)}
          />
        </Player>
      </Watch.Body>
      <WatchControl
        handlePlay={handlePlay}
        handleFullScreen={handleFullScreen}
        handleMuted={handleMuted}
        handleRewind={handleRewind}
        handleFastForward={handleFastForward}
        handleChangeVolume={handleChangeVolume}
        muted={muted}
        playing={playing}
        showTool={showTool}
        volume={volume}
      />
    </Watch>
  )
}

export default WatchPage
