import React from 'react'
import {
  Container,
  Container1,
  Content,
  Title,
  Description,
  Button,
  ButtonInfo,
  Tool,
  Tag,
  Category,
  CategoryTitle,
  Select,
} from './styles/Navbar'

export default function Navbar({ not, children, ...restProps }) {
  return !not ? (
    <Container {...restProps}> {children} </Container>
  ) : (
    <Container1 {...restProps}> {children} </Container1>
  )
}
Navbar.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>
}
Navbar.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Navbar.Description = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>
}
Navbar.Tools = ({ children, ...restProps }) => {
  return <Tool {...restProps}>{children}</Tool>
}
Navbar.Play = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>
}
Navbar.Info = ({ children, ...restProps }) => {
  return <ButtonInfo {...restProps}>{children}</ButtonInfo>
}
Navbar.Tag = ({ children, ...restProps }) => {
  return <Tag {...restProps}>{children}</Tag>
}
Navbar.Category = ({ children, ...restProps }) => {
  return <Category {...restProps}>{children}</Category>
}
Navbar.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Navbar.CategoryTitle = ({ children, ...restProps }) => {
  return <CategoryTitle {...restProps}>{children}</CategoryTitle>
}
Navbar.Genre = ({ children, ...restProps }) => {
  return <Select {...restProps}>{children}</Select>
}
