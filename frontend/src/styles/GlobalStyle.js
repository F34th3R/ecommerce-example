import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    &:before,
    &:after {
      box-sizing: border-box;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text.main};
  
    overflow: scroll;
    overflow: -moz-scrollbars-vertical;
    &::-webkit-scrollbar {
      background: ${(props) => props.theme.common.white};
      opacity: 0.5;
      width: 12px;
      /* display: none; */
    }
    /* &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.common.white};
    } */
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.disable.main};
      border-radius: 3px;
    }
  }
`
