import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { init } from '@starting-again/web-common/src/auth.js';
import App from './app.jsx';
import { store } from '../state/store';

import '@starting-again/web-styles/src/fonts/index.scss';
import '@starting-again/web-styles/src/index.scss';

init();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
