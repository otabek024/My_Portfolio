import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { ThemeProvoder } from './context';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvoder>
      <App />
    </ThemeProvoder>
  </React.StrictMode>,
  document.getElementById('root')
);

