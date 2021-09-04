import React from 'react'
import {
  Dialog,
  DialogCardHorizontal,
  DialogCardVertical,
  Player,
} from 'components'
import useMovie from 'hooks/useMovie'
import { usePlayer } from 'hooks/usePlayer'

import dataFake from 'app/data/seedMovie'

// icons
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import AddIcon from '@material-ui/icons/Add'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever'
import VolumeOffIcon from '@material-ui/icons/VolumeOff'
import VolumeUpIcon from '@material-ui/icons/VolumeUp'

const BrowseDialogContainer = ({ slides, category }) => {
  const [fullWidth, setFullWidth] = React.useState(true)
  const [maxWidth, setMaxWidth] = React.useState('md')
  const { movie, showDialog, handleShowDialog } = useMovie()

  const dataSeedFake = slides.crime
  // player state
  const {
    handleReady,
    handleError,
    light,
    muted,
    playing,
    isAdd,
    isLike,
    setMuted,
    setIsAdd,
    setIsLike,
  } = usePlayer()

  React.useEffect(() => {
    console.log('item', movie)
    // handleShowDialog(true)
  }, [movie])
  const handleClose = () => {
    handleShowDialog(false)
  }
  const handleRedirectPlay = () => {
    console.log('rediret paly')
  }
  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={showDialog}
      onClose={handleClose}
      aria-labelledby="max-width-dialog-title"
    >
      <Dialog.Group type="banner">
        <Player>
          <Player.Source
            url={dataFake[0].src}
            style={{
              position: 'absolute',
              zIndex: 1,
              background: '#181818',
              top: '-50%',
              left: '-50%',
            }}
            width="200%"
            height="170%"
            playing={playing}
            loop
            muted={muted}
            onReady={handleReady}
            onError={() =>
              handleError(
                `/images/${category}/${movie?.genre}/${movie?.slug}/large.jpg` ||
                  true
              )
            }
          />
        </Player>
        <Dialog.Row alignItems="flex-end" zIndex="2" padding="1rem 5%">
          <Dialog.Close
            onClick={handleClose}
            border="none"
            isClose="true"
            padding="0"
          />
        </Dialog.Row>
        <Dialog.Row
          justify="space-between"
          zIndex="2"
          banner="true"
          padding="0 5%"
        >
          <Dialog.Title large="true">{movie?.title}</Dialog.Title>
          <Dialog.Tools>
            <Dialog.Group direction="true">
              <Dialog.Button
                onClick={handleRedirectPlay}
                endIcon={<PlayArrowIcon />}
              >
                Play
              </Dialog.Button>
              <Dialog.ToolIcon type="play">
                <PlayArrowIcon />
              </Dialog.ToolIcon>
              <Dialog.ToolIcon onClick={() => setIsAdd(!isAdd)}>
                {isAdd ? <DeleteForeverIcon /> : <AddIcon />}
              </Dialog.ToolIcon>
              <Dialog.ToolIcon
                color="#07d255"
                active={isLike === 2}
                onClick={() => setIsLike(isLike !== 2 ? 2 : 0)}
              >
                <ThumbUpAltIcon />
              </Dialog.ToolIcon>
              <Dialog.ToolIcon
                color="#e00202"
                active={isLike === 1}
                onClick={() => setIsLike(isLike !== 1 ? 1 : 0)}
              >
                <ThumbDownAltIcon />
              </Dialog.ToolIcon>
            </Dialog.Group>
            <Dialog.Group>
              <Dialog.ToolIcon onClick={() => setMuted(!muted)}>
                {muted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </Dialog.ToolIcon>
            </Dialog.Group>
          </Dialog.Tools>
        </Dialog.Row>
        <Dialog.Gradient />
      </Dialog.Group>
      <Dialog.Group zIndex="2">
        <Dialog.Content>
          <Dialog.Info>
            <Dialog.Group>
              <Dialog.Row direction="true" alignItems="center" info="true">
                <Dialog.Text>2021</Dialog.Text>
                <Dialog.Tag>16+</Dialog.Tag>
                <Dialog.Text>5 Season</Dialog.Text>
                <Dialog.Tag small>HD</Dialog.Tag>
              </Dialog.Row>
              <Dialog.Row margin="1rem 0 0">
                <Dialog.Text title="true">
                  Sau khi cứu tên bắt nạt khỏi tay một Ác nhân, một học sinh
                  bình thường được trao siêu năng lực cho phép cậu tham gia học
                  viện đào tạo cho anh hùng.
                </Dialog.Text>
              </Dialog.Row>
            </Dialog.Group>
            <Dialog.Group>
              <Dialog.Row direction="true">
                <Dialog.Box>
                  <Dialog.TextTag>Actor:</Dialog.TextTag>
                  <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
                  <Dialog.Redirect to="/">Miyake Kenta2</Dialog.Redirect>
                  <Dialog.Redirect to="/">Miyake Kenta3</Dialog.Redirect>
                  <Dialog.Redirect to="/">Miyake Kenta4</Dialog.Redirect>
                </Dialog.Box>
              </Dialog.Row>
              <Dialog.Row direction="true">
                <Dialog.Box>
                  <Dialog.TextTag>Genre:</Dialog.TextTag>
                  <Dialog.Redirect to="/">Horror1</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror2</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror3</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror4</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror4</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror4</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror4</Dialog.Redirect>
                  <Dialog.Redirect to="/">Horror4</Dialog.Redirect>
                </Dialog.Box>
              </Dialog.Row>
              <Dialog.Row direction="true">
                <Dialog.Box>
                  <Dialog.TextTag>Actor:</Dialog.TextTag>
                  <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
                  <Dialog.Redirect to="/">Miyake Kenta2</Dialog.Redirect>
                  <Dialog.Redirect to="/">Miyake Kenta3</Dialog.Redirect>
                  <Dialog.Redirect to="/">Miyake Kenta4</Dialog.Redirect>
                </Dialog.Box>
              </Dialog.Row>
            </Dialog.Group>
          </Dialog.Info>
        </Dialog.Content>
      </Dialog.Group>

      {/* card horizontal */}
      <Dialog.Group>
        <DialogCardHorizontal>
          <Dialog.Title>Season 1</Dialog.Title>
          {dataSeedFake.map((val, ind) => (
            <DialogCardHorizontal.Grid
              index={ind}
              key={val.id}
              active={ind === 1}
              direction="true"
            >
              <DialogCardHorizontal.Box
                minWidth="180px"
                height="100px"
                position="relative"
              >
                <DialogCardHorizontal.Poster
                  // src={val.thumbnail}
                  src={`/images/${category}/${val.genre}/${val.slug}/small.jpg`}
                  alt={`Poster ${val.title}`}
                />
                <DialogCardHorizontal.Play />
              </DialogCardHorizontal.Box>
              <DialogCardHorizontal.Box width="100%">
                <DialogCardHorizontal.Row
                  direction="true"
                  justify="space-between"
                  alignItems="center"
                  margin="0 0 .5rem"
                >
                  <DialogCardHorizontal.SubTitle>
                    {val.title}
                  </DialogCardHorizontal.SubTitle>
                  <DialogCardHorizontal.Text>
                    {val.duration}
                  </DialogCardHorizontal.Text>
                </DialogCardHorizontal.Row>
                <DialogCardHorizontal.Description>
                  {val.description}
                </DialogCardHorizontal.Description>
              </DialogCardHorizontal.Box>
            </DialogCardHorizontal.Grid>
          ))}
        </DialogCardHorizontal>
      </Dialog.Group>

      {/* card vertial */}
      <Dialog.Group>
        <DialogCardVertical>
          <Dialog.Title>More than</Dialog.Title>
          <DialogCardVertical.Grid>
            {dataSeedFake.map(val => (
              <DialogCardVertical.Card key={val.id}>
                <DialogCardVertical.Group height="140px" position="relative">
                  <DialogCardVertical.Poster
                    src={`/images/${category}/${val.genre}/${val.slug}/small.jpg`}
                    alt={`Poster ${val.title}`}
                  />
                  <DialogCardVertical.Play />
                </DialogCardVertical.Group>
                <DialogCardVertical.Group padding="1rem">
                  <DialogCardVertical.Title>
                    {val.title}
                  </DialogCardVertical.Title>
                  <DialogCardVertical.Row margin="0.5rem 0">
                    <DialogCardVertical.Group
                      direction="true"
                      alignItems="center"
                    >
                      <Dialog.Tag margin="0 .5rem 0 0">16+</Dialog.Tag>
                      <Dialog.Text>2021</Dialog.Text>
                    </DialogCardVertical.Group>
                    <DialogCardVertical.Group direction="true">
                      <Dialog.ToolIcon padding="0.2rem">
                        <AddIcon />
                      </Dialog.ToolIcon>
                    </DialogCardVertical.Group>
                  </DialogCardVertical.Row>
                  <DialogCardVertical.Description>
                    {val.description}
                  </DialogCardVertical.Description>
                </DialogCardVertical.Group>
              </DialogCardVertical.Card>
            ))}
          </DialogCardVertical.Grid>
        </DialogCardVertical>
      </Dialog.Group>

      {/* about movie */}

      <Dialog.Group>
        <Dialog.Content padding="2rem 5%">
          <Dialog.Title> About {movie?.title}</Dialog.Title>
          <Dialog.Row direction="true" margin="0 0 .5rem">
            <Dialog.Box>
              <Dialog.TextTag>Director:</Dialog.TextTag>
              <Dialog.Redirect to="/">Shin won-ho Kenta1</Dialog.Redirect>
            </Dialog.Box>
          </Dialog.Row>
          <Dialog.Row direction="true" margin="0 0 .5rem">
            <Dialog.Box>
              <Dialog.TextTag>Cast:</Dialog.TextTag>
              <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta1</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta2</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta3</Dialog.Redirect>
              <Dialog.Redirect to="/">Miyake Kenta4</Dialog.Redirect>
            </Dialog.Box>
          </Dialog.Row>
          <Dialog.Row direction="true" margin="0 0 .5rem">
            <Dialog.Box>
              <Dialog.TextTag>Genres:</Dialog.TextTag>
              <Dialog.Redirect to="/">KOREAN</Dialog.Redirect>
              <Dialog.Redirect to="/">Dramma</Dialog.Redirect>
            </Dialog.Box>
          </Dialog.Row>
          <Dialog.Row direction="true" margin="0 0 .5rem">
            <Dialog.Box>
              <Dialog.TextTag>Maturity rating:</Dialog.TextTag>
              <Dialog.Tag margin="0 .5rem">16+</Dialog.Tag>
              <Dialog.Text>Recommended for ages 18 and up</Dialog.Text>
            </Dialog.Box>
          </Dialog.Row>
        </Dialog.Content>
      </Dialog.Group>
    </Dialog>
  )
}

export default BrowseDialogContainer
