import React from 'react';
import styled from 'styled-components';

import Switch from '@material-ui/core/Switch';
import CreateUser from './create-user';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class Controls extends React.PureComponent {
  render() {
    return (
      <header className={this.props.className}>
        <CreateUser showActive={this.props.showActive}/>
        <FormControlLabel
          label="Show only active users"
          control={
            <Switch
              color="primary"
              onChange={this.props.onChange}
              checked={this.props.showActive}
            />}
        />
      </header>
    )
  }
}

export default styled(Controls)`

`;