import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/theme'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


