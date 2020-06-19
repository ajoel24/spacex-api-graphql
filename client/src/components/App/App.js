import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Launches from '../layout/Launches/Launches';
import Launch from '../layout/Launches/Launch';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <nav className="nav">
          <h3 className="brand-logo">SpaceX Missions</h3>
        </nav>
        <Switch>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
