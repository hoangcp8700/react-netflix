import styled, { css } from 'styled-components/macro'

export const Container = styled.div`
  padding: 2rem 5% 0;
  background-color: var(--color-black-hover);
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* width: ${({ width }) => width && `${width}`}; */}
  max-width: ${({ maxWidth }) => maxWidth && `${maxWidth}`};
  height: ${({ height }) => height && `${height}`};
  position: ${({ position }) => position && `${position}`};

  transition: 0.2s;
  ${({ minWidth }) =>
    minWidth &&
    css`
      min-width: ${minWidth};
      width: ${minWidth};
      @media (max-width: 600px) {
        min-width: calc(${minWidth} - 50px);
        &:first-child {
          width: 100%;
        }
      }
    `}
  @media (max-width: 420px) {
    height: ${({ height }) => height && `calc(${height} + 50px)`};
  }
`
export const Row = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? `row` : 'column')};
  justify-content: ${({ justify }) => justify && `${justify}`};
  align-items: ${({ alignItems }) => alignItems && `${alignItems}`};
  margin: ${({ margin }) => margin && `${margin}`};
  width: ${({ width }) => width && `${width}`};
  height: ${({ height }) => height && `${height}`};
`
export const Title = styled.h2`
  color: #fff;
  font-size: var(--fontSize-title-mobile);
  transition: 0.2s;
  cursor: context-menu;
  user-select: none;
  @media (max-width: 600px) {
    font-size: var(--fontSize-subTitle-pc);
  }
`
export const SubTitle = styled.h3`
  color: #fff;
  font-size: var(--fontSize-text-pc);
  user-select: none;
`
export const Description = styled.p`
  color: var(--color-text);
  font-size: 14px;
  user-select: none;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-url: #000;
`

export const Text = styled(SubTitle)``
export const Play = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.2s;
  svg {
    color: rgba(255, 255, 255, 0.7);
    font-size: 32px;
    cursor: pointer;
    border: 2px solid gray;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.2s;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
  }
`
export const Grid = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #404040;
  border-radius: 0.5rem;
  gap: 1rem;
  padding: 1rem;
  cursor: grab;
  background: rgba(0, 0, 0, 0.25);
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  @media (max-width: 420px) {
    flex-direction: column;
    padding: 0 0 1rem;

    &:nth-child(1) {
      background: red;
    }
    ${Box} {
      &:last-child {
        padding: 0 1rem 1rem;
        ${Row} {
          margin: 0 auto 0.5rem;
        }
        ${Description} {
          text-align: justify;
        }
      }
    }
  }
  ${({ active }) =>
    active &&
    css`
      background-color: #333;
    `}

  &:hover {
    ${Play} {
      opacity: 1;
    }
  }
`
