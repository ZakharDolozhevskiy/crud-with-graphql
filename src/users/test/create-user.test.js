import wait from 'waait';
import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import mocks from './__mocks__'
import { Users } from '../index';

describe('<CreateUser/>', () => {
  it('render add user button', () => {
    const component = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    expect(component.find('CreateUser Button')).toHaveLength(1);
    expect(component.find('CreateUser Button').text()).toBe('Add new user');
  });

  it('triggers create user mutation and updates users list', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    await wait(0);
    component.setState();

    expect(component.find('ListItem')).toHaveLength(1);

    component.find('CreateUser Button').simulate('click');
    component.find('DialogActions Button').at(1).simulate('click');

    await wait(0);
    component.setState();

    expect(component.find('ListItem')).toHaveLength(2);
    expect(component.find('UserDetailsDialog')).toHaveLength(0);
  });
});
