import styled from 'styled-components/macro'

export const Container = styled.div`
  ${'' /* max-width: 1100px; */}
  margin-bottom: 2rem;
`
export const Title = styled.h1`
  font-size: var(--fontSize-title-pc);
  color: #fff;
  text-align: center;
  transition: 0.2s;
  max-width: 640px;
  margin: 1rem auto;
  @media (max-width: 600px) {
    font-size: var(--fontSize-title-mobile);
    max-width: 370px;
  }
`
export const SubTitle = styled.h2`
  font-size: var(--fontSize-text-pc);
  color: #fff;
  text-align: center;
  transition: 0.2s;
  @media (max-width: 600px) {
    font-size: var(--fontSize-text-mobile);
  }
`
