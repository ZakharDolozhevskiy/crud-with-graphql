import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class UserDetailsDialog extends React.PureComponent {
  constructor(props) {
    super();
    this.state = { ...props.data };
  }

  onNameChange = event =>
    this.setState({ name: event.target.value });

  onEmailChange = event =>
    this.setState({ email: event.target.value });

  onActiveStateChange = (ev, checked) =>
    this.setState({ active: checked });

  onSave = () => this.props.onSave(this.state);

  render() {
    const { error, title, onCancel } = this.props;
    const { createdAt, updatedAt, email, name, active } = this.state;

    return (
      <Dialog open onClose={onCancel}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <div className={this.props.className}>
            <FormControl>
              <InputLabel htmlFor="edit-user-name">
                Name
              </InputLabel>
              <Input
                value={name}
                id="edit-user-name"
                onChange={this.onNameChange}
              />
            </FormControl>
            <FormControl error={error}>
              <InputLabel htmlFor="edit-user-email">
                E-mail
              </InputLabel>
              <Input
                value={email}
                id="edit-user-email"
                onChange={this.onEmailChange}
              />
              {error && <FormHelperText>Email address already in use</FormHelperText>}
            </FormControl>
            <FormControlLabel
              label="Active user"
              control={
                <Checkbox
                  color="primary"
                  checked={active}
                  onChange={this.onActiveStateChange}
                />}
            />
            <DialogContentText className="timestamps">
              {createdAt && <span>Created: {moment(createdAt).fromNow()}</span>}
              {updatedAt && <span>Updated: {moment(updatedAt).fromNow()}</span>}
            </DialogContentText>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCancel} color="primary">Cancel</Button>
          <Button onClick={this.onSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default styled(UserDetailsDialog)`
  width: 400px;
  
  & > div {
    display: flex;
    padding-bottom: 16px;
  }
  
  .timestamps > span {
    display: block;
  }
`;