import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import {
  Container,
  Background,
  NoBackground,
  Logo,
  AuthLink,
  InfoUser,
  Text,
  Avatar,
  Dropdown,
  Group,
  TextLink,
  Break,
  Tool,
  List,
  Tab,
  Hamburger,
  Search,
  SearchInput,
} from './styles/Header'

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <NoBackground {...restProps}>{children}</NoBackground>
  )
}
Header.Hamburger = ({ children, ...restProps }) => {
  return <Hamburger {...restProps}>{children}</Hamburger>
}
Header.ListMenu = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>
}
Header.Tab = ({ to, active, children, ...restProps }) => {
  return (
    <Tab {...restProps}>
      <Link to={to}>{children}</Link>
    </Tab>
  )
}
Header.Frame = ({ children, ...restProps }) => {
  const [scrolled, setScrolled] = React.useState(false)
  const headerRef = React.useRef()
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setScrolled(true)
        let back = false
        if (
          window.pageYOffset >=
          headerRef.current.parentNode.clientHeight -
            headerRef.current.clientHeight
        ) {
          back = true
          headerRef.current.style.position = 'fixed'
          headerRef.current.style.width = '90%'
          headerRef.current.parentNode.style.marginBottom = `${headerRef.current.clientHeight}px`
        }
        if (
          back &&
          window.pageYOffset <= headerRef.current.parentNode.clientHeight
        ) {
          headerRef.current.style.position = 'sticky'
          headerRef.current.style.width = 'auto'
          headerRef.current.parentNode.style.marginBottom = 0
        }
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container {...restProps} active={scrolled} ref={headerRef}>
      {children}
    </Container>
  )
}

Header.AuthLink = ({ to, children, ...restProps }) => {
  return (
    <AuthLink {...restProps}>
      <Link to={to}>{children}</Link>
    </AuthLink>
  )
}
Header.Dropdown = ({ children, ...restProps }) => {
  return <Dropdown {...restProps}>{children}</Dropdown>
}
Header.Group = ({ children, ...restProps }) => {
  return <Group {...restProps}>{children}</Group>
}
Header.Tool = ({ children, ...restProps }) => {
  return <Tool {...restProps}>{children}</Tool>
}
Header.TextLink = ({ children, ...restProps }) => {
  return <TextLink {...restProps}>{children}</TextLink>
}

Header.InfoUser = ({ children, ...restProps }) => {
  return <InfoUser {...restProps}>{children}</InfoUser>
}
Header.Name = ({ children, ...restProps }) => {
  return <Text {...restProps}>{children}</Text>
}
Header.Break = ({ children, ...restProps }) => {
  return <Break {...restProps}>{children}</Break>
}
Header.Avatar = ({ children, src, ...restProps }) => {
  return (
    <Avatar {...restProps} src={src || '/images/misc/loading.gif'}>
      {children}
    </Avatar>
  )
}

Header.Logo = ({ to, children, ...restProps }) => {
  return (
    <Link to={to}>
      <Logo {...restProps}>{children}</Logo>
    </Link>
  )
}
Header.Search = ({ search, setSearch, ...restProps }) => {
  const [searchActive, setSearchActive] = React.useState(false)
  return (
    <Search {...restProps} active={searchActive}>
      <SearchIcon onClick={() => setSearchActive(!searchActive)} />
      <SearchInput
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        placeHolder="Search films and series..."
      />
    </Search>
  )
}
