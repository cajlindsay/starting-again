import React from 'react';
import ReactDOM from 'react-dom/client';

import { init } from './auth.js';
import App from './app.jsx';

init();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
