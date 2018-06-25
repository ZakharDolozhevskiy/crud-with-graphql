import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "react-apollo";
import Users from './components/users';

import logo from './logo.svg';
import './App.css';

const api = new ApolloClient({
	uri: 'https://api.graph.cool/relay/v1/cjhriygub1ujp0162c99ieakf'
});

const app = () => (
  <ApolloProvider client={api}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Users/>
    </div>
  </ApolloProvider>
);

export default app;
