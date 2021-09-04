import styled from 'styled-components/macro'
import InputField from 'components/InputField'
import ButtonField from 'components/ButtonField'
import { Link } from 'react-router-dom'
import CheckboxField from 'components/CheckBoxField'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1350px) {
    min-height: 82vh;
  }
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 2rem auto 8rem;
  background-color: rgba(0, 0, 0, 0.75);
  max-width: 300px;
  min-height: 530px;
  padding: 2rem 4rem 5rem;
  border-radius: 0.5rem;
  @media (max-width: 600px) {
    margin: 0;
    margin-bottom: 4rem;
    padding: 2rem 5% 5rem;
    max-width: unset;
    min-height: 510px;
  }
`

export const Form = styled.form``
export const Input = styled(InputField)`
  margin-bottom: 1rem !important;
  .MuiInputBase-input {
    background-color: var(--input-main) !important;
    color: #fff !important;
    &:focus {
      background-color: var(--input-main-focus) !important;
    }
  }
  ,
  .MuiFormLabel-root {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  .MuiFormHelperText-root.Mui-error {
    color: var(--color-error);
  }
  .MuiFilledInput-root {
    :after {
      border-bottom-color: rgba(0, 0, 255, 1);
    }
    &.Mui-error:after {
      border-bottom-color: var(--color-error);
    }
  }
`
export const Button = styled(ButtonField)`
  height: 53px;
`
export const Title = styled.h1`
  color: #fff;
  font-size: var(--fontSize-title-mobile);
  text-align: center;
  @media (max-width: 900px) {
    font-size: var(--fontSize-subTitle-pc);
  }
`
export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ between }) =>
    between ? 'space-between' : 'flex-start'};
`
export const Text = styled.p`
  cursor: context-menu;
  margin-top: ${({ mt }) => (mt ? `${mt}` : 0)};
  color: ${({ title }) => (title ? '#737373' : '#8c8c8c')};
  font-size: ${({ title }) =>
    title ? 'var(--fontSize-text-pc)' : 'var(--fontSize-text-mobile)'};
`
export const Span = styled.span`
  color: ${({ color }) => (color ? `${color})` : 'rgba(0, 0, 255, 0.5)')};
  padding: ${({ mx }) => (mx ? `0 ${mx}` : '0 .2rem')};
  cursor: grab;
  &:hover {
    color: ${({ color }) => (color ? `${color},0.8)` : 'rgba(0, 0, 255, 1)')};
  }
`
export const ButtonLink = styled(ButtonField)`
  background-color: transparent !important;
  padding: 0 !important;
`
export const Break = styled.div`
  margin-bottom: 2rem;
`
export const Redirect = styled(Link)`
  color: #737373;
  text-decoration: ${({ decoration }) => decoration || 'none'};
  text-transform: capitalize;
  &:hover {
    color: #fff;
  }
`
export const Checkbox = styled(CheckboxField)`
  .MuiCheckbox-root {
    color: #737373 !important;
  }
`

export const Error = styled.div`
  display: ${({ active }) => (active ? 'flex' : 'none')};
  background-color: var(--color-error);
  margin-bottom: 1rem;
  min-height: 53px;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
  ${Span} {
    color: #fff;
    cursor: context-menu;
  }
`
