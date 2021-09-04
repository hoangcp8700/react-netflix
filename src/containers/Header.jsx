import React from 'react'
import { Header } from 'components'
import * as ROUTES from 'constants/routes'
import categoryLists from 'app/data/categories'

import { LOGO } from 'constants/index'
import { useAuth } from 'hooks/useAuth'
import { useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { REMOVE_USER } from 'reducers/authSlice'

// icons
// import ExitToAppIcon from '@material-ui/icons/ExitToApp'
// import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'

const HeaderContainer = ({ children, ...props }) => {
  const dispatch = useDispatch()
  const [isShowHamburger, setIsShowHamburger] = React.useState(false)
  const [search, setSearch] = React.useState('')

  const { user, logOut, isLoading } = useAuth()
  const location = useLocation()
  const history = useHistory()

  const logOutHandle = async () => {
    try {
      await logOut()
      dispatch(REMOVE_USER({}))
      history.push(ROUTES.HOME)
    } catch (error) {
      console.log('err', error)
    }
  }
  const handleDisable = () => {
    return location.pathname === ROUTES.LOGIN
  }

  const handleHamburger = () => {
    setIsShowHamburger(!isShowHamburger)
  }
  return !user?.id ? (
    <Header {...props}>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} alt="netflix" src={LOGO} />
        </Header.Group>
        <Header.AuthLink to={ROUTES.LOGIN} disabled={handleDisable()}>
          Login
        </Header.AuthLink>
      </Header.Frame>
      {children}
    </Header>
  ) : (
    <Header {...props}>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.BROWSE} alt="netflix" src={LOGO} />
          <Header.Hamburger
            disableRipple
            endIcon={
              isShowHamburger ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />
            }
            onMouseEnter={() => setIsShowHamburger(true)}
            onMouseLeave={() => setIsShowHamburger(false)}
            onClick={handleHamburger}
            className={isShowHamburger ? 'active' : ''}
          >
            Browse
          </Header.Hamburger>
          <Header.ListMenu
            onMouseEnter={() => setIsShowHamburger(true)}
            onMouseLeave={() => setIsShowHamburger(false)}
          >
            {categoryLists.map(category => (
              <Header.Tab
                key={category.id}
                to={category.url}
                active={location.pathname === category.url}
                onClick={() => setIsShowHamburger(false)}
              >
                {category.name}
              </Header.Tab>
            ))}
          </Header.ListMenu>
        </Header.Group>

        <Header.Group>
          <Header.Tool>
            <Header.Search search={search} setSearch={setSearch} />
          </Header.Tool>

          <Header.InfoUser>
            <Header.Avatar src={user.image} alt={user.name} />
            <Header.Dropdown>
              <Header.Group>
                <Header.Avatar src={user.image} alt={user.name} />
                <Header.TextLink>{user.name}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.Avatar src={user.image} alt={user.name} />
                <Header.TextLink>{user.name}</Header.TextLink>
              </Header.Group>
              <Header.Group>
                <Header.TextLink>Manage Profiles </Header.TextLink>
              </Header.Group>
              <Header.Break>
                <Header.Group>
                  <Header.TextLink bold>Account</Header.TextLink>
                </Header.Group>
                <Header.Group onClick={logOutHandle}>
                  <Header.TextLink bold>Sign out of Netflix</Header.TextLink>
                </Header.Group>
              </Header.Break>
            </Header.Dropdown>
          </Header.InfoUser>
        </Header.Group>
      </Header.Frame>
      {children}
    </Header>
  )
}

export default HeaderContainer
