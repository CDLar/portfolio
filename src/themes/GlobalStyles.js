import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

html, body, #root{
    height: 100%;
    font-family: 'Open Sans', sans-serif;
    overflow:hidden;
}

* {
    padding: 0 ;
    margin: 0;
    box-sizing: border-box;
}

a {
    text-decoration: none;
   }
`

export default GlobalStyles