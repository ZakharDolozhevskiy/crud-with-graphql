import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Mutation } from "react-apollo";

import Button from '@material-ui/core/Button';
import UserDetailsDialog from './user-dialog';

import { GET_USERS } from '../queries';
import { CREATE_USER } from '../mutations';
import { addUserToQuery } from '../helpers';

export class CreateUser extends React.PureComponent {
  state = { isOpen: false };

  defaultUser = {
    name: 'Guest',
    email: '',
    active: true
  };

  renderCreateUserDialog = () =>
    <Mutation
      mutation={CREATE_USER}
      update={this.updateQuery}
      onCompleted={this.toggleDialog}
    >
      {(mutation, { error }) => (
        <UserDetailsDialog
          error={Boolean(error)}
          title="Create new user"
          data={this.defaultUser}
          onCancel={this.toggleDialog}
          onSave={this.callMutation(mutation)}
        />)}
    </Mutation>;

  callMutation = mutation => user => {
    mutation({ variables: {
      input: {
        name: user.name,
        email: user.email,
        active: user.active,
        clientMutationId: shortid()
      }
    }});
  };

  updateQuery = (cache, { data: { createUser: { user } } }) => {
    let payload;

    try {
      payload = cache.readQuery({
        query: GET_USERS,
        variables: { active: user.active }
      });
    } catch (err) {}

    if (payload) {
      addUserToQuery(payload, user);

      cache.writeQuery({
        data: payload,
        query: GET_USERS,
        variables: { active: user.active }
      });
    }
  };

  toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div className={this.props.className}>
        <Button variant="outlined" onClick={this.toggleDialog}>
          Add new user
        </Button>
        {this.state.isOpen && this.renderCreateUserDialog()}
      </div>
    );
  }
}

export default styled(CreateUser)`
  margin-bottom: 24px;

  button {
    color: #fff;
    border-color: #fff;
    background-color: #4CAF50 !important;
  }
`;