import wait from 'waait';
import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider } from 'react-apollo/test-utils';

import mocks from './__mocks__'
import { Users } from '../index';

describe('<Users/>', () => {
  it('renders users component on initialization phase', () => {
    const component = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    expect(component.find('Controls')).toHaveLength(1);
    expect(component.find('.spinner-container')).toHaveLength(1);
  });

  it('renders list with active users (default filter)', async () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Users/>
      </MockedProvider>
    );

    await wait(0);
    component.setState();

    expect(component.find('List')).toHaveLength(1);
    expect(component.find('ListItem')).toHaveLength(1);
  });
});
