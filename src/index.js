import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import FirstComponent from './firstComponent';
import './index.scss';
// import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: '/graphql'
});

const App = () => (
  <ApolloProvider client={client}>
    <FirstComponent />
  </ApolloProvider>
);

render(<App />, document.getElementById('page'));
