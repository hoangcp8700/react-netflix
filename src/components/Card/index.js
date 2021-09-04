import useMovie from 'hooks/useMovie'
import React from 'react'
import Carousel from 'react-multi-carousel'
import { useDispatch } from 'react-redux'
import LazyLoad from 'react-lazyload'
// icons
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import {
  Container,
  Group,
  Poster,
  Item,
  ButtonArrow,
  Title,
} from './styles/Card'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1100 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1100, min: 420 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 1,
  },
}
const CustomArrow = ({ onClick, position, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest
  return (
    <ButtonArrow onClick={() => onClick()} position={position} {...rest}>
      {position === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </ButtonArrow>
  )
}

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}
Card.Slide = ({ children, ...restProps }) => {
  const carouselRef = React.useRef()
  return (
    <Carousel
      {...restProps}
      ref={carouselRef}
      responsive={responsive}
      // removeArrowOnDeviceType={['mobile']}
      swipeable={false}
      draggable={false}
      // infinite
      customLeftArrow={<CustomArrow position="left" />}
      customRightArrow={<CustomArrow position="right" />}
      itemClass="slide-item-movie"
      sliderClass="slide-list-movie"
      containerClass="slide-container"
      style={{ padding: '0 5%', position: 'relative' }}
    >
      {children}
    </Carousel>
  )
}
Card.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}

Card.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Card.Poster = restProps => {
  return (
    <LazyLoad height="200">
      <Poster {...restProps} />
    </LazyLoad>
  )
}

Card.Item = ({ children, item, ...restProps }) => {
  const { handleAddMovie, showDialog, handleShowDialog } = useMovie()
  const itemRef = React.useRef()

  const handleShowContent = type => {
    const widthCurrent = itemRef.current.parentNode.clientWidth

    type === 'show'
      ? itemRef.current.parentNode.classList.add('active')
      : itemRef.current.parentNode.classList.remove('active')
  }
  return (
    <Item
      ref={itemRef}
      {...restProps}
      onClick={() => {
        handleShowDialog(!showDialog)
        handleAddMovie(item)
      }}
      onMouseEnter={() => handleShowContent('show')}
      onMouseLeave={() => handleShowContent('hide')}
    >
      {children}
    </Item>
  )
}
