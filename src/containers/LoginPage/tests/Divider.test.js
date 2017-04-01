import React from 'react';
import { shallow } from 'enzyme';

import Divider from '../Divider';


describe('<Divider />', () => {
  it('should render <div>', () => {
    const enzymeWrapper = shallow(<Divider />);

    expect(enzymeWrapper.find('div').length).toBe(1);
  });
});
