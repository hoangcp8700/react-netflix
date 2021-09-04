import React from 'react'
import LazyLoad from 'react-lazyload'
import ShowMoreText from 'react-show-more-text'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import {
  Container,
  Card,
  Poster,
  Group,
  Row,
  Title,
  Description,
  Grid,
  Play,
} from './styles/DialogCardVertical'

export default function DialogCardVertical({ children, ...restProps }) {
  return <Container {...restProps}> {children} </Container>
}

DialogCardVertical.Poster = restProps => {
  const imgDefault = 'https://media.comicbook.com/files/img/default-movie.png'
  return (
    <LazyLoad height="140px" classNamePrefix="Image__Lazy__Container" overflow>
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

DialogCardVertical.Card = ({ children, ...restProps }) => {
  return <Card {...restProps}>{children}</Card>
}

DialogCardVertical.Row = ({ children, ...restProps }) => {
  return <Row {...restProps}>{children}</Row>
}
DialogCardVertical.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}
DialogCardVertical.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
DialogCardVertical.Description = ({ children, ...restProps }) => {
  const executeOnClick = isExpanded => {
    console.log(isExpanded)
  }
  return (
    <ShowMoreText
      lines={4}
      more="More"
      less="Less"
      className="Text__Show__Less"
      anchorClass="Action__Show__Less"
      onClick={executeOnClick}
      // expanded
      // width={280}
      truncatedEndingComponent="... "
    >
      {/* <Description {...restProps}>{children}</Description> */}
      {children}
    </ShowMoreText>
  )
}
DialogCardVertical.Grid = ({ children, ...restProps }) => {
  return <Grid {...restProps}>{children}</Grid>
}
DialogCardVertical.Play = restProps => {
  return (
    <Play {...restProps}>
      <PlayArrowIcon />
    </Play>
  )
}
