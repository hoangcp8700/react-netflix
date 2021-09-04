import ButtonField from 'components/ButtonField'
import styled, { css } from 'styled-components/macro'

export const Title = styled.p`
  font-size: var(--fontSize-text-pc);
  color: var(--color-text);
  margin-left: 5%;
  text-transform: capitalize;
  font-weight: 700;
  cursor: context-menu;
  @media (max-width: 600px) {
    font-size: calc(var(--fontSize-text-mobile) + 2px);
  }
`

export const Tag = styled.span`
  font-size: 14px;
  padding: 0.2rem 0.3rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  color: #fff;
  ${({ small }) =>
    small &&
    css`
      padding: 0 0.5rem;
      color: gray;
    `}
`
export const Text = styled.span`
  color: #fff;
  white-space: nowrap;
  cursor: context-menu;
  user-select: none;
  ${({ not }) =>
    !not &&
    css`
      &:not(:first-child) {
        &:before {
          content: '•';
          color: gray;
          font-size: 22px;
        }
      }
    `}
`
export const Description = styled.p``
export const SubTitle = styled.p``
export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: #000;
  cursor: pointer;
`

export const Group = styled.div``

export const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : 'column')};
  justify-content: ${({ justify }) => (justify ? `${justify}` : 'unset')};

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
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  display: none;
  width: 100%;
  overflow: hidden;

  > ${Row} {
    align-items: center;
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;
    white-space: nowrap;

    > span {
      &:not(:last-child) {
        margin-right: 0.3rem;
      }
    }
  }
`
export const Item = styled.div``
export const ButtonArrow = styled.button`
  position: absolute;
  width: 5%;
  max-width: 60px;
  height: 100%;
  left: ${({ position }) => position === 'left' && '0px'};
  right: ${({ position }) => position === 'right' && '0px'};
  background-color: rgba(22, 22, 22, 0.5);
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0;
  transition: 0.2s;
  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`
export const Feature = styled.div`
  ${
    '' /* background: #000 url(${({ src }) => src});
  width: 300px;
  background-color: red; */
  }
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.7);
`

export const Tool = styled.span`
  cursor: pointer;

  svg {
    border: 1px solid #fff;
    padding: 0.5rem;
    font-size: 16px;
    color: #fff;
    border-radius: 50%;
    transition: 0.2s;

    &:hover {
      transform: scale(1.2);
    }
  }
  &:first-child {
    svg {
      border: none;
      padding: 0;
      font-size: 32px;
    }
  }
`
export const Tools = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
  ${Group} {
    &:first-child {
      > ${Tool} {
        &:not(:last-child) {
          margin-right: 0.3rem;
        }
      }
    }
  }
`
export const FeatureTitle = styled(Title)``
export const FeatureText = styled(Description)``
export const FeatureContent = styled.div``
export const FeatureClose = styled.span``
export const Container = styled.div`
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  > ${Group} {
    margin-top: 3vw;
  }
  .slide-item-movie {
    &:not(:last-child) {
      ${Item} {
        padding-right: 0.2rem;
      }
    }
    &.active {
      transform: scale(1.2);
      display: flex;
      position: relative;
      justify-content: center;
      z-index: 99;
      transition: 0.5s ease;

      ${Item} {
        background-color: rgba(33, 33, 33);
        -webkit-box-shadow: 0px 0px 10px 2px rgba(33, 33, 33);
        -moz-box-shadow: 0px 0px 10px 2px rgba(33, 33, 33);
        box-shadow: 0px 0px 10px 2px rgba(33, 33, 33);
        padding: 0;
        z-index: 99;
        position: absolute;
        top: -10%;
        ${'' /* left: -25px; */}
        border-radius: 0.5rem;
        overflow: hidden;
        ${Title} {
          margin: 0;
        }
      }

      &:first-child {
        ${'' /* margin: 0 20px; */}
        margin-left: 30px;
      }
      &:last-child {
        margin-left: -30px;
      }

      ${Content} {
        display: block;
        margin-top: -70px;
        position: relative;
        z-index: 999;
        background-color: rgba(0, 0, 0, 1);
      }
    }
  }
`
