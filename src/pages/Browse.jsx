import React from 'react'
// import { Link } from 'react-router-dom'
import HeaderContainer from 'containers/Header'
import FooterContainer from 'containers/Footer'
import BrowseContainer from 'containers/Browse'
import BrowseDialogContainer from 'containers/BrowseDialog'

import { Navbar, LoadingUser } from 'components'
import MenuItem from '@material-ui/core/MenuItem'

import SelectUserProfile from 'containers/Profile'
import useFireStore from 'hooks/useFireStore'
import _ from 'lodash'

// icons
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import InfoIcon from '@material-ui/icons/Info'
import { useAuth } from 'hooks/useAuth'

import 'react-multi-carousel/lib/styles.css'
import 'components/Card/styles/carousel.css'
import { useSelector } from 'react-redux'

// import { useRouteMatch } from 'react-router-dom'
const lists = [
  { value: 'romantic', label: 'Romantic' },
  { value: 'teen', label: 'Teen' },
  { value: 'horror', label: 'Horror' },
  { value: 'attack', label: 'Attack' },
]
const Browse = () => {
  const [isLoading, setIsLoading] = React.useState(true)
  const [profile, setProfile] = React.useState({})
  const [category, setCategory] = React.useState('series')
  const [genre, setGenre] = React.useState('')

  // const [slides, setSlides] = React.useState({})

  const { user } = useAuth()
  const list = useFireStore(category)
  const slides = _.groupBy(list?.data, value => {
    return value.genre
  })

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [profile.id])

  const handleGenre = e => {
    setGenre(e.target.value)
  }
  return profile?.id ? (
    isLoading ? (
      <LoadingUser src={profile.image} />
    ) : (
      <>
        <HeaderContainer src="joker1.jpg">
          <Navbar not>
            <Navbar.Category>
              <Navbar.CategoryTitle>TV SHOW</Navbar.CategoryTitle>
              <Navbar.Genre
                id="genre__select"
                label="Genre"
                select
                onChange={handleGenre}
                value={genre}
              >
                {lists.map(value => (
                  <MenuItem key={value.value} value={value.value}>
                    {value.label}
                  </MenuItem>
                ))}
              </Navbar.Genre>
            </Navbar.Category>
            <Navbar.Content>
              <Navbar.Title>Watch Movie Joker</Navbar.Title>
              <Navbar.Description>
                This is done for accessibility purposes, however, it might
                create issues. In the event the users need to interact with
                another part of the page, e.g. with a chatbot window, you can
                disable the behavior:
              </Navbar.Description>
              <Navbar.Tools>
                <Navbar.Play startIcon={<PlayArrowIcon />}>Play</Navbar.Play>
                <Navbar.Info startIcon={<InfoIcon />}>Info </Navbar.Info>
              </Navbar.Tools>
              <Navbar.Tag>18+</Navbar.Tag>
            </Navbar.Content>
          </Navbar>
        </HeaderContainer>
        <BrowseContainer slides={slides} category={category} />
        <BrowseDialogContainer slides={slides} category={category} />

        <FooterContainer />
      </>
    )
  ) : (
    <SelectUserProfile setProfile={setProfile} user={user} />
  )
}

export default Browse
