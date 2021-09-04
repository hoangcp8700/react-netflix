import React from 'react'
import { Container, Item, Box } from './styles/Spinner'

const Spinner = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>
}
Spinner.Box = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}
Spinner.Item = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>
}
export default function index() {
  return (
    <Spinner>
      <Spinner.Box>
        <Spinner.Item />
        <Spinner.Item />
        <Spinner.Item />
        <Spinner.Item />
      </Spinner.Box>
    </Spinner>
  )
}
