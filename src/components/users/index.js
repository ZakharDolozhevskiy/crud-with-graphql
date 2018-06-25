import React from 'react';
import { Query } from 'react-apollo';

import List from '@material-ui/core/List';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import User from '../user';
import { GET_USERS } from './query';
import { extractUsers } from './selectors';

export default class Users extends React.Component {
  state = { showActiveUsers: true };

  onFilterChange = (ev, checked) =>
    this.setState({ showActiveUsers: checked });

  render() {
    return (
      <section className={this.props.className}>
        <header>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                onChange={this.onFilterChange}
                checked={this.state.showActiveUsers}
              />}
            label="Show only active users"
          />
        </header>
        <Query query={GET_USERS} variables={this.state}>
          {({loading, data}) =>
            loading
              ? "Loading..."
              : (<List>
                  {extractUsers(data).map(({ node }) =>
                    <User key={node.id} id={node.id} name={node.name} />)}
                </List>)}
        </Query>
      </section>
    )
  }
}
//User