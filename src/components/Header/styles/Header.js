import styled from 'styled-components/macro'
import ButtonField from 'components/ButtonField'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${'' /* margin: 0 5%; */}
  ${'' /* padding: 1rem 0; */}
  padding: 1rem 5%;
  position: sticky;
  top: 0;
  z-index: 2;
  height: 5vh;
  transition: 0.5s;

  background: ${({ active }) => (active ? 'rgba(0,0,0,0.85)' : 'transparent')};
`

export const Logo = styled.img`
  width: auto;
  height: 1.5rem;
  transition: 0.2s;
  @media (min-width: 600px) {
    width: 5.75rem;
    height: 2rem;
  }
  @media (min-width: 1100px) {
    width: 7.75rem;
    height: 2rem;
  }
  @media (min-width: 1400px) {
    width: 9.4375rem;
    height: 2.8125rem;
  }
`

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: #000
    url(${({ src }) =>
      src ? `/images/misc/${src}` : `/images/misc/home-bg.jpg`})
    top left / cover no-repeat;
`

export const NoBackground = styled(Background)`
  background: ${({ active }) => (active ? '#000' : 'transparent')};
`
export const Group = styled.div`
  display: flex;
  align-items: center;
  transition: 0.2s;
  cursor: pointer;
  position: relative;
`
export const TextLink = styled.p`
  color: rgba(255, 255, 255);
  font-size: 12px;
  font-weight: ${({ bold }) => (bold ? 900 : 700)};
`
export const Avatar = styled.div`
  background: url(${({ src }) => src});
  background-size: contain;
  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  cursor: pointer;
`
export const Dropdown = styled.div`
  display: none;
  position: absolute;
  width: 150px;
  background-color: rgba(0, 0, 0, 0.7);
  top: 32px;
  right: -25px;
  transition: 0.2s;
  padding: 0.5rem;

  ${Group} {
    padding: 0.5rem 0;

    ${TextLink} {
      &:hover {
        color: rgba(255, 255, 255);
        text-decoration: underline;
      }
    }
  }
  ${Avatar} {
    margin-right: 0.5rem;
  }
  @media (max-width: 600px) {
    right: 0;
  }
`
export const Tool = styled.div`
  color: #fff;
  margin-right: 1rem;
`

export const AuthLink = styled(ButtonField)`
  a {
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 16px;
  }
`
export const InfoUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`

export const Text = styled.p`
  color: #fff;
  margin-right: 0.5rem;
  cursor: context-menu;
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    display: none;
  }
`
export const Break = styled.div`
  width: 100%;
  border-top: 3px solid #373737;
  padding-top: 0.5rem;
  ${Group} {
    padding: 0.2rem 0;
  }
`
export const List = styled.ul`
  display: flex;
  list-style-type: none;
  flex-flow: wrap;
  margin-left: 1rem;

  @media (max-width: 1100px) {
    display: none;
  }
`
export const Tab = styled.li`
  margin-left: 1rem;
  padding: 0.5rem 0;
  a {
    display: block;
    font-size: 16px;
    color: ${({ active }) => (active ? '#fff' : 'var(--color-text)')};
    font-weight: 700;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    @media (max-width: 600px) {
      font-size: calc(var(--fontSize-text-mobile) - 2px);
    }
  }
`
export const Hamburger = styled(ButtonField)`
  background-color: transparent !important;
  position: relative !important;
  font-weight: 700 !important;
  display: none !important;
  font-size: calc(var(--fontSize-text-pc) - 2px) !important;
  @media (max-width: 1100px) {
    display: flex !important;
    &.active {
      ~ ${List} {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 35px;
        left: 30px;
        width: 100%;
        max-width: 300px;
        margin-left: 0;
        background-color: rgba(0, 0, 0, 0.8);
        ${Tab} {
          margin-left: 0;
          text-align: center;
          padding: 1rem 0;
        }
      }
    }
  }
  @media (max-width: 600px) {
    font-size: calc(var(--fontSize-text-mobile) - 2px) !important;
    &.active {
      ~ ${List} {
        top: 25px;
      }
    }
  }
`
export const SearchInput = styled.input`
  font-size: 14px;
  color: #fff;
  border: none;
  outline: none;
  background: transparent;
`

export const Search = styled.div`
  display: flex;
  position: absolute;
  bottom: ${({ active }) => (active ? '-3px' : '3px')};
  right: 40px;
  align-items: center;
  border: ${({ active }) => (active ? '1px solid #fff' : 'none')};
  border-radius: 0.3rem;
  padding: ${({ active }) => (active ? '.5rem 0 .5rem .5rem' : 0)};
  background-color: ${({ active }) =>
    active ? 'rgba(0,0,0,0.8)' : 'transparent'};
  ${SearchInput} {
    transition: width 0.5s;
    width: ${({ active }) => (active ? '200px' : 0)};
    opacity: ${({ active }) => (active ? 1 : 0)};
    margin-right: ${({ active }) => (active ? '.5rem' : 0)};
    padding-left: ${({ active }) => (active ? '1rem' : 0)};
    @media (max-width: 600px) {
      width: ${({ active }) => (active ? '100px' : 0)};
    }
  }
`
