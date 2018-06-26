import React from 'react';
import styled from 'styled-components';
import { Mutation } from 'react-apollo';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import { GET_USERS } from '../queries';
import { DELETE_USER } from '../mutations';
import { deleteUserFromQuery } from '../helpers';

export class DeleteUser extends React.PureComponent {
  callMutation = mutation => () =>
    mutation({
      variables: {
        id: this.props.userId,
        clientMutationId: this.props.userId
      }
    });

  updateQuery = (cache, { data: { deleteUser: { deletedId } } }) => {
    const payload = cache.readQuery({
      query: GET_USERS,
      variables: { active: this.props.showActive }
    });

    deleteUserFromQuery(payload, deletedId);

    cache.writeQuery({
      data: payload,
      query: GET_USERS,
      variables: { active: this.props.showActive }
    });
  };

  render() {
    return (
      <Mutation mutation={DELETE_USER} update={this.updateQuery}>
        {mutation => (
          <IconButton
            className={this.props.className}
            onClick={this.callMutation(mutation)}
          >
            <Icon>delete</Icon>
          </IconButton>)}
      </Mutation>
    );
  }
}

export default styled(DeleteUser)`
  color: #607D8B !important;
`
