import React from 'react';
import { shallow } from 'enzyme';

import Impressum from '../index';

describe('Impressum', () => {
  it('Should render self and subcomponents', () => {
    const wrapper = shallow(<Impressum />);
    expect(wrapper.contains(<h1>This is Impressum!</h1>)).toEqual(true);
  });
});

