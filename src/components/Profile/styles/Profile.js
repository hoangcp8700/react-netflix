import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  margin: auto;
  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 5%;
  }
`
export const Avatar = styled.img`
  width: 100%;
  ${'' /* max-width: 150px; */}
  border: 3px solid #000;
  cursor: pointer;
  border-radius: 1rem;
`
export const Name = styled.p`
  font-size: calc(var(--fontSize-text-pc) - 2px);
  color: #808080;
`
export const List = styled.div`
  ${
    '' /* display: flex;
  flex-direction: column; */
  }
  width:100%;
  box-sizing: border-box;
  text-align: center;
  display: grid;
  gap: 1rem;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 150px));
  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 100px));
  }
`

export const Item = styled.div`
  ${
    '' /* max-width: 200px;
  max-height: 200px;
  list-style-type: none;
  text-align: center; */
  }

  &: hover > ${Avatar} {
    border-color: #fff;
  }

  &: hover > ${Name} {
    color: #fff;
  }
`
export const Title = styled.h1`
  width: 100%;
  text-align: center;
  color: #fff;
  font-size: calc(var(--fontSize-title-pc) - 2px);
  @media (max-width: 600px) {
    font-size: calc(var(--fontSize-title-mobile) - 2px);
  }
`
