import React from 'react'
import { Container, List, Item, Name, Title, Avatar } from './styles/Profile'

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Profile.List = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>
}
Profile.User = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>
}
Profile.Name = ({ children, ...restProps }) => {
  return <Name {...restProps}>{children}</Name>
}
Profile.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Profile.Avatar = ({ src, children, ...restProps }) => {
  return (
    <Avatar {...restProps} src={src || '/images/misc/loading.gif'}>
      {children}
    </Avatar>
  )
}
