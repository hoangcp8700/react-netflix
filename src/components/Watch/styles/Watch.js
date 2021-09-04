import styled, { css } from 'styled-components/macro'

export const Tool = styled.div`
  cursor: pointer;
  color: var(--color-text-gray);
  transition: 0.2s;
  position: relative;
  display: flex;
  transform: ${({ reverse }) => reverse && 'scaleX(-1)'};
  ${({ value }) =>
    value &&
    css`
      &::before {
        content: '10';
        font-size: 8px;
        position: absolute;
        top: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-weight: 700;
        transform: ${({ reverse }) => reverse && `scale(-1.2, 1.2)`};
      }
    `}
  svg {
    font-size: var(--fontSize-icon-pc);
    position: relative;

    @media (max-width: 420px) {
      font-size: var(--fontSize-icon-mobile);
    }
  }
  &:hover {
    color: #fff;
    transform: ${({ reverse }) =>
      reverse ? `scale(-1.2, 1.2)` : `scale(1.2)`};
  }
`

export const Slider = styled.input`
  width: 100%;
  margin: 0 0.5rem;
`
export const SubTitle = styled.h4`
  color: var(--color-text-gray);
  cursor: context-menu;
  user-select: none;
`
export const Title = styled(SubTitle)`
  font-weight: 700;
  color: #fff;
`
export const Text = styled.p`
  color: #fff;
  @media (max-width: 420px) {
    font-size: var(--fontSize-text-mobile);
  }
`
export const Group = styled.div`
  display: ${({ display }) => display && `${display}`};
  ${({ display }) =>
    display === 'flex' &&
    css`
      display: flex;
      align-items: center;
    `}
  ${Tool} {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }

  ${({ ellipsis }) =>
    ellipsis &&
    css`
      ${Title} {
        &:after {
          content: ' ';
          margin-right: 0.2rem;
        }
      }
      margin-left: 0.5rem;
      @media (max-width: 900px) {
        flex-direction: column;
        align-items: flex-start;
      }
      @media (max-width: 600px) {
        display: none;
      }
    `}
`
export const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  justify-content: ${({ justify }) => justify && `${justify}`};
  margin: ${({ margin }) => margin && `${margin}`};
`

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  transition: 0.2s;
  @media (max-width: 420px) {
    padding: 1rem;
  }
`

export const Header = styled(Footer)`
  bottom: unset;
`
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 420px) {
    padding: 1rem;
  }

  ${Group} {
    ${({ display }) =>
      display
        ? css`
            display: none;
            &:first-child {
              display: block;
            }
          `
        : css`
            display: block;
            &:first-child {
              display: none;
            }
          `}
  }
`
export const Body = styled.div``
export const Container = styled.div`
  position: relative;
  background: #000;
  width: 100%;
  height: 100vh;
`
