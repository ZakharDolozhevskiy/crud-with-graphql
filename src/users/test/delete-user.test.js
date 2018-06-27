import wait from 'waait';
import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import { Users } from '../index';
import mocks from './__mocks__'

describe('<DeleteUser/>', () => {
  it('renders delete button with icon', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    await wait(0);
    component.setState();

    expect(component.find('DeleteUser IconButton')).toHaveLength(1);
    expect(component.find('DeleteUser Icon').text()).toBe('delete');
  });

  it('triggers delete user mutation and updates users list', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    await wait(0);
    component.setState();

    expect(component.find('ListItem')).toHaveLength(1);

    component.find('DeleteUser Icon').simulate('click');

    await wait(0);
    component.setState();

    expect(component.find('ListItem')).toHaveLength(0);
  });
});
