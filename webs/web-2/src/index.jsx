import React from 'react';
import ReactDOM from 'react-dom/client';

import { init } from '@starting-again/web-common/src/auth.js';
import App from './app.jsx';

import '@starting-again/web-styles/src/fonts/index.scss';
import '@starting-again/web-styles/src/index.scss';

init();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
