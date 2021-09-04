import styled from 'styled-components/macro'

export const Item = styled.div`
  display: flex;
  border-bottom: 0.5rem solid #222;
  padding: 3rem 5%;
  overflow: hidden;
  color: #fff;
`

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction || 'row'};
  margin: 1rem 0;
  width: 100%;
  max-width: 1100px;
  margin: auto;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
export const Box = styled.div`
  width: 50%;
  transition: 0.2s;
  text-align: ${props => (props.image ? 'center' : 'left')};
  @media (max-width: 900px) {
    width: 100%;
    padding: 0 2rem;
    text-align: center;
  }
`
export const Container = styled.div``
export const Title = styled.h1`
  font-size: var(--fontSize-title-pc);
  line-height: 1.1;
  margin-bottom: 1rem;

  @media (max-width: 900px) {
    font-size: var(--fontSize-title-mobile);
  }
`
export const SubTitle = styled.h2`
  font-size: var(--fontSize-subTitle-pc);
  font-weight: normal;
  line-height: normal;
  color: rgba(255, 255, 255, 80%);
  @media (max-width: 900px) {
    font-size: var(--fontSize-subTitle-mobile);
  }
`
export const Image = styled.img`
  max-width: 100%;
  height: auto;
`
