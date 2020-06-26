import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap');
    *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`
