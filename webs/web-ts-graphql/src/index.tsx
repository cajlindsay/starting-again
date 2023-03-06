import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root')!); // eslint-disable-line  @typescript-eslint/no-non-null-assertion

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
