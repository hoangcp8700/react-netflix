import React from 'react'
import LazyLoad from 'react-lazyload'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import {
  Container,
  Row,
  Box,
  Description,
  Text,
  Title,
  SubTitle,
  Grid,
  Poster,
  Play,
} from './styles/DialogCardHorizontal'

export default function DialogCardHorizontal({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}

DialogCardHorizontal.Poster = restProps => {
  const imgDefault = 'https://media.comicbook.com/files/img/default-movie.png'
  return (
    <LazyLoad height="100px" classNamePrefix="Image__Lazy__Container" overflow>
      <Poster
        {...restProps}
        onError={e => {
          e.target.onerror = null
          e.target.src = imgDefault
        }}
      />
    </LazyLoad>
  )
}
DialogCardHorizontal.Play = restProps => {
  return (
    <Play {...restProps}>
      <PlayArrowIcon />
    </Play>
  )
}
DialogCardHorizontal.Box = ({ children, ...restProps }) => {
  return <Box {...restProps}>{children}</Box>
}
DialogCardHorizontal.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
DialogCardHorizontal.Description = ({ children, ...restProps }) => {
  return <Description {...restProps}>{children}</Description>
}
DialogCardHorizontal.Text = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
DialogCardHorizontal.SubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
DialogCardHorizontal.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
DialogCardHorizontal.Grid = ({ children, ...restProps }) => {
  return <Grid {...restProps}>{children}</Grid>
}
