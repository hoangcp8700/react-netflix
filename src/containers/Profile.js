import React from 'react'
import { Header, Profile } from 'components'

import { LOGO } from 'constants/index'
import * as ROUTES from 'constants/routes'

const ProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="netflix" src={LOGO} />
        </Header.Frame>
      </Header>

      <Profile>
        <Profile.Title>Who is watching?</Profile.Title>
        <Profile.List>
          <Profile.User onClick={() => setProfile(user)}>
            <Profile.Avatar src={user.image} />
            <Profile.Name>{user.name}</Profile.Name>
          </Profile.User>
          <Profile.User onClick={() => setProfile(user)}>
            <Profile.Avatar src={user.image} />
            <Profile.Name>{user.name}</Profile.Name>
          </Profile.User>
          <Profile.User onClick={() => setProfile(user)}>
            <Profile.Avatar src={user.image} />
            <Profile.Name>{user.name}</Profile.Name>
          </Profile.User>
          <Profile.User onClick={() => setProfile(user)}>
            <Profile.Avatar src={user.image} />
            <Profile.Name>{user.name}</Profile.Name>
          </Profile.User>
          <Profile.User onClick={() => setProfile(user)}>
            <Profile.Avatar src={user.image} />
            <Profile.Name>{user.name}</Profile.Name>
          </Profile.User>
        </Profile.List>
      </Profile>
    </>
  )
}

export default ProfileContainer
