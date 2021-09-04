import styled, { css } from 'styled-components/macro'

import Dialog from '@material-ui/core/Dialog'
import ButtonField from 'components/ButtonField'
import { Link } from 'react-router-dom'

export const Container = styled(Dialog)`
  .MuiDialog-paper {
    border-radius: 0.5rem;
    background: var(--color-black-hover);
  }
`
export const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: linear-gradient(to top, #181818 3%, transparent 60%);
`
export const Title = styled.p`
  font-size: ${({ large }) =>
    large ? `var(--fontSize-title-mobile)` : `var(--fontSize-subTitle-pc)`};
  color: #fff;
  text-transform: capitalize;
  font-weight: 700;
  cursor: context-menu;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: ${({ large }) =>
      large
        ? `var(--fontSize-title-mobile)`
        : `var(--fontSize-description-pc)`};
  }
`

export const Tag = styled.span`
  font-size: 14px;
  padding: 0.2rem 0.3rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  color: #fff;
  cursor: context-menu;
  margin: ${({ margin }) => margin && `${margin}`};

  ${({ small }) =>
    small &&
    css`
      padding: 0 0.5rem;
      color: gray;
    `}
`
export const Text = styled.span`
  color: #fff;
  cursor: context-menu;
  user-select: none;

  ${({ title }) =>
    title &&
    css`
      font-size: var(--fontSize-text-pc);
    `}
  @media (max-width: 600px) {
    font-size: var(--fontSize-text-mobile);
  }
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #000 url(${({ src }) => src});
  cursor: pointer;
`

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  margin: ${({ zIndex }) => zIndex && `${zIndex}`};

  ${({ src }) =>
    src &&
    css`
      position: relative;
      background: #000 url(${src});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
    `}
  ${({ type }) =>
    type === 'banner' &&
    css`
      position: relative;
      justify-content: space-between;
    `}
`
export const Box = styled.div``
export const TextTag = styled.span`
  color: #777;
  font-size: calc(var(--fontSize-text-pc) - 2px);
  @media (max-width: 600px) {
    font-size: var(--fontSize-text-mobile);
  }
`
export const Redirect = styled(Link)`
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  font-size: calc(var(--fontSize-text-pc) - 2px);

  &:not(:last-child) {
    &:after {
      content: ',';
    }
  }
  &:before {
    content: ' ';
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 600px) {
    font-size: var(--fontSize-text-mobile);
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 2em;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1em;
  }
`
export const Button = styled(ButtonField)`
  margin-right: 0.5rem !important;
  background-color: #fff !important;
  color: #000 !important;
  @media (max-width: 600px) {
    font-size: 12px !important;
    font-weight: 700 !important;
  }
  @media (max-width: 375px) {
    display: none !important;
  }
`

export const Tool = styled.span`
  cursor: pointer;
  display: flex;
  svg {
    padding: ${({ padding }) => (padding ? `${padding}` : ' 0.5rem')};
    border: ${({ border }) => (border ? `${border}` : '2px solid gray')};
    font-size: 16px;
    color: #fff;
    border-radius: 50%;
    transition: 0.2s;
    background-color: ${({ active, color }) =>
      active ? color : 'transparent'};

    &:hover {
      transform: scale(1.2);
      border-color: #fff;
    }
    @media (max-width: 600px) {
      font-size: 14px;
      padding: 0.4rem;
    }
    ${({ isClose }) =>
      isClose &&
      css`
        font-size: 22px;
        @media (max-width: 600px) {
          font-size: 18px;
        }
      `}
  }
  ${({ type }) =>
    type === 'play' &&
    css`
      display: none;
      @media (max-width: 375px) {
        display: block;
      }
    `}
`
export const Tools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${Group} {
    display: flex;
    align-items: center;
    &:first-child {
      > ${Tool} {
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    }
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'inherit')};
  align-items: ${({ alignItems }) =>
    alignItems ? `${alignItems}` : 'inherit'};
  z-index: ${({ zIndex }) => (zIndex ? `${zIndex}` : '0')};
  padding: ${({ padding }) => (padding ? `${padding}` : '0')};
  margin: ${({ margin }) => (margin ? `${margin}` : '0')};

  ${({ ellipsis }) =>
    ellipsis &&
    css`
      position: relative;
      height: 1.5em; /* exactly three lines */
      &:after {
        content: '';
        text-align: right;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20%;
        height: 1.5em;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0),
          rgba(16, 16, 16) 50%
        );
      }
    `}
  ${({ info }) =>
    info &&
    css`
      flex-flow: wrap;
      ${Text}, ${Tag} {
        &:not(:last-child) {
          margin-right: 0.5rem;
        }
      }
    `}

  ${({ banner }) =>
    banner &&
    css`
      margin: 15rem 0 2rem;
      transition: 0.2s;
      @media (max-width: 600px) {
        margin: 10rem 0 2rem;
      }
    `}
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-black-hover);
  padding: ${({ padding }) => (padding ? `${padding}` : `0 5%`)};
`
