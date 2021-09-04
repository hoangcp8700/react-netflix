import React from 'react'

// icons
import CancelIcon from '@material-ui/icons/Cancel'

import {
  Container,
  Content,
  Poster,
  Tools,
  Tool,
  Text,
  Title,
  Group,
  Row,
  Tag,
  Button,
  Gradient,
  Info,
  TextTag,
  Box,
  Redirect,
} from './styles/Dialog'

export default function Dialog({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Dialog.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>
}
Dialog.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}
Dialog.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
Dialog.Poster = restProps => {
  return <Poster {...restProps} />
}
Dialog.Content = ({ children, ...restProps }) => {
  return <Content {...restProps}>{children}</Content>
}
Dialog.Tools = ({ children, ...restProps }) => {
  return <Tools {...restProps}>{children}</Tools>
}
Dialog.Tag = ({ children, ...restProps }) => {
  return <Tag {...restProps}>{children}</Tag>
}
Dialog.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
Dialog.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Dialog.Gradient = restProps => {
  return <Gradient {...restProps} />
}
Dialog.Close = restProps => {
  return (
    <Tool {...restProps}>
      <CancelIcon />
    </Tool>
  )
}
Dialog.Info = ({ children, ...restProps }) => {
  return <Info {...restProps}>{children}</Info>
}
Dialog.TextTag = ({ children, ...restProps }) => {
  return <TextTag {...restProps}>{children}</TextTag>
}
Dialog.Redirect = ({ children, ...restProps }) => {
  return <Redirect {...restProps}>{children}</Redirect>
}
Dialog.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}
Dialog.ToolIcon = ({ children, ...restProps }) => {
  return <Tool {...restProps}>{children}</Tool>
}
Dialog.Button = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>
}
