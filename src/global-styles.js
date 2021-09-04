import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html, body{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; 
    -webkit-font-smoothing: antialiased;
    -mozkit-font-smoothing: grayscale;
    background: #000;
    color:#333;
    font-size:16px;
  }
  .App{
    overflow:hidden;
  }
  .Image__Lazy__Container-wrapper{
    height:100%;
    background: #333;
  }
  .Text__Show__Less{
    color: var(--color-text);
    cursor: context-menu;
    user-select: none;
    .Action__Show__Less{
      color: var(--color-green);
      text-decoration: none;
      font-weight: 700;
      font-size: var(--fontSize-text-mobile)
    }
  }
`
