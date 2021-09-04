import styled from 'styled-components/macro'

export const Box = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 4rem 5% 2rem;
`
export const Container = styled.div`
  background: ${bg => (bg ? 'rgba(0,0,0,0.75)' : '')};
`
export const Row = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Link = styled.a`
  color: var(--footer-color);
  margin-bottom: 1rem;
  font-size: 14px;
  text-decoration: none;
  transition: 0.2s;
  &:hover {
    color: #fff;
  }
`
export const Title = styled.p`
  font-size: var(--fontSize-text-pc);
  color: var(--footer-color);
  cursor: context-menu;
`
export const Text = styled.p`
  margin-bottom: 1rem;
  font-size: var(--fontSize-text-mobile);
  color: var(--footer-color);
  cursor: context-menu;
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
  margin-bottom: 3rem;
`
