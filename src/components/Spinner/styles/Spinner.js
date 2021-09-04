import styled from 'styled-components/macro'

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  animation: fadeIn 2s;
  z-index: 99;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
export const Box = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`

export const Item = styled.div`
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);

  &:nth-child(1) {
    left: 8px;
    animation: spinner-ellipsis1 0.6s infinite;
  }
  &:nth-child(2) {
    left: 8px;
    animation: spinner-ellipsis2 0.6s infinite;
  }
  &:nth-child(3) {
    left: 32px;
    animation: spinner-ellipsis2 0.6s infinite;
  }
  &:nth-child(4) {
    left: 56px;
    animation: spinner-ellipsis3 0.6s infinite;
  }
  @keyframes spinner-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes spinner-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes spinner-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`
