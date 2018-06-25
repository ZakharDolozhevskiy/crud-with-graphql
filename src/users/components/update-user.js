import React from 'react';
import { Mutation } from "react-apollo";

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import UserDetailsDialog from '../shared/user-details-dialog';

import { UPDATE_USER } from '../mutations';

export default class UpdateUser extends React.PureComponent {
  state = { isOpen: false };

  renderEditUserDialog = () =>
    <Mutation mutation={UPDATE_USER} >
      {mutation => (
        <UserDetailsDialog
          title="Edit user details"
          data={this.props.user}
          onCancel={this.toggleDialog}
          onSave={this.callMutation(mutation)}
        />)}
    </Mutation>;

  callMutation = mutation => user => {
    mutation({ variables: {
      input: {
        id: user.id,
        name: user.name,
        email: user.email,
        active: user.active,
        clientMutationId: user.id
      }
    }});

    this.toggleDialog();
  };

  toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <React.Fragment>
        <IconButton onClick={this.toggleDialog}>
          <Icon>create</Icon>
        </IconButton>
        {this.state.isOpen && this.renderEditUserDialog()}
      </React.Fragment>
    );
  }
}