import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { user } from '../../test/__mocks__';
import { UserDetailsDialog } from '../user-dialog';

describe('<UserDetailsDialog/>', () => {
  const onSave = jest.fn();
  const onCancel = jest.fn();

  const component = shallow(
    <UserDetailsDialog
      title="x"
      data={user}
      onSave={onSave}
      onCancel={onCancel}
    />
  );

  it('renders dialog with user data', () => {
    expect(component.state()).toEqual(user);
    expect(toJSON(component)).toMatchSnapshot();
  });

  it('renders dialog with error message', () => {
    component.setProps({ error: true });
    expect(toJSON(component)).toMatchSnapshot();
  });
});