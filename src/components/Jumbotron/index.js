import React from 'react'
import {
  Item,
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
  Box,
} from './styles/Jumbotron'
// _rfc
export default function Jumbotron({ children, direction, ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Container = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}

Jumbotron.Image = ({ ...restProps }) => {
  return <Image {...restProps} />
}

Jumbotron.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}
