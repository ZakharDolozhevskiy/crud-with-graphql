import React from 'react';
import styled from 'styled-components';
import { ApolloProvider } from "react-apollo";

import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'

import api from './api';
import UsersList from './users';

const app = ({ className }) => (
  <ApolloProvider client={api}>
    <div className={className}>
      <AppBar position="static" color="default" className="app-bar">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Users
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper elevation={4} className="layer">
        <UsersList/>
      </Paper>
    </div>
  </ApolloProvider>
);

export default styled(app)`
  .app-bar {
   background-color: #3f51b5;
   color: #fff;
  }

  .layer {
    box-sizing: border-box;
    height: calc(100vh - 64px - 48px);
    margin: 24px;
    padding: 16px;
  }
`;
