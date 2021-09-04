import styled from 'styled-components/macro'
import { Slider } from '@material-ui/core'

export const Container = styled.div``
export const SliderVolume = styled(Slider)`
  &.MuiSlider-root {
    color: var(--color-green);
    &.MuiSlider-vertical {
      height: 100px;
    }
  }
  .MuiSlider-thumb {
    box-shadow: 0px 0px 0px 8px var(--color-green-slider-hover);

    &:hover {
      box-shadow: 0px 0px 0px 8px var(--color-green-slider-hover);
    }
    &:active {
      box-shadow: 0px 0px 0px 14px var(--color-green-slider-hover);
    }
  }
`
