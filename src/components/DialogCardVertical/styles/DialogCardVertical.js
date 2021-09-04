import styled from 'styled-components/macro'

export const Container = styled.div`
  background: var(--color-black-hover);
  padding: 2rem 5% 0;
`

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 1rem;
  align-items: stretch;
  justify-items: stretch;
  margin-top: 1rem;
`
export const Title = styled.h3`
  color: #fff;
  cursor: context-menu;
  user-select: none;
`
export const Description = styled.p`
  color: var(--color-text);
  font-size: 14px;
  cursor: context-menu;
  user-select: none;
`
export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? 'row' : `column`)};
  align-items: ${({ alignItems }) => alignItems && `${alignItems}`};
  height: ${({ height }) => height && `${height}`};
  padding: ${({ padding }) => padding && `${padding}`};
  position: ${({ position }) => position && `${position}`};
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ margin }) => margin && `${margin}`};
`
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
    font-size: 52px;
    cursor: pointer;
    border: 2px solid gray;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.2s;
    &:hover {
      border-color: #fff;
      color: #fff;
    }
    @media (max-width: 420px) {
      font-size: 32px;
    }
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #333;
  cursor: pointer;
  &:hover {
    ${Play} {
      opacity: 1;
    }
  }
`
