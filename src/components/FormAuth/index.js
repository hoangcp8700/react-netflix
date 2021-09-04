import React from 'react'
import Collapse from '@material-ui/core/Collapse'
import { Controller } from 'react-hook-form'
import {
  Button,
  Input,
  Container,
  Form,
  Title,
  Row,
  Text,
  Box,
  Redirect,
  ButtonLink,
  Break,
  Span,
  Checkbox,
  Error,
} from './styles/FormAuth'
// _rfc
export default function FormAuth({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
FormAuth.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}

FormAuth.Form = ({ children, ...restProps }) => {
  return <Form {...restProps}>{children}</Form>
}
FormAuth.Controller = restProps => {
  return <Controller {...restProps} />
}
FormAuth.Input = React.forwardRef((restProps, ref) => {
  return <Input {...restProps} inputRef={ref} />
})
FormAuth.RememberMe = React.forwardRef((restProps, ref) => {
  return <Checkbox {...restProps} inputRef={ref} />
})
FormAuth.Submit = ({ children, ...restProps }) => {
  return <Button {...restProps}>{children}</Button>
}

FormAuth.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
FormAuth.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
FormAuth.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
FormAuth.Span = ({ children, ...restProps }) => {
  return <Span {...restProps}>{children}</Span>
}
FormAuth.Redirect = ({ children, ...restProps }) => {
  return <Redirect {...restProps}>{children}</Redirect>
}
FormAuth.ButtonLink = ({ to, decoration, children, ...restProps }) => {
  return (
    <ButtonLink {...restProps}>
      <Redirect to={to} decoration={decoration}>
        {children}
      </Redirect>
    </ButtonLink>
  )
}
FormAuth.Break = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>
}
FormAuth.Transition = ({ children, ...restProps }) => {
  return <Collapse {...restProps}>{children}</Collapse>
}
FormAuth.Error = ({ children, ...restProps }) => {
  return <Error {...restProps}>{children}</Error>
}
