import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './themes/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { theme } from './themes/theme'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


