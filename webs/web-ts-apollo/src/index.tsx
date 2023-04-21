import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

import App from './app.tsx';

import '@starting-again/web-styles/src/fonts/index.scss';
import '@starting-again/web-styles/src/index.scss';

const { VITE_API_URL } = window.env;

export const client = new ApolloClient({
  uri: `${VITE_API_URL}/apollo-server`,
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root')!); // eslint-disable-line  @typescript-eslint/no-non-null-assertion

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
