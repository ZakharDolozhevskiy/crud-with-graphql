import wait from 'waait';
import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import mocks from './__mocks__'
import { Users } from '../index';

describe('<UpdateUser/>', () => {
  it('renders edit user button with icon', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    await wait(0);
    component.setState();

    expect(component.find('UpdateUser IconButton')).toHaveLength(1);
    expect(component.find('UpdateUser Icon').text()).toBe('create');
  });

  it('triggers edit user mutation and updates users list', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    await wait(0);
    component.setState();

    expect(component.find('ListItem')).toHaveLength(1);

    component.find('UpdateUser Icon').simulate('click');
    component.find('UserDetailsDialog').instance().setState({ active: false });
    component.find('DialogActions Button').at(1).simulate('click');

    await wait(0);
    component.setState();

    expect(component.find('ListItem')).toHaveLength(0);
    expect(component.find('UserDetailsDialog')).toHaveLength(0);
  });
});
