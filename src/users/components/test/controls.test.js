import React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';

import { Controls } from '../controls';

describe('<Controls/>', () => {
  const onChange = jest.fn();
  const component = shallow(<Controls showActive onChange={onChange} />);

  it('renders controls component in active state', () => {
   expect(toJSON(component)).toMatchSnapshot();
  });

  it('renders controls component in inactive state', () => {
    component.setProps({ showActive: false });
    expect(toJSON(component)).toMatchSnapshot();
  });
});