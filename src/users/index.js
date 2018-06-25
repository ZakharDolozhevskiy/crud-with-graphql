import React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { RingLoader } from 'react-spinners';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import Controls from './components/controls';
import DeleteUser from './components/delete-user';
import UpdateUser from './components/update-user';

import { GET_USERS } from './queries';
import { getUsersList } from './selectors';

export class Users extends React.Component {
  state = { showActive: true };

  renderUserListItems = source =>
    getUsersList(source).map((user, index) => (
      <ListItem dense button key={index}>
        <ListItemText primary={user.name} />
        <ListItemSecondaryAction>
          <UpdateUser user={user} />
          <DeleteUser
            className="delete-btn"
            userId={user.id}
            showActive={this.state.showActive}
          />
        </ListItemSecondaryAction>
      </ListItem>
    ));

  onFilterChange = (ev, checked) =>
    this.setState({ showActive: checked });

  render() {
    return (
      <section className={this.props.className}>
        <Controls
          onChange={this.onFilterChange}
          showActive={this.state.showActive}
        />
        <Query query={GET_USERS} variables={{ active: this.state.showActive }}>
          {payload =>
            payload.loading
              ? <div className="spinner-container">
                  <RingLoader loading={payload.loading} color='#3f51b5' />
                </div>
              : <List>{this.renderUserListItems(payload.data)}</List>}
        </Query>
      </section>
    )
  }
}

export default styled(Users)`
  height: 100%;

  .spinner-container {
    display: flex;
    justify-content: center;
    height: 70%;
    align-items: center;
  }
`;