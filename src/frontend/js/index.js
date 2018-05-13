import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './app';
import 'react-day-picker/lib/style.css';
import '../scss/index.scss';

const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql', credentials: 'same-origin' });
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

render(<Root />, document.getElementById('page'));
