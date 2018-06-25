import React from 'react';
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
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class UserDetailsDialog extends React.PureComponent {
  constructor(props) {
    super(props);
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
    const { title, onCancel } = this.props;
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
            <FormControl>
              <InputLabel htmlFor="edit-user-email">
                E-mail
              </InputLabel>
              <Input
                value={email}
                id="edit-user-email"
                onChange={this.onEmailChange}
              />
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
              {createdAt && <span>Created: {createdAt}</span>}
              {updatedAt && <span>Updated: {updatedAt}</span>}
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
    display: inline-block;
  }
`;