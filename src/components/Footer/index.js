import React from 'react'
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
  Box,
} from './styles/Footer'

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Footer.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}
Footer.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
Footer.Column = ({ children, ...restProps }) => {
  return <Column {...restProps}>{children}</Column>
}
Footer.Link = ({ children, ...restProps }) => {
  return <Link {...restProps}>{children}</Link>
}
Footer.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Footer.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
Footer.Break = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>
}
