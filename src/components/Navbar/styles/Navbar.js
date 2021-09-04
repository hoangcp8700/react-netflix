import { TextField } from '@material-ui/core'
import ButtonField from 'components/ButtonField'
import styled from 'styled-components/macro'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  @media (max-width: 600px) {
    min-height: 0;
    padding: 4rem 5%;
  }
`
export const Container1 = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 0;
  padding: 10rem 5%;
  transition: 0.2s;
  position: relative;
  @media (min-width: 1400px) {
    min-height: 60vh;
    padding: 0 5%;
  }
  @media (max-width: 600px) {
    padding: 7rem 5% 5rem;
  }
`

export const Content = styled.div`
  width: 50%;
  @media (max-width: 900px) {
    width: 80%;
  }
`

export const Description = styled.p`
  font-size: var(--fontSize-description-pc);
  color: rgba(255, 255, 255, 0.65);
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: context-menu;
  user-select: none;

  @media (max-width: 600px) {
    font-size: var(--fontSize-description-mobile);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`
export const Title = styled(Description)`
  font-size: var(--fontSize-title-pc);
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: 900;
  cursor: context-menu;
  user-select: none;
  @media (max-width: 600px) {
    font-size: var(--fontSize-title-mobile);
  }
`
export const Tag = styled.div`
  text-align: center;
  background-color: #2b2b2b;
  color: #fff;
  position: absolute;
  bottom: 10px;
  right: 0;
  width: 50px;
  padding: 0.3rem 1rem;
  cursor: context-menu;
  border-left: 3px solid #fff;
  font-size: 14px;
`

export const Tool = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 120px));
  gap: 1rem;
`
export const Button = styled(ButtonField)`
  padding: 0.5rem 2rem !important;
  background-color: #fff !important;
  color: #000 !important;
  font-weight: 700 !important;
  &:hover {
    background-color: rgba(255, 255, 255, 0.75) !important;
  }
`
export const ButtonInfo = styled(Button)`
  background-color: rgba(115, 115, 115, 0.7) !important;
  color: #fff !important;
  &:hover {
    background-color: rgba(115, 115, 115) !important;
  }
`
export const Category = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  width: 95%;
  display: flex;
  align-items: center;
`
export const CategoryTitle = styled(Title)`
  font-size: var(--fontSize-title-mobile);
  margin-right: 2rem;
  transition: 0.2s;
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.65);

  @media (max-width: 600px) {
    font-size: var(--fontSize-subTitle-pc);
    margin-right: 1rem;
    font-weight: 700;
  }
`
export const Select = styled(TextField)`
  width: 100%;
  max-width: 100px;
  margin-bottom: 1rem !important;
  &:hover {
    .MuiFormLabel-root {
      color: #fff;
    }
  }
  .MuiFormLabel-root {
    color: rgba(255, 255, 255, 0.65);

    &.Mui-focused {
      color: #fff;
    }
  }
  .MuiInputBase-root {
    color: #fff;
    font-size: 14px;
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:before {
      border-bottom-color: rgba(255, 255, 255, 0.6) !important;
    }
    &:after {
      border-color: #fff;
    }
    &:hover {
      .MuiSelect-icon {
        color: #fff;
      }
    }
  }
  .MuiSelect-icon {
    color: rgba(255, 255, 255, 0.65);
  }
`
