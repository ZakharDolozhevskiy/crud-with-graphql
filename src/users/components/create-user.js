import React from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Mutation } from "react-apollo";

import Button from '@material-ui/core/Button';
import UserDetailsDialog from '../shared/user-details-dialog';

import { GET_USERS } from '../queries';
import { CREATE_USER } from '../mutations';

export class CreateUser extends React.PureComponent {
  state = { isOpen: false };

  defaultUser = {
    name: 'Guest',
    email: '',
    active: true
  };

  renderCreateUserDialog = () =>
    <Mutation update={this.updateQuery} mutation={CREATE_USER}>
      {mutation => (
        <UserDetailsDialog
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

    this.toggleDialog();
  };

  updateQuery = (cache, { data: { createUser: { user } } }) => {
    const payload = cache.readQuery({
      query: GET_USERS,
      variables: { active: this.props.showActive }
    });

    payload.viewer.allUsers.edges =
      payload.viewer.allUsers.edges
        .concat({ node: user, __typename: 'UserEdge' });

    cache.writeQuery({
      data: payload,
      query: GET_USERS,
      variables: { active: this.props.showActive }
    });
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
  text-align: right;
  margin-bottom: 24px;

  button {
    color: #fff;
    border-color: #fff;
    background-color: #4CAF50 !important;
  }
`;