import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/theme'
import About from './components/About'
import Footer from'./components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <About />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


