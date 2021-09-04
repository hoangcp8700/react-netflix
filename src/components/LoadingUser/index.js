import React from 'react'

import { Spinner, LockBody, ReleaseBody, Avatar } from './styles/LoadingUser'

export default function Profile({ src, ...restProps }) {
  return (
    <Spinner {...restProps}>
      <LockBody />
      <Avatar src={src} />
    </Spinner>
  )
}

Profile.ReleaseBody = () => {
  return <ReleaseBody />
}
