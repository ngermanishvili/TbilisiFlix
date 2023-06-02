import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import store from './app/store';
import { Provider } from 'react-redux';
import ToggleColorMode from './utils/ToggleColorMode';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ToggleColorMode >
      <App />
    </ToggleColorMode>
  </Provider>
);