import React from 'react'
import screenfull from 'screenfull'
import { useFullScreenHandle } from 'react-full-screen'

export const usePlayer = (playerRef, playerContainerRef) => {
  const [isStart, setIsStart] = React.useState(false)
  const [muted, setMuted] = React.useState(null)
  const [volume, setVolume] = React.useState(0.5)
  const [playing, setPlaying] = React.useState(false)
  const [isAdd, setIsAdd] = React.useState(false)
  const [isLike, setIsLike] = React.useState(0)
  const [light, setLight] = React.useState(false)
  const [showTool, setShowTool] = React.useState(true)

  const handleFullScreen = () => {
    // if (screenfull.isEnabled) {
    screenfull.toggle(playerContainerRef.current)
    // }
  }

  const handleError = thumbnail => {
    setLight(thumbnail)
  }

  const handleOpenSource = () => {
    // setMuted(false)
    setPlaying(true)
    setIsStart(true)
    console.log(playerRef.current.getDuration())
  }

  const handlePlay = () => {
    console.log('handlePlay')
    setPlaying(!playing)
  }
  const handleReady = watch => {
    if (isStart) return
    if (watch) {
      return setTimeout(() => {
        handleOpenSource()
      }, 3000)
    }
    setTimeout(() => setPlaying(true), 100)
  }
  const handleMuted = () => {
    !muted ? setVolume(0) : setVolume(0.5)
    setMuted(!muted)
  }
  const handleChangeVolume = (event, newValue) => {
    newValue === 0 ? setMuted(true) : setMuted(false)
    // const value = newValue > 100 ? 100 : newValue <= 0 ? 0 : newValue

    setVolume(newValue / 100)
  }
  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() - 10)
  }
  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10)
  }
  return {
    handleChangeVolume,
    handleReady,
    handleError,
    handleOpenSource,
    handlePlay,
    handleFullScreen,
    handleMuted,
    handleRewind,
    handleFastForward,
    light,
    volume,
    muted,
    playing,
    isAdd,
    isLike,
    showTool,
    setIsAdd,
    setIsLike,
  }
}
