import React from 'react'
import {
  Container,
  Tool,
  Body,
  Footer,
  FooterContainer,
  Header,
  HeaderContainer,
  Title,
  Text,
  Group,
  Row,
  SubTitle,
  Slider,
} from './styles/Watch'

export default function Watch({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}
Watch.Body = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    <Body {...restProps} ref={ref}>
      {children}
    </Body>
  )
})
Watch.Footer = ({ children, ...restProps }) => {
  return <Footer {...restProps}>{children}</Footer>
}
Watch.FooterContainer = ({ children, ...restProps }) => {
  return <FooterContainer {...restProps}>{children}</FooterContainer>
}
Watch.Tool = ({ icon, ...restProps }) => {
  return <Tool {...restProps}>{icon}</Tool>
}
Watch.Header = ({ children, ...restProps }) => {
  return <Header {...restProps}>{children}</Header>
}
Watch.HeaderContainer = ({ children, ...restProps }) => {
  return <HeaderContainer {...restProps}>{children}</HeaderContainer>
}
Watch.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Watch.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
Watch.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Watch.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}
Watch.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
Watch.Slider = ({ children, ...restProps }) => {
  return <Slider {...restProps}>{children}</Slider>
}
