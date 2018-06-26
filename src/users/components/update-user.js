import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import UserDetailsDialog from '../shared/user-details-dialog';

import { UPDATE_USER } from '../mutations';

export class UpdateUser extends React.PureComponent {
  state = { isOpen: false };

  renderEditUserDialog = () =>
    <Mutation mutation={UPDATE_USER} onCompleted={this.toggleDialog}>
      {(mutation, { error }) => (
        <UserDetailsDialog
          error={Boolean(error)}
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
  };

  toggleDialog = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <React.Fragment>
        <IconButton
          onClick={this.toggleDialog}
          className={this.props.className}
        >
          <Icon>create</Icon>
        </IconButton>
        {this.state.isOpen && this.renderEditUserDialog()}
      </React.Fragment>
    );
  }
}

export default styled(UpdateUser)`
  color: #607D8B !important;
`
