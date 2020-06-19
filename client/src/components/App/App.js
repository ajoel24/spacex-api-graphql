import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';

import Launches from '../layout/Launches/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container-fluid">
        <h3>SpaceX Missions</h3>
      </div>
      <Launches />
    </ApolloProvider>
  );
}

export default App;
