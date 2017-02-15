import React from 'react';
import { shallow } from 'enzyme';

import Content from '../Content';


describe('<Content />', () => {
  it('Should render div', () => {
    const wrapper = shallow(<Content />);
    expect(wrapper.find('div').length).toEqual(1);
  });
});
