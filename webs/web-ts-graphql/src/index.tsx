import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app.tsx';

import '@starting-again/web-styles/src/fonts/index.scss';
import '@starting-again/web-styles/src/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root')!); // eslint-disable-line  @typescript-eslint/no-non-null-assertion

root.render(<App />);
