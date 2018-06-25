import React from 'react';
import { Query } from 'react-apollo';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import UserDetailsDialog from '../user-form';
import { extractUserData } from './selectors';
import { GET_USER_DETAILS } from './query';

export default class User extends React.PureComponent {
  state = { onEdit: false };

  toggleEditMode = () =>
    this.setState({ onEdit: !this.state.onEdit});

  saveChanges = (userDetails) => {
    console.log(userDetails);
    this.toggleEditMode();
  };

  showDialog = () => (
    <Query query={GET_USER_DETAILS} variables={{ id: this.props.id }}>
      {({ data, loading }) =>
        !loading && <UserDetailsDialog
          loading={loading}
          open={this.state.onEdit}
          data={extractUserData(data)}
          title="Edit user details"
          onSave={this.saveChanges}
          onCancel={this.toggleEditMode}
        />}
    </Query>
  );

  render() {
    return (
      <React.Fragment>
        <ListItem dense button>
          <ListItemText primary={this.props.name} />
          <ListItemSecondaryAction>
            <IconButton onClick={this.toggleEditMode}>
              <Icon>create</Icon>
            </IconButton>
            <IconButton>
              <Icon>delete</Icon>
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        {this.state.onEdit && this.showDialog()}
      </React.Fragment>
    );
  }
}